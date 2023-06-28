#priority 1000

import mods.recipestages.Recipes;
import mods.itemstages.ItemStages;

var allStages as string[] = [

	"T0",
	"T1",
	"T2",
	"T3",
	"T4",
	"T5",
	"NaN"

];

var stageItems as string[][string] = {
    'T0': [

    ],
    'T1': [

    ],
    'T2': [

    ],
    'T3': [

    ],
    'T4': [

    ],
    'T5': [

    ],
    'NaN': [

    ]
};

var stageMods as string[][string] = {
    'T0': [
        'immersiveengineering',
        'thermalfoundation',
        'farmersdelight',
        'tanky',
        'immersiveposts',
        'ironchest',
        'thermal',
        'nethers_delight',
        'engineersdecor',
        'itemfilters',
        'deepresonance',
        'pneumaticcraft',
        'modularrouters',
        'oredepos',
        'culturaldelights',
        'byg'
    ],
    'T1': [
        'ironjetpacks',
        'sophisticatedbackpacks',
        'buildinggadgets',
        'wirelesschargers',
        'immersivepetroleum',
        'immersiveindustry',
        'integratedterminals',
        'integrated_proxy',
        'integratedtunnels',
        'integratedcrafting',
        'integrateddynamics'
    ],
    'T2': [
        'computercraft',
        'rangedpumps',
        'solarflux',
        'rftoolsbase',
        'scannable',
        'assemblylinemachines',
        'advgenerators'
    ],
    'T3': [
        'advancedperipherals',
        'mekanism',
        'xnet',
        'quantumstorage',
        'appliedenergistics2',
        'lazierae2',
        'aeadditions',
        'numina'
    ],
    'T4': [
        'valkyrielib',
        'envirocore',
        'envirotech',
        'dimstorage',
        'biggerreactors',
        'powersuits'
    ],
    'T5': [
        'fluxnetworks'
    ],
    'NaN': [
        'multiblocked'
    ]
};

for stage, list in stageMods{
    ItemStages.createModRestriction(list, stage);
    for mod in list{
        Recipes.setRecipeStageByMod(stage, mod);
    }
}