const menu=document.getElementById("menu");
const nav=document.querySelector(".topbar nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="76px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px";nav.style.background="#fafaf8";nav.style.flexDirection="column";nav.style.borderBottom="1px solid #ddd"});
const items=document.querySelectorAll(".work-card,.service,.exp,.edu,.contact");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.animate([{opacity:0,transform:"translateY(24px)"},{opacity:1,transform:"translateY(0)"}],{duration:650,easing:"cubic-bezier(.2,.7,.2,1)",fill:"forwards"})}}),{threshold:.08});
items.forEach(x=>io.observe(x));
