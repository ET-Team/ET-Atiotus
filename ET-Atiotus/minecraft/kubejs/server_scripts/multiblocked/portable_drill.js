const BlockContainerJS = java("dev.latvian.kubejs.world.BlockContainerJS")

let drillDef = MbdRegistry.getDefinition("eta:portable_drill");

onEvent(`mbd.recipe_finish.${drillDef.getID()}`, event => {
    let recipeLogic = event.getRecipeLogic()
    let controllerState = recipeLogic.controller.state
    let kjsLevel = controllerState.world.asKJS()

    let controllerContainer = kjsLevel.getBlock(controllerState.getPos())
    let oreContainer = controllerContainer.getDown()
    let oreID = oreContainer.id
    let algo = drillingAlgoFactory(oreID)
    algo(oreContainer)
})

onEvent(`mbd.setup_recipe.${drillDef.getID()}`, event => {
    let recipeLogic = event.getRecipeLogic();
    let controllerState = recipeLogic.controller.state
    let kjsLevel = controllerState.world.asKJS()
    let oreContainer = kjsLevel.getBlock(controllerState.getPos()).getDown()
    let oreID = oreContainer.id
    if(oreContainer.getEntityData().amount <= 2 && getNeighborhood(oreContainer).filter((b) => b.id == oreID).length == 0){
        event.cancel()
    }
})

//BFS on orevein block

function drillingAlgoFactory(oreID){
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
            var toAdd = neighborhood.filter((blockContainer) => (blockContainer.id == oreID && visited.get(`${blockContainer.getPos()}`)!=1))
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