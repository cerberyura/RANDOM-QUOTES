import {quotes} from '../quotes.js'
import { generateRandomInt } from '../utils.js'
import { handleFavorite } from './favorites.js'

let currentQuote = null;


const handleQuote = () => {
   const randomQuote = choseRandomQuote(quotes)
   currentQuote = randomQuote
   displayQuote(randomQuote)
}

const displayQuote = (quote) => {
   const { text, author, isFavorite } = quote
   const quoteElement = document.getElementById('quote');
   const quoteAuthorElement = document.getElementById('quote-author');
   quoteElement.textContent = text;
   quoteAuthorElement.textContent = author;
   handleFavorite(isFavorite);
}


function choseRandomQuote(quotes) {
   const randomIndex = generateRandomInt(quotes.length)
   return quotes[randomIndex];
}




export {
   displayQuote,
   choseRandomQuote,
   handleQuote,
   currentQuote
}