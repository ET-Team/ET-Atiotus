console.info('[ETA] Initializing Items')


onEvent('item.registry', event => {
    const plainItemNames = [
        "psionic_crystal_dust",
        "psionic_crystal_shard",
        "psionic_crystal",
        "psionic_crystal_cluster"
    ]

    plainItemNames.forEach((name) => {
        event.create(name).group('atiotus').texture('eta:item/${name}')
    })
})