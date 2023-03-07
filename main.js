import RC from './RC.js'
import Human from './Human.js'
import Transmiter from './Transmiter.js'

let rc = new RC();


let player = document.querySelector('#player');




let human = new Human('#player');


//console.log(human.positionX);
//console.log(human.positionY);


function map(x) {
 rc.mapAccelerate(x, '#rc-up');
 rc.mapDecelerate(x, '#rc-down');
 rc.mapTurnLeft(x, '#rc-left');
 rc.mapTurnRight(x, '#rc-right');
}
map(human);

let RTelements = document.querySelector('#RTelements');

//human.refresh();

let chatBar = document.querySelector('.chat-bar');
let message = '';



chatBar.addEventListener('keyup', function() {
 message = chatBar.value;
 if (event.key === "Enter") {
  chatBar.value = '';
  message = '';
  console.log('enter');
 }
})



////////////// DATA TRANSMITER
setInterval(function() {


 let update = new Request('index.php?route=update', {
  method: 'POST',
  body: JSON.stringify({ positionX: human.positionX, positionY: human.positionY, chatMessage: message })
 })

 fetch(update)
  .then(res => res.text())
  .then(res => {})



 let myRequest = new Request('index.php?route=refresh', {
  method: 'POST',
  body: JSON.stringify({})
 })
 fetch(myRequest)
  .then(res => res.text())
  .then(res => {
   RTelements.innerHTML = res;
  })



}, 120);
