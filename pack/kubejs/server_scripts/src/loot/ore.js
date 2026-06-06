// Applies Fortune scaling to addon ore drops that do not inherit TFC ore loot behavior.
const TFC_ADDON_ORE_FORTUNE = [
    // Chromite
    { tag: '#firmalife:ores/chromite/poor', drop: 'firmalife:ore/poor_chromite' },
    { tag: '#firmalife:ores/chromite/normal', drop: 'firmalife:ore/normal_chromite' },
    { tag: '#firmalife:ores/chromite/rich', drop: 'firmalife:ore/rich_chromite' },
    // Bauxite
    { tag: '#tfc_ie_addon:ores/bauxite/poor', drop: 'tfc_ie_addon:ore/poor_bauxite' },
    { tag: '#tfc_ie_addon:ores/bauxite/normal', drop: 'tfc_ie_addon:ore/normal_bauxite' },
    { tag: '#tfc_ie_addon:ores/bauxite/rich', drop: 'tfc_ie_addon:ore/rich_bauxite' },
    // Galena
    { tag: '#tfc_ie_addon:ores/galena/poor', drop: 'tfc_ie_addon:ore/poor_galena' },
    { tag: '#tfc_ie_addon:ores/galena/normal', drop: 'tfc_ie_addon:ore/normal_galena' },
    { tag: '#tfc_ie_addon:ores/galena/rich', drop: 'tfc_ie_addon:ore/rich_galena' },
    // Uraninite
    { tag: '#tfc_ie_addon:ores/uraninite/poor', drop: 'tfc_ie_addon:ore/poor_uraninite' },
    { tag: '#tfc_ie_addon:ores/uraninite/normal', drop: 'tfc_ie_addon:ore/normal_uraninite' },
    { tag: '#tfc_ie_addon:ores/uraninite/rich', drop: 'tfc_ie_addon:ore/rich_uraninite' },
];

// Rock variants used by TFC ore block ids.
const ORE_ROCK = [
    'granite',
    'diorite',
    'gabbro',
    'shale',
    'claystone',
    'conglomerate',
    'dolomite',
    'chert',
    'limestone',
    'marble',
    'gneiss',
    'schist',
    'phyllite',
    'slate',
    'dacite',
    'andesite',
    'basalt',
    'rhyolite',
    'chalk',
    'quartzite',
];

