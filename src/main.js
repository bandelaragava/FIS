// Future-Invo IT Solutions - Main Entry Point
import '../styles.css';

// Initialize Lucide Icons after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }

    // FAQ Interactivity
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('open');
        });
    });
});

// Import and run all existing logic from root main.js
import '../main.js';
