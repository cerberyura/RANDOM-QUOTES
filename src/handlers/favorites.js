import {quoteFavoriteBtn } from '../../index.js';

const toggleFavorite = (quote, btn, container) => {
   quote.isFavorite = !quote.isFavorite;
   toggleFavoriteBtnIcon(quote.isFavorite, btn);
   
   if (quote.isFavorite) {
      showFavoriteCard(quote, container)
   } else {
      removeFavoriteCard(quote.id)
   }
}

const handleFavorite = (isFavorite) => { 
   showFavoriteBtn();
   toggleFavoriteBtnIcon(isFavorite, quoteFavoriteBtn);
}

const toggleFavoriteBtnIcon = (isFavorite, ) => {
   quoteFavoriteBtn.classList.toggle('fa', isFavorite);
   quoteFavoriteBtn.classList.toggle('far', !isFavorite);
}

const showFavoriteBtn = () => {
   quoteFavoriteBtn.style.display = 'inline-block';
}

const hideFavoriteBtn = () => {
   quoteFavoriteBtn.style.display = 'none';
}

function removeFavoriteQuote (quote) {
   quote.isFavorite = false;
   removeFavoriteCard(quote.id);
   const currentQuote = document.querySelector('[data-current-quote-id]');
   const currentQuoteId = currentQuote.dataset.currentQuoteId;
   if (quote.id === currentQuoteId) {
      toggleFavoriteBtnIcon(quote.isFavorite);
   }
}

const showFavoriteCard = (quote, container) => {
   const {id, text, author} = quote;
   const favoriteCard = document.createElement('div');
   favoriteCard.classList.add('favorite-card');
   favoriteCard.dataset.favoriteQuoteId = id;
   favoriteCard.innerHTML = `
      <div class="favorite-card-content">
         <p>${text}</p>
         <p class="author">${author}</p>
      </div>
         <button class="remove-favorite btn btn-dander" data-quote-id="${id}">Remove from favorite <i class= "far fa-trash-alt"></i></button>
      `;
   container.appendChild(favoriteCard);
   
   const removeButton = favoriteCard.querySelector('.btn-dander');
   removeButton.addEventListener('click',() => removeFavoriteQuote(quote));
}



const removeFavoriteCard = (id) => {
   const card = document.querySelector(`.favorite-card[data-favorite-quote-id="${id}"]`);
   if (card) {
      card.remove();
   }
}

export {
   handleFavorite,
   toggleFavorite,
   hideFavoriteBtn
}