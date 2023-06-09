"use strict";
// o querySelector retorna um objeto dependente da string que passarmos no método, como por exemplo:
const img = document.querySelector('img'); // HTMLImageElement.
const video = document.querySelector('video'); // HTMLVideoElement.
// pode se aplicar o uso de instanceof para verificar constantes em caso de captura por id, por exemplo:
const videoID = document.querySelector('videoprincipal');
if (videoID instanceof HTMLVideoElement) {
    videoID.volume; // Retorna 1.
} // normalmente, videoID é reconhecido como um Element, porém ao verificar se ele é uma instância de HTMLVideoElement, ele retorna true e atribui os seus métodos.
// querySelectorAll
const links = document.querySelectorAll('.link'); // Retorna uma NodeList de elementos.
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        return link.href;
    }
});
// Exercicios:
const linksExerc = document.querySelectorAll('.link');
function ativarElemento(elemento) {
    elemento.style.color = 'red';
    elemento.style.border = '2px solid red';
}
linksExerc.forEach((link) => {
    if (link instanceof HTMLElement) {
        ativarElemento(link);
    }
});
