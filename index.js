import quotes from "./src/quotes.js";
import{hideFavoriteCard, showFavoriteCard, toggleFavoriteIcon} from './src/favoritesHandler.js'

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex;



function generateRandomQuote() {
   currentQuoteIndex = Math.floor(Math.random() * quotes.length);
   const randomQuote = quotes[currentQuoteIndex];
   console.log(currentQuoteIndex);
   const{quote, author: quoteAuthor} = randomQuote
   quoteElement.textContent = quote;
   quoteAuthorElement.textContent = quoteAuthor
   toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);

   toggleFavoriteBtn.style.display = 'inline-block';
}




const toggleFavorite = () => {
   const currentQuote = quotes[currentQuoteIndex];
   currentQuote.isFavorite = !currentQuote.isFavorite;
   toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);
   
   if (currentQuote.isFavorite) {
      showFavoriteCard(currentQuote.quote, currentQuote.author, favoritesContainer)
   } else {
      hideFavoriteCard(currentQuote.quote)
   }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
// generateRandomQuote()