import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = form.elements["search-text"].value.trim();
    if (!query) {
        return;
    }
    clearGallery();
    showLoader();
    try {
        const data = await getImagesByQuery(query);

        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
        } else {
            createGallery(data.hits);
        }
    } catch (error) {
        console.error(error);
        iziToast.error({
            message: "Something went wrong. Please try again later!",
        });
    } finally {
        hideLoader();
    }
});