const quotes = [
   {
      quote: 'The only way to do great work is to love what you do',
      author: 'Steve Jobs',
   },
   {
      quote: 'Your time is limited, so don\'t waste it living someone else\'s life',
      author: 'Steve Jobs',
   },
   {
      quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts',
      author: 'Winston Churchill',
   },
   {
      quote: 'Life is what happens when you\'re busy making other plans',
      author: 'John Lennon',
   },
   {
      quote: 'It does not matter how slowly you go as long as you do not stop',
      author: 'Confucius',
   },
   {
      quote: 'Do what you can, with what you have, where you are',
      author: 'Theodore Roosevelt',
   },
   {
      quote: 'Believe you can and you\'re halfway there',
      author: 'Theodore Roosevelt',
   },
   {
      quote: 'Don\'t watch the clock; do what it does. Keep going',
      author: 'Sam Levenson',
   },
   {
      quote: 'Opportunities don\'t happen. You create them',
      author: 'Chris Grosser',
   },
   {
      quote: 'Act as if what you do makes a difference. It does',
      author: 'William James',
   }
];


const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
   const randomQuote = quotes[randomIndex];
   const{quote, author: quoteAuthor} = randomQuote
   // const quote = randomQuote.quote
   // const quoteAuthor = randomQuote.author
   quoteElement.textContent = quote;
   quoteAuthorElement.textContent = quoteAuthor
}

generateBtn.addEventListener('click', generateRandomQuote);
