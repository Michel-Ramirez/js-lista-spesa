console.log('JS ok')

// prendo l'elemento dal dom
const shopingList = document.getElementById('shoping-list');

// creo lista della spesa con un array
const listItem = ['pane', 'acqua', 'biscotti', 'latte', 'caffè', 'zucchero', 'farina'];



//Monto la lista
let list = `<ul class="list-group">`;

/*****************\| CICLO CON FOR |/ *****************/

// for (i = 0; i < listItem.length; i++) {
//     list += `<li class="list-group-item">${listItem[i]}</li>`;
// }


/*****************\| CICLO CON WHILE |/ *****************/

//scompongo il ciclo del for utilizzando while

// counter
let i = 0;
// condizione
while (i < listItem.length) {
    list += `<li class="list-group-item">${listItem[i]}</li>`;
    // incromento
    i++;
}


//Chiudo la lista
list += `</ul>`
 
//Stampo nel dom
shopingList.innerHTML = list
    
    
    

