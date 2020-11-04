

//LOGIC
const selectionForm = document.getElementById("SelectionForm");
const result = document.getElementById("result");

const COUPLE_FACT = 1;
const OTHER_FACT = 3;

var results = ["GO","KN","DP","DW","UD"];

let submitBtn = document.createElement("button");
submitBtn.classList.add("btn");
submitBtn.classList.add("btn-primary");
submitBtn.classList.add("btn-lg");
submitBtn.classList.add("col-12");
submitBtn.classList.add("trasp-background");
submitBtn.setAttribute("type","button");
submitBtn.setAttribute("onclick", "calculate()");

let bodyEl = document.getElementsByTagName("body")[0];
let HELP_TRANSLATE_El = document.getElementById("HELP_TRANSLATE");
let TITLE_El = document.getElementById("TITLE");
let SELECT_FACT_El = document.getElementById("SELECT_FACT");

function refreshPage()
{
    //todo: replace menu, titles, texts...
    submitBtn.innerText = Strings["SUBMIT"];
    HELP_TRANSLATE_El.innerText = Strings["HELP_TRANSLATE"];
    TITLE_El.innerText = Strings["TITLE"];
    SELECT_FACT_El.innerText = Strings["SELECT_FACT"];
    CREDITS_BTN.innerText        = Strings["CREDITS_BTN"];
    creditsModalLabel.innerText = Strings["creditsModalLabel"];
    COPYRIGTH.innerText = Strings["COPYRIGTH"];
    SOURCE_CODE_BY.innerText = Strings["SOURCE_CODE_BY"];
    INSPIRED_BY.innerText = Strings["INSPIRED_BY"];
    THIS_THREAD.innerText = Strings["THIS_THREAD"]; 
    ENG_RUL.innerText = Strings["ENG_RUL"];
    //THIS_FILE.innerText = Strings["THIS_FILE"];
    IT_RULE.innerText = Strings["IT_RULE"];
    FEEDBACK.innerText = Strings["FEEDBACK"];
    CLOSE.innerText = Strings["CLOSE"];
    CLOSE2.innerText = Strings["CLOSE"];
    refreshSelectionForm();    
}

function refreshSelectionForm()
{
    selectionForm.innerHTML = '';
    for(var d in Deck) {
        let formGroup = document.createElement("div");
        formGroup.classList.add("form-group");
        formGroup.classList.add("trasp-background");
        formGroup.classList.add("row");
        formGroup.classList.add("mb-2");
        formGroup.setAttribute("id", d + "-row");
                
        let deck = document.createElement("div");
        deck.classList.add("col-sm-4");

        let deckItem = document.createElement("div");
        deckItem.classList.add("form-check");
        deckItem.classList.add("d-item");

        let inputDeck = document.createElement("input");
        inputDeck.classList.add("form-check-input");
        inputDeck.classList.add("d-check");
        inputDeck.setAttribute("type","checkbox");
        let id_d = d + "-d-checkbox";
        inputDeck.setAttribute("id", id_d);
        inputDeck.setAttribute("onclick", "checkDeck('" + d + "','" + id_d + "')");
        if(Deck[d].Include) {
            inputDeck.setAttribute("checked", "checked");
        }

        deckItem.appendChild(inputDeck); 

        let labelDeck = document.createElement("label");
        labelDeck.classList.add("form-check-label");
        labelDeck.setAttribute("for", id_d);
        labelDeck.innerText = Deck[d].Name;

        deckItem.appendChild(labelDeck); 

        deck.appendChild(deckItem); 

        //amazon link
        let buyLinkDiv = document.createElement("div");
        buyLinkDiv.classList.add("buy-link");
        let buyLink = document.createElement("a");
        buyLink.setAttribute("href", Deck[d].linkBuy);
        buyLink.setAttribute("target", "_blank");
        buyLink.innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>&nbsp;';
        buyLink.innerHTML += Strings["BUY_DECK"];;




        buyLinkDiv.appendChild(buyLink); 
        deckItem.appendChild(buyLinkDiv); 


        formGroup.appendChild(deck); 

        let deckList = document.createElement("div");
        deckList.classList.add("col-sm-8");

        for(var f in Deck[d].Factions) {
            let fact = Deck[d].Factions[f];

            let fationItem = document.createElement("div");
            fationItem.classList.add("form-check");
            fationItem.classList.add("f-item");

            let input = document.createElement("input");
            input.classList.add("form-check-input");
            input.classList.add("f-check");
            input.setAttribute("type","checkbox");
            let id_f = fact + "-f-checkbox";
            input.setAttribute("id", id_f);
            input.setAttribute("onclick", "checkFaction('" + fact + "','" + id_f + "')");
            if(Factions[fact].Include) {
                input.setAttribute("checked", "checked");
            }

            fationItem.appendChild(input); 

            let label = document.createElement("label");
            label.classList.add("form-check-label");
            label.setAttribute("for", id_f);
            label.setAttribute("data-toggle","tooltip");
            label.setAttribute("data-placement","right");
            label.setAttribute("title", Factions[fact].Ability);
            label.innerText = Factions[fact].Name;

            fationItem.appendChild(label); 
/*
            let infoCircle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            infoCircle.setAttribute("width", "1em");
            infoCircle.setAttribute("height", "1em");
            infoCircle.setAttribute("viewBox", "0 0 16 16");
            infoCircle.setAttribute("class", "bi bi-info-circle info-faction");
            infoCircle.setAttribute("fill", "currentColor");
            infoCircle.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            let infoCirclePath = document.createElementNS("http://www.w3.org/2000/svg","path");
            infoCirclePath.setAttribute("fill-rule", "evenodd");
            infoCirclePath.setAttribute("d", "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
            infoCircle.appendChild(infoCirclePath); 
            let infoCirclePath2 = document.createElementNS("http://www.w3.org/2000/svg","path");
            infoCirclePath2.setAttribute("d", "M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z");
            infoCircle.appendChild(infoCirclePath2); 
            let infoCircleCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
            infoCircleCircle.setAttribute("cx", "8");
            infoCircleCircle.setAttribute("cy", "4.5");
            infoCircleCircle.setAttribute("r", "1");
            infoCircle.appendChild(infoCircleCircle); 

            fationItem.appendChild(infoCircle); 
*/
            
            //modalLink.innerText = "LINK";

            fationItem.appendChild(createModalFaction(fact)); 

            deckList.appendChild(fationItem); 
        }

        formGroup.appendChild(deckList); 
        selectionForm.appendChild(formGroup); 

        //add submit
        selectionForm.appendChild(submitBtn); 
    }

    //activate tooltip:
    $('[data-toggle="tooltip"]').tooltip();
}

