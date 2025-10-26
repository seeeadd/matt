// ===================================
// SAWDUST STARTUPS - SALES PAGE JS
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // FAQ ACCORDION
    // ===================================

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });


    // ===================================
    // PHASE TABS (SYSTEM BREAKDOWN)
    // ===================================

    const phaseTabs = document.querySelectorAll('.phase-tab');

    // Open first tab by default
    if (phaseTabs.length > 0) {
        phaseTabs[0].classList.add('active');
    }

    phaseTabs.forEach(tab => {
        const header = tab.querySelector('.phase-tab-header');

        header.addEventListener('click', () => {
            // Close all other tabs
            phaseTabs.forEach(otherTab => {
                if (otherTab !== tab && otherTab.classList.contains('active')) {
                    otherTab.classList.remove('active');
                }
            });

            // Toggle current tab
            tab.classList.toggle('active');
        });
    });


    // ===================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ===================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or "#privacy" etc (non-section links)
            if (href === '#' || href === '#privacy' || href === '#terms') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80; // Account for fixed announcement bar
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ===================================
    // SCROLL ANIMATIONS
    // ===================================

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements we want to animate
    const animatedElements = document.querySelectorAll(`
        .section-headline,
        .section-subheadline,
        .screenshot-card,
        .success-card,
        .feature-card,
        .step-card,
        .bonus-card,
        .avatar-card,
        .faq-item,
        .guarantee-box,
        .value-list-container
    `);

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });


    // ===================================
    // CTA BUTTON HANDLERS
    // ===================================

    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-primary-glow, .btn-primary-large, .btn-primary-oversized');

    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Placeholder for CTA action - could link to payment page, modal, etc.
            console.log('CTA clicked - Redirect to checkout/signup page');

            // Example: Open a checkout page
            // window.location.href = '/checkout';

            // Example: Show a modal
            // showCheckoutModal();

            // For now, just scroll to top as a demo
            alert('Great choice! This would normally redirect to the checkout page.');
        });
    });


    // ===================================
    // VIDEO PLACEHOLDER CLICK HANDLER
    // ===================================

    const videoPlaceholder = document.querySelector('.video-placeholder');
    const playButton = document.querySelector('.play-button');

    if (videoPlaceholder && playButton) {
        const clickHandler = () => {
            // Placeholder for video player integration
            console.log('Video play clicked');

            // Example: Embed a video
            // videoPlaceholder.innerHTML = '<iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';

            alert('This would normally play your VSL (Video Sales Letter). You can integrate with YouTube, Vimeo, or a custom video player.');
        };

        videoPlaceholder.addEventListener('click', clickHandler);
        playButton.addEventListener('click', (e) => {
            e.stopPropagation();
            clickHandler();
        });
    }


    // ===================================
    // ANNOUNCEMENT BAR SCROLL BEHAVIOR
    // ===================================

    const announcementBar = document.querySelector('.announcement-bar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Optional: Hide/show announcement bar on scroll
        // Uncomment below if you want the bar to hide when scrolling down

        // if (currentScroll > lastScroll && currentScroll > 100) {
        //     announcementBar.style.transform = 'translateY(-100%)';
        // } else {
        //     announcementBar.style.transform = 'translateY(0)';
        // }

        lastScroll = currentScroll;
    });


    // ===================================
    // MOBILE MENU (if needed in future)
    // ===================================

    // This is a sales page without a traditional nav menu,
    // but you could add a sticky CTA button for mobile here

    function createMobileCTA() {
        if (window.innerWidth <= 767) {
            // Check if mobile CTA already exists
            if (!document.querySelector('.mobile-sticky-cta')) {
                const mobileCTA = document.createElement('div');
                mobileCTA.className = 'mobile-sticky-cta';
                mobileCTA.innerHTML = '<button class="btn-primary">GIVE ME ACCESS →</button>';
                mobileCTA.style.cssText = `
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 12px 16px;
                    background: rgba(43, 43, 43, 0.98);
                    box-shadow: 0 -4px 12px rgba(0,0,0,0.15);
                    z-index: 999;
                    display: none;
                    justify-content: center;
                `;

                document.body.appendChild(mobileCTA);

                // Show mobile CTA after scrolling past hero
                window.addEventListener('scroll', () => {
                    const hero = document.querySelector('#hero');
                    const heroBottom = hero.offsetTop + hero.offsetHeight;

                    if (window.pageYOffset > heroBottom) {
                        mobileCTA.style.display = 'flex';
                    } else {
                        mobileCTA.style.display = 'none';
                    }
                });

                // Add click handler
                mobileCTA.querySelector('button').addEventListener('click', () => {
                    alert('Great choice! This would normally redirect to the checkout page.');
                });
            }
        }
    }

    // Call on load and resize
    createMobileCTA();
    window.addEventListener('resize', createMobileCTA);


    // ===================================
    // ACCESSIBILITY ENHANCEMENTS
    // ===================================

    // Add keyboard navigation for accordion items
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');

        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();

                // Update aria-expanded
                const isActive = item.classList.contains('active');
                question.setAttribute('aria-expanded', isActive);
            }
        });
    });

    // Add keyboard navigation for phase tabs
    phaseTabs.forEach(tab => {
        const header = tab.querySelector('.phase-tab-header');
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');

        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();

                // Update aria-expanded
                const isActive = tab.classList.contains('active');
                header.setAttribute('aria-expanded', isActive);
            }
        });
    });

    // Update aria-expanded on initial load for first phase tab
    if (phaseTabs.length > 0) {
        const firstHeader = phaseTabs[0].querySelector('.phase-tab-header');
        firstHeader.setAttribute('aria-expanded', 'true');
    }


    // ===================================
    // PERFORMANCE OPTIMIZATION
    // ===================================

    // Lazy load images if you add real images in the future
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }


    // ===================================
    // CONSOLE MESSAGE
    // ===================================

    console.log('%c🪚 SAWDUST STARTUPS - Sales Page Loaded', 'color: #D4A574; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with ❤️ for Matt Outlaw - 731 Woodworks', 'color: #6B6B6B; font-size: 12px;');

});


// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
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

// Smooth scroll to element
function scrollToElement(element, offset = 80) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
