// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 16
    let energy = 32

    const crystals = {
        'alltheores:clean_aluminum' : ['aluminum', 'alltheores:aluminum_crystal'],
        'alltheores:clean_nickel' : ['nickel', 'alltheores:nickel_crystal'],
        'alltheores:clean_platinum' : ['platinum', 'alltheores:platinum_crystal'],
        'alltheores:clean_silver' : ['silver', 'alltheores:silver_crystal'],
        'alltheores:clean_iridium' : ['iridium', 'alltheores:iridium_crystal'],
        'alltheores:clean_zinc' : ['zinc', 'alltheores:zinc_crystal'],
        'allthemodium:clean_allthemodium' : ['allthemodium', 'allthemodium:allthemodium_crystal'],
        'allthemodium:clean_vibranium' : ['vibranium', 'allthemodium:vibranium_crystal'],
        'allthemodium:clean_unobtainium' : ['unobtainium', 'allthemodium:unobtainium_crystal'],
        'mekanism:clean_iron' : ['iron', 'mekanism:crystal_iron'],
        'mekanism:clean_gold' : ['gold', 'mekanism:crystal_gold'],
        'mekanism:clean_osmium' : ['osmium', 'mekanism:crystal_osmium'],
        'mekanism:clean_copper' : ['copper', 'mekanism:crystal_copper'],
        'mekanism:clean_tin' : ['tin', 'mekanism:crystal_tin'],
        'mekanism:clean_lead' : ['lead', 'mekanism:crystal_lead'],
        'mekanism:clean_uranium' : ['uranium', 'mekanism:crystal_uranium'],
        'kubejs:clean_crimson_iron' : ['crimson_iron', 'kubejs:crimson_iron_crystal'],
        'kubejs:clean_azure_silver' : ['azure_silver', 'kubejs:azure_silver_crystal'],
    }

    for (const [inputChem, [inputItem,outputItem]] of Object.entries(crystals)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_crystallizer', 100)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireItem(`${multiplier}x #c:ores/${inputItem}`, 31, 17)
            .requireChemical(`${200 * multiplier}x ${inputChem}`, 31, 36)
            .progressX(64)
            .progressY(26)
            .produceItem(`${multiplier}x ${outputItem}`, 100, 26)
            .width(126)
            .height(84)
    }

    const recipes = {
        'mekanism:lithium' : [100, 'mekanism:dust_lithium'],
        'mekanism:brine' : [15, 'mekanism:salt'],
        'mekanism:antimatter' : [1000, 'mekanism:pellet_antimatter'],
    }

    for (const [input, [amount,output]] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_crystallizer', 100)
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