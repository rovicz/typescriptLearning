"use strict";
const button = document.querySelector('button');
function handleClick(event) {
    console.log(event);
}
button?.addEventListener('click', handleClick);
function ativarMenu(event) {
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
    }
    else if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
}
document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);
// uso de This.
const button2 = document.querySelector('#button2');
function handleClick2(event) {
    console.log(this.innerHTML); // o this só funciona caso eu defina a instância dele, como visto acima.
}
button2?.addEventListener('click', handleClick2);
