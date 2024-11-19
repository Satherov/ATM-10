// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 32

    const recipes = {
        'mekanismgenerators:fusion_fuel': [2, ['mekanismgenerators:deuterium', 1], ['mekanismgenerators:tritium', 1]],
        'mekanism:sulfuric_acid': [1, ['mekanism:sulfur_trioxide', 1], ['mekanism:water_vapor', 1]],
        'mekanism:hydrogen_chloride': [2, ['mekanism:hydrogen', 1], ['mekanism:chlorine', 2]],
        'mekanism:sulfur_trioxide': [1, ['mekanism:oxygen', 1], ['mekanism:sulfur_dioxide', 1]],
        'mekanism:uranium_hexafluoride': [2, ['mekanism:hydrofluoric_acid', 1], ['mekanism:uranium_oxide', 1]],
    }

    for (const [output, [amount, [input1, amount1], [input2, amount2]]] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_infuser', 100)
            .requireChemical(`${amount1 * multiplier}x ${input1}`, 26, 8)
            .requireChemical(`${amount2 * multiplier}x ${input2}`, 8, 8)
            .produceChemical(`${amount * multiplier}x ${output}`, 102, 8)
            .progressX(62)
            .height(49)
            .width(128)
    }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.