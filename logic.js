

//LOGIC
const selectionForm = document.getElementById("SelectionForm");
const result = document.getElementById("result");

const COUPLE_FACT = 1;

var results = ["GO","KN","DP","DW","UD"];

let submitBtn = document.createElement("button");
submitBtn.classList.add("btn");
submitBtn.classList.add("btn-primary");
submitBtn.classList.add("btn-lg");
submitBtn.classList.add("col-12");
submitBtn.classList.add("trasp-background");
submitBtn.setAttribute("type","button");
submitBtn.setAttribute("onclick", "calculate(2)");

let submit34Btn = document.createElement("button");
submit34Btn.classList.add("btn");
submit34Btn.classList.add("btn-primary");
submit34Btn.classList.add("btn-lg");
submit34Btn.classList.add("col-12");
submit34Btn.classList.add("trasp-background");
submit34Btn.classList.add("mb-2");
submit34Btn.setAttribute("type","button");
submit34Btn.setAttribute("onclick", "calculate(34)");

let checkAllBtn = document.createElement("button");
checkAllBtn.classList.add("btn");
checkAllBtn.classList.add("btn-secondary");
checkAllBtn.classList.add("btn-lg");
checkAllBtn.classList.add("col-12");
checkAllBtn.classList.add("trasp-background");
checkAllBtn.classList.add("mb-2");
checkAllBtn.setAttribute("type","button");
checkAllBtn.setAttribute("onclick", "checkAllFactions()");

let selectorCollapsed = false;
let factionSelector = document.createElement("div");
factionSelector.setAttribute("id", "factionSelector");

let replaceableResultStart = 0;
let availableReplacementFactions = [];
let availableReplacementCouples = [];
let replacementTargetIndex = null;
let replacementTargetType = null;

let toggleSelectorBtn = document.createElement("button");
toggleSelectorBtn.classList.add("btn");
toggleSelectorBtn.classList.add("btn-secondary");
toggleSelectorBtn.classList.add("btn-lg");
toggleSelectorBtn.classList.add("col-12");
toggleSelectorBtn.classList.add("trasp-background");
toggleSelectorBtn.classList.add("mb-2");
toggleSelectorBtn.setAttribute("type", "button");
toggleSelectorBtn.setAttribute("aria-controls", "SELECT_FACT factionSelector");
toggleSelectorBtn.addEventListener("click", toggleFactionSelector);

let bodyEl = document.getElementsByTagName("body")[0];
let HELP_TRANSLATE_El = document.getElementById("HELP_TRANSLATE");
let TITLE_El = document.getElementById("TITLE");
let SELECT_FACT_El = document.getElementById("SELECT_FACT");

function refreshPage()
{
    //todo: replace menu, titles, texts...
    submitBtn.innerText = Strings["RANDOMIZE_2"];
    submit34Btn.innerText = Strings["RANDOMIZE_34"];
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
    DE_RULE.innerText = Strings["DE_RULE"];
    FEEDBACK.innerText = Strings["FEEDBACK"];
    CLOSE.innerText = Strings["CLOSE"];
    CLOSE2.innerText = Strings["CLOSE"];
    refreshSelectionForm();    
}

function refreshSelectionForm()
{
    selectionForm.innerHTML = '';
    factionSelector.innerHTML = '';
    factionSelector.hidden = selectorCollapsed;
    SELECT_FACT_El.hidden = selectorCollapsed;
    toggleSelectorBtn.innerText = Strings[selectorCollapsed ? "SHOW_SELECTOR" : "HIDE_SELECTOR"];
    toggleSelectorBtn.setAttribute("aria-expanded", String(!selectorCollapsed));
    factionSelector.setAttribute("aria-labelledby", "SELECT_FACT");
    updateCheckAllButton();

    selectionForm.appendChild(toggleSelectorBtn);
    selectionForm.appendChild(SELECT_FACT_El);
    factionSelector.appendChild(checkAllBtn);

    for(let d in Deck) {
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
        formGroup.addEventListener("click", function(event) {
            if(event.target.closest("input, label, a, button, select, textarea")) {
                return;
            }
            inputDeck.checked = !inputDeck.checked;
            checkDeck(d, id_d);
        });

        deckItem.appendChild(inputDeck); 

        let labelDeck = document.createElement("label");
        labelDeck.classList.add("form-check-label");
        labelDeck.setAttribute("for", id_d);
        labelDeck.innerText = Deck[d].Name;

        deckItem.appendChild(labelDeck); 

        deck.appendChild(deckItem); 

        //amazon link
/*         let buyLinkDiv = document.createElement("div");
        buyLinkDiv.classList.add("buy-link");
        let buyLink = document.createElement("a");
        buyLink.setAttribute("href", Deck[d].linkBuy);
        buyLink.setAttribute("target", "_blank");
        buyLink.innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg>&nbsp;';
        buyLink.innerHTML += Strings["BUY_DECK"];;




        buyLinkDiv.appendChild(buyLink); 
        deckItem.appendChild(buyLinkDiv);  */


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
        factionSelector.appendChild(formGroup);
    }

    selectionForm.appendChild(factionSelector);
    selectionForm.appendChild(submit34Btn);
    selectionForm.appendChild(submitBtn);

    //activate tooltip:
    $('[data-toggle="tooltip"]').tooltip();
}

