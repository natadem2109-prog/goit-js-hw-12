import{a as S,S as P,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const q="55010344-80b9dd901c390fd896df977ab",B="https://pixabay.com/api/",c=15;async function h(r,o=1,e=c){try{return(await S.get(B,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:e,page:o}})).data}catch(i){throw i}}const y=document.querySelector(".gallery"),v=document.querySelector(".loader"),g=document.querySelector(".load-more"),$=new P(".gallery a",{captionsData:"alt",captionDelay:250});function p(r){const o=r.map(e=>`
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
            </li>`).join("");y.insertAdjacentHTML("beforeend",o),$.refresh()}function x(){y.innerHTML=""}function L(){v.classList.remove("is-hidden")}function w(){v.classList.add("is-hidden")}function b(){g.classList.remove("is-hidden")}function f(){g.classList.add("is-hidden")}const E=document.querySelector(".form"),u=document.querySelector(".load-more");let a=1,l="",m=0;E.addEventListener("submit",async r=>{if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),!!l){a=1,x(),f(),L();try{const e=await h(l,a);m=e.totalHits,e.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(p(e.hits),a*c<m?b():n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{w()}}});u.addEventListener("click",async()=>{a++,u.textContent="Please wait...",f(),L();try{const r=await h(l,a);p(r.hits);const o=document.querySelector(".gallery-item");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}a*c>=m||r.hits.length<c?(f(),n.info({message:"We're sorry, but you've reached the end of search results."})):(u.textContent="Load more",b())}catch(r){console.error(r),n.error({message:"Something went wrong. Please try again later!"})}finally{w()}});
//# sourceMappingURL=index.js.map
