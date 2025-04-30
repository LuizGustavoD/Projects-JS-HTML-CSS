// Seleção dos botões e elementos
const addHour = document.getElementById('addHour');
const addMinute = document.getElementById('addMinute');
const addSecond = document.getElementById('addSecond');
const lessHour = document.getElementById('lessHour');
const lessMinute = document.getElementById('lessMinute');
const lessSecond = document.getElementById('lessSecond');
const buttonsStart = document.querySelectorAll('.buttonsPlay button');
const clock = document.getElementById('clockDisplay');
const themeButton = document.querySelectorAll('.buttonsTheme button');

let timeInSeconds = 0;
let timerInterval = null;

// Atualiza o display do relógio
function updateClockDisplay() {
    const date = new Date(timeInSeconds * 1000);
    clock.innerHTML = date.toISOString().substr(11, 8);
}

// Iniciar cronômetro
function startTimer() {
    if (timerInterval || timeInSeconds <= 0) return;
    timerInterval = setInterval(() => {
        if (timeInSeconds > 0) {
            timeInSeconds--;
            updateClockDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
}

// Pausar cronômetro
function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Resetar cronômetro
function resetTimer() {
    pauseTimer();
    timeInSeconds = 0;
    updateClockDisplay();
}

// Adicionar tempo
addHour.addEventListener('click', () => {
    timeInSeconds += 3600;
    updateClockDisplay();
});
addMinute.addEventListener('click', () => {
    timeInSeconds += 60;
    updateClockDisplay();
});
addSecond.addEventListener('click', () => {
    timeInSeconds += 1;
    updateClockDisplay();
});

// Remover tempo
lessHour.addEventListener('click', () => {
    timeInSeconds = Math.max(0, timeInSeconds - 3600);
    updateClockDisplay();
});
lessMinute.addEventListener('click', () => {
    timeInSeconds = Math.max(0, timeInSeconds - 60);
    updateClockDisplay();
});
lessSecond.addEventListener('click', () => {
    timeInSeconds = Math.max(0, timeInSeconds - 1);
    updateClockDisplay();
});

// Iniciar, Pausar, Resetar
buttonsStart.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.value === "start") startTimer();
        else if (button.value === "pause") pauseTimer();
        else if (button.value === "reset") resetTimer();
    });
});

// Trocar tema
themeButton.forEach((button) => {
    button.addEventListener('click', () => {
        themeButton.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        if (button.value === "dark-mode") {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else if (button.value === "white-mode") {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    });
});
