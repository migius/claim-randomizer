function setNL()
{
    //DATA
    Factions = {
        //C1
        DP: {Image: "images\\factions\\cards\\small\\DP.jpg", Deck: "C1", Name: "Dubbelgangers", Include: true, Phase_ab:3, Ability: "Deze factie wordt beschouwd als joker. Je mag een Dubbelganger spelen in plaats van de gevraagde factie, zelfs als je factie kan volgen. Als je een Dubbelganger speelt als tweede kaart in een slag wordt deze beschouwd als dezelfde factie als de eerste kaart en geldt het als het volgen van factie."},
        DW: {Image: "images\\factions\\cards\\small\\DW.jpg", Deck: "C1", Name: "Dwergen", Include: true, Phase_ab:2, Ability: "De verliezer van de slag legt alle gespeelde Dwergen op zijn score-stapel."},
        GO: {Image: "images\\factions\\cards\\small\\GO.jpg", Deck: "C1", Name: "Goblins", Include: true, Phase_ab:3, Ability: "Geen speciale kracht."},
        KN: {Image: "images\\factions\\cards\\small\\KN.jpg", Deck: "C1", Name: "Ridders", Include: true, Phase_ab:3, Ability: "Indien gespeeld na een Goblin, verslaat deze automatisch de Goblin onafhankelijk van zijn waarde."},
        UD: {Image: "images\\factions\\cards\\small\\UD.jpg", Deck: "C1", Name: "Ondoden", Include: true, Phase_ab:1, Ability: "Gespeelde Ondoden kaarten worden niet afgelegd, maar gaan naar de score-stapel van de winnaar van de slag."},        //C2                                                ,
        DR: {Image: "images\\factions\\cards\\small\\DR.jpg", Deck: "C2", Name: "Draken", Include: false, Phase_ab:3, Ability: "Je ben de Leider van de volgende slag."},
        GI: {Image: "images\\factions\\cards\\small\\GI.jpg", Deck: "C2", Name: "Reuzen", Include: false, Phase_ab:2, Ability: "Verpletter één Gnoom met dezelfde waarde van je tegenstander."},
        GN: {Image: "images\\factions\\cards\\small\\GN.jpg", Deck: "C2", Name: "Gnomen", Include: false, Phase_ab:2, Ability: "Leg gewonnen Gnomen voor je neer. Deze kunnen verpletterd worden door Reuzen."},
        SE: {Image: "images\\factions\\cards\\small\\SE.jpg", Deck: "C2", Name: "Zieners", Include: false, Phase_ab:1, Ability: "De winnaar van de slag bekijkt de bovenste kaart van de stapel. Daarna moet hij kiezen of hij die kaart in het midden of op zijn volgelingen-stapel legt."},
        TR: {Image: "images\\factions\\cards\\small\\TR.jpg", Deck: "C2", Name: "Trollen", Include: false, Phase_ab:2, Ability: "Je kunt elke beurt maximaal 1 Trol winnen. Andere Trollen blijven liggen voor de volgende ronde."},        //CR: MAP MAP                                       ,
        BA: {Image: "images\\factions\\cards\\small\\BA.jpg", Deck: "CRMAP", Name: "Basilisken", Include: false, Phase_ab:3, Ability: "Als deze kaart wordt gespeeld na een kaart met exact dezelfde waarde (eventueel aangepast door de Eenhoorn factie) mag je direct de andere kaart pakken en in je score-stapel leggen. Daarna win je de slag omdat je de enige overgebleven kaart hebt gespeeld. Als er een kaart wordt gespeeld na een Basilisk met dezelfde waarde gebeurt er niets."},
        PH: {Image: "images\\factions\\cards\\small\\PH.jpg", Deck: "CRMAP", Name: "Feniksen", Include: false, Phase_ab:2, Ability: "Als je een slag verliest met een Feniks, pak je een Vuur Feniks en neem je de kaart op hand. De Vuur Feniks functioneren net als de gewone Feniksen als het gaat om factie volgen, waardes, etc."},
        UN: {Image: "images\\factions\\cards\\small\\UN.jpg", Deck: "CRMAP", Name: "Eenhoorns", Include: false, Phase_ab:2, Ability: "Alle Eenhoorns die je gewonnen hebt geven +1 waarde aan alle andere te spelen kaarten. De bonus geldt niet voor de Eenhoorn factie. De bonus telt ook niet bij het bepalen van de meerderheid aan het einde van het spel."},        //CR: MER MER                                       ,
        CY: {Image: "images\\factions\\cards\\small\\CY.jpg", Deck: "CRMER", Name: "Cyclopen", Include: false, Phase_ab:2, Ability: "Aan het einde van het spel wint de speler met het minste aantal Cyclopen. Je moet ten minste één Cycloop hebben om de factie te kunnen winnen. In geval van gelijkspel wint de speler met de laagste kaart van de factie de stem."},
        EL: {Image: "images\\factions\\cards\\small\\EL.jpg", Deck: "CRMER", Name: "Elfen", Include: false, Phase_ab:3, Ability: "Geen speciale kracht."},
        EO: {Image: "images\\factions\\cards\\small\\EO.jpg", Deck: "CRMER", Name: "Elfi e Orchi", Include: false, Phase_ab:2, Ability: "[fase 1/2] Als een dubbele factiekaart wordt gespeeld, geef je aan of je een Elf of Ork speelt. Je mag kiezen welke factie de kaart toebehoort. [fase 2] Als je de kaart hebt gewonnen, blijft de kaart onderdeel van de factie waarvoor de kaart gespeeld is. Draai de kaart tijdens het spelen en verzamelen naar de juiste zijde. "},
        OR: {Image: "images\\factions\\cards\\small\\OR.jpg", Deck: "CRMER", Name: "Orchi", Include: false, Phase_ab:3, Ability: "Geen speciale kracht."},        //CR: MAG MAG                                       ,
        DU: {Image: "images\\factions\\cards\\small\\DU.jpg", Deck: "CRMAG", Name: "Druïden", Include: false, Phase_ab:1, Ability: "Als je een slag verliest in fase 1 na het spelen van een Druïde, mag je deze kaart houden en gedraaid voor je neerleggen. De Druïde is nu een beer geworden! De volgende kaart die je nu speelt krijgt een +3 bonus op zijn normale waarde. Daarna gaat de Druïde naar de aflegstapel."},
        SH: {Image: "images\\factions\\cards\\small\\SH.jpg", Deck: "CRMAG", Name: "Gedaanteverwisselaars", Include: false, Phase_ab:1, Ability: "Als je een Gedaanteverwisselaar in fase 1 speelt moet je de kaart omruilen voor de kaart die in het midden van de tafel ligt. De kaart die in het midden van de tafel lag is nu de door jou gespeelde kaart en de door jou gespeelde Gedaanteverwisselaar is nu de kaart waar om gestreden wordt. "},
        WI: {Image: "images\\factions\\cards\\small\\WI.jpg", Deck: "CRMAG", Name: "Tovenaars", Include: false, Phase_ab:3, Ability: "Als je een slag wint door het spelen van een Tovenaar, moet je een Toverdrank kaart van de stapel pakken zonder deze te bekijken. Leg de Toverdrank kaart gedekt voor je neer. In een volgende slag mag je de Toverdrank kaart omdraaien. De Toverdrank zal je waarschijnlijk helpen door een bonuswaarde toe te voegen aan je gespeelde kaart maar pas op: de Toverdrank kan zich ook tegen je keren. Daarna gaat de Toverdrank kaart naar de aflegstapel."},        //PROMOMO                                           ,
        DE: {Image: "images\\factions\\cards\\small\\DE.jpg", Deck: "PROMO", Name: "Dark Elves", Include: false, Phase_ab:2, Ability: "Als je minstens één Dark Elf in een slag hebt gewonnen, dan moet je een andere kaart (geen Dark Elf) uit je score-stapel afleggen en uit het spel verwijderen. Als je enkel Dark Elf kaarten in je score-stapel hebt, dan hoef je geen kaart af te leggen. Als je meer dan één Dark Elf in een slag wint, dan hoef je nog steeds maar één kaart van een andere factie af te leggen."},
        GH: {Image: "images\\factions\\cards\\small\\GH.jpg", Deck: "PROMO", Name: "Spoken", Include: false, Phase_ab:1, Ability: "Je mag het Spook dat je speelde pakken i.p.v. de kaart die je normaal gesproken zou krijgen: Als je de slag hebt gewonnen, leg je het Spook op je volgelingen-stapel en leg je de kaart in het midden af. Als je de slag hebt verloren, leg je het Spook op je volgelingen-stapel en leg je de bovenste kaart van de stapel in het midden af (zonder deze kaart te bekijken)."},
        ME: {Image: "images\\factions\\cards\\small\\ME.jpg", Deck: "PROMO", Name: "Zeemeerminnen", Include: false, Phase_ab:3, Ability: "Alle Zeemeerminnen die je gewonnen hebt geven -1 waarde aan alle andere te spelen kaarten. De bonus geldt niet voor de Zeemeerminnen factie. De bonus telt ook niet bij het bepalen van de meerderheid aan het einde van het spel. "},
        MI: {Image: "images\\factions\\cards\\small\\MI.jpg", Deck: "PROMO", Name: "Minotaurs", Include: false, Phase_ab:2, Ability: "Als je de Leider van een slag bent en wint met een Minotaur, dan mag de andere speler zijn gespeelde kaart terug op hand nemen. "},        //CR: FEA FEA                                       ,
        VA: {Image: "images\\factions\\cards\\small\\VA.jpg", Deck: "CRFEA", Name: "Vampieren", Include: false, Phase_ab:2, Ability: "Leg de gewonnen Vampier voor je in je score-stapel. Een andere gewonnen niet-vampier, mag je onder Vampier in je score-stapel leggen. Deze niet-vampier telt vanaf nu als een extra kaart voor de Vampieren. Vampieren zonder een extra toegewezen kaart tellen niet mee in de puntentelling. Als je een Vampier in je score-stapel wil vervangen, moet je alle kaarten (ook onderliggende kaarten) uit het spel verwijderen."},
        ZO: {Image: "images\\factions\\cards\\small\\ZO.jpg", Deck: "CRFEA", Name: "Zombies", Include: false, Phase_ab:1, Ability: "Als je een slag wint met een Zombie, verzamel je de verliezende kaart van de slag en leg je de kaart in je score-stapel."},
        WE: {Image: "images\\factions\\cards\\small\\WE.jpg", Deck: "CRFEA", Name: "Weerwolven", Include: false, Phase_ab:3, Ability: "Er zijn twee soorten Maankaarten: een Volle Maan en Geen Maan. Begin het spel met Geen Maan boven en de Volle Maan onder. Wanneer een slag gewonnen wordt door een weerwolf wissel je de Maankaarten om. Bij Geen Maan wint de Weerwolf met de laagste waarde. Bij Volle Maan wint de Weerwolf met de hoogste waarde."},
        SD: {Image: "images\\factions\\cards\\small\\SD.jpg", Deck: "CRFEA", Name: "Schaduwen", Include: false, Phase_ab:3, Ability: "Voordat je het spel begint, schud je de 20 schaduwkaarten. Verwijder gedekt 10 kaarten uit het spel. Schud de andere 10 kaarten samen met de rest van de facties. Tijdens het spel weet je niet welke Schaduwen in het spel zitten."},        //CR: FIR FIR                                       ,
        FE: {Image: "images\\factions\\cards\\small\\FE.jpg", Deck: "CRFIR", Name: "Vuurwezens", Include: false, Phase_ab:3, Ability: "Als je de kaart speelt, weet je alleen of het om een hoge (5-9) of lage (0-4) kaart gaat. De waarde van de kaart wordt bekend gemaakt zodra alle spelers een kaart hebben uitgespeeld. Benoem de waarde van een kaart, zodra de kaart onthuld is."},
        DM: {Image: "images\\factions\\cards\\small\\DM.jpg", Deck: "CRFIR", Name: "Demonen", Include: false, Phase_ab:3, Ability: "Als je de kaart speelt, weet je alleen of de kaart een even of oneven getal heeft. De waarde van de kaart wordt bekend gemaakt zodra alle spelers een kaart hebben uitgespeeld. Benoem de waarde van een kaart, zodra de kaarten onthuld zijn."},
        TC: {Image: "images\\factions\\cards\\small\\TC.jpg", Deck: "CRFIR", Name: "Bedriegers", Include: false, Phase_ab:3, Ability: "Van de waardes 1/3/5/7/9 zijn elk 2 kaarten. Eén kaart is echt, de andere nep (gemarkeerd met een X). De kaarten worden bij de puntentelling pas bekeken. De neppe kaarten, gemarkeerd met een X, worden uit het spel verwijderd en tellen niet mee voor de puntentelling."},
        PO: {Image: "images\\factions\\cards\\small\\PO.jpg", Deck: "CRFIR", Name: "Gifmengers", Include: false, Phase_ab:3, Ability: "In de voorbereiding leg je willekeurig 3 gifdranken open op tafel neer. Als je in een slag een Gifmenger int, mag je het vergrootglas gebruiken en de waarde van één van de Gifdranken bekijken. Deze informatie is alleen voor jou. Aan het einde van het spel worden de waardes van de Gifdranken onthuld. Alle spelers verwijderen de kaarten met een waarde die overeenkomt met één van de Gifdranken. Bij Gifdranken met een ‘X’ hoeven de spelers geen kaarten uit het spel te verwijderen."},        //CR: FRO FRO                                       ,
        FR: {Image: "images\\factions\\cards\\small\\FR.jpg", Deck: "CRFRO", Name: "Vorstmonsters", Include: false, Phase_ab:2, Ability: "Als je in fase 2 een slag met deze kaart wint, wordt de andere kaart verwijderd en niet in een score-stapel opgenomen."},
        YE: {Image: "images\\factions\\cards\\small\\YE.jpg", Deck: "CRFRO", Name: "Yeti’s", Include: false, Phase_ab:3, Ability: "Je bent niet de Leider bij de volgende slag, zelfs niet als je de slag won."},
        IK: {Image: "images\\factions\\cards\\small\\IK.jpg", Deck: "CRFRO", Name: "IJskoningen", Include: false, Phase_ab:3, Ability: "Aan het einde van het spel worden IJskoningen en IJskoninginnen die in waarde met elkaar overeenkomen uit je score-stapel verwijderd. (Ze trouwen en vluchten!) Dit gebeurt voordat de factiemeerderheid bepaald wordt."},
        IQ: {Image: "images\\factions\\cards\\small\\IQ.jpg", Deck: "CRFRO", Name: "IJskoninginnen", Include: false, Phase_ab:3, Ability: "Aan het einde van het spel worden IJskoningen en IJskoninginnen die in waarde met elkaar overeenkomen uit je score-stapel verwijderd. (Ze trouwen en vluchten!) Dit gebeurt voordat de factiemeerderheid bepaald wordt."},        //STBOXOX                                           ,
        AW: {Image: "images\\factions\\cards\\small\\AW.jpg", Deck: "STBOX", Name: "Ontwakers", Include: false, Phase_ab:2, Ability: "Na fase 1 worden alle afgelegde kaarten geschudt en vorm je een tweede trekstapel. Als je in fase 2 een slag wint, mag je een kaart van de tweede trekstapel nemen."},
        SA: {Image: "images\\factions\\cards\\small\\SA.jpg", Deck: "STBOX", Name: "Satyrs", Include: false, Phase_ab:1, Ability: "Als je in de slag strijdt om een Satyr, hoef je niet de factie te volgen. De kaart met de hoogste waarde heeft de slag gewonnen. "}
    };

    Couples = {
        CLAIM_1: ["GO","KN"],
        CLAIM_2: ["GN","GI"],
        CLAIM_R_MERC: ["EL","EO","OR"]
    };

    Deck = {
        C1: {Name:"Claim", Factions: ["GO","KN","DP","DW","UD"], Include: true, linkBuy: "https://whitegoblingames.com/site/game/claim/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},
        C2: {Name:"Claim 2", Factions: ["DR","GI","GN","SE","TR"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-2/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},

        CRMAP: {Name:"Claim Reinforcements: Maps", Factions: ["BA","PH","UN"], linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-maps/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},
        CRMER: {Name:"Claim Reinforcements: Mercenaries", Factions: ["CY","EL","EO","OR"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-mercenaries/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},
        CRMAG: {Name:"Claim Reinforcements: Magic", Factions: ["DU","SH","WI"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-magic/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},

        CRFEA: {Name:"Claim Reinforcements: Fear", Factions: ["VA","ZO","WE","SD"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-fear/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Vampires, Zombies, Werewolves and Shadows
        CRFIR: {Name:"Claim Reinforcements: Fire", Factions: ["FE","DM","TC","PO"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-fire/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Fire Elementals, Demons, Tricksters and Poisoners
        CRFRO: {Name:"Claim Reinforcements: Frost", Factions: ["FR","YE","IK","IQ"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-frost/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Frostbeasts, Yeti, Ice Kings and Ice Queens

        PROMO: {Name:"Promo", Factions: ["DE","GH","ME","MI"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-bonusfaction-dark-elves-promo/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Mermaids Minotaurs
        STBOX: {Name:"Storage Box", Factions: ["AW","SA"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/pre-order-claim-storage-box/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}//(Awakeners and Satyrs)
    };

    Strings = {
        HELP_TRANSLATE: "Heb je tips voor de vertaling?",
        TITLE: "Claim randomizer",
        SELECT_FACT: "Selecteer facties die je wilt gebruiken",
        SUBMIT: "Willekeurig",
        USE_THIS_FACTIONS: "Geselecteerde facties:",
        DECK: "Spel",
        FACTION: "Factie",
        PHASE_1: "Fase 1",
        PHASE_2: "Fase 2",
        PHASE_1_2: "Fase 1 en 2",
        CREDITS_BTN: "Credits",
        creditsModalLabel: "Credits",
        COPYRIGTH: "Afbeeldingen en tekstrechten voorbehouden aan hun respectievelijke eigenaren, deze pagina is geautoriseerd door de White Goblin Games.",
        SOURCE_CODE_BY: "Broncode onder MIT-licentie door migio.",
        INSPIRED_BY: "Geïnspireerd door",
        THIS_THREAD: "deze thread",
        ENG_RUL: "Engelse, Spaanse en Nederlandse spelregels van de White Goblin Games.",
        THIS_FILE: "Dit bestand",
        IT_RULE: "Italiaanse spelregels door migio",
        DE_RULE: "Duitse spelregels door Yarra Mekian",
        FEEDBACK: "Stuur ons feedback",
        CLOSE: "Sluiten",
        //alerts
        AT_LEAST_COUPLES: "Selecteer minimaal {0} koppels!",
        AT_LEAST_FACTIONS: "Selecteer minimaal {0} facties die niet in een koppel zijn!",
        BUY_DECK: "Koop dit kaartspel"
    }
}