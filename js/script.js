// 1 selezionare i miei elementi e salvarli in una variabile

// 2 fare un ciclo per generare una griglia 10x10 

// 3 ad ogni quadrato aggiungere un evento click

// 4 al click del quadrato aggiungo la classe .clicked 




for(let i = 1 ; i <= 100 ; i++){
  const sqaure = createSquare();
}



function createSquare(){
  //  devo creare lo square
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  return newSquare;
}