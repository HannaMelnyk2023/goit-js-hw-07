import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
galleryList.addEventListener(onclick)
function markup(arr) {
    return arr.map(
        ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    ).join("");
}
galleryList.insertAdjacentHTML("beforeend", markup(galleryItems));
console.log(galleryItems);
// чернетка:
const instance = basicLightbox.create(`
    <p>You can set the content of the lightbox with JS.</p>
`)
// закриття по esc див testModule6R_2 рисіч