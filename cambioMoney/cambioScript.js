const form = document.getElementById('converterForm');
const userInput = document.getElementById('amount');
const from = document.getElementById('fromCurrency');
const to = document.getElementById('toCurrency');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = userInput.value;
    const fromCurrency = from.value;
    const toCurrency = to.value;

    if (amount === '' || isNaN(amount)) {
        result.innerHTML = '<p class="error">Please enter a valid amount.</p>';
        return;
    }

    try {
        const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        result.innerHTML = `<h2 class="result-title">Result: </h2><p class="result-text">${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}</p>`;
    } catch (error) {
        result.innerHTML = '<p class="error">Error fetching conversion rate. Please try again later.</p>';
    }
});