function toggleFactionSelector()
{
    selectorCollapsed = !selectorCollapsed;
    factionSelector.hidden = selectorCollapsed;
    SELECT_FACT_El.hidden = selectorCollapsed;
    toggleSelectorBtn.innerText = Strings[selectorCollapsed ? "SHOW_SELECTOR" : "HIDE_SELECTOR"];
    toggleSelectorBtn.setAttribute("aria-expanded", String(!selectorCollapsed));
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
    updateCheckAllButton();
} 

function checkAllFactions()
{
    var includeAll = !Object.keys(Factions).every(function(f) {
        return Factions[f].Include;
    });
    for(var f in Factions) {
        Factions[f].Include = includeAll;
    }
    for(var d in Deck) {
        Deck[d].Include = includeAll;
    }
    refreshSelectionForm();
}

function updateCheckAllButton()
{
    var allFactionsIncluded = Object.keys(Factions).every(function(f) {
        return Factions[f].Include;
    });
    checkAllBtn.innerText = Strings[allFactionsIncluded ? "UNCHECK_ALL" : "CHECK_ALL"];
}


function cleanResult()
{
    result.innerHTML = '';
    $('#result').hide();
    $('#myAlert').hide();
}

function showResult(scrollToResult)
{
    result.innerHTML = '';
    if(scrollToResult !== false) {
        location.hash = "#";
    }

    let res = document.createElement("h4");
    res.innerText = Strings["USE_THIS_FACTIONS"];

    result.appendChild(res); 

    let replacementPanel = document.createElement("div");
    replacementPanel.classList.add("replacement-selector");
    replacementPanel.classList.add("form-group");
    replacementPanel.hidden = true;

    let replacementLabel = document.createElement("label");
    replacementLabel.classList.add("mr-2");
    replacementLabel.setAttribute("for", "replacementFactionSelect");
    replacementLabel.setAttribute("aria-live", "polite");

    let replacementSelect = document.createElement("select");
    replacementSelect.setAttribute("id", "replacementFactionSelect");
    replacementSelect.classList.add("form-control");
    replacementSelect.classList.add("mb-2");

    let replaceButton = document.createElement("button");
    replaceButton.classList.add("btn");
    replaceButton.classList.add("btn-primary");
    replaceButton.classList.add("mr-2");
    replaceButton.setAttribute("type", "button");
    replaceButton.innerText = Strings["REPLACE"];
    replaceButton.disabled = true;

    let cancelReplacementButton = document.createElement("button");
    cancelReplacementButton.classList.add("btn");
    cancelReplacementButton.classList.add("btn-secondary");
    cancelReplacementButton.setAttribute("type", "button");
    cancelReplacementButton.innerText = Strings["CLOSE"];

    replacementSelect.addEventListener("change", function() {
        replaceButton.disabled = !replacementSelect.value;
    });
    replaceButton.addEventListener("click", function() {
        if(replacementTargetType === "couple" && replacementSelect.value) {
            replaceResultCouple(Number(replacementSelect.value));
        } else if(replacementTargetType === "faction" && replacementTargetIndex !== null && replacementSelect.value) {
            replaceResultFaction(replacementTargetIndex, replacementSelect.value);
        }
    });
    cancelReplacementButton.addEventListener("click", function() {
        replacementPanel.hidden = true;
        replacementTargetIndex = null;
        replacementTargetType = null;
    });

    replacementPanel.appendChild(replacementLabel);
    replacementPanel.appendChild(replacementSelect);
    replacementPanel.appendChild(replaceButton);
    replacementPanel.appendChild(cancelReplacementButton);
    result.appendChild(replacementPanel);

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
    th = document.createElement("th");
    th.setAttribute("scope","col");
    th.innerText = Strings["REPLACE"];
    th.classList.add("d-none");
    th.classList.add("d-md-table-cell");
    tr.appendChild(th);
    thead.appendChild(tr); 
    table.appendChild(thead); 

    let tbody = document.createElement("tbody");
    let td = document.createElement("td");
    for(var f in results) {
        let resultIndex = Number(f);
        let faction = results[resultIndex];
        tr = document.createElement("tr");
        th = document.createElement("th");
        th.setAttribute("scope","row");

        modal = createModalFaction(faction);
        modal.innerText = " " + Factions[faction].Name;
        th.appendChild(modal);
        tr.appendChild(th); 

        td = document.createElement("td");
        td.innerText = Deck[Factions[faction].Deck].Name;
        tr.appendChild(td); 

        td = document.createElement("td");
        td.innerText = Factions[faction].Ability;
        td.classList.add("d-none");
        td.classList.add("d-md-table-cell");
        
        emptyTd = document.createElement("td");
        emptyTd.innerText = " ";
        emptyTd.classList.add("d-none");
        emptyTd.classList.add("d-md-table-cell");
        switch(Factions[faction].Phase_ab)
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

        td = document.createElement("td");
        td.classList.add("d-none");
        td.classList.add("d-md-table-cell");
        if(resultIndex < replaceableResultStart) {
            if(availableReplacementCouples.length > 0) {
                tr.classList.add("replaceable-result");

                if(resultIndex === 0) {
                    let currentCoupleName = getCoupleName(results.slice(0, replaceableResultStart));
                    let replacementActions = document.createElement("div");
                    replacementActions.classList.add("replacement-actions");

                    let randomCoupleButton = document.createElement("button");
                    randomCoupleButton.classList.add("btn");
                    randomCoupleButton.classList.add("btn-outline-secondary");
                    randomCoupleButton.classList.add("btn-sm");
                    randomCoupleButton.setAttribute("type", "button");
                    randomCoupleButton.setAttribute("aria-label", Strings["REPLACE_RANDOM_GROUP"] + " " + currentCoupleName);
                    randomCoupleButton.innerText = Strings["REPLACE_RANDOM_GROUP"];
                    randomCoupleButton.addEventListener("click", replaceResultCoupleRandomly);

                    let chooseCoupleButton = document.createElement("button");
                    chooseCoupleButton.classList.add("btn");
                    chooseCoupleButton.classList.add("btn-outline-primary");
                    chooseCoupleButton.classList.add("btn-sm");
                    chooseCoupleButton.setAttribute("type", "button");
                    chooseCoupleButton.setAttribute("aria-label", Strings["REPLACE_CHOOSE_GROUP"] + " " + currentCoupleName);
                    chooseCoupleButton.innerText = Strings["REPLACE_CHOOSE_GROUP"];
                    chooseCoupleButton.addEventListener("click", function() {
                        openReplacementSelector(0, replacementPanel, replacementLabel, replacementSelect, "couple");
                    });

                    replacementActions.appendChild(randomCoupleButton);
                    replacementActions.appendChild(chooseCoupleButton);
                    td.appendChild(replacementActions);
                }

                bindReplacementGestures(tr, resultIndex, replacementPanel, replacementLabel, replacementSelect, "couple");
            } else if(resultIndex === 0) {
                td.innerText = Strings["REPLACE_GROUP_UNAVAILABLE"];
            }
        } else {
            if(availableReplacementFactions.length > 0) {
                tr.classList.add("replaceable-result");

                let replacementActions = document.createElement("div");
                replacementActions.classList.add("replacement-actions");

                let randomButton = document.createElement("button");
                randomButton.classList.add("btn");
                randomButton.classList.add("btn-outline-secondary");
                randomButton.classList.add("btn-sm");
                randomButton.setAttribute("type", "button");
                randomButton.setAttribute("aria-label", Strings["REPLACE_RANDOM"] + " " + Factions[faction].Name);
                randomButton.innerText = Strings["REPLACE_RANDOM"];
                randomButton.addEventListener("click", function() {
                    replaceResultRandomly(resultIndex);
                });

                let chooseButton = document.createElement("button");
                chooseButton.classList.add("btn");
                chooseButton.classList.add("btn-outline-primary");
                chooseButton.classList.add("btn-sm");
                chooseButton.setAttribute("type", "button");
                chooseButton.setAttribute("aria-label", Strings["REPLACE_CHOOSE"] + " " + Factions[faction].Name);
                chooseButton.innerText = Strings["REPLACE_CHOOSE"];
                chooseButton.addEventListener("click", function() {
                    openReplacementSelector(resultIndex, replacementPanel, replacementLabel, replacementSelect, "faction");
                });

                replacementActions.appendChild(randomButton);
                replacementActions.appendChild(chooseButton);
                td.appendChild(replacementActions);
                bindReplacementGestures(tr, resultIndex, replacementPanel, replacementLabel, replacementSelect, "faction");
            } else {
                td.innerText = Strings["REPLACE_UNAVAILABLE"];
            }
        }
        tr.appendChild(td);

        tbody.appendChild(tr); 
    }

    table.appendChild(tbody); 
    result.appendChild(table); 
    let replacementHint = document.createElement("p");
    replacementHint.classList.add("text-muted");
    replacementHint.innerText = Strings["REPLACE_HINT"];
    result.appendChild(replacementHint);

    $('#result').show();
    if(scrollToResult !== false) {
        location.hash = "#result";
    }
} 

