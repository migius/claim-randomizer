function setEN()
{
    //DATA
    Factions = {
        //C1
        DP: {Image: "images\\factions\\cards\\small\\DP.jpg", Deck: "C1", Name: "Doppelgängers", Include: true, Phase_ab:3, Ability: "You may play a Doppelgängers instead of the faction you must follow."},
        DW: {Image: "images\\factions\\cards\\small\\DW.jpg", Deck: "C1", Name: "Dwarves", Include: true, Phase_ab:2, Ability: "The loser of the trick collects all Dwarves played and adds them to their Score Pile."},
        GO: {Image: "images\\factions\\cards\\small\\GO.jpg", Deck: "C1", Name: "Goblins", Include: true, Phase_ab:3, Ability: "No Special Power."},
        KN: {Image: "images\\factions\\cards\\small\\KN.jpg", Deck: "C1", Name: "Knights", Include: true, Phase_ab:3, Ability: "If played after a Goblin, it automatically beats a Goblin regardless its value."},
        UD: {Image: "images\\factions\\cards\\small\\UD.jpg", Deck: "C1", Name: "Undead", Include: true, Phase_ab:1, Ability: "Played Undead cards are not discarded, but added to the trick winner's Score Pile."},
        //C2                                                ,
        DR: {Image: "images\\factions\\cards\\small\\DR.jpg", Deck: "C2", Name: "Dragons", Include: false, Phase_ab:3, Ability: "You will be the leader of the next trick."},
        GI: {Image: "images\\factions\\cards\\small\\GI.jpg", Deck: "C2", Name: "Giants", Include: false, Phase_ab:2, Ability: "Smashes one Gnome of the same value in front of the loser of the trick."},
        GN: {Image: "images\\factions\\cards\\small\\GN.jpg", Deck: "C2", Name: "Gnomes", Include: false, Phase_ab:2, Ability: "Place any won Gnomes in front of you. Can be smashed by Giants."},
        SE: {Image: "images\\factions\\cards\\small\\SE.jpg", Deck: "C2", Name: "Seers", Include: false, Phase_ab:1, Ability: "The winner of the trick may peek at the top card of the deck and add that card or the card in the centre to his Follower deck."},
        TR: {Image: "images\\factions\\cards\\small\\TR.jpg", Deck: "C2", Name: "Trolls", Include: false, Phase_ab:2, Ability: "You can only win one Troll each trick. Extra are left for future rounds."},
        //CR: MAP                                           ,
        BA: {Image: "images\\factions\\cards\\small\\BA.jpg", Deck: "CRMAP", Name: "Basilisks", Include: false, Phase_ab:3, Ability: "If this card is played after a card of the exact same value (which may be modified by the Unicorn), you instantly take the first card into your Score Pile. Then you win the trick because you are the only card left."},
        PH: {Image: "images\\factions\\cards\\small\\PH.jpg", Deck: "CRMAP", Name: "Phoenixes", Include: false, Phase_ab:2, Ability: "If you lose a card with a Phoenix, draw a Fire Phoenix and take it into your hand. The Fire Phoenix functions exactly like a Phoenix, including determining majorities, following factions, etc."},
        UN: {Image: "images\\factions\\cards\\small\\UN.jpg", Deck: "CRMAP", Name: "Unicorns", Include: false, Phase_ab:2, Ability: "Each Unicorn you have won will increase the value of other factions by one per Unicorn when you play a card. The Unicorn does not increase this way. This effect does not happen during the end of game scoring."},
        //CR: MER                                           ,
        CY: {Image: "images\\factions\\cards\\small\\CY.jpg", Deck: "CRMER", Name: "Cyclops", Include: false, Phase_ab:2, Ability: "At the end of the game, the player with the least amount of Cyclopses wins the favor of the faction. You must have at least one Cyclops to win. If there is a tie for the number, the player with the lowest valued Cyclops is the winner."},
        EL: {Image: "images\\factions\\cards\\small\\EL.jpg", Deck: "CRMER", Name: "Elves", Include: false, Phase_ab:3, Ability: "No special ability."},
        EO: {Image: "images\\factions\\cards\\small\\EO.jpg", Deck: "CRMER", Name: "Elves and Orcs", Include: false, Phase_ab:2, Ability: "When you play a dual suited card, you must announce whether it’s played as an Elf or an Orc. It may be played as either, but you must choose. In phase 2, if this card is won, it stays the suit that it was declared to be when played. You an orient the card to show what suit it is. "},
        OR: {Image: "images\\factions\\cards\\small\\OR.jpg", Deck: "CRMER", Name: "Orcs", Include: false, Phase_ab:3, Ability: "No special ability."},
        //CR: MAG                                           ,
        DU: {Image: "images\\factions\\cards\\small\\DU.jpg", Deck: "CRMAG", Name: "Druids", Include: false, Phase_ab:1, Ability: "If you lose a trick after playing a Druid in phase 1, keep the card in front of you and rotate it around. The Druid now has become a Bear! Your next card played will now have a +3 value. That card is then discarded afterwards."},
        SH: {Image: "images\\factions\\cards\\small\\SH.jpg", Deck: "CRMAG", Name: "Shapeshifters", Include: false, Phase_ab:1, Ability: "When played in phase 1, switch with the card in the middle of the table. The card in the middle is now the card you’ve played, and you are competing for the Shapeshifter. "},
        WI: {Image: "images\\factions\\cards\\small\\WI.jpg", Deck: "CRMAG", Name: "Wizards", Include: false, Phase_ab:3, Ability: "When you win a trick by playing a Wizard, draw a potion card, but do not look at it! Set it face-down in front of you. During another trick, when you play a card you may flip over the Potion. The Potion will more than likely help that card by increasing its value, but it may decrease it as well. The Potion card is then discarded afterwards."},
        //PROMO                                             ,
        DE: {Image: "images\\factions\\cards\\small\\DE.jpg", Deck: "PROMO", Name: "Dark Elves", Include: false, Phase_ab:2, Ability: "If you collect at least one Dark Elf into your score pile in a trick, you must discard a non-Dark Elf card in your score pile from the game. If you have only Dark Elf cards in your score pile, you do not have to discard a card. If you collect more than one Dark Elves in a trick, you still only discard one other faction card."},
        GH: {Image: "images\\factions\\cards\\small\\GH.jpg", Deck: "PROMO", Name: "Ghosts", Include: false, Phase_ab:1, Ability: "You may keep the Ghost you played instead of the card you would normally take: If you win the trick, you place the Ghost in your Follower deck and discard the card in the middle. If you lose the trick, you place the Ghost in your Follower deck and discard the top card of the deck in the middle (without looking at it upfront)."},
        ME: {Image: "images\\factions\\cards\\small\\ME.jpg", Deck: "PROMO", Name: "Mermaids", Include: false, Phase_ab:3, Ability: "When you collect Mermaids into your Score Pile, leave them face up. For every Mermaid you have, your played cards have a -1 value."},
        MI: {Image: "images\\factions\\cards\\small\\MI.jpg", Deck: "PROMO", Name: "Minotaurs", Include: false, Phase_ab:2, Ability: "If you lead with a Minotaur and win the hand, the other player may take the card they played back into their hand. "},
        TI: {Image: "images\\factions\\cards\\small\\TI.png", Deck: "PROMO", Name: "Tinkerers", Include: false, Phase_ab:2, Ability: "If a Tinkerer beats a played card by a value of 4 or more, then it explodes! The card is discarded from the game. You still win the trick and the other card."},
        VL: {Image: "images\\factions\\cards\\small\\VL.png", Deck: "PROMO", Name: "Valkyrie", Include: false, Phase_ab:3, Ability: "If the Valkyrie is played following another faction, it becomes that faction if it is valued 3 or higher than the first card played."},
        //CR: FEA                                           ,
        VA: {Image: "images\\factions\\cards\\small\\VA.jpg", Deck: "CRFEA", Name: "Vampires", Include: false, Phase_ab:2, Ability: "When you collect a Vampire into your Score pile, you may place it face-up in front of you. When you collect other non-Vampire cards into your Score pile, you may optionally place it under the face-up Vampire card. These cards will not count towards their faction, but towards a Vampire victory. The player with the highest value of face-up Vampire plus the cards underneath wins that faction. Other Vampire cards are not counted. A player may replace their face-up Vampire card, but when they do so they discard any faction cards under the previous face-up cards."},
        ZO: {Image: "images\\factions\\cards\\small\\ZO.jpg", Deck: "CRFEA", Name: "Zombies", Include: false, Phase_ab:1, Ability: "If you win a trick with the Zombies, collect the losing card of the trick and place into your Score Pile."},
        WE: {Image: "images\\factions\\cards\\small\\WE.jpg", Deck: "CRFEA", Name: "Werewolves", Include: false, Phase_ab:3, Ability: "There are 2 kind of cards: a full moon and no moon. Start the game with the no moon showing on top and the full moon on the bottom. When a trick is won with a Werewolf, switch the cards. When there is no moon, the lowest Werewolf is considered the winning card. If there is a moon, the highest value wins as normal."},
        SD: {Image: "images\\factions\\cards\\small\\SD.jpg", Deck: "CRFEA", Name: "Shadows", Include: false, Phase_ab:3, Ability: "Before the game, shuffle the 20 Shadow cards and remove 10 of them. Then shuffle the 10 remaining cards with the rest. During the game, you don’t know which values there are in the game."},
        //CR: FIR                                           ,
        FE: {Image: "images\\factions\\cards\\small\\FE.jpg", Deck: "CRFIR", Name: "Fire Elementals", Include: false, Phase_ab:3, Ability: "When playing the card, you only know whether the card is high (5-9) or low (0-4). You check the value of the card after all players have played into the trick. Announce each value as it is revealed."},
        DM: {Image: "images\\factions\\cards\\small\\DM.jpg", Deck: "CRFIR", Name: "Demons", Include: false, Phase_ab:3, Ability: "When playing the card, you only know if the card is odd or even. You check the value of the card after all players have played into the trick. Announce each value as it is revealed."},
        TC: {Image: "images\\factions\\cards\\small\\TC.jpg", Deck: "CRFIR", Name: "Tricksters", Include: false, Phase_ab:3, Ability: "There are two cards of each card with value 1/3/5/7/9. One of the values is real, and one is fake (marked with an X). You do not check for the fakes until final scoring. During final scoring, remove any faction cards with an 'X'."},
        PO: {Image: "images\\factions\\cards\\small\\PO.jpg", Deck: "CRFIR", Name: "Poisoners", Include: false, Phase_ab:3, Ability: "At the beginning of the game, randomly deal 3 toxics face-up. When you win a trick with a Poisoner, you may use the Reading Glass to peek at one of the Toxics. You do not tell the other players what you have seen. At the end of the game, the values of the poison cards are revealed to everyone. Players must discard any faction cards with the values that match the poison cards form their Score Pile. (The 'X' poison cards are a decoy and does not eliminate any card). "},
        //CR: FRO                                           ,
        FR: {Image: "images\\factions\\cards\\small\\FR.jpg", Deck: "CRFRO", Name: "Frostbeasts", Include: false, Phase_ab:2, Ability: "If you win a trick with this card, the other card is discarded and is not collected in your Score Pile."},
        YE: {Image: "images\\factions\\cards\\small\\YE.jpg", Deck: "CRFRO", Name: "Yeti's", Include: false, Phase_ab:3, Ability: "You do not lead the next trick, even if you won the trick."},
        IK: {Image: "images\\factions\\cards\\small\\IK.jpg", Deck: "CRFRO", Name: "Ice Kings", Include: false, Phase_ab:3, Ability: "At the end of the game, each matching value of Ice Queen and Ice King in your score pile are discarded. They get married and run away! This is done before the majority of each faction is decided."},
        IQ: {Image: "images\\factions\\cards\\small\\IQ.jpg", Deck: "CRFRO", Name: "Ice Queens", Include: false, Phase_ab:3, Ability: "At the end of the game, each matching value of Ice Queen and Ice King in your score pile are discarded. They get married and run away! This is done before the majority of each faction is decided."},
        //STBOX                                             ,
        AW: {Image: "images\\factions\\cards\\small\\AW.jpg", Deck: "STBOX", Name: "Awakeners", Include: false, Phase_ab:2, Ability: "After phase 1, shuffle the discarded cards and form a second deck. If you win a trick with an Awakener in phase 2, you draw a card from the second deck and place it in your Score Pile."},
        SA: {Image: "images\\factions\\cards\\small\\SA.jpg", Deck: "STBOX", Name: "Satyrs", Include: false, Phase_ab:1, Ability: "When the card where the players are competing off is a Satyr, the second player does not have to follow faction. The highest number is considered the winner of the trick."},
        //CR: SKY
        AN: {Image: "images\\factions\\cards\\small\\AN.jpg", Deck: "CRSKY", Name: "Angels", Include: false, Phase_ab:3, Ability: "At the end of the game, if there are no other cards in your Score pile with the same number, the Angel card is x2 towards the faction majority."},
        EA: {Image: "images\\factions\\cards\\small\\EA.jpg", Deck: "CRSKY", Name: "Eagles", Include: false, Phase_ab:3, Ability: "An Eagle can not lead a trick 2 times in a row. (Exception: The lead player has only Eagles.)"},
        PT: {Image: "images\\factions\\cards\\small\\PT.jpg", Deck: "CRSKY", Name: "Pterosaurs", Include: false, Phase_ab:3, Ability: "At the end of the game, any pterosaur card 7 or higher extinct! The cards do not count towards faction majority."},
        LE: {Image: "images\\factions\\cards\\small\\LE.jpg", Deck: "CRSKY", Name: "Lightning Elementals", Include: false, Phase_ab:2, Ability: "In Phase 2, you may discard any number Lightning Elementals from you Score pile to boost a played card. Each discarded card boosts the card with +1."},
        VK: {Image: "images\\factions\\cards\\small\\VK.jpg", Deck: "CRSKY", Name: "Vulturekin", Include: false, Phase_ab:3, Ability: "At the end of the game, if you win the majority of the Vulturekin, shuffle the Discard pile of Phase 1 and draw 2 random cards. Add the cards to your Score pile."},
        //CR: SEA
        PI: {Image: "images\\factions\\cards\\small\\PI.png", Deck: "CRSEA", Name: "Pirates", Include: false, Phase_ab:3, Ability: "At the end of the game, if a player has a Pirate and a Royal Navy of the same value, the Pirate is arrested. The Pirate counts as a Royal Navy cards towards faction majority. It does not count as a Pirate."},
        RN: {Image: "images\\factions\\cards\\small\\RN.png", Deck: "CRSEA", Name: "Royal Navy", Include: false, Phase_ab:3, Ability: "At the end of the game, if a player has a Pirate and a Royal Navy of the same value, the Pirate is arrested and counts towards the Royal Navy"},
        SM: {Image: "images\\factions\\cards\\small\\SM.png", Deck: "CRSEA", Name: "Sea Monsters", Include: false, Phase_ab:1, Ability: "In Phase 1, if a Sea Monster is revealed as the center card, players must exchange one card from their hand. Exchange the cards face-down. Take the new card in hand."},
        OC: {Image: "images\\factions\\cards\\small\\OC.jpg", Deck: "CRSEA", Name: "Octipi", Include: false, Phase_ab:3, Ability: "Any faction card valued 8 or higher from another faction wins against an Octopus of any number."},
        FP: {Image: "images\\factions\\cards\\small\\FP.jpg", Deck: "CRSEA", Name: "Fish People", Include: false, Phase_ab:3, Ability: "In Phase 1 and 2, if you lose a trick where you played a Fish, take a Trident card from the draw pile or from another player if all trident cards from the draw pile are taken. The value of all Fish People cards increases with 1 for each trident card you own."},
        //CR: SUN
        SUN_MONKS: {Image: "images\\factions\\cards\\small\\SUN_MONKS.jpg", Deck: "CRSUN", Name: "Sun Monks", Include: false, Phase_ab:3, Ability: "When a Sun Monk is played, it must be followed by a Star Monk to follow faction. If the faction is followed correctly, the highest card wins. A Sun Monk following a Sun Monk is considered to be off faction and you will automatically lose the trick."},
        STAR_MONKS: {Image: "images\\factions\\cards\\small\\STAR_MONKS.jpg", Deck: "CRSUN", Name: "Star Monks", Include: false, Phase_ab:3, Ability: "When a Star Monk is played, it must be followed by a Sun Monk to follow faction. If the faction is followed correctly, the highest card wins. A Star Monk following a Star Monk is considered to be off faction and you will automatically lose the trick."},
        PR: {Image: "images\\factions\\cards\\small\\PR.jpg", Deck: "CRSUN", Name: "Prophets", Include: false, Phase_ab:2, Ability: "In Phase 2, the winner of the Prophets is depending on the number of Runes. If there are at least 3 Runes combined in the players Score pile, the Prophet with the highest value wins. If there are less than 3 Runes combined in the players Score pile, the Prophet with the lowest value wins. Runes are icons on the prophet cards."},
        SW: {Image: "images\\factions\\cards\\small\\SW.jpg", Deck: "CRSUN", Name: "Sandworms", Include: false, Phase_ab:3, Ability: "In Phase 1/2, when a trick with a Sandworm is led, it is played face-down. After all cards are played, the cards are revealed."},
        SC: {Image: "images\\factions\\cards\\small\\SC.jpg", Deck: "CRSUN", Name: "Scorpions", Include: false, Phase_ab:2, Ability: "In Phase 2, when you add a Scorpion to your Score pile, you must take Stung. The stung cards will give you a point penalty or a rare bonus in the next trick played. The card is afterwards discarded. If the Stung deck ever runs out. Shuffle the discarded cards and form a new deck."},
    };

    Couples = {
        CLAIM_1: ["GO","KN"],
        CLAIM_2: ["GN","GI"],
        CLAIM_R_MERC: ["EL","EO","OR"],
        CLAIM_R_FRO: ["IQ","IK"],
        CLAIM_R_SKY_AN: ["AN"],
        CLAIM_R_SKY_EA: ["EA"],
        CLAIM_R_SKY_PT: ["PT"],
        CLAIM_R_SKY_LE: ["LE"],
        CLAIM_R_SEA: ["PI","RN"],
        CLAIM_R_SUN: ["SUN_MONKS","STAR_MONKS"],
    };

    Deck = {
        C1: {Name:"Claim", Factions: ["GO","KN","DP","DW","UD"], Include: true, linkBuy: "https://www.amazon.it/MS-Edizioni-95028-Claim/dp/B0881KJ3KX/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-2&linkCode=ll1&tag=migio21-21&linkId=9e48931d66127a34d74d5dc04b4a46bd&language=it_IT"},
        C2: {Name:"Claim 2", Factions: ["DR","GI","GN","SE","TR"], Include: false, linkBuy: "https://www.amazon.it/GAMEFACTORY-646223-Gioco-di-luci/dp/B07JD62Z69/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-1&linkCode=ll1&tag=migio21-21&linkId=281f4f309662ddd02985edbf36b32276&language=it_IT"},

        CRMAP: {Name:"Claim Reinforcements: Maps", Factions: ["BA","PH","UN"], linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-maps/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},
        CRMER: {Name:"Claim Reinforcements: Mercenaries", Factions: ["CY","EL","EO","OR"], Include: false, linkBuy: "https://www.amazon.it/SD-Games-SDGCLAIM004-Claim-Rinforzanti/dp/B089K5VF3T/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-6&linkCode=ll1&tag=migio21-21&linkId=b83df5d024ab414fa11b5bae40d260ab&language=it_IT"},
        CRMAG: {Name:"Claim Reinforcements: Magic", Factions: ["DU","SH","WI"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-magic/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},

        CRFEA: {Name:"Claim Reinforcements: Fear", Factions: ["VA","ZO","WE","SD"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-fear/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Vampires, Zombies, Werewolves and Shadows
        CRFIR: {Name:"Claim Reinforcements: Fire", Factions: ["FE","DM","TC","PO"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-fire/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Fire Elementals, Demons, Tricksters and Poisoners
        CRFRO: {Name:"Claim Reinforcements: Frost", Factions: ["FR","YE","IK","IQ"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-frost/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Frostbeasts, Yeti, Ice Kings and Ice Queens

        CRSKY: {Name:"Claim Reinforcements: Sky", Factions: ["AN", "EA", "PT", "LE", "VK"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sky/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Angels, Eagles, Pterosaurs, Lightning Elemental, Vulturekin
        CRSEA: {Name:"Claim Reinforcements: Sea", Factions: ["PI", "RN", "SM", "OC", "FP"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sea/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Pirates, Royal Navy, Sea Monsters, Octipi, Fish People
        CRSUN: {Name:"Claim Reinforcements: Sun", Factions: ["SUN_MONKS", "STAR_MONKS", "PR", "SW", "SC"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sun/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Sun Monks, Star Monks, Prophets, Sandworms, Scorpions

        PROMO: {Name:"Promo", Factions: ["DE","GH","ME","MI","TI","VL"], Include: false, linkBuy: "https://magicmerchant.it/catalogue/claim-fantasmi-espansione-gioco-da-tavolo_46163/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Mermaids Minotaurs
        STBOX: {Name:"Storage Box", Factions: ["AW","SA"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/pre-order-claim-storage-box/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}//(Awakeners and Satyrs)
    };

    Strings = {
        HELP_TRANSLATE: "Want to contribute to translation?",
        TITLE: "Claim randomizer",
        SELECT_FACT: "Select factions you want to use",
        SUBMIT: "Randomize",
        USE_THIS_FACTIONS: "Use this factions:",
        DECK: "Deck",
        FACTION: "Faction",
        PHASE_1: "Phase 1",
        PHASE_2: "Phase 2",
        PHASE_1_2: "Phases 1 & 2",
        CREDITS_BTN: "Credits",
        creditsModalLabel: "Credits",
        COPYRIGTH: "Images and texts rights reserved to their respective owners, this page is authorized by the White Goblin Games.",
        SOURCE_CODE_BY: "Source code under MIT License by migio.",
        INSPIRED_BY: "Inspired by",
        THIS_THREAD: "this thread",
        ENG_RUL: "English, spanish and dutch rules provided by the White Goblin Games.",
        THIS_FILE: "this file",
        IT_RULE: "Italian rules by migio",
        DE_RULE: "German rules by Yarra Mekian",
        PT_RULE: "Portuguese rules by Sansão Oliveira",
        FEEDBACK: "Send a Feedback",
        CLOSE: "Close",
        //alerts
        AT_LEAST_COUPLES: "Select at least {0} couples!",
        AT_LEAST_FACTIONS: "Select at least {0} factions not in couple!",
        BUY_DECK: "Buy this deck"
    }
}
