import{a as b,S,i as l}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const q="55010344-80b9dd901c390fd896df977ab",P="https://pixabay.com/api/",d=15;async function f(r,o=1,e=d){try{return(await b.get(P,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:o}})).data}catch(i){throw i}}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){const o=r.map(e=>`
            <li class="gallery-item">
                <a href="${e.largeImageURL}">
                    <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
                    <div class="info">
                        <div class="stat">
                            <div class="label">Likes</div>
                            <div class="value">${e.likes}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Views</div>
                            <div class="value">${e.views}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Comments</div>
                            <div class="value">${e.comments}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Downloads</div>
                            <div class="value">${e.downloads}</div>
                        </div>
                    </div>
                </a>
            </li>`).join("");m.insertAdjacentHTML("beforeend",o),B.refresh()}function $(){m.innerHTML=""}function g(){y.classList.remove("is-hidden")}function p(){y.classList.add("is-hidden")}function L(){h.classList.remove("is-hidden")}function w(){h.classList.add("is-hidden")}const E=document.querySelector(".form"),M=document.querySelector(".load-more");let a=1,n="",u=0;E.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.currentTarget.elements["search-text"].value.trim(),!!n){a=1,$(),w(),g();try{const e=await f(n,a);u=e.totalHits,e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(v(e.hits),a*15<u&&L())}catch{l.error({message:"Something went wrong. Please try again later!"})}finally{p()}}});M.addEventListener("click",async()=>{a++,g();try{const r=await f(n,a);v(r.hits);const o=document.querySelector(".gallery-item");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}d*a>=u||r.hits.length<d?(w(),l.info({message:"We're sorry, but you've reached the end of search results."})):L()}catch(r){console.error(r),l.error({message:"Something went wrong. Please try again later!"})}finally{p()}});
//# sourceMappingURL=index.js.map
