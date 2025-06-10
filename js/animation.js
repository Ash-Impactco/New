// Animation and transition functionality
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Smooth reveal for collapsible sections
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        const content = collapsible.nextElementSibling;
        if (content) {
            content.style.maxHeight = '0px';
            content.style.transition = 'max-height 0.3s ease-out';
        }
    });

    // Add animation classes to elements
    function addAnimationClasses() {
        // Hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.classList.add('animate-fade-in');
        }

        // Project cards
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.classList.add('animate-fade-in');
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Skill items
        document.querySelectorAll('.skill-item').forEach((item, index) => {
            item.classList.add('animate-fade-in');
            item.style.animationDelay = `${index * 0.05}s`;
        });
    }

    // Initialize animations
    addAnimationClasses();

    // Add hover animations
    document.querySelectorAll('.hover-scale').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('scale-105');
        });
        element.addEventListener('mouseleave', () => {
            element.classList.remove('scale-105');
        });
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}); 
