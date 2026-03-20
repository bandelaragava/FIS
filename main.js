/* Interactive Javascript for Future-Invo IT Solutions */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = 'var(--nav-height)';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(5, 5, 18, 0.95)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid var(--border-glass)';
        });
    }

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.glass-card, .section-header, .feature-item, .blog-card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(el);
    });

    // 3. Counter Animation for Stats
    const stats = document.querySelectorAll('.stat-number');
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                animateCount(entry.target, target);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    function animateCount(el, target) {
        let count = 0;
        const duration = 2000;
        const speed = target / (duration / 16);
        
        const updateCount = () => {
            if (count < target) {
                count += speed;
                el.textContent = Math.ceil(count) + (el.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCount);
            } else {
                el.textContent = target + (el.textContent.includes('+') ? '+' : '');
            }
        };
        updateCount();
    }

    stats.forEach(s => countObserver.observe(s));

    // 4. Parallax Effect for Hero Blobs
    document.addEventListener('mousemove', (e) => {
        const blobs = document.querySelectorAll('.blob');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            const xShift = (x - 0.5) * speed;
            const yShift = (y - 0.5) * speed;
            blob.style.transform = `translate(${xShift}px, ${yShift}px)`;
        });
    });

    // 5. Contact Form Feedback
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'Successfully Sent!';
                btn.style.background = '#00ff88';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    // 6. Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
