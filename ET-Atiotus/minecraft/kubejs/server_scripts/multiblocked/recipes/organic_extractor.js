console.info('EBF Recipe Scripet')

let ebfDefinition = MbdRegistry.getDefinition("eta:organic_extractor");

let recipeMap;

if (ebfDefinition != null) { // two ways to get the recipeMap
    recipeMap = ebfDefinition.getRecipeMap();
} else {
    recipeMap = MbdRegistry.getRecipeMap("organic_extractor");
}

if (recipeMap != null) {
    console.info('organic');

    recipeMap.start()
        .duration(100)
        .name("t0_1")
        .inputFE(100)
        .inputItems('minecraft:nether_wart')
        .outputItems('2x kubejs:biomass_t0')
        .chance(0.8)
        .outputItems('kubejs:biomass_t0')
        .chance(0.25)
        .outputItems('kubejs:biomass_t0')
        .buildAndRegister();

    recipeMap.start()
        .duration(100)
        .name("t0_2")
        .inputFE(100)
        .inputItems('minecraft:wheat','2x minecraft:carrot')
        .outputItems('2x kubejs:biomass_t0')
        .chance(0.5)
        .outputItems('2x kubejs:biomass_t0')
        .buildAndRegister();

    recipeMap.start()
        .duration(100)
        .name("t0_3")
        .inputFE(100)
        .inputItems('2x minecraft:potato','2x minecraft:melon_slice')
        .outputItems('3x kubejs:biomass_t0')
        .chance(0.25)
        .outputItems('3x kubejs:biomass_t0')
        .buildAndRegister();

    recipeMap.start()
        .duration(100)
        .name("t0_4")
        .inputFE(100)
        .inputItems('minecraft:red_mushroom','minecraft:brown_mushroom','2x minecraft:sugar_cane')
        .outputItems('3x kubejs:biomass_t0')
        .buildAndRegister();

    recipeMap.start()
        .duration(100)
        .name("t0_5")
        .inputFE(100)
        .inputItems('minecraft:porkchop','minecraft:mutton')
        .outputItems('3x kubejs:biomass_t0')
        .buildAndRegister();
    
    recipeMap.start()
        .duration(100)
        .name("t0_6")
        .inputFE(100)
        .inputItems('minecraft:porkchop','minecraft:beef')
        .outputItems('3x kubejs:biomass_t0')
        .buildAndRegister();

    recipeMap.start()
        .duration(100)
        .name("t0_7")
        .inputFE(500)
        .inputItems('minecraft:mutton','minecraft:beef')
        .outputItems('3x kubejs:biomass_t0')
        .buildAndRegister();

    recipeMap.start()
        .duration(140)
        .name("t1_1")
        .inputFE(100)
        .inputItems('environmental:cherries','minecraft:honey_bottle','3x kubejs:biomass_t0')
        .outputItems('2x kubejs:biomass_t1')
        .chance(0.25)
        .outputItems('kubejs:biomass_t1')
        .buildAndRegister();

    recipeMap.start()
        .duration(140)
        .name("t1_2")
        .inputFE(500)
        .inputItems('minecraft:pumpkin','minecraft:rabbit','3x kubejs:biomass_t0')
        .outputItems('2x kubejs:biomass_t1')
        .chance(0.8)
        .outputItems('kubejs:biomass_t1')
        .buildAndRegister();
    
    recipeMap.start()
        .duration(140)
        .name("t1_3")
        .inputFE(500)
        .inputItems('#minecraft:fishes','minecraft:beetroot','3x kubejs:biomass_t0')
        .outputItems('2x kubejs:biomass_t1')
        .chance(0.15)
        .outputItems('2x kubejs:biomass_t1')
        .buildAndRegister();
    
    recipeMap.start()
        .duration(140)
        .name("t1_4")
        .inputFE(500)
        .inputItems('environmental:truffle','3x kubejs:biomass_t0')
        .outputItems('2x kubejs:biomass_t1')
        .chance(0.5)
        .outputItems('3x kubejs:biomass_t1')
        .buildAndRegister();

    recipeMap.start()
        .duration(200)
        .name("t2_1")
        .inputFE(1000)
        .inputItems('minecraft:ink_sac','minecraft:chorus_fruit','2x kubejs:biomass_t1')
        .outputItems('kubejs:biomass_t2')
        .buildAndRegister();

    recipeMap.start()
        .duration(200)
        .name("t2_2")
        .inputFE(1000)
        .inputItems('minecraft:ender_pearl','minecraft:spider_eye','2x kubejs:biomass_t1')
        .outputItems('kubejs:biomass_t2')
        .chance(0.25)
        .outputItems('kubejs:biomass_t2')
        .buildAndRegister();
        
    recipeMap.start()
        .duration(200)
        .name("t2_3")
        .inputFE(1000)
        .inputItems('minecraft:ghast_tear','2x kubejs:biomass_t1')
        .outputItems('kubejs:biomass_t2')
        .chance(0.5)
        .outputItems('kubejs:biomass_t2')
        .buildAndRegister();
    
    recipeMap.start()
        .duration(200)
        .name("t2_4")
        .inputFE(1000)
        .inputItems('minecraft:nautilus_shell','2x kubejs:biomass_t1')
        .outputItems('kubejs:biomass_t2')
        .chance(0.75)
        .outputItems('2x kubejs:biomass_t2')
        .buildAndRegister();




} else {
    console.info('organic');
}