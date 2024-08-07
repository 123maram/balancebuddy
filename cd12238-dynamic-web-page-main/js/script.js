const motivationBtn = document.getElementById('motivation-btn');
const motivationQuote = document.getElementById('motivation-quote');
const quote = document.getElementById('quote');
const thankYouBtn = document.getElementById('thank-you-btn');

const quotes = [
  'Believe you can and you\'re halfway there',
  'It does not matter how slowly you go as long as you do not stop',
  'Success is not final, failure is not fatal: It is the courage to continue that counts',
  'Don\'t watch the clock; do what it does. Keep going',
  'You miss 100% of the shots you don\'t take'
];

motivationBtn.addEventListener('click', () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = randomQuote;
  motivationQuote.style.display = 'block';
});

thankYouBtn.addEventListener('click', () => {
  motivationQuote.style.display = 'none';
});
document.getElementById('calculate-btn').addEventListener('click', function() {
  document.getElementById('age').value = '';
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';

});
