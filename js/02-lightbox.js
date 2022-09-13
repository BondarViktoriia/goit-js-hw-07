import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainter = document.querySelector('.gallery');
const listItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(items) {
  return items.map(item => `<a class="gallery__item" href="${item. preview}">
  <img class="gallery__image" src="${item.original}" alt="${item.description}" />
</a>`)
      .join('');
}

galleryContainter.innerHTML = listItemsMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    aptionDelay: 250,
});