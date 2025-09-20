function sendMoney() {
  alert('Send Money feature coming soon!');
}

function openExchange() {
  const exchangeSection = document.getElementById('exchange-section');
  exchangeSection.classList.toggle('hidden');
}

function exchangeCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('currency-from').value;
  const to = document.getElementById('currency-to').value;
  const result = document.getElementById('exchange-result');

  if (isNaN(amount) || amount <= 0) {
    result.textContent = 'Please enter a valid amount.';
    return;
  }
  if (from === to) {
    result.textContent = 'Please choose two different currencies.';
    return;
  }

  // Mock conversion rates (for demo purposes)
  const rates = {
    USD: { EUR: 0.9, GBP: 0.8 },
    EUR: { USD: 1.1, GBP: 0.88 },
    GBP: { USD: 1.25, EUR: 1.14 }
  };

  const converted = amount * rates[from][to];
  result.textContent = `${amount.toFixed(2)} ${from} = ${converted.toFixed(2)} ${to}`;
}