function openReplacementSelector(index, panel, label, select, replacementType)
{
    let candidates;
    if(replacementType === "couple") {
        candidates = availableReplacementCouples;
        replacementTargetType = "couple";
        replacementTargetIndex = 0;
        if(candidates.length === 0) {
            return;
        }
        label.innerText = Strings["REPLACE_WITH"].replace("{0}", getCoupleName(results.slice(0, replaceableResultStart)));
    } else {
        candidates = availableReplacementFactions;
        replacementTargetType = "faction";
        replacementTargetIndex = index;
        if(index < replaceableResultStart || candidates.length === 0) {
            return;
        }
        label.innerText = Strings["REPLACE_WITH"].replace("{0}", Factions[results[index]].Name);
    }

    if(candidates.length === 0) {
        return;
    }

    select.innerHTML = '';

    let placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.innerText = Strings[replacementType === "couple" ? "REPLACE_SELECT_GROUP" : "REPLACE_SELECT"];
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    for(let i = 0; i < candidates.length; i++) {
        let option = document.createElement("option");
        if(replacementType === "couple") {
            option.value = String(i);
            option.innerText = getCoupleName(candidates[i]);
        } else {
            option.value = candidates[i];
            option.innerText = Factions[candidates[i]].Name;
        }
        select.appendChild(option);
    }

    panel.hidden = false;
    select.focus();
}

