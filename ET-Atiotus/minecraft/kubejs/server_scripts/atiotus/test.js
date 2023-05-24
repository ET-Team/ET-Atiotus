
//BFS on orevein block
onEvent('block.right_click', drillingAlgoFactory('oredepos:aluminum_ore_deposit'))

function drillingAlgoFactory(oreId){
    return (event) => {
        var block = event.getBlock()
    
        if(block.id != oreId || event.hand != 'MAIN_HAND'){
            return
        }   
    
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
            visited.forEach((a, b, c)=>console.log(`${a}:${b}`))
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