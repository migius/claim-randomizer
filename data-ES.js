function setES()
{
    //DATA
    Factions = {
        //C1
        DP: {Image: "images\\factions\\cards\\small\\DP.jpg", Deck: "C1", Name: "Doppelgängers", Include: true, Phase_ab:3, Ability: "Puedes jugar un Doppelgänger en vez de seguir a la facción líder"},
        DW: {Image: "images\\factions\\cards\\small\\DW.jpg", Deck: "C1", Name: "Enanos", Include: true, Phase_ab:2, Ability: "El perdedor de la baza coloca en su pila de Simpatizantes todas las cartas de Enano jugadas."},
        GO: {Image: "images\\factions\\cards\\small\\GO.jpg", Deck: "C1", Name: "Goblins", Include: true, Phase_ab:3, Ability: "No tienen poderes especiales."},
        KN: {Image: "images\\factions\\cards\\small\\KN.jpg", Deck: "C1", Name: "Caballeros", Include: true, Phase_ab:3, Ability: "Si juegas un Caballero después de un Goblin, el Caballero gana automáticamente al Goblin, independientemente de su valor."},
        UD: {Image: "images\\factions\\cards\\small\\UD.jpg", Deck: "C1", Name: "No-muertos", Include: true, Phase_ab:1, Ability: "Las cartas jugadas de No-Muertos no se descartan como de costumbre. En su lugar, se añaden a la pila de Simpatizantes del ganador de la baza."},        
        //C2                                                ,
        DR: {Image: "images\\factions\\cards\\small\\DR.jpg", Deck: "C2", Name: "Dragones", Include: false, Phase_ab:3, Ability: "El último jugador en jugar un Dragón en una baza será el Líder de la siguiente."},
        GI: {Image: "images\\factions\\cards\\small\\GI.jpg", Deck: "C2", Name: "Gigantes", Include: false, Phase_ab:2, Ability: "Cada Gigante que hayas conseguido puede aplastar un Gnomo del oponente del mismo valor."},
        GN: {Image: "images\\factions\\cards\\small\\GN.jpg", Deck: "C2", Name: "Gnomos", Include: false, Phase_ab:2, Ability: "Si consigues un Gnomo debes colocarlo boca arriba delante de ti. Al final de la partida, los que todavía se encuentren delante de ti se colocan en la pila de Simpatizantes."},
        SE: {Image: "images\\factions\\cards\\small\\SE.jpg", Deck: "C2", Name: "Videntes", Include: false, Phase_ab:1, Ability: "Si ganas una baza al jugar una Vidente, puedes mirar la carta superior del mazo y decidir si tomar esa carta o la carta del centro de la mesa."},
        TR: {Image: "images\\factions\\cards\\small\\TR.jpg", Deck: "C2", Name: "Trolls", Include: false, Phase_ab:2, Ability: "Sólo se puede conseguir 1 Troll por baza; si hay más de uno, se deja para futuras rondas."},        
        //CR: MAP MAP                                       ,
        BA: {Image: "images\\factions\\cards\\small\\BA.jpg", Deck: "CRMAP", Name: "Basiliscos", Include: false, Phase_ab:3, Ability: "Si juegas esta carta después de una carta del mismo valor (puede ser modificado por Unicornios), coloca inmediatamente la carta jugada por tu oponente en tu pila de Simpatizantes. Ganas la baza y serás el Líder de la siguiente."},
        PH: {Image: "images\\factions\\cards\\small\\PH.jpg", Deck: "CRMAP", Name: "Fénix", Include: false, Phase_ab:2, Ability: "Si pierdes al jugar una carta de Fénix, roba una carta de Fuego de Fénix y llévala a tu mano. La carta de Fuego de Fénix funciona exactamente igual que una carta de facción Fénix normal (a la hora de contar las mayorías, facciones, etc)."},
        UN: {Image: "images\\factions\\cards\\small\\UN.jpg", Deck: "CRMAP", Name: "Unicornios", Include: false, Phase_ab:2, Ability: "Cada carta de Unicornio que hayas ganado aumentará el valor de cada carta de otra facción que juegues en +1/por Unicornio (cualquier facción, excepto Unicornios). Este efecto no se tiene en cuenta para la puntuación final."},        
        //CR: MER MER                                       ,
        CY: {Image: "images\\factions\\cards\\small\\CY.jpg", Deck: "CRMER", Name: "Cíclopes", Include: false, Phase_ab:2, Ability: "Al final de la partida, el jugador con menos cartas de Cíclope gana el voto de la facción. Debes tener al menos un Cíclope para ganarlo. En caso de empate, el jugador con el Cíclope de menor valor será el ganador del voto."},
        EL: {Image: "images\\factions\\cards\\small\\EL.jpg", Deck: "CRMER", Name: "Elfos", Include: false, Phase_ab:3, Ability: "No tienen poderes especiales."},
        EO: {Image: "images\\factions\\cards\\small\\EO.jpg", Deck: "CRMER", Name: "Elfos y Orcos", Include: false, Phase_ab:2, Ability: "Cuando juegas una carta de doble facción, debes anunciar si la juegas como Elfo o como Orco. [fase 2] Si ganas esta carta, cuenta como la facción que fue anunciada al jugarla. Puedes girar la carta para indicar de qué facción es."},
        OR: {Image: "images\\factions\\cards\\small\\OR.jpg", Deck: "CRMER", Name: "Orcos", Include: false, Phase_ab:3, Ability: "No tienen poderes especiales."},        
        //CR: MAG MAG                                       ,
        DU: {Image: "images\\factions\\cards\\small\\DU.jpg", Deck: "CRMAG", Name: "Druidas", Include: false, Phase_ab:1, Ability: "Si pierdes una baza después de jugar un Druida, mantén la carta delante de ti y gírala 180 grados. ¡El Druida se ha convertido en un Oso! La siguiente carta que juegues tendrá su valor aumentado en +3. Luego, la carta de Druida se descarta."},
        SH: {Image: "images\\factions\\cards\\small\\SH.jpg", Deck: "CRMAG", Name: "Cambiaformas", Include: false, Phase_ab:1, Ability: "Cuando juegues un Cambiaformas, intercámbialo con la carta del centro de la mesa."},
        WI: {Image: "images\\factions\\cards\\small\\WI.jpg", Deck: "CRMAG", Name: "Magos", Include: false, Phase_ab:3, Ability: "Si ganas una baza al jugar un Mago, roba una carta de poción, ¡pero no la mires! Colócala boca abajo delante de ti. Durante otra baza, cuando juegues una carta, puedes voltear la poción. Lo más probable es que mejore tu carta aumentando su valor, pero también puede disminuirlo. Luego, la carta de poción se descarta."},        
        //PROMO                                      ,
        DE: {Image: "images\\factions\\cards\\small\\DE.jpg", Deck: "PROMO", Name: "Elfos Oscuros", Include: false, Phase_ab:2, Ability: "Si en una baza consigues al menos un Elfo Oscuro para tu pila de Simpatizantes, debes retirar de la partida una carta de alguna otra facción de tu pila de Simpatizantes. Si solo tienes Elfos Oscuros en tu pila de Simpatizantes, no tienes que descartar ninguna. Si en una baza consigues más de un Elfo Oscuro, aun así solo retiras una carta de otra facción."},
        GH: {Image: "images\\factions\\cards\\small\\GH.jpg", Deck: "PROMO", Name: "Fantasmas", Include: false, Phase_ab:1, Ability: "Puedes quedarte con la carta de Fantasma que has jugado, en vez de la carta que te correspondería. Si decides hacerlo, retira de la partida la carta que te correspondería y coloca la carta de Fantasma en tu pila de Seguidores. Si te correspondería robar la carta superior del mazo, retírala sin mirarla."},
        ME: {Image: "images\\factions\\cards\\small\\ME.jpg", Deck: "PROMO", Name: "Sirenas", Include: false, Phase_ab:3, Ability: "Cuando consigas Sirenas para tu pila de Simpatizantes, colócalas boca arriba. Por cada Sirena que tengas, las cartas que juegues tendrán valor -1. "},
        MI: {Image: "images\\factions\\cards\\small\\MI.jpg", Deck: "PROMO", Name: "Minotaurs", Include: false, Phase_ab:2, Ability: "Si siendo el Líder de la baza juegas un Minotauro y ganas, el otro jugador puede devolver la carta que jugó a su mano. "},        
        TI: {Image: "images\\factions\\cards\\small\\TI.png", Deck: "PROMO", Name: "Inventores", Include: false, Phase_ab:2, Ability: "[MT] Si un Inventor supera una carta jugada por un valor de 4 o más, ¡explota! La carta se descarta del juego. Aun así ganas la baza y la otra carta."},
        VL: {Image: "images\\factions\\cards\\small\\VL.png", Deck: "PROMO", Name: "Valquiria", Include: false, Phase_ab:3, Ability: "[MT] Si la Valquiria se juega después de otra facción, se convierte en esa facción si su valor es 3 o más superior al de la primera carta jugada."},
        //CR: FEA FEA                                       ,
        VA: {Image: "images\\factions\\cards\\small\\VA.jpg", Deck: "CRFEA", Name: "Vampiros", Include: false, Phase_ab:2, Ability: "Si consigues una carta de Vampiro puedes colocarla boca arriba delante de ti en vez de tu pila de Simpatizantes. Cuando consigas otras cartas que no sean de Vampiro, puedes colocarlas debajo de la carta de Vampiro que está boca arriba. Estas cartas no cuentan para el voto de su propia facción, sino para la facción Vampiro. El jugador con el resultado más alto en la suma de la carta boca arriba de Vampiro y las que tenga debajo, gana el voto de la facción Vampiro. Las demás cartas de Vampiro no cuentan. Puedes cambiar tu carta de Vampiro boca arriba por otra carta de Vampiro que consigas más adelante, pero si lo haces perderás las cartas que se encuentran debajo."},
        ZO: {Image: "images\\factions\\cards\\small\\ZO.jpg", Deck: "CRFEA", Name: "Zombis", Include: false, Phase_ab:1, Ability: "Si ganas la baza con un Zombi, coloca la carta jugada por tu oponente en tu pila de Simpatizantes."},
        WE: {Image: "images\\factions\\cards\\small\\WE.jpg", Deck: "CRFEA", Name: "Hombres lobo", Include: false, Phase_ab:3, Ability: "Hay dos cartas de Luna: luna llena y sin luna. Al comienzo de la partida, apila las 2 cartas, con la carta sin luna en la parte superior y la de luna llena en la parte inferior. Cuando una carta de Hombre Lobo gana una baza, intercambia la posición de las cartas de Luna. Si arriba está la carta sin luna, gana la baza el Hombre Lobo con el valor más bajo. Si arriba está la carta de luna llena, gana la baza el Hombre Lobo con el valor más alto."},
        SD: {Image: "images\\factions\\cards\\small\\SD.jpg", Deck: "CRFEA", Name: "Sombras", Include: false, Phase_ab:3, Ability: "Antes de comenzar la partida, baraja las 20 cartas de Sombra, separa 10 al azar y barájalas junto con el resto de las facciones para formar el mazo central. Devuelve las 10 cartas restantes a la caja, sin mirarlas."},        
        //CR: FIR FIR                                       ,
        FE: {Image: "images\\factions\\cards\\small\\FE.jpg", Deck: "CRFIR", Name: "Fire Elementals", Include: false, Phase_ab:3, Ability: "When playing the card, you only know whether the card is high (5-9) or low (0-4). You check the value of the card after all players have played into the trick. Announce each value as it is revealed."},
        DM: {Image: "images\\factions\\cards\\small\\DM.jpg", Deck: "CRFIR", Name: "Demons", Include: false, Phase_ab:3, Ability: "When playing the card, you only know if the card is odd or even. You check the value of the card after all players have played into the trick. Announce each value as it is revealed."},
        TC: {Image: "images\\factions\\cards\\small\\TC.jpg", Deck: "CRFIR", Name: "Tricksters", Include: false, Phase_ab:3, Ability: "There are two cards of each card with value 1/3/5/7/9. One of the values is real, and one is fake (marked with an X). You do not check for the fakes until final scoring. During final scoring, remove any faction cards with an 'X'."},
        PO: {Image: "images\\factions\\cards\\small\\PO.jpg", Deck: "CRFIR", Name: "Poisoners", Include: false, Phase_ab:3, Ability: "At the beginning of the game, randomly deal 3 toxics face-up. When you win a trick with a Poisoner, you may use the Reading Glass to peek at one of the Toxics. You do not tell the other players what you have seen. At the end of the game, the values of the poison cards are revealed to everyone. Players must discard any faction cards with the values that match the poison cards form their Score Pile. (The ‘X’ poison cards are a decoy and does not eliminate any card)."},        
        //CR: FRO FRO                                       ,
        FR: {Image: "images\\factions\\cards\\small\\FR.jpg", Deck: "CRFRO", Name: "Bestias de hielo", Include: false, Phase_ab:2, Ability: "Si ganas la baza con esta carta, la otra carta se descarta y no la colocas en tu pila de Simpatizantes."},
        YE: {Image: "images\\factions\\cards\\small\\YE.jpg", Deck: "CRFRO", Name: "Yetis", Include: false, Phase_ab:3, Ability: "Incluso si has ganado la baza, no serás el Líder de la siguiente."},
        IK: {Image: "images\\factions\\cards\\small\\IK.jpg", Deck: "CRFRO", Name: "Reyes de hielo", Include: false, Phase_ab:3, Ability: "Al final de la partida, descarta de tu pila de Simpatizantes todas las cartas de Reina de Hielo y Rey de Hielo que tengan el mismo valor. Resuelve esto antes de que se decida la mayoría de cada facción."},
        IQ: {Image: "images\\factions\\cards\\small\\IQ.jpg", Deck: "CRFRO", Name: "Reinas de hielo", Include: false, Phase_ab:3, Ability: "Al final de la partida, descarta de tu pila de Simpatizantes todas las cartas de Reina de Hielo y Rey de Hielo que tengan el mismo valor. Resuelve esto antes de que se decida la mayoría de cada facción."},        
        //STBOXOX                                           ,
        AW: {Image: "images\\factions\\cards\\small\\AW.jpg", Deck: "STBOX", Name: "Resucitadores", Include: false, Phase_ab:2, Ability: "Después de la Fase 1, baraja las cartas descartadas para formar un segundo mazo. Si ganas una baza con un Resucitador en la Fase 2, roba una carta del segundo mazo y añádela a tu pila de Simpatizantes."},
        SA: {Image: "images\\factions\\cards\\small\\SA.jpg", Deck: "STBOX", Name: "Sátiros", Include: false, Phase_ab:1, Ability: "Si la carta por la que compiten los jugadores es un Sátiro, el jugador contrario no está obligado a seguir la Regla de Arrastre. El jugador que juegue la carta de mayor valor ganará la baza."},
        //CR: SKY
        AN: {Image: "images\\factions\\cards\\small\\AN.jpg", Deck: "CRSKY", Name: "Ángeles", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, si no hay otras cartas en tu pila de Puntuación con el mismo número, la carta de Ángel cuenta x2 para la mayoría de la facción."},
        EA: {Image: "images\\factions\\cards\\small\\EA.jpg", Deck: "CRSKY", Name: "Águilas", Include: false, Phase_ab:3, Ability: "[MT] Un Águila no puede liderar dos bazas seguidas. (Excepción: el jugador inicial solo tiene Águilas.)"},
        PT: {Image: "images\\factions\\cards\\small\\PT.jpg", Deck: "CRSKY", Name: "Pterosaurios", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, ¡cualquier carta de Pterosaurio de valor 7 o superior se extingue! Esas cartas no cuentan para la mayoría de la facción."},
        LE: {Image: "images\\factions\\cards\\small\\LE.jpg", Deck: "CRSKY", Name: "Elementales de Rayo", Include: false, Phase_ab:2, Ability: "[MT] En la Fase 2, puedes descartar cualquier número de Elementales de Rayo de tu pila de Puntuación para potenciar una carta jugada. Cada carta descartada potencia la carta con +1."},
        VK: {Image: "images\\factions\\cards\\small\\VK.jpg", Deck: "CRSKY", Name: "Carroñeros", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, si ganas la mayoría de los Carroñeros, baraja la pila de Descarte de la Fase 1 y roba 2 cartas al azar. Añádelas a tu pila de Puntuación."},
        //CR: SEA
        PI: {Image: "images\\factions\\cards\\small\\PI.png", Deck: "CRSEA", Name: "Piratas", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, si un jugador tiene un Pirata y una Armada Real del mismo valor, el Pirata es arrestado. El Pirata cuenta como carta de la Armada Real para la mayoría de la facción. No cuenta como Pirata."},
        RN: {Image: "images\\factions\\cards\\small\\RN.png", Deck: "CRSEA", Name: "Armada Real", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, si un jugador tiene un Pirata y una Armada Real del mismo valor, el Pirata es arrestado y cuenta para la Armada Real."},
        SM: {Image: "images\\factions\\cards\\small\\SM.png", Deck: "CRSEA", Name: "Monstruos Marinos", Include: false, Phase_ab:1, Ability: "[MT] En la Fase 1, si un Monstruo Marino aparece como la carta central, los jugadores deben intercambiar una carta de su mano. Intercambia las cartas boca abajo. Toma la nueva carta en la mano."},
        OC: {Image: "images\\factions\\cards\\small\\OC.jpg", Deck: "CRSEA", Name: "Pulpos", Include: false, Phase_ab:3, Ability: "[MT] Cualquier carta de facción de valor 8 o superior de otra facción gana contra un Pulpo de cualquier número."},
        FP: {Image: "images\\factions\\cards\\small\\FP.jpg", Deck: "CRSEA", Name: "Gente Pez", Include: false, Phase_ab:3, Ability: "[MT] En la Fase 1 y 2, si pierdes una baza donde jugaste un Pez, toma una carta de Tridente del mazo o de otro jugador si todas las del mazo ya se tomaron. El valor de todas las cartas de Gente Pez aumenta en 1 por cada Tridente que poseas."},
        //CR: SUN
        SUN_MONKS: {Image: "images\\factions\\cards\\small\\SUN_MONKS.jpg", Deck: "CRSUN", Name: "Monjes del Sol", Include: false, Phase_ab:3, Ability: "[MT] Cuando se juega un Monje del Sol, debe ser seguido por un Monje de las Estrellas para seguir la facción. Si la facción se sigue correctamente, gana la carta más alta. Un Monje del Sol seguido por otro Monje del Sol se considera fuera de facción y perderás automáticamente la baza."},
        STAR_MONKS: {Image: "images\\factions\\cards\\small\\STAR_MONKS.jpg", Deck: "CRSUN", Name: "Monjes de las Estrellas", Include: false, Phase_ab:3, Ability: "[MT] Cuando se juega un Monje de las Estrellas, debe ser seguido por un Monje del Sol para seguir la facción. Si la facción se sigue correctamente, gana la carta más alta. Un Monje de las Estrellas seguido por otro Monje de las Estrellas se considera fuera de facción y perderás automáticamente la baza."},
        PR: {Image: "images\\factions\\cards\\small\\PR.jpg", Deck: "CRSUN", Name: "Profetas", Include: false, Phase_ab:2, Ability: "[MT] En la Fase 2, el ganador de los Profetas depende del número de Runas. Si hay al menos 3 Runas combinadas en la pila de Puntuación de los jugadores, gana el Profeta con el valor más alto. Si hay menos de 3 Runas, gana el Profeta con el valor más bajo. Las Runas son iconos en las cartas de Profeta."},
        SW: {Image: "images\\factions\\cards\\small\\SW.jpg", Deck: "CRSUN", Name: "Gusanos de Arena", Include: false, Phase_ab:3, Ability: "[MT] En la Fase 1/2, cuando se lidera una baza con un Gusano de Arena, se juega boca abajo. Después de que se jueguen todas las cartas, se revelan."},
        SC: {Image: "images\\factions\\cards\\small\\SC.jpg", Deck: "CRSUN", Name: "Escorpiones", Include: false, Phase_ab:2, Ability: "[MT] En la Fase 2, cuando añades un Escorpión a tu pila de Puntuación, debes tomar una carta de Picadura. Estas cartas te darán una penalización de puntos o un raro bono en la siguiente baza jugada. Después, la carta se descarta. Si el mazo de Picadura se agota, baraja las cartas descartadas y forma un nuevo mazo."},
        //C: 5 ann edition
        AU: {Image: "images\\factions\\cards\\small\\AU.jpg", Deck: "C5A", Name: "Automatones", Include: false, Phase_ab:1, Ability: "[MT] El ganador de la baza gana automáticamente la siguiente baza y es el Líder de la baza posterior."},
        BD: {Image: "images\\factions\\cards\\small\\BD.jpg", Deck: "C5A", Name: "Bardos", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, el jugador que tenga la serie más larga de Bardos consecutivos gana el voto de la facción."},
        GR: {Image: "images\\factions\\cards\\small\\GR.jpg", Deck: "C5A", Name: "Grifos", Include: false, Phase_ab:2, Ability: "[MT] Los Grifos ganados otorgan en la siguiente baza +5 de poder si juegas una carta con el mismo valor."},
        PE: {Image: "images\\factions\\cards\\small\\PE.jpg", Deck: "C5A", Name: "Campesino", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, un Campesino abandonará tu reino si no tienes un Real con el mismo valor hasta +3."},
        RA: {Image: "images\\factions\\cards\\small\\RA.jpg", Deck: "C5A", Name: "Mapaches", Include: false, Phase_ab:3, Ability: "[MT] Los Mapaches con un símbolo de botín cuentan al final del juego también para la facción de la que tengas menos cartas."},
        RO: {Image: "images\\factions\\cards\\small\\RO.jpg", Deck: "C5A", Name: "Reales", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, un Campesino abandonará tu reino si no tienes un Real con el mismo valor hasta +3."},
        VI: {Image: "images\\factions\\cards\\small\\VI.jpg", Deck: "C5A", Name: "Vikingos", Include: false, Phase_ab:3, Ability: "[MT] Al final del juego, cada Vikingo cuenta como 2 si hay otra carta con el mismo valor en tu pila de Puntuación."},
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
        CLAIM_5A: ["PE","RO"],
    };

    Deck = {
        C1: {Name:"Claim", Factions: ["GO","KN","DP","DW","UD"], Include: true, linkBuy: "https://playsdgames.com/categoria-producto/serie-claim/"},
        C2: {Name:"Claim 2", Factions: ["DR","GI","GN","SE","TR"], Include: false, linkBuy: "https://playsdgames.com/categoria-producto/serie-claim/"},

        CRMAP: {Name:"Claim Reinforcements: Maps", Factions: ["BA","PH","UN"], linkBuy: "https://playsdgames.com/categoria-producto/serie-claim/"},
        CRMER: {Name:"Claim Reinforcements: Mercenaries", Factions: ["CY","EL","EO","OR"], Include: false, linkBuy: "https://playsdgames.com/categoria-producto/serie-claim/"},
        CRMAG: {Name:"Claim Reinforcements: Magic", Factions: ["DU","SH","WI"], Include: false, linkBuy: "https://playsdgames.com/categoria-producto/serie-claim/"},

        CRFEA: {Name:"Claim Reinforcements: Fear", Factions: ["VA","ZO","WE","SD"], Include: false, linkBuy: "https://playsdgames.com/categoria-producto/serie-claim/"}, //Vampires, Zombies, Werewolves and Shadows
        CRFIR: {Name:"Claim Reinforcements: Fire", Factions: ["FE","DM","TC","PO"], Include: false, linkBuy: "https://playsdgames.com/categoria-producto/serie-claim/"}, //Fire Elementals, Demons, Tricksters and Poisoners
        CRFRO: {Name:"Claim Reinforcements: Frost", Factions: ["FR","YE","IK","IQ"], Include: false, linkBuy: "https://playsdgames.com/categoria-producto/serie-claim/"}, //Frostbeasts, Yeti, Ice Kings and Ice Queens

        CRSKY: {Name:"Claim Reinforcements: Sky", Factions: ["AN", "EA", "PT", "LE", "VK"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sky/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Angels, Eagles, Pterosaurs, Lightning Elemental, Vulturekin
        CRSEA: {Name:"Claim Reinforcements: Sea", Factions: ["PI", "RN", "SM", "OC", "FP"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sea/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Pirates, Royal Navy, Sea Monsters, Octipi, Fish People
        CRSUN: {Name:"Claim Reinforcements: Sun", Factions: ["SUN_MONKS", "STAR_MONKS", "PR", "SW", "SC"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sun/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Sun Monks, Star Monks, Prophets, Sandworms, Scorpions

        PROMO: {Name:"Promo", Factions: ["DE","GH","ME","MI","TI","VL"], Include: false, linkBuy: "https://magicmerchant.it/catalogue/claim-fantasmi-espansione-gioco-da-tavolo_46163/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Mermaids Minotaurs
        STBOX: {Name:"Storage Box", Factions: ["AW","SA"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/pre-order-claim-storage-box/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},//(Awakeners and Satyrs)

        C5A: {Name:"5th Anniversary Edition", Factions: ["AU","BD","DP","DR","DW","GI","GN","GO","GR","KN","PE","RA","RO","SE","TR","UD","VI"], Include: false, linkBuy: "https://www.amazon.it/MS-Edizioni-95028-Claim/dp/B0881KJ3KX/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-2&linkCode=ll1&tag=migio21-21&linkId=9e48931d66127a34d74d5dc04b4a46bd&language=it_IT"}, 
    };

    Strings = {
        HELP_TRANSLATE: "¿Quieres contribuir con una traducción?",//#######################################
        TITLE: "Claim randomizer",
        SELECT_FACT: "Selecciona las facciones que quieras usar",
        SUBMIT: "Aleatorizar",
        USE_THIS_FACTIONS: "Usa estas facciones:",
        DECK: "Caja",
        FACTION: "Facción",
        PHASE_1: "Fase 1",
        PHASE_2: "Fase 2",
        PHASE_1_2: "Fases 1 y 2",//#######################################
        CREDITS_BTN: "Créditos",//#######################################
        creditsModalLabel: "Créditos",//#######################################
        COPYRIGTH: "Todos los derechos sobre las imágenes y los textos pertenecen a sus dueños. Esta página fue autorizada por White Goblin Games.",//#######################################
        SOURCE_CODE_BY: "Código fuente con licencia MIT creado por migio.",//#######################################
        INSPIRED_BY: "Inspirado por",//#######################################
        THIS_THREAD: "este thread",//#######################################
        ENG_RUL: "Reglas en inglés, español y holandés olandese suministradas por White Goblin Games.",//#######################################
        THIS_FILE: "este archivo",//#######################################
        IT_RULE: "Reglas en italiano escritas por migio",//#######################################
        DE_RULE: "Reglas alemanas escritas por Yarra Mekian",//#######################################
        PT_RULE: "Reglas portuguesas escritas por Sansão Oliveira",
        FEEDBACK: "Envia un comentario",//#######################################
        CLOSE: "Cerrar",//#######################################
        //alerts
        AT_LEAST_COUPLES: "Selecciona por lo menos {0} pareja!",//#######################################
        AT_LEAST_FACTIONS: "Selecciona por lo menos {0} facciones que no sean pareja!",//#######################################
        BUY_DECK: "Compra esta baraja"//#######################################
    }
}