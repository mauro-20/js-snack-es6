// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const roadBikes = [
  {
    'nome': 'colnago',
    'peso': 6.8
  },
  {
    'nome': 'specialized',
    'peso': 7.2
  },
  {
    'nome': 'pinarello',
    'peso': 6.7
  },
  {
    'nome': 'deRosa',
    'peso': 7.0
  },
  {
    'nome': 'canyon',
    'peso': 7.4
  }
];


let biciLeggera = roadBikes[0]
for (let i = 1; i < roadBikes.length; i++) {
  if (roadBikes[i].peso < biciLeggera.peso) {
    biciLeggera = roadBikes[i]
  }
}

// destrutturazione di biciLeggera
const { nome, peso } = biciLeggera
// uso del template litteral
console.log(`la bici più leggera è la ${nome} e pesa ${peso}kg`);