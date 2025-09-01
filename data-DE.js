function setDE()
{
    //DATA
    Factions = {
        //C1
        DP: {Image: "images\\factions\\cards\\small\\DP.jpg", Deck: "C1", Name: "Doppelgänger", Include: false, Phase_ab:3, Ability: "Du kannst einen Doppelgänger anstelle der angespielten Fraktion spielen, auch wenn du diese angeben könntest."},
        DW: {Image: "images\\factions\\cards\\small\\DW.jpg", Deck: "C1", Name: "Zwerge", Include: false, Phase_ab:2, Ability: "Der Verlierer des Stiches sammelt alle ausgespielten Zwerge ein und fügt diese seinem Punktestapel hinzu."},
        GO: {Image: "images\\factions\\cards\\small\\GO.jpg", Deck: "C1", Name: "Kobolde", Include: false, Phase_ab:3, Ability: "Keine spezielle Fähigkeit."},
        KN: {Image: "images\\factions\\cards\\small\\KN.jpg", Deck: "C1", Name: "Ritter", Include: false, Phase_ab:3, Ability: "Wird ein Ritter auf einen Kobold gespielt, schlägt er diesen ungeachtet der Werte."},
        UD: {Image: "images\\factions\\cards\\small\\UD.jpg", Deck: "C1", Name: "Untote", Include: false, Phase_ab:1, Ability: "Gespielte Untote werden nicht wie die anderen Karten aus dem Spiel genommen, sondern auf den Punktestapel des Rundengewinners gelegt."},
        //C2                                                ,
        DR: {Image: "images\\factions\\cards\\small\\DR.jpg", Deck: "C2", Name: "Drachen", Include: false, Phase_ab:3, Ability: "Wer als Letztes in einer Runde einen Drachen spielt, ist Startspieler der nächsten Runde."},
        GI: {Image: "images\\factions\\cards\\small\\GI.jpg", Deck: "C2", Name: "Riesen", Include: false, Phase_ab:2, Ability: "Pro gewonnenem Riesen kann ein Gnom des Gegners (gleicher Wert), sollte er vor diesem ausliegen, zerstört werden."},
        GN: {Image: "images\\factions\\cards\\small\\GN.jpg", Deck: "C2", Name: "Gnome", Include: false, Phase_ab:2, Ability: "undengewinner offen vor sich abgelegt. Kann vom Riesen zerstört werden."},
        SE: {Image: "images\\factions\\cards\\small\\SE.jpg", Deck: "C2", Name: "Seher", Include: false, Phase_ab:1, Ability: "Der Gewinner eines Stiches mit einem Seher darf sich die oberste Karte vom Nachziehstapel anschauen und entscheiden: diese Karte oder die aufgedeckte Karte nehmen."},
        TR: {Image: "images\\factions\\cards\\small\\TR.jpg", Deck: "C2", Name: "Trolle", Include: false, Phase_ab:2, Ability: "Pro Runde kann nur 1 Troll zum Punktestapel gelegt werden. Übrige Trolle bleiben für die nächste Runde liegen."},
        //CR: MAP                                           ,
        BA: {Image: "images\\factions\\cards\\small\\BA.jpg", Deck: "CRMAP", Name: "Basilisken", Include: false, Phase_ab:3, Ability: "Spielst du einen Basilisken als zweite Karte auf eine Karte mit gleichem Wert (achte auf Änderungen durch Einhörner), gewinnst du den Stich – auch wenn die Fraktion der ersten Karte eine andere ist. In Phase 1 gewinnst du zudem auch die gegnerische Karte und legst diese auf deinen Punktestapel."},
        PH: {Image: "images\\factions\\cards\\small\\PH.jpg", Deck: "CRMAP", Name: "Phönixe", Include: false, Phase_ab:2, Ability: "Verlierst du mit einer Phönix-Karte einen Stich, zieh die oberste Karte des Feuerphönix-Stapels und nimm diese auf die Hand. Feuerphönixe fungieren genau wie die Phönix-Karten und zählen damit am Spielende auch zu dieser Fraktion."},
        UN: {Image: "images\\factions\\cards\\small\\UN.jpg", Deck: "CRMAP", Name: "Einhörner", Include: false, Phase_ab:2, Ability: "Leg die gewonnen Einhorn-Karten offen vor dir aus. Du zählst zu jeder Karte einer anderen Fraktion, die du ausspielst, „+1“ pro Einhorn-Karte in deinem Punktestapel. Dies zählt nicht für die Endwertung."},
        //CR: MER                                           ,
        CY: {Image: "images\\factions\\cards\\small\\CY.jpg", Deck: "CRMER", Name: "Zyklopen", Include: false, Phase_ab:2, Ability: "Am Ende des Spiels gewinnt der Spieler mit den wenigeren Zyklopen-Karten die Gunst der Fraktion, sofern er mindestens 1 Zyklopen-Karte besitzt. Falls ihr gleich viele Karten habt, gewinnt der Spieler die Fraktion, der den Zyklopen mit dem niedrigsten Wert hat."},
        EL: {Image: "images\\factions\\cards\\small\\EL.jpg", Deck: "CRMER", Name: "Elfen", Include: false, Phase_ab:3, Ability: "Keine spezielle Fähigkeit."},
        EO: {Image: "images\\factions\\cards\\small\\EO.jpg", Deck: "CRMER", Name: "Elfen und Orks", Include: false, Phase_ab:2, Ability: "Sie zeichnen sich dadurch aus, dass sie für zwei Fraktionen gespielt werden können. Es muss in jeder Phase bekanntgegeben werden, ob eine entsprechende Karte als Elf oder als Ork ausgespielt wird. Der Gewinner einer solchen Karte in Phase 2 muss diese so auf seinen Punktestapel legen, dass am Spielende klar ersichtlich ist, zu welcher Fraktion die Karte zählt."},
        OR: {Image: "images\\factions\\cards\\small\\OR.jpg", Deck: "CRMER", Name: "Orks", Include: false, Phase_ab:3, Ability: "Keine spezielle Fähigkeit."},
        //CR: MAG                                           ,
        DU: {Image: "images\\factions\\cards\\small\\DU.jpg", Deck: "CRMAG", Name: "Druiden", Include: false, Phase_ab:1, Ability: "Wenn du einen Stich verlierst, nachdem du einen Druiden gespielt hast, leg diese Druiden-Karte kopfüber vor dich: Der Druide wird dadurch zu einem Bären! Hierdurch erhöht sich der Wert deiner nächsten ausgespielten Karte um 3. Leg die Druidenkarte anschließend auf den Ablagestapel."},
        SH: {Image: "images\\factions\\cards\\small\\SH.jpg", Deck: "CRMAG", Name: "Gestaltwandler", Include: false, Phase_ab:1, Ability: "Tausche den ausgespielten Gestaltwandler mit der in der Mitte ausliegenden Karte aus. Das heißt, deine gespielt Karte ist nun die Karte, die anfangs in der Mitte auslag – und umgekehrt."},
        WI: {Image: "images\\factions\\cards\\small\\WI.jpg", Deck: "CRMAG", Name: "Zauberer", Include: false, Phase_ab:3, Ability: "Gewinnst du einen Stich durch einen Zauberer, nimm dir die oberste Zaubertrank-Karte, ohne sie anzuschauen, und leg sie verdeckt vor dich. Du kannst sie ab jetzt bei einem Stich deiner Wahl, sobald du deine Karte spielst, aufdecken. In den meisten Fällen erhöht sich dann der Wert deiner Fraktions-Karte. Gespielte Zaubertrank-Karten kommen nach dem Spielen auf den Ablagestapel."},
        //PROMO                                             ,
        DE: {Image: "images\\factions\\cards\\small\\DE.jpg", Deck: "PROMO", Name: "Dunkle Elfen", Include: false, Phase_ab:2, Ability: "Wenn du mindestens einen dunklen Elfen in einem Stich gewinnst, musst du eine Karte einer anderen Fraktion aus deinem Punktestapel abwerfen. Besteht dein Punktestapel nur aus dunklen Elfen, musst du keine Karte abwerfen."},
        GH: {Image: "images\\factions\\cards\\small\\GH.jpg", Deck: "PROMO", Name: "Gespenster", Include: false, Phase_ab:1, Ability: "Du darfst die ausgespielte Gespensterkarte in den Anhängerstapel aufnehmen anstelle die ausgelegte oder die oberste vom Stapel (ohne sie vorher anzusehen), je nachdem ob du den Stich gewonnen oder verloren hast."},
        ME: {Image: "images\\factions\\cards\\small\\ME.jpg", Deck: "PROMO", Name: "Meerjungfrauen", Include: false, Phase_ab:3, Ability: "Wenn du Meerjungfrauen in deinen Punktestapel aufnimmst, lass sie offen vor dir liegen. Für jede Meerjungfrau vor dir wird der Wert deiner ausgespielten Karten um 1 reduziert."},
        MI: {Image: "images\\factions\\cards\\small\\MI.jpg", Deck: "PROMO", Name: "Minotaurus", Include: false, Phase_ab:2, Ability: "Wenn du als Startspieler mit einem Minotaurus anspielst und den Stich gewinnst, darf der andere Spieler seine gerade gespielte Karte zurück auf die Hand nehmen."},
        TI: {Image: "images\\factions\\cards\\small\\TI.png", Deck: "PROMO", Name: "Tüftler", Include: false, Phase_ab:2, Ability: "[MT] Wenn ein Tüftler eine gespielte Karte mit einem Wert von 4 oder mehr übertrifft, explodiert sie! Die Karte wird aus dem Spiel entfernt. Du gewinnst trotzdem den Stich und die andere Karte."},
        VL: {Image: "images\\factions\\cards\\small\\VL.png", Deck: "PROMO", Name: "Walküre", Include: false, Phase_ab:3, Ability: "[MT] Wenn die Walküre nach einer anderen Fraktion gespielt wird, übernimmt sie diese Fraktion, sofern ihr Wert 3 oder mehr höher ist als der der zuerst gespielten Karte."},
        //CR: FEA                                           ,
        VA: {Image: "images\\factions\\cards\\small\\VA.jpg", Deck: "CRFEA", Name: "Vampire", Include: false, Phase_ab:2, Ability: "Platziere einen gewonnen Vampir vor dir. Du kannst ab jetzt eine gewonnene nicht-Vampir-Karte unter die Vampir-Karte oder regulär auf den Punktestapel legen. Diese Karten zählen später für die Vampir-Fraktion, nicht ihre eigene. Falls du die Vampir-Karte austauschen möchtest, müssen alle daruntergelegten Karten abgeworfen werden. Nur der ausliegende Vampir und die darunterliegenden Karten zählen für die Vampir-Fraktion."},
        ZO: {Image: "images\\factions\\cards\\small\\ZO.jpg", Deck: "CRFEA", Name: "Zombies", Include: false, Phase_ab:1, Ability: "Wenn du einen Stich mit einem Zombie gewinnst, wird die Verliererkarte deinem Punktestapel hinzugefügt."},
        WE: {Image: "images\\factions\\cards\\small\\WE.jpg", Deck: "CRFEA", Name: "Werwölfe", Include: false, Phase_ab:3, Ability: "Es gibt zwei Wertungskarten: Vollmond und kein Mond. Das Spiel wird mit der Kein-Mond-Karte gestartet. Wenn ein Stich mit einem Werwolf gewonnen wird, wird die Wertungskarte ausgetauscht. Kein Mond: Die niedrigere Werwolf-Karte gewinnt. Vollmond: Die höhere Werwolf-Karte gewinnt."},
        SD: {Image: "images\\factions\\cards\\small\\SD.jpg", Deck: "CRFEA", Name: "Schatten", Include: false, Phase_ab:3, Ability: "Vor dem Spiel: Mische die 20 Schatten-Karten und entferne 10 von ihnen. Dann mische die verbleibend 10 Karten in das Deck. Ihr wisst nicht, welche Werte im Spiel sind"},
        //CR: FIR                                           ,
        FE: {Image: "images\\factions\\cards\\small\\FE.jpg", Deck: "CRFIR", Name: "Feuerelemente", Include: false, Phase_ab:3, Ability: "Beim Ausspielen ist nur bekannt, ob der Kartenwert hoch (5-9) oder niedrig (0-4) ist. Der Wert der Zahlen wird erst überprüft, nachdem alle Karten für den Stich ausgespielt wurden."},
        DM: {Image: "images\\factions\\cards\\small\\DM.jpg", Deck: "CRFIR", Name: "Dämonen", Include: false, Phase_ab:3, Ability: "Beim Ausspielen ist nur bekannt, ob die Zahl gerade oder ungerade ist. Der Wert der Zahlen wird erst überprüft, nachdem alle Karten für den Stich ausgespielt wurden."},
        TC: {Image: "images\\factions\\cards\\small\\TC.jpg", Deck: "CRFIR", Name: "Schwindler", Include: false, Phase_ab:3, Ability: "Es gibt jeweils zwei Karten mit dem Wert 1/3/5/7/9. Einer dieser Werte ist echt, der andere gefälscht (markiert mit einem X). Auf die Stiche selbst hat dies keinen Einfluss, jedoch müssen für die Endwertung die gefälschten Karten aussortiert werden."},
        PO: {Image: "images\\factions\\cards\\small\\PO.jpg", Deck: "CRFIR", Name: "Giftmischer", Include: false, Phase_ab:3, Ability: "Wähle zu Beginn des Spiels zufällig 3 Gifte und lege sie offen aus. Wenn du einen Stich mit einem Giftmischer gewinnst, darfst du den Wert eines Giftes überprüfen. Am Ende des Spiels müssen alle Karten abgeworfen werden, welche denselben Wert wie eine Gift-Karte haben."},
        //CR: FRO                                           ,
        FR: {Image: "images\\factions\\cards\\small\\FR.jpg", Deck: "CRFRO", Name: "Frostbestien", Include: false, Phase_ab:2, Ability: "Wenn du einen Stich mit dieser Karte gewinnst, wird die andere Karte abgeworfen und nicht deinem Punktestapel hinzugefügt."},
        YE: {Image: "images\\factions\\cards\\small\\YE.jpg", Deck: "CRFRO", Name: "Yetis", Include: false, Phase_ab:3, Ability: "Du bist nicht Startspieler für den nächsten Stich, auch wenn du diesen gewonnen hast."},
        IK: {Image: "images\\factions\\cards\\small\\IK.jpg", Deck: "CRFRO", Name: "Eiskönige", Include: false, Phase_ab:3, Ability: "Am Ende des Spiels werden alle Eisköniginnen und Eiskönige mit demselben Wert abgeworfen. Dies geschieht vor der Mehrheitenbestimmung."},
        IQ: {Image: "images\\factions\\cards\\small\\IQ.jpg", Deck: "CRFRO", Name: "Eisköniginnen", Include: false, Phase_ab:3, Ability: "Am Ende des Spiels werden alle Eisköniginnen und Eiskönige mit demselben Wert abgeworfen. Dies geschieht vor der Mehrheitenbestimmung."},
        //STBOX                                             ,
        AW: {Image: "images\\factions\\cards\\small\\AW.jpg", Deck: "STBOX", Name: "Auferwecker", Include: false, Phase_ab:2, Ability: "Mische den Abwurfstapel nach dem Ende von Phase 1. Gewinnst du einen Stich mit einem Auferwecker ziehst du eine Karte vom „Abwurfstapel“ und fügst diese zu deinem Punktestapel hinzu."},
        SA: {Image: "images\\factions\\cards\\small\\SA.jpg", Deck: "STBOX", Name: "Satyr", Include: false, Phase_ab:1, Ability: "Wenn die aufgedeckte Karte, um die gespielt wird, ein Satyr ist, muss nicht die Fraktion angegeben "},
        //CR: SKY
        AN: {Image: "images\\factions\\cards\\small\\AN.jpg", Deck: "CRSKY", Name: "Engel", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels gilt: Wenn sich keine andere Karte mit derselben Zahl in deinem Punktestapel befindet, zählt die Engel-Karte doppelt für die Fraktionsmehrheit."},
        EA: {Image: "images\\factions\\cards\\small\\EA.jpg", Deck: "CRSKY", Name: "Adler", Include: false, Phase_ab:3, Ability: "[MT] Ein Adler darf nicht zwei Stiche hintereinander anführen. (Ausnahme: Der führende Spieler hat nur Adler.)"},
        PT: {Image: "images\\factions\\cards\\small\\PT.jpg", Deck: "CRSKY", Name: "Flugsaurier", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels: Jede Flugsaurier-Karte mit dem Wert 7 oder höher erlischt! Diese Karten zählen nicht zur Fraktionsmehrheit."},
        LE: {Image: "images\\factions\\cards\\small\\LE.jpg", Deck: "CRSKY", Name: "Blitz-Elementare", Include: false, Phase_ab:2, Ability: "[MT] In Phase 2 darfst du beliebig viele Blitz-Elementare aus deinem Punktestapel abwerfen, um eine gespielte Karte zu verstärken. Jede abgeworfene Karte verstärkt die Karte um +1."},
        VK: {Image: "images\\factions\\cards\\small\\VK.jpg", Deck: "CRSKY", Name: "Geierwesen", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels: Wenn du die Mehrheit der Geierwesen gewinnst, mische den Ablagestapel von Phase 1 und ziehe 2 zufällige Karten. Füge diese deinem Punktestapel hinzu."},
        //CR: SEA
        PI: {Image: "images\\factions\\cards\\small\\PI.png", Deck: "CRSEA", Name: "Piraten", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels: Hat ein Spieler einen Piraten und eine Königliche Marine derselben Zahl, wird der Pirat verhaftet. Er zählt als Karte der Königlichen Marine für die Fraktionsmehrheit und nicht als Pirat."},
        RN: {Image: "images\\factions\\cards\\small\\RN.png", Deck: "CRSEA", Name: "Königliche Marine", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels: Hat ein Spieler einen Piraten und eine Königliche Marine derselben Zahl, wird der Pirat verhaftet und zählt zur Königlichen Marine."},
        SM: {Image: "images\\factions\\cards\\small\\SM.png", Deck: "CRSEA", Name: "Seemonster", Include: false, Phase_ab:1, Ability: "[MT] In Phase 1: Wenn ein Seemonster als Mittlere Karte aufgedeckt wird, müssen die Spieler eine Karte aus ihrer Hand tauschen. Die Karten werden verdeckt getauscht. Nimm die neue Karte auf die Hand."},
        OC: {Image: "images\\factions\\cards\\small\\OC.jpg", Deck: "CRSEA", Name: "Oktopusse", Include: false, Phase_ab:3, Ability: "[MT] Jede Fraktionskarte mit dem Wert 8 oder höher aus einer anderen Fraktion gewinnt gegen einen Oktopus beliebiger Zahl."},
        FP: {Image: "images\\factions\\cards\\small\\FP.jpg", Deck: "CRSEA", Name: "Fischmenschen", Include: false, Phase_ab:3, Ability: "[MT] In Phase 1 und 2: Wenn du einen Stich verlierst, in dem du einen Fisch gespielt hast, nimm eine Dreizack-Karte vom Nachziehstapel oder von einem anderen Spieler (falls alle aus dem Stapel bereits genommen sind). Der Wert aller Fischmenschen-Karten erhöht sich um 1 für jeden Dreizack, den du besitzt."},
        //CR: SUN
        SUN_MONKS: {Image: "images\\factions\\cards\\small\\SUN_MONKS.jpg", Deck: "CRSUN", Name: "Sonnenmönche", Include: false, Phase_ab:3, Ability: "[MT] Wenn ein Sonnenmönch gespielt wird, muss ihm ein Sternenmönch folgen, um die Fraktion zu bedienen. Wird die Fraktion korrekt bedient, gewinnt die höchste Karte. Ein Sonnenmönch, der einem Sonnenmönch folgt, gilt als fehlende Fraktion und du verlierst den Stich automatisch."},
        STAR_MONKS: {Image: "images\\factions\\cards\\small\\STAR_MONKS.jpg", Deck: "CRSUN", Name: "Sternenmönche", Include: false, Phase_ab:3, Ability: "[MT] Wenn ein Sternenmönch gespielt wird, muss ihm ein Sonnenmönch folgen, um die Fraktion zu bedienen. Wird die Fraktion korrekt bedient, gewinnt die höchste Karte. Ein Sternenmönch, der einem Sternenmönch folgt, gilt als fehlende Fraktion und du verlierst den Stich automatisch."},
        PR: {Image: "images\\factions\\cards\\small\\PR.jpg", Deck: "CRSUN", Name: "Propheten", Include: false, Phase_ab:2, Ability: "[MT] In Phase 2 hängt der Gewinner der Propheten von der Anzahl der Runen ab. Gibt es insgesamt mindestens 3 Runen im Punktestapel der Spieler, gewinnt der Prophet mit dem höchsten Wert. Gibt es weniger als 3 Runen, gewinnt der Prophet mit dem niedrigsten Wert. Runen sind Symbole auf den Prophetenkarten."},
        SW: {Image: "images\\factions\\cards\\small\\SW.jpg", Deck: "CRSUN", Name: "Sandwürmer", Include: false, Phase_ab:3, Ability: "[MT] In Phase 1/2: Wenn ein Stich mit einem Sandwurm eröffnet wird, wird er verdeckt gespielt. Nachdem alle Karten gespielt wurden, werden sie aufgedeckt."},
        SC: {Image: "images\\factions\\cards\\small\\SC.jpg", Deck: "CRSUN", Name: "Skorpione", Include: false, Phase_ab:2, Ability: "[MT] In Phase 2: Wenn du einen Skorpion zu deinem Punktestapel hinzufügst, musst du eine Gestochens-Karte nehmen. Diese Karten geben dir im nächsten Stich einen Punktabzug oder selten einen Bonus. Danach wird die Karte abgelegt. Wenn der Gestochens-Stapel jemals aufgebraucht ist, mische die abgelegten Karten und bilde einen neuen Stapel."},
        //C: 5 ann edition
        AU: {Image: "images\\factions\\cards\\small\\AU.jpg", Deck: "C5A", Name: "Automaten", Include: false, Phase_ab:1, Ability: "[MT] Der Gewinner eines Stiches gewinnt automatisch auch den nächsten Stich und ist der Anführer des darauffolgenden Stiches."},
        BD: {Image: "images\\factions\\cards\\small\\BD.jpg", Deck: "C5A", Name: "Barden", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels gewinnt der Spieler mit der längsten ununterbrochenen Reihe von Barden die Stimmenmehrheit der Fraktion."},
        GR: {Image: "images\\factions\\cards\\small\\GR.jpg", Deck: "C5A", Name: "Greifen", Include: false, Phase_ab:2, Ability: "[MT] Gewonnene Greifen verleihen im nächsten Stich +5 Stärke, wenn du eine Karte mit demselben Wert spielst."},
        PE: {Image: "images\\factions\\cards\\small\\PE.jpg", Deck: "C5A", Name: "Bauer", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels verlässt dich ein Bauer, wenn du keinen Königlichen mit demselben Wert bis +3 hast."},
        RA: {Image: "images\\factions\\cards\\small\\RA.jpg", Deck: "C5A", Name: "Waschbären", Include: false, Phase_ab:3, Ability: "[MT] Waschbären mit einem Beute-Symbol zählen am Ende des Spiels auch für die Fraktion, von der du die wenigsten Karten hast."},
        RO: {Image: "images\\factions\\cards\\small\\RO.jpg", Deck: "C5A", Name: "Königliche", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels verlässt dich ein Bauer, wenn du keinen Königlichen mit demselben Wert bis +3 hast."},
        VI: {Image: "images\\factions\\cards\\small\\VI.jpg", Deck: "C5A", Name: "Wikinger", Include: false, Phase_ab:3, Ability: "[MT] Am Ende des Spiels zählt jeder Wikinger doppelt, wenn sich eine andere Karte mit demselben Wert in deinem Punktestapel befindet."},
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
        C1: {Name:"Claim", Factions: ["GO","KN","DP","DW","UD"], Include: false, linkBuy: "https://www.amazon.it/GAMEFACTORY-646222-Gioco-di-luci/dp/B07JD8K4L5?pd_rd_w=gPtBu&pf_rd_p=73021335-3337-4067-9dba-3816378c8630&pf_rd_r=YEGKM73SY7W9DTC05W54&pd_rd_r=26b56eb1-b0e4-4b22-836a-a95383313340&pd_rd_wg=b3BMt&pd_rd_i=B07JD8K4L5&psc=1&linkCode=ll1&tag=migio21-21&linkId=b6372d7472fca89042c5057081ac095d&language=it_IT&ref_=as_li_ss_tl"},
        C2: {Name:"Claim 2", Factions: ["DR","GI","GN","SE","TR"], Include: false, linkBuy: "https://www.amazon.it/GAMEFACTORY-646223-Gioco-di-luci/dp/B07JD62Z69/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-1&linkCode=ll1&tag=migio21-21&linkId=281f4f309662ddd02985edbf36b32276&language=it_IT"},

        CRMAP: {Name:"Claim - Verstärkung Orte", Factions: ["BA","PH","UN"], linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-maps/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},
        CRMER: {Name:"Claim - Verstärkung Söldner", Factions: ["CY","EL","EO","OR"], Include: false, linkBuy: "https://www.amazon.it/SD-Games-SDGCLAIM004-Claim-Rinforzanti/dp/B089K5VF3T/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-6&linkCode=ll1&tag=migio21-21&linkId=b83df5d024ab414fa11b5bae40d260ab&language=it_IT"},
        CRMAG: {Name:"Claim - Verstärkung Magie", Factions: ["DU","SH","WI"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-magic/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},

        CRFEA: {Name:"Claim - Verstärkung Angst", Factions: ["VA","ZO","WE","SD"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-fear/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Vampires, Zombies, Werewolves and Shadows
        CRFIR: {Name:"Claim - Verstärkung Feuer", Factions: ["FE","DM","TC","PO"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-fire/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Fire Elementals, Demons, Tricksters and Poisoners
        CRFRO: {Name:"Claim - Verstärkung Frost", Factions: ["FR","YE","IK","IQ"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-frost/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Frostbeasts, Yeti, Ice Kings and Ice Queens

        CRSKY: {Name:"Claim Reinforcements: Sky", Factions: ["AN", "EA", "PT", "LE", "VK"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sky/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Angels, Eagles, Pterosaurs, Lightning Elemental, Vulturekin
        CRSEA: {Name:"Claim Reinforcements: Sea", Factions: ["PI", "RN", "SM", "OC", "FP"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sea/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Pirates, Royal Navy, Sea Monsters, Octipi, Fish People
        CRSUN: {Name:"Claim Reinforcements: Sun", Factions: ["SUN_MONKS", "STAR_MONKS", "PR", "SW", "SC"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/claim-reinforcements-sun/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Sun Monks, Star Monks, Prophets, Sandworms, Scorpions

        PROMO: {Name:"Promo", Factions: ["DE","GH","ME","MI","TI","VL"], Include: false, linkBuy: "https://magicmerchant.it/catalogue/claim-fantasmi-espansione-gioco-da-tavolo_46163/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"}, //Mermaids Minotaurs
        STBOX: {Name:"Storage Box", Factions: ["AW","SA"], Include: false, linkBuy: "https://whitegoblingames.com/site/game/pre-order-claim-storage-box/?utm_source=migio&utm_medium=buy-deck&utm_campaign=claim-randomizer"},//(Awakeners and Satyrs)

        C5A: {Name:"5th Anniversary Edition", Factions: ["AU","BD","DP","DR","DW","GI","GN","GO","GR","KN","PE","RA","RO","SE","TR","UD","VI"], Include: false, linkBuy: "https://www.amazon.it/MS-Edizioni-95028-Claim/dp/B0881KJ3KX/ref=as_li_ss_tl?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=claim&qid=1603033037&s=toys&sr=1-2&linkCode=ll1&tag=migio21-21&linkId=9e48931d66127a34d74d5dc04b4a46bd&language=it_IT"}, 
    };

    Strings = {
        HELP_TRANSLATE: "Möchtest du zu den Übersetzungen einen Beitrag leisten?",
        TITLE: "Claim - Zufallszusammenstellung Kartensatz",
        SELECT_FACT: "Wähle die Fraktionen aus, die du benutzen möchtest",
        SUBMIT: "Zufällig zusammenstellen",
        USE_THIS_FACTIONS: "Benutze diese Fraktion:",
        DECK: "Kartendeck",
        FACTION: "Fraktion",
        PHASE_1: "Phase 1",
        PHASE_2: "Phase 2",
        PHASE_1_2: "Phasen 1 & 2",
        CREDITS_BTN: "Credits",
        creditsModalLabel: "Credits",
        COPYRIGTH: "Rechte an den Bildern und Texten liegen bei den jeweiligen Besitzern, diese Webseite wurde von White Goblin Games autorisiert.",
        SOURCE_CODE_BY: "Quellcode unter MIT-Lizenz von migio.",
        INSPIRED_BY: "Inspiriert von",
        THIS_THREAD: "diesem Beitrag",
        ENG_RUL: "Englische, spanische und niederländische Regeln wurden von White Goblin Games bereitgestellt.*",
        THIS_FILE: "diese Datei",
        IT_RULE: "Italienische Regeln von migio",
        DE_RULE: "Deutsche Regeln von Yarra Mekian*",
        PT_RULE: "Portugiesische Regeln von Sansão Oliveira*",
        FEEDBACK: "Sende uns ein Feedback",
        CLOSE: "Schließen",
        //alerts
        AT_LEAST_COUPLES: "Wähle mindestens {0} Paare aus!",
        AT_LEAST_FACTIONS: "Wähle mindestens {0} Fraktionen aus, die nicht Teil eines Paares sind!",
        BUY_DECK: "Kaufe dieses Kartendeck."
    }
}
