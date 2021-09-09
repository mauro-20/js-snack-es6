// Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.;


const randomNumber = () => Math.floor(Math.random() * 20);
const teamsFaults = [];

// Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teams = [
  {
    'nome': 'Atletico ma non troppo',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Borussia Porkmund',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Aston Birra',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Divano Kiev',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Masterchef United',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Rubin Kebab',
    'puntiFatti': 0,
    'falliSubiti': 0
  }
];

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
for (let i = 0; i < teams.length; i++) {

  for (let key in teams[i]) {
    if (teams[i][key] == 0)
      teams[i][key] = randomNumber();
  }

  // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.;
  const { nome, falliSubiti } = teams[i];
  const team = {
    nome,
    falliSubiti
  }
  teamsFaults.push(team)
}


console.log(teams);
console.log(teamsFaults);

