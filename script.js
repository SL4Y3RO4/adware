//global variables

let w = 50 + 'px';
let h = 50 + 'px';
let win;
let x = (Math.random() * 500) + 1;
let y = (Math.random() * 500) + 1;
let delay;
let img;

//body

/*
img = document.createElement('img');
img.src = 'oof.jpg';
*/
window.addEventListener('load', () => { 

delay = setInterval(function()  {

win = window.open('https://png.pngitem.com/pimgs/s/418-4181737_roblox-oof-hd-png-download.png','', 'height=' + h + ',' + 'width=' + w + ',' + 'left=' + x + 'px' + ',' + 'top=' + y + 'px');
window.location.reload();
win.document.body.style.color = "red";

}, 110);

});