function createModalFaction(fact)
{
    let modalLink = document.createElement("a");
    modalLink.setAttribute("data-toggle", "modal");
    modalLink.setAttribute("data-target", "#detailsModal");
    modalLink.setAttribute("class", "icon-fact icon-" + fact);
    modalLink.setAttribute("data-name", Factions[fact].Name);
    modalLink.setAttribute("data-ability", Factions[fact].Ability);
    modalLink.setAttribute("data-phase", Factions[fact].Phase_ab);
    modalLink.setAttribute("data-image", Factions[fact].Image);
    return modalLink;
}

function checkDeck(d, id)
{
    Deck[d].Include = document.getElementById(id).checked;
    for(var f in Deck[d].Factions) {
        Factions[Deck[d].Factions[f]].Include = Deck[d].Include;
    }
    refreshSelectionForm();
}

function checkFaction(f,id)
{
    Factions[f].Include = document.getElementById(id).checked;
} 


function cleanResult()
{
    result.innerHTML = '';
    $('#result').hide();
    $('#myAlert').hide();
}

function showResult()
{
    //reset scroll
    location.hash = "#";    

    let res = document.createElement("h4");
    res.innerText = Strings["USE_THIS_FACTIONS"];

    result.appendChild(res); 

    let table = document.createElement("table");
    table.classList.add("table");

    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope","col");
    th.innerText = Strings["FACTION"];
    tr.appendChild(th); 
    th = document.createElement("th");
    th.setAttribute("scope","col");
    th.innerText = Strings["DECK"];
    tr.appendChild(th); 
    th = document.createElement("th");
    th.setAttribute("scope","col");
    th.innerText = Strings["PHASE_1"];
    th.classList.add("d-none");
    th.classList.add("d-md-table-cell");
    tr.appendChild(th); 
    th = document.createElement("th");
    th.setAttribute("scope","col");
    th.innerText = Strings["PHASE_2"];
    th.classList.add("d-none");
    th.classList.add("d-md-table-cell");
    tr.appendChild(th); 
    thead.appendChild(tr); 
    table.appendChild(thead); 

    let tbody = document.createElement("tbody");
    let td = document.createElement("td");
    for(var f in results) {
        tr = document.createElement("tr");
        th = document.createElement("th");
        th.setAttribute("scope","row");

        modal = createModalFaction(results[f]);
        modal.innerText = " " + Factions[results[f]].Name;
        th.appendChild(modal);
        tr.appendChild(th); 

        td = document.createElement("td");
        td.innerText = Deck[Factions[results[f]].Deck].Name;
        tr.appendChild(td); 

        td = document.createElement("td");
        td.innerText = Factions[results[f]].Ability;
        td.classList.add("d-none");
        td.classList.add("d-md-table-cell");
        
        emptyTd = document.createElement("td");
        emptyTd.innerText = " ";
        emptyTd.classList.add("d-none");
        emptyTd.classList.add("d-md-table-cell");
        switch(Factions[results[f]].Phase_ab)
        {
            case 1:
                tr.appendChild(td); 
                tr.appendChild(emptyTd); 
                break;
            case 2:
                tr.appendChild(emptyTd); 
                tr.appendChild(td); 
                break;
            case 3:       
                td.setAttribute("colspan","2");          
                tr.appendChild(td); 
                break; 
        }        

        tbody.appendChild(tr); 
    }

    table.appendChild(tbody); 
    
    result.appendChild(table); 

    $('#result').show();
    //scroll to result
    location.hash = "#result";
} 

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function calculate() {
    cleanResult();

    var selectedFactions = [];
    for(var f in Factions) {
        if(Factions[f].Include) selectedFactions.push(f);
    }

    var selectedCouples = [];
    for(var c in Couples) {
        let includeCouple = true;
        for(var f in Couples[c]) {
            if(!selectedFactions.includes(Couples[c][f])) {
                includeCouple = false;
            } else {
                //remove from selectedFactions
                //a couple faction will not be added alone
                selectedFactions = selectedFactions.filter(function(value, index, arr){ return value !== Couples[c][f];});
                //console.log("post rem: " );
                //console.log(selectedFactions);
            }
        }
        if(includeCouple) {
            //select
            selectedCouples.push(Couples[c]);            
        }
    }

    if(selectedCouples.length < COUPLE_FACT) { myAlert(Strings["AT_LEAST_COUPLES"].replace("{0}",COUPLE_FACT)); return;}    


    results = [];

    selectedCouple = selectedCouples[Math.floor(Math.random() * selectedCouples.length)];

    for(var c in selectedCouple) {
        results.push(selectedCouple[c]);
    }

    let needed = OTHER_FACT; 

    if(selectedFactions.length < needed) { myAlert(Strings["AT_LEAST_FACTIONS"].replace("{0}",needed));  return;}    

    randomFactions = getRandom(selectedFactions, needed);

    for(var f in randomFactions) {
        results.push(randomFactions[f]);
    }

    showResult();
}

