// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('-translate-y-full');
        });
    }

    // Collapsible sections with smooth transitions
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', () => {
            // Close all other sections
            collapsibles.forEach(otherCollapsible => {
                if (otherCollapsible !== collapsible) {
                    otherCollapsible.classList.remove('active');
                    const otherContent = otherCollapsible.nextElementSibling;
                    if (otherContent) {
                        otherContent.style.maxHeight = null;
                        otherContent.classList.remove('show');
                    }
                }
            });

            // Toggle current section
            collapsible.classList.toggle('active');
            const content = collapsible.nextElementSibling;
            if (content) {
                if (content.classList.contains('show')) {
                    content.style.maxHeight = null;
                    content.classList.remove('show');
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.classList.add('show');
                }
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('-translate-y-full')) {
                    mobileMenu.classList.add('-translate-y-full');
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('-translate-y-full');
        }
    });

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-blue-600');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-blue-600');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Initial call

    // Initialize scroll reveal animations
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    scrollRevealElements.forEach(element => {
        scrollRevealObserver.observe(element);
    });

    // Experience Section Animations and Interactions
    // Add experience-card class to all experience cards
    const experienceCards = document.querySelectorAll('#experience .card');
    experienceCards.forEach(card => {
        card.classList.add('experience-card');
    });

    // Add experience-image class to all experience images
    const experienceImages = document.querySelectorAll('#experience img');
    experienceImages.forEach(img => {
        img.classList.add('experience-image');
    });

    // Intersection Observer for experience cards
    const experienceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                experienceObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    experienceCards.forEach(card => {
        experienceObserver.observe(card);
    });

    // Smooth scroll to experience section
    document.querySelectorAll('a[href="#experience"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const experienceSection = document.getElementById('experience');
            if (experienceSection) {
                experienceSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add animation classes when elements come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
}); 
