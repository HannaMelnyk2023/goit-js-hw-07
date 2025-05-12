import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

function markup(arr) {
  return arr
    .map(
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
    )
    .join("");
}
galleryList.insertAdjacentHTML("beforeend", markup(galleryItems));

galleryList.addEventListener("click", onclick);
function onclick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const urlOriginalImg = evt.target.dataset.source;

  const options = {
    onShow: (instance) => {
      document.addEventListener("keydown", escModalClosed);
    },

    onClose: (instance) => {
      document.removeEventListener("keydown", escModalClosed);
    },
  };
  const instance = basicLightbox.create(
    `
     <img
      class="gallery__image"
      src='${urlOriginalImg}'
      alt='${urlOriginalImg}'
    />`,
    options
  );
  instance.show(() => console.log("lightbox now visible"));
  function escModalClosed(evt) {
    console.log(evt.code);
    if (evt.code === "Escape") {
      instance.close(() => console.log("HOHOHO you press ESC! lightbox now NOT visible"));
    }
  }
}
// закриття по esc див testModule6R_2 RYSICH
