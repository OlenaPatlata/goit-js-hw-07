import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const ulRef = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<li>
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a></li>`
}).join('');

ulRef.insertAdjacentHTML("afterbegin", markup);
const lightbox = new SimpleLightbox('.gallery a', { captionDelay
: 250, });

