(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();const s=[{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU",category:"Costume",title:"Suede Bomber Jacket",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:199,size:36,fit:"CLASSIC",color:"#0461a8"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFw53-E6Th5jalJduzZbeKpmNYdU2F7_6vA&usqp=CAU",category:"Shirt",title:"Cotton melange shirt",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:169,size:38,fit:"REGULAR",color:"#fff9f2"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWesXONYQaVCjyPORaGhdIgTYfuPM2_DkHQ&usqp=CAU",category:"Trousers",title:"Stretch Wool Chino Trousers",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:179,size:40,fit:"REGULAR",color:"#4d8888"},{img:"https://thumbs.dreamstime.com/b/beautiful-brunette-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style-total-black-blouse-pants-suit-180508191.jpg",category:"Suit",title:"Leather Travel Suit",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:119,size:36,fit:"SLIM",color:"#2d3436"},{img:"https://t3.ftcdn.net/jpg/03/41/03/46/360_F_341034617_4e96ntzBPpqjGxbUoHEVAp6NrH6KJwbE.jpg",category:"SUIT",title:"Leather Travel Suit",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:139,size:42,fit:"CLASSIC",color:"#efefef"},{img:"https://thumbs.dreamstime.com/b/beautiful-brunette-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style-total-white-blouse-pants-suit-180511785.jpg",category:"SUIT",title:"Leather Travel Suit",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:159,size:46,fit:"TAILORED",color:"#fff9f2"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU",category:"Costume",title:"Suede Bomber Jacket",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:199,size:36,fit:"CLASSIC",color:"#0461a8"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFw53-E6Th5jalJduzZbeKpmNYdU2F7_6vA&usqp=CAU",category:"Shirt",title:"Cotton melange shirt",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:169,size:38,fit:"REGULAR",color:"#fff9f2"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWesXONYQaVCjyPORaGhdIgTYfuPM2_DkHQ&usqp=CAU",category:"Trousers",title:"Stretch Wool Chino Trousers",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:179,size:40,fit:"REGULAR",color:"#4d8888"},{img:"https://thumbs.dreamstime.com/b/beautiful-brunette-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style-total-black-blouse-pants-suit-180508191.jpg",category:"Suit",title:"Leather Travel Suit",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:119,size:36,fit:"SLIM",color:"#2d3436"},{img:"https://t3.ftcdn.net/jpg/03/41/03/46/360_F_341034617_4e96ntzBPpqjGxbUoHEVAp6NrH6KJwbE.jpg",category:"SUIT",title:"Leather Travel Suit",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:139,size:42,fit:"CLASSIC",color:"#efefef"},{img:"https://thumbs.dreamstime.com/b/beautiful-brunette-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style-total-white-blouse-pants-suit-180511785.jpg",category:"SUIT",title:"Leather Travel Suit",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",price:159,size:46,fit:"TAILORED",color:"#fff9f2"}];const g=document.querySelectorAll(".size-btn"),y=document.querySelectorAll(".style-btn"),v=document.querySelectorAll(".color-specter");document.querySelector(".max-price");const p=document.querySelector(".input-range"),f=document.querySelector(".search-input");f.addEventListener("input",()=>{i.title=f.value,u()});p.addEventListener("input",()=>{const e=s.filter(t=>{if(t.price<=p.value)return t});a(e)});v.forEach(e=>{e.addEventListener("click",()=>{i.color=e.dataset.color,u()})});let i={};g.forEach(e=>{e.addEventListener("click",()=>{var t;(t=document.querySelector(".size-btn.active"))==null||t.classList.remove("active"),e.classList.add("active"),i.size=e.textContent,u()})});y.forEach(e=>{e.addEventListener("click",()=>{var t;(t=document.querySelector(".style-btn.active"))==null||t.classList.remove("active"),e.classList.add("active"),i.fit=e.textContent,u()})});function u(){const e=s.filter(t=>!(i.hasOwnProperty("size")&&i.size!=t.size||i.hasOwnProperty("fit")&&i.fit!=t.fit||i.hasOwnProperty("color")&&i.color!=t.color||i.hasOwnProperty("title")&&!t.title.toLowerCase().startsWith(i.title.toLowerCase())||i.hasOwnProperty("price")&&i.price<t.price));console.log(i,"activeFilters"),a(e)}const S=document.querySelector(".reset-filter");S.addEventListener("click",()=>{y.forEach(e=>{e.classList.remove("active")}),g.forEach(e=>{e.classList.remove("active")}),i={},a(s)});function A(e){return`<div class="card">
  <img
    class="card-img"
    src="${e.img}"
  />
 

  <div class="card-info">
    <div class="card-category">${e.category}</div>

    <div class="card-title">${e.title}</div>
    <div class="card-description">
      ${e.description}
    </div>
    <div class="card-price">${e.price}$</div>
  </div>
</div>`}const h=document.querySelector(".cards");function a(e,t=!1){let n="";e.forEach(o=>{n+=A(o)}),t?h.innerHTML+=n:h.innerHTML=n,document.querySelectorAll(".card-imgAdd").forEach(o=>{o.addEventListener("click",()=>{L.innerHTML=`(${w()})`})})}a(s);const E=document.querySelector(".min-price"),q=document.querySelector(".max-price");let d=0,m=0;const b=s.map(e=>e.price);d=Math.min(...b);m=Math.max(...b);E.textContent=d+"$";q.textContent=m+"$";document.querySelector(".input-range").min=d;document.querySelector(".input-range").max=m;const L=document.querySelector(".add-to-bag");function w(){return+L.textContent.slice(1,length-1)+1}window.addEventListener("scroll",()=>{window.scrollY>=document.documentElement.scrollHeight-window.innerHeight&&a(s.slice(1,5),!0)});
