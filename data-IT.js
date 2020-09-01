function setIT()
{
    //DATA
    Factions = {
        //C1
        DP: {Deck: "C1", Name: "Mutaforma", Include: true, Phase_ab:3, Ability: "Un mutaforma può essere giocato al posto della fazione richiesta, ma non ne guadagna le sue abilità speciali"},
        DW: {Deck: "C1", Name: "Nani", Include: true, Phase_ab:2, Ability: "I Nani giocati vengono aggiunti al Mazzo dei Punti di chi ha perso il turno"},
        GO: {Deck: "C1", Name: "Goblin", Include: true, Phase_ab:3, Ability: "Nessun potere speciale"},
        KN: {Deck: "C1", Name: "Cavalieri", Include: true, Phase_ab:3, Ability: "Quando viene giocato dopo un Goblin vince indipendentemente dal valore"},
        UD: {Deck: "C1", Name: "Non-Morti", Include: true, Phase_ab:1, Ability: "Non si scartano i Non-Morti giocati ma vengono aggiunti al Mazzo dei Punti del vincitore del turno"},
        //C2
        DR: {Deck: "C2", Name: "Draghi", Include: false, Phase_ab:3, Ability: "The last player to play a dragon in a trick will be the leader for the next trick regardless of its value of whether the player followed faction. The winner still takes the card(s) as usual."},
        GI: {Deck: "C2", Name: "Giganti", Include: false, Phase_ab:2, Ability: "If you win a trick, each Giant won in this trick may smash one opponent’s Gnome of the same value. Discard the smashed Gnome. It won’t be scored and at the end of the game."},
        GN: {Deck: "C2", Name: "Gnomi", Include: false, Phase_ab:2, Ability: "If you win a Gnome in a trick, you must place it face-up in front of you instead of placing it into your score pile. At the end of the game any Gnomes still laying in front of you are placed into your score pile."},
        SE: {Deck: "C2", Name: "Veggenti", Include: false, Phase_ab:1, Ability: "If you win a trick while playing a Seer, you may peek at the top card of the deck and decide whether you take the top card or the face-up card. If you take the top card your opponent takes the face face-up card, otherwise he'll get the top card as usual"},
        TR: {Deck: "C2", Name: "Troll", Include: false, Phase_ab:2, Ability: "In Phase Two players can only collect 1 Troll into their score pile at a time. If two Trolls are played, the winner of the trick only takes the higher valued troll and leave the other set aside for the winner of the next trick. If multiple tricks of trolls are played in a row, it is possible that multiple trolls can be set aside waiting to be taken. If there are multiple trolls, the winner will always take the highest value, even if that one was previously set aside and not played in the trick. When the final trick of the game is played, that player will take any troll cards left over"},
        //CR: MAP
        BA: {Deck: "CRMAP", Name: "Basilischi", Include: false, Phase_ab:3, Ability: "If this card is played after a card of the exact same value (which can be modified), you instantly take the first card into your scoring pile. Then you win the trick because you have the only card left. If a card is played after the basilisk with the same value, then nothing happens."},
        PH: {Deck: "CRMAP", Name: "Fenici", Include: false, Phase_ab:2, Ability: "If you lose a card with a phoenix bird, draw a Phoenix Fire card and place it into your hand. The Phoenix Fire functions exactly like a normal Phoenix faction card, including when determining majorities, following factions, etc. When playing with this faction, phase 2 ends when a player has run out of cards."},
        UN: {Deck: "CRMAP", Name: "Unicorni", Include: false, Phase_ab:2, Ability: "Each unicorn you have won, will increase the value of other factions when you play a card. The Unicorn faction does not increase this way. This effect does not happen during the end of the game scoring. Keep your unicorns face-up to easily track this."},
        //CR: MER
        CY: {Deck: "CRMER", Name: "Ciclopi", Include: false, Phase_ab:2, Ability: "At the end of the Game, the player with the least amount of Cyclops wins the favor of the faction. You must have at least one Cyclops to win. If there is a tie for the number, the player with the lowest valued Cyclops is the winner."},
        EL: {Deck: "CRMER", Name: "Elfi", Include: false, Phase_ab:3, Ability: "No Special Power"},
        EO: {Deck: "CRMER", Name: "Elfi e Orchi", Include: false, Phase_ab:2, Ability: "When you play a dual suited card, you must announce wether it's played as an elf or an orc. In phase 2, if this card is won, it stays the suit it was declared to be when played."},
        OR: {Deck: "CRMER", Name: "Orchi", Include: false, Phase_ab:3, Ability: "No Special Power"},
        //CR: MAG
        DU: {Deck: "CRMAG", Name: "Druidi", Include: false, Phase_ab:1, Ability: "If you lose a trick after playing a druid, keep the card in front of you and rotate it around. The druid has now become a bear! Your next card played will now have a +3 value. The bear is discarded afterwards."},
        SH: {Deck: "CRMAG", Name: "Mutanti", Include: false, Phase_ab:1, Ability: "When played, switch with the card in the middle of the table. The card in the middle of the table is no the card you've played and you're no competing for the shapeshifter card."},
        WI: {Deck: "CRMAG", Name: "Maghi", Include: false, Phase_ab:3, Ability: "When you win a trick by playing a wizard, draw a potions card, but do not look at it! Set it face-down in front of you. During another trick, when you play a card, you may flip over the potion. The potion will more than likely help that card increasing its value, but it may decrease it as well. The potion cards is discarded afterwards."},
        //PROMO
        DE: {Deck: "PROMO", Name: "Elfi oscuri", Include: false, Phase_ab:2, Ability: "If you collect at least one Dark Elf into your score pile in a trick, you must discard a nonDark Elf card in your score pile from the game. If you have only Dark Elf cards in your score pile, you do not have to discard a card. If you collect more than one Dark Elves in a trick, you still only discard one other faction card."},
        GH: {Deck: "PROMO", Name: "Fantasmi", Include: false, Phase_ab:1, Ability: "You may keep the Ghost you played instead of the card you would normally take: If you win the trick, you place the Ghost in your Follower deck and discard the card in the middle. If you lose the trick, you place the Ghost in your Follower deck and discard the top card of the deck in the middle (without looking at it upfront)."}
    };

    Couples = {
        CLAIM_1: ["GO","KN"],
        CLAIM_2: ["GN","GI"],
        CLAIM_R_MERC: ["EL","EO","OR"]
    };

    Deck = {
        C1: {Name:"Claim", Factions: ["GO","KN","DP","DW","UD"], Include: true},
        C2: {Name:"Claim 2", Factions: ["DR","GI","GN","SE","TR"], Include: false},
        CRMAP: {Name:"Claim Reinforcements: Maps", Factions: ["BA","PH","UN"], Include: false},
        CRMER: {Name:"Claim Reinforcements: Mercenaries", Factions: ["CY","EL","EO","OR"], Include: false},
        CRMAG: {Name:"Claim Reinforcements: Magic", Factions: ["DU","SH","WI"], Include: false},
        //CFEA, CFIR, CFRO
        PROMO: {Name:"Promo", Factions: ["DE","GH"], Include: false}
        //STBOX (Awakeners and Satyrs)
    };

    Strings = {
        HELP_TRANSLATE: "Vuoi contribuire con una traduzione?",
        TITLE: "Claim randomizer",
        SELECT_FACT: "Seleziona le fazioni che vuoi usare",
        SUBMIT: "Calcola",
        DECK: "Mazzo",
        FACTION: "Fazione",
        PHASE_1: "Fase 1",
        PHASE_2: "Fase 2",
        CREDITS_BTN: "Credits",
        creditsModalLabel: "Credits",
        COPYRIGTH: "Diritti su immagini e testi riservati ai rispettivi detentori, questa pagina è stata autorizzata dalla White Goblin Games.",
        SOURCE_CODE_BY: "Source code con licenza MIT creato da migio.",
        INSPIRED_BY: "Ispirato da",
        THIS_THREAD: "questo thread",
        ENG_RUL: "Regole in inglese ottenute da",
        THIS_FILE: "questo file",
        IT_RULE: "Regole in italiano scritte da migio",
        FEEDBACK: "Invia un Feedback",
        CLOSE: "Chiudi"
        //TODO: alerts
    }
}