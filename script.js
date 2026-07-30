const cursor = document.querySelector(".cursor");
const preloader = document.getElementById("preloader");
const topButton = document.getElementById("top");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

window.addEventListener("load", () => {

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 700);

});

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

    if (window.scrollY > 500) {

        topButton.classList.add("mostrar");

    } else {

        topButton.classList.remove("mostrar");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

menu.addEventListener("click", () => {

    nav.classList.toggle("activo");

});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("activo");

    });

});

const elementos = document.querySelectorAll("section, .card, .proyecto, .personal, .experiencia");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar");

        }

    });

}, {

    threshold: .15

});

elementos.forEach(el => {

    el.classList.add("oculto");

    observer.observe(el);

});

const filtros = document.querySelectorAll(".filtros button");

filtros.forEach(boton => {

    boton.addEventListener("click", () => {

        filtros.forEach(b => b.classList.remove("activo"));

        boton.classList.add("activo");

    });

});

const proyectos = document.querySelectorAll(".proyecto");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `

<div class="cerrar">&times;</div>

<div class="lightbox-contenido">

    <img src="" alt="">

    <div class="info-proyecto">

        <h3>Proyecto</h3>

        <p>

            Aquí podrás agregar la descripción de cada proyecto,
            el año, las herramientas utilizadas y cualquier
            información adicional.

        </p>

    </div>

</div>

`;

document.body.appendChild(lightbox);

const imagenLightbox = lightbox.querySelector("img");

const cerrar = lightbox.querySelector(".cerrar");

proyectos.forEach(proyecto => {

    proyecto.addEventListener("click", () => {

        const imagen = proyecto.querySelector("img");

        imagenLightbox.src = imagen.src;

        const titulo = proyecto.dataset.titulo;
const descripcion = proyecto.dataset.descripcion;

lightbox.querySelector("h3").textContent = titulo;
lightbox.querySelector("p").textContent = descripcion;

        lightbox.classList.add("activo");

        document.body.style.overflow = "hidden";

    });

});

cerrar.addEventListener("click", () => {

    lightbox.classList.remove("activo");

    document.body.style.overflow = "auto";

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("activo");

        document.body.style.overflow = "auto";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("activo");

        document.body.style.overflow="auto";

    }

});

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    hero.style.backgroundPositionY = y * 0.5 + "px";

});

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

const secciones = document.querySelectorAll("section");
const enlaces = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let actual = "";

    secciones.forEach(seccion => {

        const top = seccion.offsetTop - 150;
        const alto = seccion.offsetHeight;

        if(window.scrollY >= top){

            actual = seccion.getAttribute("id");

        }

    });

    enlaces.forEach(link => {

        link.classList.remove("activo");

        if(link.getAttribute("href") === "#" + actual){

            link.classList.add("activo");

        }

    });

});

window.addEventListener("scroll", () => {

    const velocidad = window.scrollY * 0.35;

    const video = document.querySelector(".hero video");

    if(video){

        video.style.transform = `translateY(${velocidad}px) scale(1.08)`;

    }

});

document.querySelectorAll(".boton, button, .card, .proyecto").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "60px";
        cursor.style.height = "60px";
        cursor.style.background = "#1E45FB";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "22px";
        cursor.style.height = "22px";
        cursor.style.background = "#CDF22B";

    });

});

window.addEventListener("mousemove",(e)=>{

    document.documentElement.style.setProperty("--mouseX",e.clientX+"px");

    document.documentElement.style.setProperty("--mouseY",e.clientY+"px");

});

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=`radial-gradient(circle at ${x}px ${y}px,#2d2d2d,#1b1b1b)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#1b1b1b";

    });

});

document.querySelectorAll(".proyecto").forEach(proyecto=>{

    proyecto.addEventListener("mousemove",(e)=>{

        const rect=proyecto.getBoundingClientRect();

        const x=((e.clientX-rect.left)/rect.width-.5)*15;

        const y=((e.clientY-rect.top)/rect.height-.5)*15;

        proyecto.style.transform=`rotateX(${-y}deg) rotateY(${x}deg)`;

    });

    proyecto.addEventListener("mouseleave",()=>{

        proyecto.style.transform="rotateX(0deg) rotateY(0deg)";

    });

});

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

window.addEventListener("resize",()=>{

    if(window.innerWidth>1100){

        nav.classList.remove("activo");

    }

});

document.addEventListener("contextmenu",(e)=>{

    if(e.target.tagName==="IMG"){

        e.preventDefault();

    }

});

console.log("Juan Valdés Portfolio");