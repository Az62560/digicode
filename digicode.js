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
            alea();

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

function alea() {
    
    for (let a = 0; a < htmlButton.length; a++) {
        
        let random = Math.floor(Math.random() * htmlButton.length);
        tableauRandom.push(tableauRandom[random]);
        tableauRandom.splice(random, -1);
        button[a].innerHTML = random;

    }
}


