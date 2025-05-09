import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");
// const markup = galleryItems.map(item => `<li><img src=${item.preview} alt="smth"/> <p>${item.description}</p></li>`).join("");
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
