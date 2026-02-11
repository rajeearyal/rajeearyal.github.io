
const slides = Array.from(document.querySelectorAll('.slide'));
const track = document.querySelector('.slides');
const prev = document.querySelector('.nav.prev');
const next = document.querySelector('.nav.next');
let index = 0;

function goTo(i) {
  if (!slides.length) return;
  index = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => goTo(index - 1));
next.addEventListener('click', () => goTo(index + 1));

goTo(0);