function myAlert(message)
{
    $('#myAlert').text(message);
    $('#myAlert').show();
}


//modal factions info
$('#detailsModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var Name = button.data('name'); // Extract info from data-* attributes
  var Ability = button.data('ability'); 
  var Phase_ab = button.data('phase');
  var Image = button.data('image');

  var modal = $(this)
  modal.find('.modal-title').text(Name);
  modal.find('.modal-image').attr('src', Image);
  modal.find('.modal-text').text(Ability);

  switch(Phase_ab)
  {
    case 1:
        modal.find('.phase-text').text(Strings["PHASE_1"]);
        break;
    case 2:
        modal.find('.phase-text').text(Strings["PHASE_2"]);
        break;
    case 3:
        modal.find('.phase-text').text(Strings["PHASE_1_2"]);
        break;
    default:
        modal.find('.phase-text').text(Strings["PHASE_1_2"]);
        break;
  }



})



function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function setLanguage(lang) 
{
    //fallback EN
    setEN();
    if(lang !== 'EN') {
        switch(lang) {
            case 'IT':
                loadScript("data-IT.js", function() {
                    console.log("done"); 
                    setIT();
                    refreshPage();
                });                
                break;
            case 'NL':
                loadScript("data-NL.js", function() {
                    console.log("done"); 
                    setNL();
                    refreshPage();
                });                
                break;
            case 'ES':
                loadScript("data-ES.js", function() {
                    console.log("done"); 
                    setES();
                    refreshPage();
                });                
                break;
            default:
                setEN();
                break;
        }
    }
    else 
    {
        refreshPage();
    }
    cleanResult();
}

function setBackground(bg)
{
    bodyEl.className = '';
    switch(bg) 
    {
        case "DP":
        case "DW":
        case "GO":
        case "KN":
        case "UD":
        case "claim":
            bodyEl.classList.add(bg);
            break;
        default:
            bodyEl.classList.add("default");
            break;
    }
}

// self executing function here
(function() {
    // your page initialization code here
    // the DOM will be available here
    setLanguage('EN');

    setBackground(getRandom(["DP","DW","GO","KN","UD","claim"],1)[0]);

    //LAST, IMPORTANT!
    cleanResult();

})();

