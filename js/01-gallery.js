import {galleryItems} from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const divEl = document.querySelector(".gallery");
const cardsItem = createLiElement(galleryItems);

divEl.insertAdjacentHTML("beforeend", cardsItem);

function createLiElement(galleryItems) {
	return galleryItems
		.map(({preview, original, description}) => {
			return `
 <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
		})
		.join("");
}

divEl.addEventListener("click", clickOpenModal);
const instance = "";

function clickOpenModal(event) {
	event.preventDefault();

	if (!event.target.classList.contains("gallery__image")) {
		return;
	}
	window.addEventListener("keydown", onEscapePress);
	const clickOpenModalEl = event.target;
	const indexGalleryItems = galleryItems.findIndex((option) => option.description === clickOpenModalEl.alt);

	let instance = basicLightbox.create(`
    <img class="gallery__image" src="${galleryItems[indexGalleryItems].original}"
     alt="${galleryItems[indexGalleryItems].description}">`);

	instance.show();

	const closeElModal = document.querySelector(".basicLightbox");
	closeElModal.addEventListener("click", onCloseModal);
}

function onCloseModal() {
	window.removeEventListener("keydown", onEscapePress);
	instance.close;
	const closeElModal = document.querySelector(".basicLightbox");
	closeElModal.remove();
}

function onEscapePress(event) {
	if (event.code === "Escape") {
		const closeEl = document.querySelector(".basicLightbox");
		closeEl.remove();
		window.removeEventListener("keydown", onEscapePress);
	}
}
