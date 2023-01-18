import '../assets/styles/style.scss'

// arreglo para almacenar los colores
let colors =['red','blue', 'green', 'yellow'];

// patron del juego

let gamep = [];

//patron de clicks
let gameClicksP = [];

//funcion para iniciar el juego 

let start = false;
let level = 0;

// evento para que registre una tecla e inicie el juego

$(document).keydown(()=>{
  if(!start){
    $('#level-title').text('Level' + level);
    start = true;
    nextSequence();
  }
});

//evento ala que el usuario le esta dando click

$('.container__row__btn').click(function(){
  let userColor = $(this).attr('id');
  gameClicksP.push(userColor);
  playSound(userColor);

  annimateClick(userColor);

  checkAnswer(gameClicksp.length-1);
})


//funcion para crear la secuencia del juego 

function nextSequence() {
  //reiniciar los click
  gameClicksP =[];

  //actualizar el nivel 
  level++;
  $('#level-titel').text('Level' + level);

  //numeros aleatorios para el patron
  let randomNumber = Math.random() *4;
  randomNumber = Math.floor(randomNumber);

  //usar numero aleatorio  para llamar el btn seleccionado
  let randomColor;
  randomColor= colors[randomNumber];

  //almacenar el numero en el patron 
  gamep.push(randomColor);
  $('#' + randomColor).fadein(100).fadeOut(100).
  fadein(100);
  playSound(randomColor);
}


//funcion para confirmar los clicks de lo usuario

function checkAnswer(currentLevel) {
  if (gamep[currentLevel]===gameClicksP[currentLevel]) {
    if (gamep.length===gameClicksP.length) {
      setTimeout(()=>{
        nextSequence();
      },1000);
    }
    
  }else{
    //mostrar sonido de error
    playSound('wrong');

    //clases para finalizar el juego
    $('body').addClass('game-over');

    //cambiar titulo para poder reiniciarlo
    $('#level-title').text('Game Over, Please restart!');

    //quitar las clases agregadas
    setTimeout(()=>{
      $('body').removeClass('game-over');
    },400);

    //llamar funcion para reiniciar el juego
    startOver()
  }
  
}
// funcion para emular sonidos 
function playSound(color) {
  let audio = new Audio('../assets/sounds/' + color + '.mp3');
  audio.play(); 
}


