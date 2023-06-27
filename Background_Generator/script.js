let btn = document.querySelector('.btn');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let h3 = document.querySelector('h3');
let body = document.body;
let direction = 'right';

h3.textContent = `background: linear-gradient(to right, #ff0000, #ffff00)`;

btn.addEventListener('click', () => {
  if (direction === 'right') {
    direction = 'left';
    return addCodeSnippet(direction);
  }
  if (direction !== 'right') {
    direction = 'right';
    addCodeSnippet(direction);
  }
});

color1.addEventListener('input', () => {
  addCodeSnippet();
});

color2.addEventListener('input', () => {
  addCodeSnippet();
});

function addCodeSnippet(direction = 'right') {
  let gradient = `linear-gradient(to ${direction}, ${color1.value}, ${color2.value})`;
  h3.textContent = `background: ${gradient};`;
  body.style.backgroundImage = gradient;
}
