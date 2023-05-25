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
    ]

    plainItemNames.forEach((name) => {
        event.create(name).group('atiotus').texture('eta:item/${name}')
    })
})