
//DATA

var Factions = {
    //C1
    DP: {Name: "Doppelgängers", Include: true, Phase_ab:3, Ability: "This faction is considered wild. You may play a Doppelgänger instead of the asked suit, even if you’re able to follow suit. When played second, it is considered to be the same faction of the first card and is considered to be following faction. Note: If the Leader plays a Doppelgänger, the other player still must follow faction by playing a Doppelgänger, if able. Important: A Doppelgänger does not take any special powers from the faction it follows."},
    DW: {Name: "Dwarves", Include: true, Phase_ab:2, Ability: "The player losing a trick collects all Dwarves played during this trick and adds them to their Score Pile. The winner will still collect any non-Dwarves cards that has been played."},
    GO: {Name: "Goblins", Include: true, Phase_ab:3, Ability: "No Special Power."},
    KN: {Name: "Knights", Include: true, Phase_ab:3, Ability: "When played after a Goblin, it automatically beats a Goblin regardless of its value. Important: The player must still follow faction, if able."},
    UD: {Name: "Undead", Include: true, Phase_ab:1, Ability: "Played Undead cards are not discarded like the other faction’s cards, but instead are added to the trick winner’s Score Pile."},
    //C2
    DR: {Name: "Dragons", Include: false, Phase_ab:3, Ability: "The last player to play a dragon in a trick will be the leader for the next trick regardless of its value of whether the player followed faction. The winner still takes the card(s) as usual."},
    GI: {Name: "Giants", Include: false, Phase_ab:2, Ability: "If you win a trick, each Giant won in this trick may smash one opponent’s Gnome of the same value. Discard the smashed Gnome. It won’t be scored and at the end of the game."},
    GN: {Name: "Gnomes", Include: false, Phase_ab:2, Ability: "If you win a Gnome in a trick, you must place it face-up in front of you instead of placing it into your score pile. At the end of the game any Gnomes still laying in front of you are placed into your score pile."},
    SE: {Name: "Seers", Include: false, Phase_ab:1, Ability: "If you win a trick while playing a Seer, you may peek at the top card of the deck and decide whether you take the top card or the face-up card. If you take the top card your opponent takes the face face-up card, otherwise he'll get the top card as usual"},
    TR: {Name: "Trolls", Include: false, Phase_ab:2, Ability: "In Phase Two players can only collect 1 Troll into their score pile at a time. If two Trolls are played, the winner of the trick only takes the higher valued troll and leave the other set aside for the winner of the next trick. If multiple tricks of trolls are played in a row, it is possible that multiple trolls can be set aside waiting to be taken. If there are multiple trolls, the winner will always take the highest value, even if that one was previously set aside and not played in the trick. When the final trick of the game is played, that player will take any troll cards left over"},
    //CR: MAP
    BA: {Name: "Basilisks", Include: false, Phase_ab:3, Ability: "If this card is played after a card of the exact same value (which can be modified), you instantly take the first card into your scoring pile. Then you win the trick because you have the only card left. If a card is played after the basilisk with the same value, then nothing happens."},
    PH: {Name: "Phoenixes", Include: false, Phase_ab:2, Ability: "If you lose a card with a phoenix bird, draw a Phoenix Fire card and place it into your hand. The Phoenix Fire functions exactly like a normal Phoenix faction card, including when determining majorities, following factions, etc. When playing with this faction, phase 2 ends when a player has run out of cards."},
    UN: {Name: "Unicorns", Include: false, Phase_ab:2, Ability: "Each unicorn you have won, will increase the value of other factions when you play a card. The Unicorn faction does not increase this way. This effect does not happen during the end of the game scoring. Keep your unicorns facde-up to easily track this."},
    //CR: MER
    CY: {Name: "Cyclops", Include: false, Phase_ab:2, Ability: "At the end of the Game, the player with the least amount of Cyclops wins the favor of the faction. You must have at least one Cyclops to win. If there is a tie for the number, the player with the lowest valued Cyclops is the winner."},
    EL: {Name: "Elves", Include: false, Phase_ab:3, Ability: "No Special Power"},
    EO: {Name: "Elves and Orcs", Include: false, Phase_ab:2, Ability: "When you play a dual suited card, you must announce wether it's played as an elf or an orc. In phase 2, if this card is won, it stays the suit it was declared to be when played."},
    OR: {Name: "Orcs", Include: false, Phase_ab:3, Ability: "No Special Power"},
    //CR: MAG
    DU: {Name: "Druids", Include: false, Phase_ab:1, Ability: "If you lose a trick after playing a druid, keep the card in front of you and rotate it around. The druid has now become a bear! Your next card played will now have a +3 value. The bear is discarded afterwards."},
    SH: {Name: "Shapeshifters", Include: false, Phase_ab:1, Ability: "When played, switch with the card in the middle of the table. The card in the middle of the table is no the card you've played and you're no competing for the shapeshifter card."},
    WI: {Name: "Wizards", Include: false, Phase_ab:3, Ability: "When you win a trick by playing a wizard, draw a potions card, but do not look at it! Set it face-down in front of you. During another trick, when you play a card, you may flip over the potion. The potion will more than likely help that card increasing its value, but it may decrease it as well. The potion cards is discarded afterwards."},
    //PROMO
    DE: {Name: "Dark Elves", Include: false, Phase_ab:2, Ability: "If you collect at least one Dark Elf into your score pile in a trick, you must discard a nonDark Elf card in your score pile from the game. If you have only Dark Elf cards in your score pile, you do not have to discard a card. If you collect more than one Dark Elves in a trick, you still only discard one other faction card."},
    GH: {Name: "Ghosts", Include: false, Phase_ab:1, Ability: "You may keep the Ghost you played instead of the card you would normally take: If you win the trick, you place the Ghost in your Follower deck and discard the card in the middle. If you lose the trick, you place the Ghost in your Follower deck and discard the top card of the deck in the middle (without looking at it upfront)."}
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
