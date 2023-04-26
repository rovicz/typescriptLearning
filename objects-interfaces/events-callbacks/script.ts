const button = document.querySelector('button');

function  handleClick(event: MouseEvent) {
  console.log(event)
}

button?.addEventListener('click', handleClick);

function ativarMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  } else if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);