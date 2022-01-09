function setPT()
{
    //DATA
    Factions = {
        //C1
        DP: {Image: "images\\factions\\cards\\small\\DP.jpg", Deck: "C1", Name: "Doppelgängers", Include: true, Phase_ab:3, Ability: "Você pode jogar um Doppelgänger em vez da facção pedida, mesmo se for capaz de seguir a facção.Quando jogada em resposta ao Líder, a carta é considerada como sendo da mesma facção da carta do Líder."},
        DW: {Image: "images\\factions\\cards\\small\\DW.jpg", Deck: "C1", Name: "Anões", Include: true, Phase_ab:2, Ability: "Quem perde uma rodada recebe todos os Anões jogados durante esta rodada e os coloca em sua pilha de pontuação. O vencedor ainda ganhará quaisquer cartas não-Anão que tiverem sido jogadas."},
        GO: {Image: "images\\factions\\cards\\small\\GO.jpg", Deck: "C1", Name: "Goblins", Include: true, Phase_ab:3, Ability: "Nenhum poder especial."},
        KN: {Image: "images\\factions\\cards\\small\\KN.jpg", Deck: "C1", Name: "Cavaleiros", Include: true, Phase_ab:3, Ability: "Quando jogado após um Goblin, automaticamente derrota o Goblin, independentemente de seu valor. O jogador ainda deve seguir a facção jogada, se possível."},
        UD: {Image: "images\\factions\\cards\\small\\UD.jpg", Deck: "C1", Name: "Mortos-Vivos", Include: true, Phase_ab:1, Ability: "Cartas de Mortos-Vivos jogadas não são descartadas. Em vez disso, elas são colocadas na pilha de pontuação do vencedor da rodada."},
        //C2                                                ,
        DR: {Image: "images\\factions\\cards\\small\\DR.jpg", Deck: "C2", Name: "Dragões", Include: false, Phase_ab:3, Ability: "O último jogador a jogar um dragão em uma rodada será o líder na próxima rodada, não importando seu valor ou se o jogador repetiu ou não a facção do líder. O vencedor ganha a(s) carta(s) normalmente."},
        GI: {Image: "images\\factions\\cards\\small\\GI.jpg", Deck: "C2", Name: "Gigantes", Include: false, Phase_ab:2, Ability: "Cada Gigante conquistado nesta rodada pode esmagar um Gnomo de mesmo valor do adversário. Remova o Gnomo esmagado. Ele não será pontuado ao final do jogo."},
        GN: {Image: "images\\factions\\cards\\small\\GN.jpg", Deck: "C2", Name: "Gnomos", Include: false, Phase_ab:2, Ability: "Sempre que ganhar Gnomos, você deve posicioná-lo virado para cima à sua frente em vez de colocá-lo na pilha de Pontuação. Ao final da partida, os Gnomos que ainda estiverem posicionados à sua frente são colocados na sua pilha de pontuação."},
        SE: {Image: "images\\factions\\cards\\small\\SE.jpg", Deck: "C2", Name: "Profetas", Include: false, Phase_ab:1, Ability: "Se vencer uma vaza, você pode olhar a carta do topo do baralho de compras e decidir entre ganhar a carta virada para cima ou a carta olhada."},
        TR: {Image: "images\\factions\\cards\\small\\TR.jpg", Deck: "C2", Name: "Trolls", Include: false, Phase_ab:2, Ability: "Os jogadores só podem ganhar 1 Troll por vez. Se dois Trolls forem jogados, o vencedor da rodada só ganha o Troll de maior valor e deixa o outro aguardando o vencedor da próxima rodada. Quando a última vaza da partida for jogada, o vencedor ganha todas as cartas de troll ainda restantes."},
        //CR: MAP                                           ,
        BA: {Image: "images\\factions\\cards\\small\\BA.jpg", Deck: "CRMAP", Name: "Basiliscos", Include: false, Phase_ab:3, Ability: "Se esta carta for jogada depois de uma carta do mesmo valor (que pode ser modificada pelo Unicórnio), você imediatamente coloca a primeira carta em sua pilha de pontuação. Então você vence a vaza porque é a única carta que sobrou."},
        PH: {Image: "images\\factions\\cards\\small\\PH.jpg", Deck: "CRMAP", Name: "Fênix", Include: false, Phase_ab:2, Ability: "Se você perder uma vaza com uma Fênix, compre uma carta de uma Fênix de Fogo e a coloque em sua mão. A Fênix de Fogo funciona exatamente como um Fênix, incluindo para determinar a maioria, seguindo as facções, etc. A Fase 2 termina quando um jogador ficar sem cartas."},
        UN: {Image: "images\\factions\\cards\\small\\UN.jpg", Deck: "CRMAP", Name: "Unicórnios", Include: false, Phase_ab:2, Ability: "Cada Unicórnio que você ganhou aumentará o valor das outras facções em um por Unicórnio quando você jogar na vaza uma carta de outra facção. Os Unicórnios não aumentam dessa forma. Este efeito não ocorre durante a pontuação no final do jogo."},
        //CR: MER                                           ,
        CY: {Image: "images\\factions\\cards\\small\\CY.jpg", Deck: "CRMER", Name: "Ciclopes", Include: false, Phase_ab:2, Ability: "Ao final da partida, o jogador com a menor quantidade de Ciclopes ganha nessa facção. Você deve ter pelo menos um Ciclope para vencer. Se houver empate, o jogador com o Ciclope de menor valor ganha na facção."},
        EL: {Image: "images\\factions\\cards\\small\\EL.jpg", Deck: "CRMER", Name: "Elfos", Include: false, Phase_ab:3, Ability: "Nenhum poder especial."},
        EO: {Image: "images\\factions\\cards\\small\\EO.jpg", Deck: "CRMER", Name: "Elfos e Orcs", Include: false, Phase_ab:2, Ability: "Quando você joga uma carta com duas facções, você deve anunciar se ela é jogada como um elfo ou um orc. Pode ser jogado como qualquer um, mas você deve escolher. Na fase 2, se esta carta for ganha, ela permanece na facção que foi declarada quando foi jogada. Você pode orientar a carta para mostrar a facção escolhida."},
        OR: {Image: "images\\factions\\cards\\small\\OR.jpg", Deck: "CRMER", Name: "Orcs", Include: false, Phase_ab:3, Ability: "Nenhum poder especial."},
        //CR: MAG                                           ,
        DU: {Image: "images\\factions\\cards\\small\\DU.jpg", Deck: "CRMAG", Name: "Druidas", Include: false, Phase_ab:1, Ability: "Se você perder uma vaza após jogar com um Druida, mantenha a carta à sua frente e gire-a. O Druida agora se tornou um Urso! Sua próxima carta jogada agora terá um valor de +3. Essa carta então é descartada."},
        SH: {Image: "images\\factions\\cards\\small\\SH.jpg", Deck: "CRMAG", Name: "Metamorfos", Include: false, Phase_ab:1, Ability: "Quando jogada, troque com a carta do meio da mesa, a que está sendo recrutada. A carta do meio agora é a carta que você jogou, agora estão competindo pelo Metamorfo."},
        WI: {Image: "images\\factions\\cards\\small\\WI.jpg", Deck: "CRMAG", Name: "Feiticeiros", Include: false, Phase_ab:3, Ability: "Quando você ganhar uma vaza jogando um Feiticeiro, compre uma carta de poção e não olhe! Coloque-a voltada para baixo na sua frente. Durante outra vaza, ao jogar uma carta, você pode virar a Poção. A Poção provavelmente ajudará aquela carta aumentando seu valor, mas também pode diminuí-lo. A carta de Poção é então descartada."},
        //PROMO                                             ,
        DE: {Image: "images\\factions\\cards\\small\\DE.jpg", Deck: "PROMO", Name: "Elfos Negros", Include: false, Phase_ab:2, Ability: "Se ganhar ao menos um Elfo Negro em uma rodada, você deve remover da sua pilha de pontuação outra carta que não seja um Elfo Negro. Se só tiver cartas de Elfo Negro em sua pilha de pontuação, você não precisa remover nenhuma carta. Se ganhar mais de um Elfo Negro em uma rodada, você só precisa remover uma carta de outra facção."},
        GH: {Image: "images\\factions\\cards\\small\\GH.jpg", Deck: "PROMO", Name: "Fantasmas", Include: false, Phase_ab:1, Ability: "Você pode ficar com o Fantasma que jogou em vez da carta que normalmente ganharia. Se vencer a rodada, você coloca o Fantasma em seu baralho de Seguidores e descarta a carta do centro. Se perder a rodada, você coloca o Fantasma em seu baralho de Seguidores e descarta a carta do topo do baralho do centro (sem olhá-la)."},
        ME: {Image: "images\\factions\\cards\\small\\ME.jpg", Deck: "PROMO", Name: "Sereias", Include: false, Phase_ab:3, Ability: "Ao coletar sereias em sua pilha de pontuação, deixe-as voltadas para cima. Para cada sereia que você tem, suas cartas jogadas têm um valor -1."},
        MI: {Image: "images\\factions\\cards\\small\\MI.jpg", Deck: "PROMO", Name: "Minotauros", Include: false, Phase_ab:2, Ability: "Se você liderar com um Minotauro e ganhar a vaza, o outro jogador pode pegar a carta que jogou de volta para sua mão."},
        //CR: FEA                                           ,
        VA: {Image: "images\\factions\\cards\\small\\VA.jpg", Deck: "CRFEA", Name: "Vampiros", Include: false, Phase_ab:2, Ability: "Quando você coleta um Vampiro em sua pilha de Pontuação, você pode colocá-lo com a face para cima na sua frente. Quando você coleta outras cartas que não sejam de Vampiro em sua pilha de Pontuação, você pode opcionalmente colocá-las sob a carta de Vampiro virada para cima. Essas cartas não contarão para sua facção, mas para a vitória do Vampiro. O jogador com o valor mais alto de Vampiro virado para cima mais as cartas abaixo ganha essa facção. Outras cartas de vampiro não são contadas. Um jogador pode substituir sua carta de Vampiro virada para cima, mas quando o faz, descarta todas as cartas de facção das cartas anteriores."},
        ZO: {Image: "images\\factions\\cards\\small\\ZO.jpg", Deck: "CRFEA", Name: "Zumbis", Include: false, Phase_ab:1, Ability: "Se você ganhar uma vaza com os Zumbis, pegue a carta perdedora da vaza e coloque-a na pilha de pontuação do vencedor da rodada."},
        WE: {Image: "images\\factions\\cards\\small\\WE.jpg", Deck: "CRFEA", Name: "Lobisomens", Include: false, Phase_ab:3, Ability: "Há duas cartas de lua, uma carta com a lua cheia e outra sem lua. Comece o jogo com a carta sem lua em cima da carta com a lua cheia. Quando uma vaza é ganha com um Lobisomem, troque as cartas. Quando não há lua, o menor Lobisomem é considerado a carta vencedora. Se houver lua, o valor mais alto ganha normalmente."},
        SD: {Image: "images\\factions\\cards\\small\\SD.jpg", Deck: "CRFEA", Name: "Sombras", Include: false, Phase_ab:3, Ability: "Antes do jogo, embaralhe as 20 cartas de Sombra e remova 10 aleatoriamente. Em seguida, embaralhe as 10 cartas restantes com o resto. Durante o jogo, você não sabe quais valores existem no jogo."},
        //CR: FIR                                           ,
        FE: {Image: "images\\factions\\cards\\small\\FE.jpg", Deck: "CRFIR", Name: "Elementais do Fogo", Include: false, Phase_ab:3, Ability: "Ao jogar a carta, você só sabe se a carta é alta (5-9) ou baixa (0-4). Você verifica o valor da carta após todos os jogadores terem jogado a vaza. Anuncie o valor revelado."},
        DM: {Image: "images\\factions\\cards\\small\\DM.jpg", Deck: "CRFIR", Name: "Demônios", Include: false, Phase_ab:3, Ability: "Ao jogar a carta, você só sabe se a carta é ímpar ou par. Você verifica o valor da carta após todos os jogadores terem jogado a vaza. Anuncie o valor revelado."},
        TC: {Image: "images\\factions\\cards\\small\\TC.jpg", Deck: "CRFIR", Name: "Trapaceiros", Include: false, Phase_ab:3, Ability: "São duas cartas de cada carta com valor 1/3/5/7/9. Um dos valores é real e o outro é falso (marcado com um X). Você não verifica as falsificações até a pontuação final. Durante a pontuação final, remova quaisquer cartas de facção com um 'X'."},
        PO: {Image: "images\\factions\\cards\\small\\PO.jpg", Deck: "CRFIR", Name: "Envenenadores", Include: false, Phase_ab:3, Ability: "No início do jogo, distribua aleatoriamente 3 cartas tóxicas com a face para cima. Quando você ganha uma vaza com um Envenenador, você pode conferir uma das cartas tóxicas. Você não conta aos outros jogadores o que viu. No final do jogo, os valores das cartas tóxicas são revelados a todos. Os jogadores devem descartar quaisquer cartas de facção com os valores que correspondam às cartas tóxicas de sua Pilha de Pontos. (As cartas de veneno 'X' são uma isca e não elimina nenhuma carta)."},
        //CR: FRO                                           ,
        FR: {Image: "images\\factions\\cards\\small\\FR.jpg", Deck: "CRFRO", Name: "Feras do Gelo", Include: false, Phase_ab:2, Ability: "Se você ganhar uma vaza com esta carta, a outra carta é descartada e não é coletada em sua Pilha de Pontuação."},
        YE: {Image: "images\\factions\\cards\\small\\YE.jpg", Deck: "CRFRO", Name: "Yetis", Include: false, Phase_ab:3, Ability: "Você não lidera a próxima vaza, mesmo que vença a vaza."},
        IK: {Image: "images\\factions\\cards\\small\\IK.jpg", Deck: "CRFRO", Name: "Reis do Gelo", Include: false, Phase_ab:3, Ability: "No final do jogo, cada valor correspondente da Rainha do Gelo com o Rei do Gelo em sua pilha de pontuação é descartado. Eles se casam e fogem! Isso é feito antes que a maioria de cada facção seja decidida."},
        IQ: {Image: "images\\factions\\cards\\small\\IQ.jpg", Deck: "CRFRO", Name: "Rainhas do Gelo", Include: false, Phase_ab:3, Ability: "No final do jogo, cada valor correspondente da Rainha do Gelo com o Rei do Gelo em sua pilha de pontuação é descartado. Eles se casam e fogem! Isso é feito antes que a maioria de cada facção seja decidida."},
        //STBOX                                             ,
        AW: {Image: "images\\factions\\cards\\small\\AW.jpg", Deck: "STBOX", Name: "Despertadores", Include: false, Phase_ab:2, Ability: "Após a fase 1, embaralhe as cartas descartadas e forme um segundo baralho. Se você ganhar uma vaza com um Despertador na fase 2, você compra uma carta do segundo baralho e a coloca em sua Pilha de Pontuação."},
        SA: {Image: "images\\factions\\cards\\small\\SA.jpg", Deck: "STBOX", Name: "Sátiros", Include: false, Phase_ab:1, Ability: "Quando a carta do centro, a que os jogadores estão competindo é um Sátiro, o segundo jogador não precisa seguir a facção. O maior número é considerado o vencedor da rodada."}
    };

    Couples = {
        CLAIM_1: ["GO","KN"],
        CLAIM_2: ["GN","GI"],
        CLAIM_R_MERC: ["EL","EO","OR"],
        CLAIM_R_FRO: ["IQ","IK"]
    };

    Deck = {
        C1: {Name:"Claim", Factions: ["GO","KN","DP","DW","UD"], Include: true, linkBuy: "https://www.amazon.it/MS-Edizioni-95028-Claim/dp/B0881KJ3KX/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-2&linkCode=ll1&tag=migio21-21&linkId=9e48931d66127a34d74d5dc04b4a46bd&language=it_IT"},
        C2: {Name:"Claim 2", Factions: ["DR","GI","GN","SE","TR"], Include: false, linkBuy: "https://www.amazon.it/GAMEFACTORY-646223-Gioco-di-luci/dp/B07JD62Z69/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-1&linkCode=ll1&tag=migio21-21&linkId=281f4f309662ddd02985edbf36b32276&language=it_IT"},

        CRMAP: {Name:"Claim Reforços: Mapas", Factions: ["BA","PH","UN"], linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-maps/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},
        CRMER: {Name:"Claim Reforços: Mercenários", Factions: ["CY","EL","EO","OR"], Include: false, linkBuy: "https://www.amazon.it/SD-Games-SDGCLAIM004-Claim-Rinforzanti/dp/B089K5VF3T/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-6&linkCode=ll1&tag=migio21-21&linkId=b83df5d024ab414fa11b5bae40d260ab&language=it_IT"},
        CRMAG: {Name:"Claim Reforços: Magia", Factions: ["DU","SH","WI"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-magic/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},

        CRFEA: {Name:"Claim Reforços: Medo", Factions: ["VA","ZO","WE","SD"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-fear/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Vampires, Zombies, Werewolves and Shadows
        CRFIR: {Name:"Claim Reforços: Fogo", Factions: ["FE","DM","TC","PO"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-fire/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Fire Elementals, Demons, Tricksters and Poisoners
        CRFRO: {Name:"Claim Reforços: Gelo", Factions: ["FR","YE","IK","IQ"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-frost/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Frostbeasts, Yeti, Ice Kings and Ice Queens

        PROMO: {Name:"Promo", Factions: ["DE","GH","ME","MI"], Include: false, linkBuy: "https://magicmerchant.it/catalogue/claim-fantasmi-espansione-gioco-da-tavolo_46163/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Mermaids Minotaurs
        STBOX: {Name:"Storage Box", Factions: ["AW","SA"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/pre-order-claim-storage-box/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}//(Awakeners and Satyrs)
    };

    Strings = {
        HELP_TRANSLATE: "Quer contribuir com a tradução?",
        TITLE: "Claim randomizer",
        SELECT_FACT: "Selecione as facções que você quer usar",
        SUBMIT: "Sortear",
        USE_THIS_FACTIONS: "Use essas facções:",
        DECK: "Deck",
        FACTION: "Facção",
        PHASE_1: "Fase 1",
        PHASE_2: "Fase 2",
        PHASE_1_2: "Fases 1 & 2",
        CREDITS_BTN: "Créditos",
        creditsModalLabel: "Créditos",
        COPYRIGTH: "Os direitos das imagens e textos são reservados aos seus respectivos proprietários, esta página é autorizada pela White Goblin Games.",
        SOURCE_CODE_BY: "O código-fonte está sob a licença MIT por migio.",
        INSPIRED_BY: "Inspirado por",
        THIS_THREAD: "este tópico",
        ENG_RUL: "As regras em inglês, espanhol e alemão foram fornecidas pela White Goblin Games.",
        THIS_FILE: "esse arquivo",
        IT_RULE: "Regras em italiano por migio",
        DE_RULE: "Regras em alemão por Yarra Mekian",
        PT_RULE: "Regras em português por Sansão Oliveira",
        FEEDBACK: "Deixe seu Feedback",
        CLOSE: "Fechar",
        //alerts
        AT_LEAST_COUPLES: "Selecione pelo menos {0} dupla!",
        AT_LEAST_FACTIONS: "Selecione pelo menos {0} facções que não sejam as duplas!",
        BUY_DECK: "Comprar esse deck"
    }
}
