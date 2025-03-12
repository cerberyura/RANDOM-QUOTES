import { currentQuote } from '../../index.js';

const favoritesContainer = document.getElementById('favorites-container')
const toggleBtn = document.getElementById('toggle-favorite-btn')



const toggleFavorite = () => {
   currentQuote.isFavorite = !currentQuote.isFavorite;
   toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);
   
   if (currentQuote.isFavorite) {
      showFavoriteCard(currentQuote.text, currentQuote.author, favoritesContainer)
   } else {
      hideFavoriteCard(currentQuote.text)
   }
}

toggleBtn.addEventListener('click', toggleFavorite);

const handleFavorite = (isFavorite) => { 
   showBtn(toggleBtn);
   toggleFavoriteIcon(isFavorite, toggleBtn);
}

const toggleFavoriteIcon = (isFavorite, el) => {
   el.classList.toggle('fa', isFavorite);
   el.classList.toggle('far', !isFavorite);
}

const showBtn = (btn) => {
   btn.style.display = 'inline-block';
}

const hideBtn = (btn) => {
   btn.style.display = 'none';
}

hideBtn(toggleBtn);


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
   handleFavorite
}