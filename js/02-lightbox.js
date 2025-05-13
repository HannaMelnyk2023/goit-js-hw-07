import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

function markup(arr) {
    return arr
        .map(
            ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`)
        .join("");
}
galleryList.insertAdjacentHTML("beforeend", markup(galleryItems));

// console.log(galleryItems);
const lightBox = new SimpleLightbox('.gallery__link', { captionDelay: 250, captionsData: "alt", });
