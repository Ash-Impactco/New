// Intersection Observer for scroll animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Add additional animations based on data attributes
            if (entry.target.dataset.animate === 'slide-up') {
                entry.target.classList.add('animate-slide-up');
            }
            if (entry.target.dataset.animate === 'scale-in') {
                entry.target.classList.add('animate-scale-in');
            }
            // Remove observer after animation
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Initialize animations
function initializeAnimations() {
    // Animate sections
    document.querySelectorAll('.section').forEach(section => {
        animationObserver.observe(section);
    });

    // Animate elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(element => {
        animationObserver.observe(element);
    });
}

// Parallax effect
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Smooth reveal for elements
function initializeReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    revealElements.forEach(element => {
        const delay = element.dataset.revealDelay || 0;
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeParallax();
    initializeReveal();
}); 
