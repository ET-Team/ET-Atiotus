const BlockContainerJS = java("dev.latvian.kubejs.world.BlockContainerJS")

let drillDef = MbdRegistry.getDefinition("eta:portable_drill");

onEvent(`mbd.recipe_finish.${drillDef.getID()}`, event => {
    let recipeLogic = event.getRecipeLogic()
    console.info("2")
    let controllerState = recipeLogic.controller.state
    console.info("3")
    let kjsLevel = controllerState.world.asKJS()
    
    let controllerContainer = kjsLevel.getBlock(controllerState.getPos())
    console.info("4")
    let oreContainer = controllerContainer.getDown()
    console.info("5")
    let oreID = oreContainer.id
    console.info("6")
    let algo = drillingAlgoFactory(oreID)
    algo(oreContainer)
})

//BFS on orevein block

//TEST
onEvent('block.right_click', (event) => {
    let func = drillingAlgoFactory('oredepos:aluminum_ore_deposit')
    func(event.getBlock())
})

function drillingAlgoFactory(oreId){
    return (block) => {
    
        var visited = new Map()
        var toVisit = []
        toVisit.push(block)
        visited.set(`${block.getPos()}`.replace('Mutable', 'BlockPos'), 1)
        console.info(visited.get(`${block.getPos()}`)!=1)
        var current
        while(toVisit.length > 0){
            current = toVisit.shift()
            var neighborhood = getNeighborhood(current)
            var toAdd = neighborhood.filter((blockContainer) => (blockContainer.id == oreId && visited.get(`${blockContainer.getPos()}`)!=1))
            toAdd.forEach((b) => {
                visited.set(`${b.getPos()}`, 1)
                toVisit.push(b)
            })
        }
    
        const newAmount = current.getEntityData().amount - 1 
        if(newAmount <= 1){
            current.set('minecraft:air')
        }
        current.mergeEntityData({amount:newAmount})
    
    }
}

function getNeighborhood(blockContainer){
    const neighborhood = []
    neighborhood.push(blockContainer.getDown())
    neighborhood.push(blockContainer.getUp())
    neighborhood.push(blockContainer.getEast())
    neighborhood.push(blockContainer.getSouth())
    neighborhood.push(blockContainer.getWest())
    neighborhood.push(blockContainer.getNorth())
    return neighborhood
}