// Mobile menu functionality
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('-translate-y-full');
});

// Collapsible sections functionality
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove('show');
            this.classList.remove('active');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add('show');
            this.classList.add('active');
        }
    });
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenu.classList.add('-translate-y-full');
    }
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
