const menuBtn = document.getElementById("menuButton");
const menuItems = document.querySelectorAll(".menu-item");

const openSound = document.getElementById("openSound");
const closeSound = document.getElementById("closeSound");
const clickSound = document.getElementById("clickSound");

let menuOpen = false;

let bodycontent=document.querySelector(".bodycontent");

menuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    menuItems.forEach(item => item.classList.toggle("active"));
    
});




// ----------------- Animated Background / Parallax Logic -----------------
document.addEventListener('DOMContentLoaded', () => {

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; 

    const shapes = Array.from(document.querySelectorAll('.shapes-layer .shape'));
    const bubbles = Array.from(document.querySelectorAll('.bubbles-layer .bubble'));
    const gradient = document.querySelector('.gradient-layer');

    // This check is important for the parallax script to run only if elements exist
    if (!shapes.length && !bubbles.length && !gradient) return;

    // Keep track of mouse position (-1..1)
    let mouseX = 0, mouseY = 0;
    // Keep track of scroll progress (0..1)
    let scrollP = 0;

    // Precompute a speed multiplier for each element for variety
    const shapeSpeeds = shapes.map((_, i) => [6,4,3,5][i] || 4);
    const bubbleSpeeds = bubbles.map((_, i) => (i % 2 === 0) ? 6 : 4);

    // Clamp function
    function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

    // Update mouseX/mouseY normalized to -1..1
    document.addEventListener('mousemove', (e) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        mouseX = clamp((e.clientX - cx) / cx, -1, 1);
        mouseY = clamp((e.clientY - cy) / cy, -1, 1);
    }, { passive: true });

    // Update scroll progress
    function updateScroll() {
        const s = window.scrollY || window.pageYOffset || 0;
        // progress relative to 2x viewport height so effect is subtle
        scrollP = clamp(s / (window.innerHeight * 2), 0, 1);
    }
    window.addEventListener('scroll', () => updateScroll(), { passive: true });
    updateScroll();

    // Animation loop
    let rafId = null;
    function tick() {
        // Gradient subtle vertical translation from scroll
        if (gradient) {
            const gY = -10 * scrollP; // up to -10px
            gradient.style.transform = `translateY(${gY}px)`;
        }

        // Shapes - move based on mouse + slight scroll offset
        shapes.forEach((el, i) => {
            const speed = shapeSpeeds[i] || 4;
            const mx = mouseX * speed; // px
            const my = mouseY * speed; // px
            const sy = - (i + 1) * scrollP * 6; // small extra vertical offset by index
            // we use translate3d for hardware acceleration
            el.style.transform = `translate3d(${mx}px, ${my + sy}px, 0)`;
        });

        // Bubbles - lighter movement
        bubbles.forEach((el, i) => {
            const bs = bubbleSpeeds[i] || 4;
            const mx = mouseX * bs * 0.3;
            const my = -mouseY * bs * 0.3;
            // give subtle upward offset with scroll so bubbles drift earlier
            const sy = -scrollP * 20 * ((i % 2) ? 0.6 : 1);
            el.style.transform = `translate3d(${mx}px, ${my + sy}px, 0)`;
        });

        rafId = requestAnimationFrame(tick);
    }

    // Start loop
    if (!rafId) {
        rafId = requestAnimationFrame(tick);
    }

    // Clean up on page unload (good practice)
    window.addEventListener('beforeunload', () => {
        if (rafId) cancelAnimationFrame(rafId);
    });
});

// ----------------- Question Mark Generator -----------------
document.addEventListener("DOMContentLoaded", () => {
    const layer = document.querySelector(".questionmarks-layer");
    if (!layer) {
        console.error("questionmarks-layer not found");
        return;
    }
    const total = 15;

    for (let i = 0; i < 15; i++) { // number of question marks
     
    const q = document.createElement("div");
        q.classList.add("question-mark");
        q.textContent = "?";

        // random size between 20–50px
        const size = Math.floor(Math.random() * 30) + 20;
        q.style.fontSize = size + "px";
        const blur = Math.random() * 4 + 1; // blur: 1px–5px
        q.style.filter = `blur(${blur}px)`;

        // random X position
        q.style.left = Math.random() * 100 + "%";

        // random animation duration
        q.style.animationDuration = (6 + Math.random() * 5) + "s";

        // random delay
        q.style.animationDelay = Math.random() * 5 + "s";

        // start below the screen
        q.style.bottom = "-60px";
        


        layer.appendChild(q);
    }
});

function startquiz(){

    menuBtn.style.animation="fadeout 1s ease";
    bodycontent.style.animation="shrink 0.9s ease";
    
    setTimeout(() => {location.href = "quizpage.html";}, 850);  

}


function goToStudyTips(){

    menuBtn.style.animation="fadeout 1s ease";
    for(let item of menuItems) item.style.animation="fadeout 1s ease";

    bodycontent.style.animation="shrink 0.9s ease";
    
    setTimeout(() => {location.href = "studytips.html";}, 850);  
}

function goToAboutUs(){

    menuBtn.style.animation="fadeout 1s ease";
    for(let item of menuItems) item.style.animation="fadeout 1s ease";

    bodycontent.style.animation="shrink 0.9s ease";
    
    setTimeout(() => {location.href = "about.html";}, 850);  
}