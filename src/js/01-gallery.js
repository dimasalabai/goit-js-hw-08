// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item">
					<a class="gallery__link" href="${original}">
						 <img class="gallery__image" src="${preview}" alt="${description}" />
					</a>
				</li>`
    )
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
