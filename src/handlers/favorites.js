import { favoriteBtn } from '../../index.js';

const toggleFavorite = (quote, btn, container) => {
   quote.isFavorite = !quote.isFavorite;
   toggleFavoriteBtnIcon(quote.isFavorite, btn);
   
   if (quote.isFavorite) {
      showFavoriteCard(quote, container)
   } else {
      hideFavoriteCard(quote.id)
   }
}

const handleFavorite = (isFavorite) => { 
   showFavoriteBtn(favoriteBtn);
   toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

const toggleFavoriteBtnIcon = (isFavorite, el) => {
   el.classList.toggle('fa', isFavorite);
   el.classList.toggle('far', !isFavorite);
}

const showFavoriteBtn = (btn) => {
   btn.style.display = 'inline-block';
}

const hideFavoriteBtn = (btn) => {
   btn.style.display = 'none';
}



const showFavoriteCard = (quote, container) => {
   const {id, text, author} = quote;
   const favoriteCard = document.createElement('div');
   favoriteCard.classList.add('favorite-card');
   favoriteCard.dataset.quoteId = id;
      favoriteCard.innerHTML = `
         <p>${text}</p>
         <p class="author">${author}</p>
      `;
      container.appendChild(favoriteCard);
}

const hideFavoriteCard = (id) => {
   const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
   if (card) {
      card.remove();
   }
}

export {
   handleFavorite,
   toggleFavorite,
   hideFavoriteBtn
}