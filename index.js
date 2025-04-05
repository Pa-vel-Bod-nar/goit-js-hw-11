import{a as f,S as p,i}from"./assets/vendor-DVva8SYe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function m(n){return f.get("https://pixabay.com/api/",{params:{key:"49651388-bf829c1018596f8ebf90706c1",q:n,image_type:"photo"}}).then(r=>r.data.hits).catch(r=>{throw console.error("Request error",r),r})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const r=n.map(t=>`
            <li class="gallery-item">
                <a href = "${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}" />
                </a>
                <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
      </li>
        `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function g(){l.innerHTML=""}function b(){u.classList.remove("is-hidden")}function c(){u.classList.add("is-hidden")}const d=document.querySelector(".form"),L=d.elements["search-text"];d.addEventListener("submit",w);function w(n){n.preventDefault();const r=L.value.trim();if(r===""){i.warning({title:"Oops!",message:"Please enter a search term!",position:"topRight"});return}g(),b(),m(r).then(t=>{if(c(),t.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query.",position:"topRight"});return}y(t)}).catch(t=>{c(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)})}
//# sourceMappingURL=index.js.map