// TFC ore names mapped from block id suffixes to dropped ore items.
const ORE_TYPE = [
    // Native copper
    { block: 'poor_native_copper', drop: 'tfc:ore/poor_native_copper' },
    { block: 'normal_native_copper', drop: 'tfc:ore/normal_native_copper' },
    { block: 'rich_native_copper', drop: 'tfc:ore/rich_native_copper' },
    // Malachite
    { block: 'poor_malachite', drop: 'tfc:ore/poor_malachite' },
    { block: 'normal_malachite', drop: 'tfc:ore/normal_malachite' },
    { block: 'rich_malachite', drop: 'tfc:ore/rich_malachite' },
    // Tetrahedrite
    { block: 'poor_tetrahedrite', drop: 'tfc:ore/poor_tetrahedrite' },
    { block: 'normal_tetrahedrite', drop: 'tfc:ore/normal_tetrahedrite' },
    { block: 'rich_tetrahedrite', drop: 'tfc:ore/rich_tetrahedrite' },
    // Hematite
    { block: 'poor_hematite', drop: 'tfc:ore/poor_hematite' },
    { block: 'normal_hematite', drop: 'tfc:ore/normal_hematite' },
    { block: 'rich_hematite', drop: 'tfc:ore/rich_hematite' },
    // Limonite
    { block: 'poor_limonite', drop: 'tfc:ore/poor_limonite' },
    { block: 'normal_limonite', drop: 'tfc:ore/normal_limonite' },
    { block: 'rich_limonite', drop: 'tfc:ore/rich_limonite' },
    // Magnetite
    { block: 'poor_magnetite', drop: 'tfc:ore/poor_magnetite' },
    { block: 'normal_magnetite', drop: 'tfc:ore/normal_magnetite' },
    { block: 'rich_magnetite', drop: 'tfc:ore/rich_magnetite' },
    // Native gold
    { block: 'poor_native_gold', drop: 'tfc:ore/poor_native_gold' },
    { block: 'normal_native_gold', drop: 'tfc:ore/normal_native_gold' },
    { block: 'rich_native_gold', drop: 'tfc:ore/rich_native_gold' },
    // Native silver
    { block: 'poor_native_silver', drop: 'tfc:ore/poor_native_silver' },
    { block: 'normal_native_silver', drop: 'tfc:ore/normal_native_silver' },
    { block: 'rich_native_silver', drop: 'tfc:ore/rich_native_silver' },
    // Cassiterite
    { block: 'poor_cassiterite', drop: 'tfc:ore/poor_cassiterite' },
    { block: 'normal_cassiterite', drop: 'tfc:ore/normal_cassiterite' },
    { block: 'rich_cassiterite', drop: 'tfc:ore/rich_cassiterite' },
    // Bismuthinite
    { block: 'poor_bismuthinite', drop: 'tfc:ore/poor_bismuthinite' },
    { block: 'normal_bismuthinite', drop: 'tfc:ore/normal_bismuthinite' },
    { block: 'rich_bismuthinite', drop: 'tfc:ore/rich_bismuthinite' },
    // Garnierite
    { block: 'poor_garnierite', drop: 'tfc:ore/poor_garnierite' },
    { block: 'normal_garnierite', drop: 'tfc:ore/normal_garnierite' },
    { block: 'rich_garnierite', drop: 'tfc:ore/rich_garnierite' },
    // Sphalerite
    { block: 'poor_sphalerite', drop: 'tfc:ore/poor_sphalerite' },
    { block: 'normal_sphalerite', drop: 'tfc:ore/normal_sphalerite' },
    { block: 'rich_sphalerite', drop: 'tfc:ore/rich_sphalerite' },
    // Mineral ores
    { block: 'pyrite', drop: 'tfc:ore/pyrite' },
    { block: 'ruby', drop: 'tfc:ore/ruby' },
    { block: 'sapphire', drop: 'tfc:ore/sapphire' },
    { block: 'saltpeter', drop: 'tfc:ore/saltpeter' },
    { block: 'gypsum', drop: 'tfc:ore/gypsum' },
    { block: 'cryolite', drop: 'tfc:ore/cryolite' },
    { block: 'cinnabar', drop: 'tfc:ore/cinnabar' },
    { block: 'sulfur', drop: 'tfc:ore/sulfur' },
    { block: 'graphite', drop: 'tfc:ore/graphite' },
    { block: 'sylvite', drop: 'tfc:ore/sylvite' },
    { block: 'topaz', drop: 'tfc:ore/topaz' },
    { block: 'halite', drop: 'tfc:ore/halite' },
    { block: 'diamond', drop: 'tfc:ore/diamond' },
    { block: 'amethyst', drop: 'tfc:ore/amethyst' },
    { block: 'opal', drop: 'tfc:ore/opal' },
];

LootJS.modifiers(event => {
    TFC_ADDON_ORE_FORTUNE.forEach(item => {
        event
            .addBlockModifier(item.tag)
            .removeLoot(Ingredient.all)
            .addLoot(
                LootEntry.of(item.drop)
                    .applyOreBonus('minecraft:fortune')
                    .simulateExplosionDecay()
            );
    });

    ORE_ROCK.forEach(rock => {
        ORE_TYPE.forEach(ore => {
            const rawOre = `tfc:ore/${ore.block}/${rock}`;

            event
                .addBlockModifier(rawOre)
                .removeLoot(Ingredient.all)
                .addLoot(
                    LootEntry.of(ore.drop)
                        .applyOreBonus('minecraft:fortune')
                        .simulateExplosionDecay()
                );
        });
    });

    // Keep this disabled until raw-rock Fortune behavior is intentionally designed.
    // ORE_ROCK.forEach(rock => {
    //     event.addBlock(`tfc:rock/raw/${rock}`, table => {
    //         table.addPool(pool => {
    //             pool.addEntry({
    //                 type: 'minecraft:item',
    //                 name: `tfc:rock/loose/${rock}`,
    //                 functions: [
    //                     {
    //                         function: 'minecraft:apply_bonus',
    //                         enchantment: 'minecraft:fortune',
    //                         formula: 'minecraft:ore_drops',
    //                     },
    //                     {
    //                         function: 'minecraft:explosion_decay',
    //                     },
    //                 ],
    //             });
    //         });
    //     });
    // });
});
