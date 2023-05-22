#priority 1000
#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;

var itemNames as string[] = [
    "psionic_crystal_dust",
    "psionic_crystal_shard",
    "psionic_crystal",
    "psionic_crystal_cluster"
];

for name in itemNames{
	new ItemBuilder().build(item);
}