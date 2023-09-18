// 1 selezionare i miei elementi e salvarli in una variabile

// 2 fare un ciclo per generare una griglia 10x10 

// 3 ad ogni quadrato aggiungere un evento click

// 4 al click del quadrato aggiungo la classe .clicked 

const container = document.querySelector('.container');
const menu =      document.querySelector('.top-menu');
reset()

init()







// da qui iniziano tutte le mie funzioni 

function init(){
  for(let i = 1 ; i <= 100 ; i++){
    const sqaure = createSquare(i);
    // aggiungo gli eventi al click dei quadrati
    sqaure.addEventListener('click' , function(){
    
    console.log(this);
    // leggo la proprietà custom attraverso questo ID
    console.log(this._squareID);
    // this.innerText legge in contenuto del mio elemento
    console.log(this.innerText);

    this.classList.toggle('clicked');
    this.classList.toggle('oddEven'(this._squareID));
    })
    
    container.append(sqaure);
  }
  
}

function createSquare(index){
  //  devo creare lo square
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  // aggiungo una proprietà custom con l'indice (numero del quadrato)
  newSquare._squareID = index;
  newSquare.innerHTML = `<span>${index}</span>`;
  return newSquare;
}


function createBtnStart(){
  // devo creare un bottone di Start
  const startBtn = document.createElement('button');
  startBtn.innerHTML = 'START';
  startBtn.addEventListener('click' , function(){
    menu.innerHTML = '';
    container.innerHTML = '';
    init();
  })
  return startBtn;
}
function reset(){
  container.innerHTML = '';
  menu.append(createBtnStart());
}

function oddEven(id){
  if(id % 2)return 'odd';
  return 'even';

}