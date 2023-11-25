
let cm = document.querySelector(".cm");
let m = document.querySelector(".m");
let L = document.querySelector(".L");
let ml = document.querySelector(".ml");
let g = document.querySelector(".g");
let mg = document.querySelector(".mg");
let button = document.querySelector(".conv_button");
let input = document.querySelector(".enter_valeur");
let res = document.querySelector(".resultat");


button.addEventListener("click", function conv(){
    let unite = document.getElementById("unite").value;
    if(unite === "m"){
        res.innerHTML = input.value * 100 +" cm";
        
    } else if(unite === "cm"){
        res.innerHTML = input.value / 100 +" m";

    } else if(unite === "L"){
        res.innerHTML = input.value * 1000 +" ml";
    
    } else if(unite === "ml"){
        res.innerHTML = input.value / 1000 +" L";

    } else if(unite === "g"){
        res.innerHTML = input.value * 1000 +" mg";
    
    } else if(unite === "mg"){
        res.innerHTML = input.value / 1000 +" g";
        
    }
});



