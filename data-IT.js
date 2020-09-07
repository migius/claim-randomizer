function setIT()
{
    //DATA
    Factions = {
        //C1
        DP: {Image: "images\\factions\\cards\\small\\DP.jpg", Deck: "C1", Name: "Mutaforma", Include: true, Phase_ab:3, Ability: "Un mutaforma può essere giocato al posto della fazione richiesta, ma non ne guadagna le sue abilità speciali."},
        DW: {Image: "images\\factions\\cards\\small\\DW.jpg", Deck: "C1", Name: "Nani", Include: true, Phase_ab:2, Ability: "I Nani giocati vengono aggiunti al Mazzo dei Punti di chi ha perso il turno."},
        GO: {Image: "images\\factions\\cards\\small\\GO.jpg", Deck: "C1", Name: "Goblin", Include: true, Phase_ab:3, Ability: "Nessun potere speciale."},
        KN: {Image: "images\\factions\\cards\\small\\KN.jpg", Deck: "C1", Name: "Cavalieri", Include: true, Phase_ab:3, Ability: "Quando viene giocato dopo un Goblin vince indipendentemente dal valore."},
        UD: {Image: "images\\factions\\cards\\small\\UD.jpg", Deck: "C1", Name: "Non-Morti", Include: true, Phase_ab:1, Ability: "Non si scartano i Non-Morti giocati ma vengono aggiunti al Mazzo dei Punti del vincitore del turno."},        //C2                                                ,
        DR: {Image: "images\\factions\\cards\\small\\DR.jpg", Deck: "C2", Name: "Draghi", Include: false, Phase_ab:3, Ability: "L'ultima persona ad aver giocato un drago sarà il leader del prossimo turno."},
        GI: {Image: "images\\factions\\cards\\small\\GI.jpg", Deck: "C2", Name: "Giganti", Include: false, Phase_ab:2, Ability: "Schiaccia uno Gnomo dello stesso valore di fronte al perdente del turno."},
        GN: {Image: "images\\factions\\cards\\small\\GN.jpg", Deck: "C2", Name: "Gnomi", Include: false, Phase_ab:2, Ability: "Posizioni gli Gnomi vinti di fronte a te, possono essere schiacciati da un Gigante"},
        SE: {Image: "images\\factions\\cards\\small\\SE.jpg", Deck: "C2", Name: "Veggenti", Include: false, Phase_ab:1, Ability: "Il vincitore della mano può guardare la prima carta del mazzo e decidere se aggiungere al Mazzo dei Seguaci quella sul tavolo o la prima del mazzo."},
        TR: {Image: "images\\factions\\cards\\small\\TR.jpg", Deck: "C2", Name: "Troll", Include: false, Phase_ab:2, Ability: "Puoi vincere un solo Troll a turno, se ce ne sono due uno resta e sarà vinto da chi vince il turno successivo."},        //CR: MAP MAP                                       ,
        BA: {Image: "images\\factions\\cards\\small\\BA.jpg", Deck: "CRMAP", Name: "Basilischi", Include: false, Phase_ab:3, Ability: "Se questa carta viene giocata dopo una carta dello stesso identico valore (inclusi modificatori), metti immediatamente la prima carta giocata nel tuo mazzo dei punteggi. Poi vinci il turno perché hai l'unica carta rimasta. Se una carta viene giocata dopo il basilisco con lo stesso valore, non succede nulla."},
        PH: {Image: "images\\factions\\cards\\small\\PH.jpg", Deck: "CRMAP", Name: "Fenici", Include: false, Phase_ab:2, Ability: "Se perdi una carta con una Fenice, pesca una carta Fenice di fuoco e aggiungila alla tua mano. La Fenice di fuoco funziona esattamente come una normale carta Fenice, incluso quando si determinano le maggioranze, seguono le fazioni, ecc. "},
        UN: {Image: "images\\factions\\cards\\small\\UN.jpg", Deck: "CRMAP", Name: "Unicorni", Include: false, Phase_ab:2, Ability: "Ogni Unicorno vinto aumenta di uno il valore delle carte di altre fazioni quando vengono giocate. Questo effetto non si applica per il calcolo del punteggio a fine partita."},        //CR: MER MER                                       ,
        CY: {Image: "images\\factions\\cards\\small\\CY.jpg", Deck: "CRMER", Name: "Ciclopi", Include: false, Phase_ab:2, Ability: "A fine partita ottiene il favore dei Ciclopi chi ne ha di meno, bisogna però averne almeno uno per poter avere il loro favore. In caso di pareggio ottiene il favore chi ha il ciclope del valore più basso"},
        EL: {Image: "images\\factions\\cards\\small\\EL.jpg", Deck: "CRMER", Name: "Elfi", Include: false, Phase_ab:3, Ability: "Nessun potere speciale."},
        EO: {Image: "images\\factions\\cards\\small\\EO.jpg", Deck: "CRMER", Name: "Elfi e Orchi", Include: false, Phase_ab:2, Ability: "Quando viene giocata bisogna specificare se si intende giocare come Elfo o come Orco. Nella fase due, la carta conta per la fazione per cui è stata giocata."},
        OR: {Image: "images\\factions\\cards\\small\\OR.jpg", Deck: "CRMER", Name: "Orchi", Include: false, Phase_ab:3, Ability: "Nessun potere speciale."},        //CR: MAG MAG                                       ,
        DU: {Image: "images\\factions\\cards\\small\\DU.jpg", Deck: "CRMAG", Name: "Druidi", Include: false, Phase_ab:1, Ability: "Se perdi la mano dopo aver giocato un Druido, tieni la carta di fronte a te ruotata. Il druido adesso è un orso e darà un bonus di +3 alla tua prossima carta. Poi l'orso sarà scartato."},
        SH: {Image: "images\\factions\\cards\\small\\SH.jpg", Deck: "CRMAG", Name: "Mutanti", Include: false, Phase_ab:1, Ability: "Quando viene giocato un mutante, prende il posto della carta al centro del tavolo e la carta al centro diventa la carta giocata."},
        WI: {Image: "images\\factions\\cards\\small\\WI.jpg", Deck: "CRMAG", Name: "Maghi", Include: false, Phase_ab:3, Ability: "Quando vinci una mano con un Mago pesca una carta pozione senza guardarla e mettila coperta davanti a te. Durante i turni successivi puoi girare la pozione dopo aver giocato una carta. La pozione modifica il valore della carta giocata e viene scartata al termine della mano."},        //PROMOMO                                           ,
        DE: {Image: "images\\factions\\cards\\small\\DE.jpg", Deck: "PROMO", Name: "Elfi oscuri", Include: false, Phase_ab:2, Ability: "Se aggiungi almeno un Elfo Oscuro al tuo Mazzo dei Punti devi eliminare dal Mazzo dei Punti una carta, che non sia un Elfo Oscuro. Se si hanno solo Elfi Oscuri nel mazzo dei punti non è necessario scartare nulla."},
        GH: {Image: "images\\factions\\cards\\small\\GH.jpg", Deck: "PROMO", Name: "Fantasmi", Include: false, Phase_ab:1, Ability: "Puoi aggingere il Fantasma al Mazzo Fazione al posto della carta nel centro del tavolo. Se perdi la mano puoi aggiungere la carta Fantasma al Mazzo Fazione e scartare la prima carta del mazzo (senza guardarla)."},
        ME: {Image: "images\\factions\\cards\\small\\ME.jpg", Deck: "PROMO", Name: "Sirene", Include: false, Phase_ab:3, Ability: "Quando aggiungi una sirena al Mazzo dei Punti lasciala rivolta verso l'alto. Per ogni Sirena che possiedi il valore delle carte che giocerai viene modificato di -1."},
        MI: {Image: "images\\factions\\cards\\small\\MI.jpg", Deck: "PROMO", Name: "Minotauri", Include: false, Phase_ab:2, Ability: "Se il leader apre la mano con un Minotauro e vince, l'avversario può riprendere in mano la carta giocata."},        //CR: FEA FEA                                       ,
        VA: {Image: "images\\factions\\cards\\small\\VA.jpg", Deck: "CRFEA", Name: "Vampiri", Include: false, Phase_ab:2, Ability: "Quando aggiungi un vampiro nel tuo Mazzo dei Punti, puoi metterlo scoperto di fronte a te. Quando dovresti aggiungere altre carte non Vampiro al tuo mazzo Punteggio puoi, facoltativamente, metterle sotto la carta Vampiro scoperta. Queste carte non valgono per la loro fazione ma per ottenere il favore della fazione Vampiri. Il giocatore con il Vampiro del valore più alto scoperto più le carte sottostanti vince. Le altre carte Vampiro non vengono conteggiate. Un giocatore può sostituire la sua carta Vampiro scoperta scartando tutte le carte fazione sotto le precedenti carte scoperte."},
        ZO: {Image: "images\\factions\\cards\\small\\ZO.jpg", Deck: "CRFEA", Name: "Zombi", Include: false, Phase_ab:1, Ability: "Se vinci una mano con uno Zombi, metti la carta sconfitta nel tuo Mazzo dei Punti."},
        WE: {Image: "images\\factions\\cards\\small\\WE.jpg", Deck: "CRFEA", Name: "Lupi mannari", Include: false, Phase_ab:3, Ability: "Ci sono due tipi di carte: con luna piena e senza luna. Si inizia il gioco senza la luna in alto e con la luna piena in basso. Quando una presa viene vinta con un Lupo mannaro, si scambiano le carte. Quando non c'è la luna il Lupo mannaro più basso vince la mano, se c'è la luna piena vince il valore più alto."},
        SD: {Image: "images\\factions\\cards\\small\\SD.jpg", Deck: "CRFEA", Name: "Ombre", Include: false, Phase_ab:3, Ability: "Prima della partita mescola le 20 carte Ombre e aggiungine 10 a caso nel mazzo."},        //CR: FIR FIR                                       ,
        FE: {Image: "images\\factions\\cards\\small\\FE.jpg", Deck: "CRFIR", Name: "Elementali di fuoco", Include: false, Phase_ab:3, Ability: "Quando giochi la carta sai solo se ha un valore alto (5-9) o basso (0-4), si controlla il valore solo dopo che tutte le carte sono state giocate."},
        DM: {Image: "images\\factions\\cards\\small\\DM.jpg", Deck: "CRFIR", Name: "Demoni", Include: false, Phase_ab:3, Ability: "Quando giochi la carta sai solo se il valore è pari o dispari, si controlla il valore solo dopo che tutte le carte sono state giocate."},
        TC: {Image: "images\\factions\\cards\\small\\TC.jpg", Deck: "CRFIR", Name: "Imbroglioni", Include: false, Phase_ab:3, Ability: "Nella fazione ci sono due carte per ciascuno di questi valori: 1/3/5/7/9. Una è reale, l'altra è falsa (segnata con una 'x'). A fine partita si controllano le carte del Mazzo dei Punti e si rimuovono quelle segnate con la 'x'."},
        PO: {Image: "images\\factions\\cards\\small\\PO.jpg", Deck: "CRFIR", Name: "Avvelenatori", Include: false, Phase_ab:3, Ability: "All'inizio della partita vengono posizionate scoperte sul tavolo tre carte veleno scelte casualmente. Quando un giocatore vince una mano con un avvelenatore può guardare, con il vetro di lettura, il valore di una delle carte senza rivelarlo. Alla fine del gioco vengono controllate tutte le carte e ogni giocatore deve scartare una carta del valore indicato, la 'x' non fa scartare nulla."},        //CR: FRO FRO                                       ,
        FR: {Image: "images\\factions\\cards\\small\\FR.jpg", Deck: "CRFRO", Name: "Bestie di ghiaggio", Include: false, Phase_ab:2, Ability: "Se vinci una mano con una Bestia di ghiaccio l'altra carta deve essere scartata."},
        YE: {Image: "images\\factions\\cards\\small\\YE.jpg", Deck: "CRFRO", Name: "Yeti", Include: false, Phase_ab:3, Ability: "L'ultima persona a giocarlo non sarà il prossimo leader, anche se vince la mano."},
        IK: {Image: "images\\factions\\cards\\small\\IK.jpg", Deck: "CRFRO", Name: "Re del gelo", Include: false, Phase_ab:3, Ability: "Alla fine della partita ogni Re e Regina del gelo dello stesso valore vengono scartate, prima del conteggio delle maggioranze"},
        IQ: {Image: "images\\factions\\cards\\small\\IQ.jpg", Deck: "CRFRO", Name: "Regine del gelo", Include: false, Phase_ab:3, Ability: "Alla fine della partita ogni Re e Regina del gelo dello stesso valore vengono scartate, prima del conteggio delle maggioranze"},        //STBOXOX                                           ,
        AW: {Image: "images\\factions\\cards\\small\\AW.jpg", Deck: "STBOX", Name: "Risvegliatori", Include: false, Phase_ab:2, Ability: "Dopo la fase uno, mescola le carte scartate e forma un mazzo di pesca. Quando vinci una mano con i risvegliatori aggiungi la prima carta dal mazzo di pesca al tuo Mazzo dei punti."},
        SA: {Image: "images\\factions\\cards\\small\\SA.jpg", Deck: "STBOX", Name: "Satiri", Include: false, Phase_ab:1, Ability: "Quando la carta per cui si compete è un Satiro il secondo giocatore è libero di giocare qualsiasi fazione, vince la carta più alta indipendentemente dalla fazione."}
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

        CRFEA: {Name:"Claim Reinforcements: Fear", Factions: ["VA","ZO","WE","SD"], Include: false}, //Vampires, Zombies, Werewolves and Shadows
        CRFIR: {Name:"Claim Reinforcements: Fire", Factions: ["FE","DM","TC","PO"], Include: false}, //Fire Elementals, Demons, Tricksters and Poisoners
        CRFRO: {Name:"Claim Reinforcements: Frost", Factions: ["FR","YE","IK","IQ"], Include: false}, //Frostbeasts, Yeti, Ice Kings and Ice Queens

        PROMO: {Name:"Promo", Factions: ["DE","GH","ME","MI"], Include: false}, //Mermaids Minotaurs
        STBOX: {Name:"Storage Box", Factions: ["AW","SA"], Include: false}//(Awakeners and Satyrs)
    };

    Strings = {
        HELP_TRANSLATE: "Vuoi contribuire con una traduzione?",
        TITLE: "Claim randomizer",
        SELECT_FACT: "Seleziona le fazioni che vuoi usare",
        SUBMIT: "Mescola",
        DECK: "Mazzo",
        USE_THIS_FACTIONS: "Usa queste fazioni:",
        FACTION: "Fazione",
        PHASE_1: "Fase 1",
        PHASE_2: "Fase 2",
        CREDITS_BTN: "Credits",
        creditsModalLabel: "Credits",
        COPYRIGTH: "Diritti su immagini e testi riservati ai rispettivi detentori, questa pagina è stata autorizzata dalla White Goblin Games.",
        SOURCE_CODE_BY: "Source code con licenza MIT creato da migio.",
        INSPIRED_BY: "Ispirato da",
        THIS_THREAD: "questo thread",
        ENG_RUL: "Regole in inglese fornite dalla White Goblin Games.",
        THIS_FILE: "questo file",
        IT_RULE: "Regole in italiano scritte da migio",
        FEEDBACK: "Invia un Feedback",
        CLOSE: "Chiudi",
        //alerts
        AT_LEAST_COUPLES: "Seleziona almeno {0} coppia!",
        AT_LEAST_FACTIONS: "Seleziona almeno {0} fazioni non in coppia!"
    }
}