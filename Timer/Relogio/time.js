const revealTime = document.getElementById('clockDisplay');



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTime() {
  while (true) {
      const time = new Date();
      let timeString = time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      revealTime.innerHTML = timeString;
      console.log(timeString);
      await sleep(1000);
  }
}


getTime();


