// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 32
    let energy = 16

    const recipes = {
        'alltheores:clean_aluminum' : [200, 'alltheores:aluminum_crystal'],
        'alltheores:clean_nickel' : [200, 'alltheores:nickel_crystal'],
        'alltheores:clean_platinum' : [200, 'alltheores:platinum_crystal'],
        'alltheores:clean_silver' : [200, 'alltheores:silver_crystal'],
        'alltheores:clean_iridium' : [200, 'alltheores:iridium_crystal'],
        'alltheores:clean_zinc' : [200, 'alltheores:zinc_crystal'],
        'allthemodium:clean_allthemodium' : [200, 'allthemodium:allthemodium_crystal'],
        'allthemodium:clean_vibranium' : [200, 'allthemodium:vibranium_crystal'],
        'allthemodium:clean_unobtainium' : [200, 'allthemodium:unobtainium_crystal'],
        'mekanism:clean_iron' : [200, 'mekanism:crystal_iron'],
        'mekanism:clean_gold' : [200, 'mekanism:crystal_gold'],
        'mekanism:clean_osmium' : [200, 'mekanism:crystal_osmium'],
        'mekanism:clean_copper' : [200, 'mekanism:crystal_copper'],
        'mekanism:clean_tin' : [200, 'mekanism:crystal_tin'],
        'mekanism:clean_lead' : [200, 'mekanism:crystal_lead'],
        'mekanism:clean_uranium' : [200, 'mekanism:crystal_uranium'],
        'kubejs:clean_crimson_iron' : [200, 'kubejs:crimson_iron_crystal'],
        'kubejs:clean_azure_silver' : [200, 'kubejs:azure_silver_crystal'],
        'mekanism:lithium' : [100, 'mekanism:dust_lithium'],
        'mekanism:brine' : [15, 'mekanism:salt'],
        'mekanism:antimatter' : [1000, 'mekanism:pellet_antimatter'],
    }

    for (const [input, [amount,output]] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_crystallizer', 200)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireChemical(`${amount * multiplier}x ${input}`, 31, 26)
            .progressX(64)
            .progressY(26)
            .produceItem(`${multiplier}x ${output}`, 100, 26)
            .width(126)
            .height(84)
    }


})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.