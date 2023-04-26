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

// uso de This.

const button2 = document.querySelector('#button2');

function handleClick2(this: HTMLButtonElement, event: Event) { // pode se sacrificar o this e utilizar o event como "currentTarget", mas assim deve ser feito uma verificação utilizando o instanceof.
  console.log(this.innerHTML) // o this só funciona caso eu defina a instância dele, como visto acima.
}

button2?.addEventListener('click', handleClick2); 

// Atividade:

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event: PointerEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains('active');
    if (active) {
      nav.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir Menu');
    } else {
      nav.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar Menu');
    }
  }
}

btnMobile?.addEventListener('pointerdown', toggleMenu);