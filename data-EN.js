
//DATA

var Factions = {
    DP: {Name: "Doppelgängers", Include: true},
    DW: {Name: "Dwarves", Include: true},
    GO: {Name: "Goblins", Include: true},
    KN: {Name: "Knights", Include: true},
    UD: {Name: "Undead", Include: true},

    DR: {Name: "Dragons", Include: false},
    GI: {Name: "Giants", Include: false},
    GN: {Name: "Gnomes", Include: false},
    SE: {Name: "Seers", Include: false},
    TR: {Name: "Trolls", Include: false}
};

var Couples = {
    CLAIM_1: ["GO","KN"],
    CLAIM_2: ["GN","GI"]
};

var Deck = {
    C1: {Name:"Claim", Factions: ["GO","KN","DP","DW","UD"], Include: true},
    C2: {Name:"Claim 2", Factions: ["DR","GI","GN","SE","TR"], Include: false}
};

var Strings = {
    SUBMIT: "Calculate"
}