function replaceResultRandomly(index)
{
    if(index < replaceableResultStart || availableReplacementFactions.length === 0) {
        return;
    }
    replaceResultFaction(index, getRandom(availableReplacementFactions, 1)[0]);
}

function replaceResultFaction(index, faction)
{
    if(index < replaceableResultStart || !availableReplacementFactions.includes(faction)) {
        return;
    }

    let replacedFaction = results[index];
    results[index] = faction;
    availableReplacementFactions = availableReplacementFactions.filter(function(availableFaction) {
        return availableFaction !== faction;
    });
    availableReplacementFactions.push(replacedFaction);
    replacementTargetIndex = null;
    replacementTargetType = null;
    showResult(false);
}

function replaceResultCoupleRandomly()
{
    if(availableReplacementCouples.length === 0) {
        return;
    }
    replaceResultCouple(Math.floor(Math.random() * availableReplacementCouples.length));
}

function replaceResultCouple(coupleIndex)
{
    if(coupleIndex < 0 || coupleIndex >= availableReplacementCouples.length) {
        return;
    }

    let replacedCouple = results.slice(0, replaceableResultStart);
    let replacementCouple = availableReplacementCouples[coupleIndex];
    results.splice(0, replaceableResultStart);
    results.unshift.apply(results, replacementCouple);
    availableReplacementCouples.splice(coupleIndex, 1);
    availableReplacementCouples.push(replacedCouple);
    selectedCouple = replacementCouple;
    replacementTargetIndex = null;
    replacementTargetType = null;
    showResult(false);
}

