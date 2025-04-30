const birthday = document.getElementById("birthdate");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const result = document.getElementById("result");

function getDateDifference() {
  const birthdate = new Date(birthday.value);
  const now = new Date();

  let age = now.getFullYear() - birthdate.getFullYear();
  let monthDiff = now.getMonth() - birthdate.getMonth();
  let dayDiff = now.getDate() - birthdate.getDate();
  let hourDiff = now.getHours() - birthdate.getHours();
  let minuteDiff = now.getMinutes() - birthdate.getMinutes();
  let secondDiff = now.getSeconds() - birthdate.getSeconds();

  if (hourDiff < 0) {
    hourDiff += 24;
    dayDiff--;
  }
  if (minuteDiff < 0) {
    minuteDiff += 60;
    hourDiff--;
  }
  if (secondDiff < 0) {
    secondDiff += 60;
    minuteDiff--;
  }

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
    monthDiff += 12;
  }

  if (dayDiff < 0) {
    dayDiff += 30; // Aproximação, você pode calcular o número correto de dias do mês
  }

  if (age < 0) {
    result.innerHTML = "Data inválida";
  } else {
    result.innerHTML = `<h2 class = "titleResult"> <p>Your age is </h2>${age} anos, ${monthDiff} meses, ${dayDiff} dias, ${hourDiff} horas, ${minuteDiff} minutos e ${secondDiff} segundos.</p>`;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getDateDifference();
  startLiveUpdate();
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startLiveUpdate() {
  while (true) {
    getDateDifference();
    await sleep(1000);
  }
}