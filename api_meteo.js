let url = 'http://88.160.182.153:49500//API/lecture.php';

async function getData() {
// async function sert à récupérer des données venant d'une API.
  let data = await fetch(url);
// await fecht(), sert à attendre les données que l'on va chercher dans une API.
      data = await data.json();
      console.log(data);

  let temp = document.querySelector("#temp");

    for (let a = 0; a < data[0].temperature[a].length; a++) {
        temp.innerHTML += "Température actuelle : " + "<span class=blue>" + data[0].temperature + "</span>" + " °C";

      }

  let hum = document.querySelector("#hum");

    for (let a = 0; a < data[0].humidite[a].length; a++) {
        hum.innerHTML += "Humidité actuelle : " + "<span class=blue>" + data[0].humidite + "</span>" + " %"; 

      }

  let pre = document.querySelector("#pre");

    for (let a = 0; a < data[0].pression[a].length; a++) {
        pre.innerHTML += "Pression actuelle : " + "<span class=blue>" + data[0].pression + "</span>" + " Hpa"; 
        
      }
// boucles pour récupérer les données dans la console.log
    };

getData();


let url2 = "http://88.160.182.153:49500//API/lecture_mult.php?mesures=20";

async function getData2() {

  let data2 = await fetch(url2);

    data2 = await data2.json();
    console.log(data2);

  
  let tabletemp = [];
  let datemes = [];
  let tablehum = [];
  let tablepres = [];
// création de variables tableau pour séparer les données.
  for (let b = 0; b < 20; b++) {
    tabletemp.push(data2[b].temperature);
    datemes.push(data2[b].date_mes);
    tablehum.push(data2[b].humidite);
    tablepres.push(data2[b].pression);
  };
// création de la boucle pour lire les données dans variables tableau
  
  console.log([tabletemp]);
  console.log([datemes]);
  return[datemes,tabletemp,tablehum,tablepres];
  // return permet de sortir une variable ou constante de la fonction.
};

getData2();


async function updatetab() {
  const donnes = await getData2();
  let ctx = document.querySelector("#temperature");

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: donnes[0],
    datasets: [{
      label: 'Température en °C',
      data: donnes[1],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})
};

updatetab();


async function updatetab2() {
  const donnes = await getData2()
  let ctx = document.querySelector("#humidite");

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: donnes[0],
    datasets: [{
      label: 'Humidité en %',
      data: donnes[2],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})
};

updatetab2();


async function updatetab3() {
  const donnes = await getData2()
  let ctx = document.querySelector("#pression");

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: donnes[0],
    datasets: [{
      label: 'Pression en Hpa',
      data: donnes[3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})
};

updatetab3();

// Bien rappeler les functions à chaque fois.
