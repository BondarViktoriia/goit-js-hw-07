import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainter = document.querySelector('.gallery');
const listItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(items) {
  return items.map(item => `<div class="gallery__item">
  <a class="gallery__link" href="${item. preview}">
    <img
      class="gallery__image"
      src="${item. preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`)
      .join('');
}

galleryContainter.innerHTML = listItemsMarkup;

galleryContainter.addEventListener('click', onOpenImage);

function onOpenImage(evt) {
     evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
		return
	}
    const selectedImage = evt.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)
  instance.show()

  window.addEventListener('keydown', evt => {
     if (evt.key === 'Escape') {
			instance.close()
		}
   });

}
    

