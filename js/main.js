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

// Export utilities
window.utils = {
    debounce,
    throttle,
    isInViewport,
    formatDate,
    copyToClipboard,
    generateId,
    isMobile,
    getScrollPosition
}; 
