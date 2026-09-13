const question = document.getElementById('question');
const buttons = document.getElementById('buttons');
const message = document.getElementById('message');

document.getElementById('ditMoi').addEventListener('click', () => {
  question.textContent = "Bahhhhh je t'aiiiime ❤️";
  buttons.innerHTML = `
    <button id="aussi">Moi aussi je t'aime</button>
    <button id="ok">Ok 🫩</button>
    <button id="deteste">Et bah moi je te déteste</button>
  `;

  // Seul ce bouton marche vraiment
  document.getElementById('aussi').addEventListener('click', () => {
    question.textContent = "Youuuupiiiiiiii 😍";
    message.textContent = "(j'espère que tu voulais pas appuyer sur un autre bouton hin 😑)";
    buttons.innerHTML = "";
  });

  // Les autres sont désactivés
  document.getElementById('ok').disabled = true;
  document.getElementById('deteste').disabled = true;
});