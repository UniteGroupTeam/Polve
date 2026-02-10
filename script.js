document.addEventListener('DOMContentLoaded', () => {
    // === Particle System (Sugar Dust) ===
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 50; // Not too many to keep performance high

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vy = Math.random() * 2 + 0.5; // Velocity Y
            this.size = Math.random() * 3 + 1; // Size
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.y += this.vy;
            if (this.y > canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            // Particles are 'sugar' but need to be visible on light cream backgrond.
            // Using a very soft white/gray or subtle brown for 'raw sugar' look.
            // Actually, white on cream is invisible. Let's make them 'sparkle' slightly or use a soft gray.
            ctx.fillStyle = `rgba(180, 160, 140, ${this.opacity})`; // Soft Taupe/Brown dust
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // === Scroll Animations ===
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-me, .history-block, .product-card');
    animatedElements.forEach(el => observer.observe(el));


    // === WhatsApp Dynamic Links ===
    const productButtons = document.querySelectorAll('.btn-whatsapp');
    productButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const product = btn.getAttribute('data-product');
            const price = btn.getAttribute('data-price');
            const message = `Hola POLVE! Me gustaría pedir ${product} por ${price}. ¿Cómo es el proceso? 🍪`;
            const url = `https://wa.me/5215555555555?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });

    // === Mobile Menu Toggle ===
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active'); // Animate button itself

            // Change icon logic if needed, but rotation is now handled by CSS
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
