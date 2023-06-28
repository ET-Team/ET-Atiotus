console.info('[ETA] Initializing Items')


onEvent('item.registry', event => {
    const plainItemNames = [
        "psionic_crystal_dust",
        "psionic_crystal_shard",
        "psionic_crystal",
        "psionic_crystal_cluster",
        'biomass_t0',
        'biomass_t1',
        'biomass_t2',
        'biomass_t3',
        'biomass_t4',

        'carbonized_biomass',

        'canned_biomass',

        'can',

        'diesel_generator_blueprint',
        'arc_furnace_blueprint',
        'crusher_blueprint',
        'fermenter_blueprint',
        'Squeezer_blueprint',
        'bottling_blueprint',
        'mixer_blueprint',
        'coke_oven_blueprint',
        'metal_press_blueprint',
        'refinery_blueprint',
        'sawnill_blueprint',
        'item_silo_blueprint',
        'fluid_tank_blueprint',
        'crude_blast_furnace_blueprint',
        'improved_blast_furnace_blueprint',
        'assembler_blueprint',
        'Automated_blueprint'


    ]

    plainItemNames.forEach((name) => {
        event.create(name).group('atiotus').texture(`eta:item/${name}`)
    })
})