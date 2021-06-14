// création DIV principale ------------------------------------------

let myDiv = document.body.appendChild(document.createElement("div"));
myDiv.setAttribute("class", "myDiv");

// création DIV input + bouton ADD ---------------------------------

let divInput = myDiv.appendChild(document.createElement("div"));
divInput.setAttribute("class", "divInput")

// création input + bouton ADD

let myInput = divInput.appendChild(document.createElement("input"));
myInput.setAttribute("class", "myInput");

let addButton = divInput.appendChild(document.createElement("div"));
addButton.setAttribute("class", "addButton");
addButton.textContent = "+ ADD";

// création DIV titre  -------------------------------------------

let divTitre = myDiv.appendChild(document.createElement("div"));

// création titre 

let myTitle = myDiv.appendChild(document.createElement("div"));
myTitle.setAttribute("class", "myTitle");
myTitle.textContent = "Ma Todo List";

// création DIV tri button --------------------------------------

let divChoice = myDiv.appendChild(document.createElement("div"));
divChoice.setAttribute("class", "divChoice");

// création tri button

let tabTri = ["Terminé", "A faire", "Tout"];

tabTri.forEach(element => {
    let temp = divChoice.appendChild(document.createElement("div"));
    temp.textContent = element;
});

// création DIV tâches ----------------------------------------

let divTask = myDiv.appendChild(document.createElement("div"));

// mise en place ajout des tâches -----------------------------

let temp;

addButton.addEventListener("click", () => {
    temp = divTask.appendChild(document.createElement("div"));
    temp.setAttribute("class", "toDelete")
    temp.textContent = myInput.value;
    myInput.value = "";
});

// création de la DIV clear ---------------------------------

let clearDiv = myDiv.appendChild(document.createElement("div"));
clearDiv.setAttribute("class", "clearDiv");

// création du bouton clear

let clearButton = clearDiv.appendChild(document.createElement("div"));
clearButton.setAttribute("class", "clearButton")
clearButton.textContent = "Clear";

// création de la fonctionnalité "clear"

clearButton.addEventListener("click", () => {
    // let test = Array.from(divTask.children);
    // console.log(test)
    // console.log(test.splice(0, 0));
    // temp = test.splice(0, 0);

    // let test = new Set();
    // let test1 = Array.from(divTask.children)
    // console.log(test);
    // test.add(test1);
    // console.log(test);
    // test.clear();
    // console.log(test);

    // let test = document.getElementsByClassName("toDelete");
    // console.log(test);
    // test.parentNode.removeChild(test)
    // console.log(test);

    let test = document.getElementsByClassName("toDelete");
    console.log(test);
    test.replaceWith("");
})



