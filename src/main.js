import { getImagesByQuery, PER_PAGE } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let page = 1;
let query = "";
let totalHits = 0;

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const currentForm = e.currentTarget;
    query = currentForm.elements["search-text"].value.trim();
    if (!query) return;
    page = 1;
    
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    try {
        const data = await getImagesByQuery(query, page);
        totalHits = data.totalHits;

        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            
        } else {
            createGallery(data.hits);
        
            if (page * PER_PAGE < totalHits) {
                showLoadMoreButton();
            } else {
                iziToast.info({
                    message: "We're sorry, but you've reached the end of search results.",
                });
            }
        }
    } catch (error) {
        iziToast.error({
            message: "Something went wrong. Please try again later!",
        });
    } finally {
        hideLoader();
    }
});

loadMoreBtn.addEventListener("click", async () => {
    page++;
    loadMoreBtn.textContent = "Please wait...";
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);
        createGallery(data.hits);

        const card = document.querySelector(".gallery-item");
        if (card) {
            const cardHeight = card.getBoundingClientRect().height;
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth",
            });
        }
        if (page*PER_PAGE >= totalHits || data.hits.length < PER_PAGE) {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
        } else {
            loadMoreBtn.textContent = "Load more";
            showLoadMoreButton();
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