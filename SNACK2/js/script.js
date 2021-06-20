// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome,
// punti fatti,
// falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Svilupparlo in ES6.



const team = [
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
];

const randomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let x = 0; x < team.length; x++) {
   team[x].punti = randomNumber (10,100);
   team[x].falli = randomNumber (10,100);

}

console.log(team)
