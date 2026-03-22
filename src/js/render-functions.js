import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images
        .map(img => `
            <li class="gallery-item">
                <a href="${img.largeImageURL}">
                    <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
                    <div class="info">
                        <div class="stat">
                            <div class="label">Likes</div>
                            <div class="value">${img.likes}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Views</div>
                            <div class="value">${img.views}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Comments</div>
                            <div class="value">${img.comments}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Downloads</div>
                            <div class="value">${img.downloads}</div>
                        </div>
                    </div>
                </a>
            </li>`)
        .join("");
    galleryContainer.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = "";
}

const loader = document.querySelector(".loader");
export function showLoader() {
    loader.style.display = "block";
}
export function hideLoader() {
    loader.style.display = "none";
}