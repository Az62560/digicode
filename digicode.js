let button = document.querySelectorAll(".btn");
let affichage = document.querySelector(".affichage");
let htmlButton = [1,2,3,4,5,6,7,8,9];
let tableauRandom = [];


for (let i = 0; i < button.length; i++) { 
    
    button[i].innerHTML = htmlButton[i];
    button[i].addEventListener("click", () => {
        
        if (affichage.innerHTML.length < 4) {

            affichage.innerHTML += button[i].innerHTML;

            color(); 
            random();
            generateRandom();
            }
        }
    )
}

function color() {

    if(affichage.innerHTML === "1234" ) {  
        affichage.style.backgroundColor = "green";

        setTimeout(function(){
        location.reload();
        }, 5000); 
        } 
    else if (affichage.innerHTML !== "1234" && affichage.innerHTML.length === 4){
        affichage.style.backgroundColor = "red";

        setTimeout(function(){
        location.reload();
        }, 2000);    
    }    
}


let tableau;
    let numberTab;
    let nbRandom;
// Fonction de mélange aléatoire
function random() {
    tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numberTab = [];
    for (let i = 0; i < 9; i++) {
        nbRandom = Math.floor(Math.random() * tableau.length);
        numberTab.push(tableau[nbRandom]);
        tableau.splice(nbRandom, 1);
       
    }
   
}

let boxes = document.querySelectorAll('.btn');
let result = document.querySelector('.affichage');
// Fonction de génération de nombre aléatoire
function generateRandom() {
        random()
        for (let b = 0; b < boxes.length; b++) {
            boxes[b].innerHTML = numberTab[b];  
        }
    }
