// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 32

    const recipes = {
        'mekanism:heavy_water': [2, ['mekanismgenerators:deuterium', 2], ['mekanism:oxygen', 1]],
        'mekanism:brine': [10, ['mekanism:sodium', 1], ['mekanism:chlorine', 1]],
        'minecraft:water': [2, ['mekanism:hydrogen', 1], ['mekanism:chlorine', 2]],
    }

    for (const [input, [amount, [output1, amount1], [output2, amount2]]] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:electrolytic_seperator', 100)
            .requireFluid(`${amount * multiplier}x ${input}`, 8, 8)
            .produceChemical(`${amount1 * multiplier}x ${output1}`, 84, 8)
            .produceChemical(`${amount2 * multiplier}x ${output2}`, 102, 8)
            .progressX(46)
            .height(49)
            .width(128)
    }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.