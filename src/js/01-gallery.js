import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const galleryUl = document.querySelector('.gallery');
let galleryMarkup = "";
for (const item of galleryItems) {
  galleryMarkup += `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>`;
}
galleryUl.insertAdjacentHTML('beforeend', galleryMarkup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
