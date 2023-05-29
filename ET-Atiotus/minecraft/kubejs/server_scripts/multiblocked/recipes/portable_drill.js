

onEvent('recipes', event => {
    const pair = new Map();
    pair.set("oredepos:platinum_ore_deposit","oredepos:platinum_ore");
    pair.set("oredepos:cobalt_ore_deposit","oredepos:cobalt_ore");
    pair.set("oredepos:osmium_ore_deposit","mekanism:osmium_ore");
    pair.set("oredepos:certus_quartz_ore_deposit","oredepos:certus_quartz_ore");
    pair.set("oredepos:zinc_ore_deposit","oredepos:zinc_ore");
    pair.set("oredepos:nickel_ore_deposit","thermal:nickel_ore");
    pair.set("oredepos:uranium_ore_deposit","mekanism:uranium_ore");
    pair.set("oredepos:aluminum_ore_deposit","immersiveengineering:ore_aluminum");
    pair.set("oredepos:silver_ore_deposit","thermal:silver_ore");
    pair.set("oredepos:lead_ore_deposit","mekanism:lead_ore");
    pair.set("oredepos:sulfur_ore_deposit","thermal:sulfur_ore");
    pair.set("oredepos:ardite_ore_deposit","oredepos:ardite_ore");
    pair.set("oredepos:redstone_ore_deposit","minecraft:redstone_ore");
    pair.set("oredepos:coal_ore_deposit","minecraft:coal_ore");
    pair.set("oredepos:iron_ore_deposit","minecraft:iron_ore");
    pair.set("oredepos:gold_ore_deposit", "minecraft:gold_ore");
    pair.set("oredepos:diamond_ore_deposit","minecraft:diamond_ore");
    pair.set("oredepos:emerald_ore_deposit","minecraft:emerald_ore");
    pair.set("oredepos:lapis_ore_deposit","minecraft:lapis_ore");
    pair.set("oredepos:nether_quartz_ore_deposit","minecraft:nether_quartz_ore");
    pair.set("oredepos:nether_gold_ore_deposit","minecraft:nether_gold_ore");
    pair.set("oredepos:ancient_debris_deposit","minecraft:ancient_debris");
    pair.set("oredepos:copper_ore_deposit","thermal:copper_ore");
    pair.set("oredepos:tin_ore_deposit","thermal:tin_ore");

    for (let [key, value] of pair.entries()){
        event.recipes.multiblocked.multiblock("eta:portable_drill")
        .inputFE(500)
        .outputItem(value)
        .block(Block.getBlock(key).defaultBlockState(),1)
    }

});