import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const ulGallary = document.querySelector('.gallery');

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

let instance = null;

function openModal(event) {
    event.preventDefault();

    if (event.target.tagName !== "IMG") {
        return;
    };

    const dataSource = event.target.dataset.source;
    
    instance = basicLightbox.create(`<img src="${dataSource}" width="800" height="600">`,
        {
            onClose: removeListener,
            onShow: createListener,
        });
    instance.show();
}

function eskCloseModal(event) {
    console.log((event));
    if (event.code === "Escape") {
        instance.close();
    }
};

function createListener(instance) {
    window.addEventListener("keydown", eskCloseModal)
};

function removeListener(instance) {
    window.removeEventListener("keydown", eskCloseModal)
};