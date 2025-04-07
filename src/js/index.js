// Function to handle button click
function handleButtonClick(event) {
    const botaoClicado = event.currentTarget;
    const indice = Array.from(botoes).indexOf(botaoClicado);

    // Update selected button
    updateSelection('.botao.selecionado', botaoClicado);

    // Update selected character
    updateSelection('.personagem.selecionado', personagens[indice]);
}

// Utility function to update selection
function updateSelection(selector, newElement) {
    const currentSelected = document.querySelector(selector);
    if (currentSelected) currentSelected.classList.remove('selecionado');
    newElement.classList.add('selecionado');
}

// Select all buttons and characters
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

// Add click event listeners to each button
botoes.forEach(botao => botao.addEventListener('click', handleButtonClick));