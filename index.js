import{a as u,S as f,i as l}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const y="55010344-80b9dd901c390fd896df977ab",m="https://pixabay.com/api/";async function v(a){try{return(await u.get(m,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw r}}const c=document.querySelector(".gallery"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(t=>`
            <li class="gallery-item">
                <a href="${t.largeImageURL}">
                    <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                    <div class="info">
                        <div class="stat">
                            <div class="label">Likes</div>
                            <div class="value">${t.likes}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Views</div>
                            <div class="value">${t.views}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Comments</div>
                            <div class="value">${t.comments}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Downloads</div>
                            <div class="value">${t.downloads}</div>
                        </div>
                    </div>
                </a>
            </li>`).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function g(){c.innerHTML=""}const d=document.querySelector(".loader");function b(){d.style.display="block"}function L(){d.style.display="none"}const n=document.querySelector(".form");n.addEventListener("submit",async a=>{a.preventDefault();const r=n.elements["search-text"].value.trim();if(r){g(),b();try{const t=await v(r);t.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(t.hits)}catch(t){console.error(t),l.error({message:"Something went wrong. Please try again later!"})}finally{L()}}});
//# sourceMappingURL=index.js.map
