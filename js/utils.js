// Utility functions for the portfolio

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Format date to readable string
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Copy text to clipboard
function copyToClipboard(text) {
    return navigator.clipboard.writeText(text).then(() => {
        return true;
    }).catch(() => {
        return false;
    });
}

// Generate random ID
function generateId(prefix = '') {
    return `${prefix}${Math.random().toString(36).substr(2, 9)}`;
}

// Check if device is mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Get current scroll position
function getScrollPosition() {
    return {
        x: window.pageXOffset,
        y: window.pageYOffset
    };
}

// Image path utilities
const getImagePath = (path) => {
    // Ensure path starts with assets/
    if (!path.startsWith('assets/')) {
        path = `assets/${path}`;
    }
    return path;
};

// Image loading utilities
const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = getImagePath(src);
    });
};

// Image error handling
const handleImageError = (img) => {
    console.error(`Failed to load image: ${img.src}`);
    img.classList.add('image-error');
    img.style.display = 'none';
};

// Image optimization
const optimizeImage = (img) => {
    // Add loading class
    img.classList.add('image-loading');
    
    // Handle successful load
    img.onload = () => {
        img.classList.remove('image-loading');
        img.classList.add('image-loaded');
        img.classList.add('fade-in');
    };
    
    // Handle load error
    img.onerror = () => handleImageError(img);
};

// Lazy loading setup
const setupLazyLoading = () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
};

// Add loading state to buttons
function setLoadingState(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.innerHTML = '<span class="loading-spinner"></span> Loading...';
    } else {
        button.disabled = false;
        button.textContent = button.dataset.originalText;
    }
}

// Smooth scroll to element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Export utilities
window.utils = {
    debounce,
    throttle,
    isInViewport,
    formatDate,
    copyToClipboard,
    generateId,
    isMobile,
    getScrollPosition,
    handleImageError,
    setLoadingState,
    scrollToElement
}; 
