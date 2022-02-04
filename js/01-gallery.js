import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const ulGallary = document.querySelector('.gallery');
const lightBox = document.querySelector('.lightbox');
const imgLightbox = document.querySelector(".lightbox__image");
const lightboxBtn = document.querySelector('.lightbox__button');
const lightboxOverlay= document.querySelector('.lightbox__overlay');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div> `
}).join('');


ulGallary.insertAdjacentHTML('afterbegin', markup);
ulGallary.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault();
    if (event.target.tagName !== "IMG") {
        return;
    }

    window.addEventListener("keydown", eskCloseModal);

    const dataSource = event.target.dataset.source;
    
    lightBox.classList.add("is-open");
    imgLightbox.src = dataSource;
}

lightboxBtn.addEventListener('click', closeModal);

function closeModal(event) {
    lightBox.classList.remove("is-open");
    imgLightbox.src = "";
    window.removeEventListener("keydown", eskCloseModal);
}

lightboxOverlay.addEventListener("click", closeModal)



function eskCloseModal(event){
    if (event.code === "Escape") {
        closeModal();
        }
}