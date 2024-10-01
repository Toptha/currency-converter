const API_KEY = 'a59475134c772e458688b1ba8d29ba8aE';
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        if (data.rates && data.rates[toCurrency]) {
            const rate = data.rates[toCurrency];
            const result = (amount * rate).toFixed(2);
            document.getElementById('to-amount').value = result;
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        } else {
            throw new Error('Unable to fetch exchange rate');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error fetching exchange rate. Please try again.';
    }
}
convertCurrency();