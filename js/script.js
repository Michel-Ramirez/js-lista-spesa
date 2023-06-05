console.log('JS ok')

// prendo l'elemento dal dom
const shopingList = document.getElementById('shoping-list');
const addItems = document.getElementById('item');
const btn = document.getElementById('btn-add');


// creo lista della spesa con un array
let listItem = [];


btn.addEventListener('click', function(){

    //aggiungo la lista le stringhe inserite dal utente
   listItem.push(addItems.value.trim())
    
    
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
        
        
});
    