function getCoupleName(couple)
{
    return couple.map(function(faction) {
        return Factions[faction].Name;
    }).join(" + ");
}

function animateSwipe(row, animationClass, onComplete)
{
    let completed = false;
    let timeoutId = window.setTimeout(finish, 250);

    function finish(event)
    {
        if((event && event.target !== row) || completed) {
            return;
        }
        completed = true;
        window.clearTimeout(timeoutId);
        row.removeEventListener("animationend", finish);
        onComplete();
    }

    row.addEventListener("animationend", finish);
    row.classList.add(animationClass);
}

function bindReplacementGestures(row, index, panel, label, select, replacementType)
{
    let touchStart = null;
    let ignoreNextClick = false;

    row.addEventListener("touchstart", function(event) {
        if(event.target.closest("button, select, input")) {
            touchStart = null;
            return;
        }
        let touch = event.changedTouches[0];
        touchStart = {x: touch.clientX, y: touch.clientY};
    }, {passive: true});

    row.addEventListener("touchend", function(event) {
        if(!touchStart) {
            return;
        }
        let touch = event.changedTouches[0];
        let deltaX = touch.clientX - touchStart.x;
        let deltaY = touch.clientY - touchStart.y;
        touchStart = null;

        if(Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        ignoreNextClick = true;
        window.setTimeout(function() {
            ignoreNextClick = false;
        }, 500);

        let animationClass = deltaX < 0 ? "swipe-replace-left" : "swipe-open-right";
        animateSwipe(row, animationClass, function() {
            if(deltaX < 0) {
                if(replacementType === "couple") {
                    replaceResultCoupleRandomly();
                } else {
                    replaceResultRandomly(index);
                }
            } else {
                row.classList.remove(animationClass);
                openReplacementSelector(index, panel, label, select, replacementType);
            }
        });
    }, {passive: false});

    row.addEventListener("click", function(event) {
        if(ignoreNextClick) {
            event.preventDefault();
            event.stopPropagation();
            ignoreNextClick = false;
        }
    });
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

function calculate(playerCount) {
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
    availableReplacementFactions = [];
    availableReplacementCouples = [];
    replacementTargetIndex = null;
    replacementTargetType = null;

    selectedCouple = selectedCouples[Math.floor(Math.random() * selectedCouples.length)];
    availableReplacementCouples = selectedCouples.filter(function(couple) {
        return couple !== selectedCouple && couple.length === selectedCouple.length;
    });

    for(var c in selectedCouple) {
        results.push(selectedCouple[c]);
    }
    replaceableResultStart = selectedCouple.length;

    let needed;
    if(playerCount === 34) {
        // If the selectedCouple is a special 12 cards faction, we need to add 6 normal factions instead of 5
        needed = selectedCouple.length === 1 ? 6 : 5;
    } else {
        // If the selectedCouple is a special 12 cards faction, we need to add 4 normal factions instead of 3
        needed = selectedCouple.length === 1 ? 4 : 3;
    }

    if(selectedFactions.length < needed) { myAlert(Strings["AT_LEAST_FACTIONS"].replace("{0}",needed));  return;}    

    randomFactions = getRandom(selectedFactions, needed);

    for(var f in randomFactions) {
        results.push(randomFactions[f]);
    }

    availableReplacementFactions = selectedFactions.filter(function(faction) {
        return !results.includes(faction);
    });

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
            case 'DE':
                loadScript("data-DE.js", function() {
                    console.log("done"); 
                    setDE();
                    refreshPage();
                });                
                break;
            case 'PT':
                loadScript("data-PT.js", function() {
                    console.log("done"); 
                    setPT();
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
        case "C5A":
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

    setBackground(getRandom(["DP","DW","GO","KN","UD","claim","C5A","C5A","C5A","C5A"],1)[0]); //a little more chance for C5A

    //LAST, IMPORTANT!
    cleanResult();

})();

