// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-y-0');
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
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('-translate-y-full');
            mobileMenu.classList.remove('translate-y-0');
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

    // Handle image loading
    const images = document.querySelectorAll('img[src^="assets/"]');
    images.forEach(img => {
        // Add loading class
        img.classList.add('image-loading');
        
        // Handle successful load
        img.onload = () => {
            img.classList.remove('image-loading');
            img.classList.add('image-loaded');
            img.classList.add('fade-in');
        };
        
        // Handle load error
        img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
            img.classList.add('image-error');
            // Set a fallback image or hide the element
            img.style.display = 'none';
        };
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('image-loading');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add hover effects for project images
    document.querySelectorAll('.project-image').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Add hover effects for company logos
    document.querySelectorAll('.company-logo').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.filter = 'grayscale(0%)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.filter = 'grayscale(100%)';
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero-image');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add text reveal animation to headings
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        heading.classList.add('text-reveal');
        scrollRevealObserver.observe(heading);
    });

    // Add card hover effects
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('card-hover');
    });

    // Handle dark mode
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('dark-mode', prefersDarkScheme.matches);

    prefersDarkScheme.addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode', e.matches);
    });
});

// Intersection Observer for animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('image-loading');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('-translate-y-full');
        mobileMenu.classList.remove('translate-y-0');
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-image');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add text reveal animation to headings
document.querySelectorAll('h1, h2, h3').forEach(heading => {
    heading.classList.add('text-reveal');
    observer.observe(heading);
});

// Add card hover effects
document.querySelectorAll('.card').forEach(card => {
    card.classList.add('card-hover');
});

// Handle dark mode
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
document.body.classList.toggle('dark-mode', prefersDarkScheme.matches);

prefersDarkScheme.addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode', e.matches);
}); 
