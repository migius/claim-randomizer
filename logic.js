

//LOGIC
const selectionForm = document.getElementById("SelectionForm");
const result = document.getElementById("result");

const COUPLE_FACT = 1;
const OTHER_FACT = 3;

var results = ["GO","KN","DP","DW","UD"];

let submitBtn = document.createElement("button");
submitBtn.classList.add("btn");
submitBtn.classList.add("btn-primary");
submitBtn.setAttribute("type","button");
submitBtn.innerText = Strings["SUBMIT"];
submitBtn.setAttribute("onclick", "calculate()");

function refreshSelectionForm()
{
    selectionForm.innerHTML = '';
    for(var d in Deck) {
        let formGroup = document.createElement("div");
        formGroup.classList.add("form-group");
        formGroup.classList.add("row");
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
        labelDeck.setAttribute("for",  id_d);
        labelDeck.innerText = Deck[d].Name;

        deckItem.appendChild(labelDeck); 

        deck.appendChild(deckItem); 
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

function showResult()
{
    //reset scroll
    location.hash = "#";

    result.innerHTML = '';

    let res = document.createElement("h4");
    res.innerText = "Use this factions:";

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
    th.classList.add("d-sm-table-cell");
    tr.appendChild(th); 
    th = document.createElement("th");
    th.setAttribute("scope","col");
    th.innerText = Strings["PHASE_2"];
    th.classList.add("d-none");
    th.classList.add("d-sm-table-cell");
    tr.appendChild(th); 
    thead.appendChild(tr); 
    table.appendChild(thead); 

    let tbody = document.createElement("tbody");
    let td = document.createElement("td");
    for(var f in results) {
        tr = document.createElement("tr");
        th = document.createElement("th");
        th.setAttribute("scope","row");
        th.innerText = Factions[results[f]].Name;
        tr.appendChild(th); 

        td = document.createElement("td");
        td.innerText = Deck[Factions[results[f]].Deck].Name;
        tr.appendChild(td); 

        td = document.createElement("td");
        td.innerText = Factions[results[f]].Ability;
        td.classList.add("d-none");
        td.classList.add("d-sm-table-cell");
        
        emptyTd = document.createElement("td");
        emptyTd.innerText = " ";
        emptyTd.classList.add("d-none");
        emptyTd.classList.add("d-sm-table-cell");
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
    //scroll to result
    location.hash = "#result";
} 

/*
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
*/




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

    var selectedFactions = [];
    for(var f in Factions) {
        if(Factions[f].Include) selectedFactions.push(f);
    }
    //console.log("selectedFactions: ");
    //console.log(selectedFactions);

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

    if(selectedCouples.length < COUPLE_FACT) { alert("Select at least " + COUPLE_FACT + " couple!"); return;}    


    results = [];

    selectedCouple = selectedCouples[Math.floor(Math.random() * selectedCouples.length)];

    for(var c in selectedCouple) {
        results.push(selectedCouple[c]);
    }

    let needed = OTHER_FACT; 

    if(selectedFactions.length < needed) { alert("Select at least " + needed + " factions not in couple!");  return;}    

    randomFactions = getRandom(selectedFactions, needed);

    for(var f in randomFactions) {
        results.push(randomFactions[f]);
    }

    showResult();
}

// self executing function here
(function() {
    // your page initialization code here
    // the DOM will be available here
    refreshSelectionForm();
})();

