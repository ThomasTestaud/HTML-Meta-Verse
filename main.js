import RC from './RC.js'
import Human from './Human.js'
import Car from './Car.js'
import Camera from './Camera.js'
import Wall from './Wall.js'


let container = document.querySelector('.car-city-container');

let cont = document.querySelector('.car-city-app');

let camera = new Camera(container);









let human = new Human('#player');
let car = new Car('panda');
let player = human;




//container.scrollTo(1000, 0);
//container.scrollTo(player.positionX, player.positionY);





let rc = new RC();

function map(x) {
 rc.mapAccelerate(x, '#rc-up');
 rc.mapDecelerate(x, '#rc-down');
 rc.mapTurnLeft(x, '#rc-left');
 rc.mapTurnRight(x, '#rc-right');
}

map(human);
map(car);












//TOGGLE CHANGE STATE
let type = 'human';
document.addEventListener('keydown', function() {
 message = chatBar.value;
 if (event.ctrlKey) {
  if (type === 'human') {
   type = 'panda';
   player = car;
   car.use();

  }
  else {
   type = 'human';
   player = human;
   car.use();
  }
 }
});










// ChatBar
let RTelements = document.querySelector('#RTelements');
let chatBar = document.querySelector('.chat-bar');
let message = '';

chatBar.addEventListener('keyup', function() {
 message = chatBar.value;
 if (event.key === "Enter") {
  chatBar.value = '';
  message = '';
 }
})







//Création de la map
let wall1 = new Wall(1050, 2500, 100, 100);
let wall2 = new Wall(4150, 6300, 100, 100);
let wall3 = new Wall(250, 50, 250, 100);
let wall4 = new Wall(0, 500, 100, 400);
let wall5 = new Wall(500, 100, 400, 100);
let wall6 = new Wall(500, 800, 100, 100);
let wall7 = new Wall(850, 100, 100, 100);
let wall8 = new Wall(700, 350, 100, 100);
let wall9 = new Wall(1200, 0, 100, 100);
let wall10 = new Wall(1100, 400, 400, 100);
let wall11 = new Wall(3100, 1200, 400, 100);
let wall12 = new Wall(1100, 4000, 400, 100);
let wall13 = new Wall(-80, -80, 10000, 100);
let wall14 = new Wall(-80, -80, 100, 10000);








////////////// DATA TRANSMITER
setInterval(function() {
 // player.refresh;
 let update = new Request('index.php?route=refresh', {
  method: 'POST',
  body: JSON.stringify({

   positionX: player.positionX,
   positionY: player.positionY,
   direction: car.direction,
   chatMessage: message,
   playerType: type
  })


 })

 fetch(update)
  .then(res => res.text())
  .then(res => {
   RTelements.innerHTML = res;
   car.refresh();
   human.refresh();
   //camera.focus(player);
  })

}, 150);
