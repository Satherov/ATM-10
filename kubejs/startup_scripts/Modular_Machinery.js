// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('item', allthemods => {
    allthemods.create('atm_star_shard_1').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_2').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_3').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_4').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_5').displayName('ATM Star Fragment')

    allthemods.create('modularium_plate').color(0xe64200).texture('alltheores:item/iron_plate')
})

StartupEvents.registry('fluid', allthemods => {
    allthemods.create('liquid_souls', 'thin')
        .tint(0xc9eaff)
        .displayName('Liquid Souls')
        .noBlock()

    allthemods.create('unrefined_liquid_souls', 'thin')
        .tint(0xccebff)
        .displayName('Unrefined Liquid Souls')
        .noBlock()

    allthemods.create('liquid_aureal', 'thin')
        .tint(0x7abaff)
        .displayName('Liquid Aureal')
        .noBlock()
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.