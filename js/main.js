// ------------------- 粒子 -------------------
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 70; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.6 - 0.3
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();


// ------------------- Loading → Welcome → Main 内容 -------------------
setTimeout(() => {
    document.querySelector(".loading-text").style.opacity = 0;
    document.querySelector(".loading-dots").style.opacity = 0;

    const welcome = document.querySelector(".welcome-text");
    welcome.style.opacity = 1;

    setTimeout(() => {
        const intro = document.getElementById("introScreen");
        intro.style.opacity = 0;
        intro.style.transition = "opacity 1.2s ease";

        setTimeout(() => {
            intro.style.display = "none";
            document.getElementById("mainContent").style.opacity = 1;
        }, 1200);
    }, 1300);

}, 2000);
