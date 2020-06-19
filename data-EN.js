
//DATA

var Factions = {
    //C1
    DP: {Name: "Doppelgängers", Include: true},
    DW: {Name: "Dwarves", Include: true},
    GO: {Name: "Goblins", Include: true},
    KN: {Name: "Knights", Include: true},
    UD: {Name: "Undead", Include: true},
    //C2
    DR: {Name: "Dragons", Include: false},
    GI: {Name: "Giants", Include: false},
    GN: {Name: "Gnomes", Include: false},
    SE: {Name: "Seers", Include: false},
    TR: {Name: "Trolls", Include: false},
    //CR: MAP
    BA: {Name: "Basilisks", Include: false},
    PH: {Name: "Phoenixes", Include: false},
    UN: {Name: "Unicorns", Include: false},
    //CR: MER
    CY: {Name: "Cyclops", Include: false},
    EL: {Name: "Elves", Include: false},
    EO: {Name: "Elves and Orcs", Include: false},
    OR: {Name: "Orcs", Include: false},
    //CR: MAG
    DU: {Name: "Druids", Include: false},
    SH: {Name: "Shapeshifters", Include: false},
    WI: {Name: "Wizards", Include: false},
    //PROMO
    DE: {Name: "Dark Elves", Include: false},
    GH: {Name: "Ghosts", Include: false}
};

var Couples = {
    CLAIM_1: ["GO","KN"],
    CLAIM_2: ["GN","GI"],
    CLAIM_R_MERC: ["EL","EO","OR"]
};

var Deck = {
    C1: {Name:"Claim", Factions: ["GO","KN","DP","DW","UD"], Include: true},
    C2: {Name:"Claim 2", Factions: ["DR","GI","GN","SE","TR"], Include: false},
    CRMAP: {Name:"Claim Reinforcements: Maps", Factions: ["BA","PH","UN"], Include: false},
    CRMER: {Name:"Claim Reinforcements: Mercenaries", Factions: ["CY","EL","EO","OR"], Include: false},
    CRMAG: {Name:"Claim Reinforcements: Magic", Factions: ["DU","SH","WI"], Include: false},
    PROMO: {Name:"Promo", Factions: ["DE","GH"], Include: false}
};

var Strings = {
    SUBMIT: "Calculate"
}
