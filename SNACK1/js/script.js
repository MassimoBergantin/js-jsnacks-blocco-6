// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6. (modificato

// var bikes = [
//     {
//         nome: 'Zed',
//         weight: 30
//     },
//     {
//         nome: 'Xeno',
//         weight: 40
//     },
//     {
//         nome: 'Lit',
//         weight: 100
//     },

// ];

// var MinorBikeWeight; 

// var lastMinorBikeWeight = 0;

// for (var x = 0; x < bikes.length; x++) {


//     var thisWeight = bikes[x].weight;

//     if (thisWeight < lastMinorBikeWeight) {

//         MinorBikeWeight = bikes[x];

//         lastMinorBikeWeight = thisWeight;
//     }
// }
    
// console.log(MinorBikeWeight);



// ------------------


var bikes = [
    {
        nome: 'Zed',
        weight: 30
    },
    {
        nome: 'Xeno',
        weight: 40
    },
    {
        nome: 'Lit',
        weight: 100
    },

];

let MinorBikeWeight; 

let lastMinorBikeWeight = 100; 


for (let x = 0; x < bikes.length; x++) {

    const { weight } = bikes[x];
    
    if (weight < lastMinorBikeWeight) {
        MinorBikeWeight = bikes[x];
        lastMinorBikeWeight = weight;
    }
}


const { nome, weight } = MinorBikeWeight;

console.log(`La bici bici più leggera é ${nome} ${weight}`)



