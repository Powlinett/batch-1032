// TODO: write your code here
// ajouter un event listener qui va suivre un keyup
// savoir quelle touche a été appuyée
// si c'est "a" voitureA avance
// si c'est "b" voitureB avance
// avancer = retirer la class active et l'ajouter au suivant

const isPartyFinished = () => {
  const lastTd = document.querySelector('.active + .finish');
  return lastTd;
};

const startCar = (id) => {
  const player = document.querySelector(id);
    const tdActive = player.querySelector('.active');
    const nextTd = player.querySelector('.active + td');
    tdActive.classList.remove('active');
    nextTd.classList.add('active');
};

document.addEventListener('keyup', (event) => {
  if (!isPartyFinished()) {
    const key = event.key;
    if (key === "a") {
      startCar("#player1-race");
    } else if (key === "b") {
      startCar("#player2-race");
    }
  }
});

