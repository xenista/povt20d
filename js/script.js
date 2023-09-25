const button = document.querySelector('#button');
const header = document.querySelector('#header');

button.addEventListener('click', () => {
       header.textContent = Number(header.textContent) + 1;
})