// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

MMREvents.machines(allthemods => {
    allthemods.create('atm:chemical_washer')
        .color('#FF1b1625')
        .name('Chemical Washer')
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ['rfr', 'fef', 'rfr'],
                        ['rmr', 'i i', 'rir'],
                        ['rfr', 'fef', 'rfr']
                    ]
                )
                .keys(
                    {
                        'r': 'modular_machinery_reborn:casing_reinforced',
                        'f': 'modular_machinery_reborn:casing_firebox',
                        'e': [
                            '#modular_machinery_reborn:energyinputhatch',
                            'modular_machinery_reborn:casing_plain'
                        ],
                        'i': [
                            '#modular_machinery_reborn:fluidinputhatch',
                            '#modular_machinery_reborn_mekanism:chemicalinputhatch',
                            '#modular_machinery_reborn_mekanism:chemicaloutputhatch',
                            'modular_machinery_reborn:casing_plain'
                        ]
                    }
                )
        )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.