//global variables

let w = 50 + 'px';
let h = 50 + 'px';
let win;
let x = (Math.random() * 500) + 1;
let y = (Math.random() * 500) + 1;
let delay;

//body

window.addEventListener('load', () => { 

delay = setInterval(function()  {

win = window.open('','', 'height=' + h + ',' + 'width=' + w + ',' + 'left=' + x + 'px' + ',' + 'top=' + y + 'px');
win.document.write('Game Over');
window.location.reload();
win.document.body.style.color = "red";

}, 110);

});

