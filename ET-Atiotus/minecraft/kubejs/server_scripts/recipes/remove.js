onEvent('recipes', event => {

    const output = [
        'minecraft:golden_pickaxe',
        'minecraft:iron_pickaxe',
        'minecraft:diamond_pickaxe',
        'appliedenergistics2:certus_quartz_pickaxe',
        'appliedenergistics2:nether_quartz_pickaxe',
        'immersiveengineering:pickaxe_steel',
        'minecraft:netherite_pickaxe',
        'byg:pendorite_pickaxe',
        'minecraft:golden_axe',
        'minecraft:iron_axe', 
        'minecraft:diamond_axe',
        'minecraft:netherite_axe',
        'appliedenergistics2:certus_quartz_axe',
        'appliedenergistics2:nether_quartz_axe',
        'immersiveengineering:axe_steel',
        'byg:pendorite_axe',
        'byg:pendorite_battleaxe',
        'minecraft:golden_shovel',
        'minecraft:iron_shovel', 
        'minecraft:diamond_shovel',
        'minecraft:netherite_shovel',
        'appliedenergistics2:certus_quartz_shovel',
        'appliedenergistics2:nether_quartz_shovel',
        'immersiveengineering:shovel_steel',
        'byg:pendorite_shovel'

    ];

    output.forEach((output) => {event.remove({output:output})});
});
