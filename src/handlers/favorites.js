import { favoriteBtn } from '../../index.js';

const toggleFavorite = (quote, btn, container) => {
   quote.isFavorite = !quote.isFavorite;
   const {text, author, isFavorite} = quote;
   toggleFavoriteBtnIcon(isFavorite, btn);
   
   if (isFavorite) {
      showFavoriteCard(text, author, container)
   } else {
      hideFavoriteCard(text)
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



const showFavoriteCard = (text, author, container) => {
   const favoriteCard = document.createElement('div');
      favoriteCard.classList.add('favorite-card');
      favoriteCard.innerHTML = `
         <p>${text}</p>
         <p class="author">${author}</p>
      `;
      container.appendChild(favoriteCard);
}

const hideFavoriteCard = (text) => {
   const favoriteCards = document.querySelectorAll('.favorite-card');
   favoriteCards.forEach((card) => {
      if (card.textContent.includes(text)) {
         card.remove();
      }
   });
}

export {
   handleFavorite,
   toggleFavorite,
   hideFavoriteBtn
}