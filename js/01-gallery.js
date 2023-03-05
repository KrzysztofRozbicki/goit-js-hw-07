import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = '';
for (const image of galleryItems) {
  const newImage = `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>`;
  galleryEl.innerHTML += newImage;
}

galleryEl.addEventListener('click', event => {
  event.preventDefault();
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`);
  instance.show();
  instance.addEventListener('click', event => {
    console.log(`escape`);
  });
});
