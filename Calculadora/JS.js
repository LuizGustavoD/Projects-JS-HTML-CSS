const buttons = document.querySelectorAll('.calc__buttons button');
const display = document.querySelector('.calc__display input');

// Adiciona evento de clique a cada botão
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.innerText; // Obtém o texto do botão clicado
    let currentDisplay = display.value;

    switch (value) {
      case 'C': // Limpa o display
        display.value = '';
        break;

      case '=': // Calcula o resultado
        try {
          display.value = eval(currentDisplay); // Avalia a expressão matemática
        } catch (error) {
          display.value = 'Erro'; // Exibe erro se a expressão for inválida
        }
        break;

      default: // Adiciona o valor do botão ao display
        display.value += value;
        break;
    }
  });
});