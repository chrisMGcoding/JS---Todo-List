// création DIV principale ------------------------------------------

let myDiv = document.body.appendChild(document.createElement("div"));
myDiv.setAttribute("class", "myDiv");

// création DIV input + bouton ADD ---------------------------------

let divInput = myDiv.appendChild(document.createElement("div"));
divInput.setAttribute("class", "divInput")

// création input + bouton ADD

let myInput = divInput.appendChild(document.createElement("input"));
myInput.setAttribute("class", "myInput");
myInput.setAttribute("placeholder", "Encodez votre tâche ici");

let addButton = divInput.appendChild(document.createElement("div"));
addButton.setAttribute("class", "addButton");
addButton.textContent = "+ ADD";

// création DIV titre  -------------------------------------------

let divTitre = myDiv.appendChild(document.createElement("div"));

// création titre 

let myTitle = myDiv.appendChild(document.createElement("h1"));
myTitle.setAttribute("class", "myTitle");
myTitle.innerHTML = 'To Do List';

// création DIV tri button --------------------------------------

let divChoice = myDiv.appendChild(document.createElement("div"));
divChoice.setAttribute("class", "divChoice");

// création tri button

let tabTri = ["Terminé", "A faire", "Tout"];

tabTri.forEach(element => {
    let temp = divChoice.appendChild(document.createElement("div"));
    temp.textContent = element;
    temp.setAttribute("class", "tri")
});

// création fonctionnalité "terminé"

let done = divChoice.firstChild;

done.addEventListener("click", () => {
    divTaskTab.forEach(element => {
        if (element.classList.contains("validate")) {
            console.log("ok");
        } else {
            element.style.display = "none";
            element.classList.add("delete");
        };
    })
})

// création fonctionnalité "a faire"

let undone = divChoice.getElementsByTagName("div")[1];

undone.addEventListener("click", () => {
    divTaskTab.forEach(element => {
        if (element.classList.contains("notValidate")) {
            element.classList.remove("delete");
            element.style.display = "flex";
        } 
        else {
            element.style.display = "none";
            element.classList.add("delete");
        }
    })
});

// création fonctionnalité "tout"

let alldone = divChoice.getElementsByTagName("div")[2];

alldone.addEventListener("click", () => {
    divTaskTab.forEach(element => {
        if (element.classList.contains("divTask")) {
            element.style.display = "flex";
        } else {
            console.log("ok");
        }
    })
})



// création DIV tâches ----------------------------------------

// création d'une div pour le texte et une div pour les différentes actions possibles

// mise en place ajout des tâches 

let divTaskMain = myDiv.appendChild(document.createElement("div"));
divTaskMain.setAttribute("class", "divTaskMain");

let divTaskTab = [];

let divTask;

addButton.addEventListener("click", () => {
    // création de la tâche en tant que tel

    divTask = divTaskMain.appendChild(document.createElement("div"));
    divTask.setAttribute("class", "divTask");
    divTask.classList.add("notValidate");
    let inputTask = divTask.appendChild(document.createElement("p"));
    inputTask.textContent = myInput.value;
    myInput.value = "";

    // stockage de toutes les tâches dans un tableau
    divTaskTab.push(divTask);
    console.log(divTaskTab.length);

    let choiceTask = divTask.appendChild(document.createElement("p"));

    let deleteTask = choiceTask.appendChild(document.createElement("span"));
    deleteTask.textContent = "delete";
    deleteTask.setAttribute("class", "tasks");

    let changeTask = choiceTask.appendChild(document.createElement("span"));
    changeTask.textContent = "change";
    changeTask.setAttribute("class", "tasks");

    let validateTask = choiceTask.appendChild(document.createElement("span"));
    validateTask.textContent = "validate";
    validateTask.setAttribute("class", "tasks");


    // suppression de la tâche
    deleteTask.addEventListener("click", (e) => {
        let papa = e.target.parentNode.parentNode;
        papa.setAttribute("class", "delete");
        papa.style.display = "none";
    });

    // validation ou non de la tâche
    
    validateTask.addEventListener("click", (e) => {
        let papa = e.target.parentNode.parentNode;
        if (papa.classList.contains("validate")) {
            papa.classList.remove("validate");
        } else {
            papa.classList.add("validate");
            papa.classList.remove("notValidate");
        }
    });

    // changement de la tâche
    changeTask.addEventListener("click", () => {
        let changement = prompt("écrivez la modification");
        inputTask.textContent = changement;
    });

    inputTask.addEventListener("dblclick", () => {
        let changement = prompt("écrivez la modification");
        inputTask.textContent = changement;
    })

    // fonction clear
    clearButton.addEventListener("click", () => {
        divTaskTab.forEach(element => 
            element.style.display = "none",
            )
    })

});



// création de la DIV clear ---------------------------------

let clearDiv = myDiv.appendChild(document.createElement("div"));
clearDiv.setAttribute("class", "clearDiv");

// création du bouton clear

let clearButton = clearDiv.appendChild(document.createElement("div"));
clearButton.setAttribute("class", "clearButton")
clearButton.textContent = "Clear";



