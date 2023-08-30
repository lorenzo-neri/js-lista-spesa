/* 

Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

*/

let shopList = ['bread', 'milk', 'coockies', 'fish', 'potato', 'lightsaber'];

let bodyEl = document.querySelector('body');
let listEl = document.createElement('ul');

bodyEl.append(listEl);

let i = 0;

while (i < shopList.length) {
    
    const item = shopList[i];
    console.log(item);
    let listItemEl = document.createElement('li');
    listItemEl.innerText = item; 
    listEl.append(listItemEl);
    
    i++
}



