// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryUl = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(({ previewImage, originalImage, imageDescription }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${originalImage}">
      <img
      class="gallery__image"
      src="${previewImage}"
      alt="${imageDescription}"
      />
    </a>
  </li>`;
  })
  .join('');
galleryUl.insertAdjacentHTML('beforeend', galleryMarkup);
const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});