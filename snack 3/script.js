// Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.;


function arrayCut(arr, start, end) {
  return arr.filter((el, i) => i >= start && i <= end)
}


const arr = ['a','b','c','d','e']

console.log(arrayCut(arr, 1, 3)); 