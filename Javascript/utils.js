function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}
function Reload(){
  setTimeout(()=>{
    console.log("Reload");
    window.location.reload()
  },5000)
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId)
  document.querySelector('#tie').style.display = 'flex'
  if (player.health === enemy.health) {
    if(document.querySelector('#tie').innerHTML != 'Tempo Esgotado!'){
      document.querySelector('#tie').innerHTML = 'Tempo Esgotado!'
      enemy.switchSprite('death')
      player.switchSprite('death')
      Reload()
    }
  } else if (player.health > enemy.health) {
    if(document.querySelector('#tie').innerHTML != 'Jogador 1 Ganhou!'){
      document.querySelector('#tie').innerHTML = 'Jogador 1 Ganhou!'
      enemy.switchSprite('death')
      Reload()
    }
  } else if (player.health < enemy.health) {
    if(document.querySelector('#tie').innerHTML != 'Jogador 2 Ganhou!'){
      document.querySelector('#tie').innerHTML = 'Jogador 2 Ganhou!'
      player.switchSprite('death')
      Reload()
    }
  }
}

let timer = 60
let timerId
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })
  }
}
