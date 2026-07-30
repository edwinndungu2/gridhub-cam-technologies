// ==================== MOBILE MENU TOGGLE ====================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// ==================== SMOOTH SCROLLING ====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== CONTACT FORM HANDLING ====================
const enquiryForm = document.getElementById('enquiryForm');
const formMessage = document.getElementById('formMessage');

if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !email || !phone || !subject || !message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }

        // Phone validation (Kenya format)
        const phonePattern = /^(\+254|0)[0-9]{9}$/;
        if (!phonePattern.test(phone)) {
            showFormMessage('Please enter a valid Kenya phone number', 'error');
            return;
        }

        // Construct email message
        const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:ewairagu@gmail.com?subject=New Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(emailBody)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Show success message
        showFormMessage('Thank you! Your message has been prepared. Your default email client will open. If it doesn\'t, please email us directly at ewairagu@gmail.com', 'success');

        // Reset form
        enquiryForm.reset();

        // Hide message after 6 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 6000);
    });
}

// ==================== FORM MESSAGE DISPLAY ====================
function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observe review cards
document.querySelectorAll('.review-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observe info cards
document.querySelectorAll('.info-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ==================== ACTIVE NAV LINK ON SCROLL ====================
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== ADD ACTIVE CLASS STYLING ====================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
    }
`;
document.head.appendChild(style);

// ==================== FORM FOCUS EFFECTS ====================
document.querySelectorAll('input, textarea, select').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)';
    });

    element.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
    });
});

// ==================== WHATSAPP MESSAGE PREFILL ====================
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow default behavior - WhatsApp link will open
            const href = this.getAttribute('href');
            // The href is already properly formatted
        });
    });
});

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ==================== SHOP PRODUCTS BUTTON ====================
document.addEventListener('DOMContentLoaded', function() {
    const shopButton = document.querySelector('.btn-shop');
    if (shopButton) {
        shopButton.addEventListener('click', function() {
            scrollToSection('products');
        });
    }
});

// ==================== SMOOTH SCROLL OFFSET FOR FIXED HEADER ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const headerHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== FORM AUTO-CLOSE MESSAGE ====================
setInterval(() => {
    if (formMessage && formMessage.style.display === 'block') {
        // Message will auto-hide after 6 seconds (handled in form submit)
    }
}, 100);

// ==================== CONSOLE LOG ====================
console.log('%cWelcome to GridHub Cam Technologies', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cContact: +254 706 230 252 | Email: ewairagu@gmail.com', 'font-size: 14px; color: #00d946;');
console.log('%cAvailable 24/7 on WhatsApp', 'font-size: 12px; color: #00d946; font-weight: bold;');

// ==================== RESPONSIVE NAVIGATION FIX ====================
window.addEventListener('resize', function() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==================== PREVENT MULTIPLE FORM SUBMISSIONS ====================
if (enquiryForm) {
    let isSubmitting = false;
    
    enquiryForm.addEventListener('submit', function(e) {
        if (isSubmitting) {
            e.preventDefault();
            return;
        }
        isSubmitting = true;
        
        // Reset after 2 seconds
        setTimeout(() => {
            isSubmitting = false;
        }, 2000);
    });
}

// ==================== BUTTON RIPPLE EFFECT ====================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ==================== DYNAMIC YEAR IN FOOTER ====================
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footerElements = document.querySelectorAll('.footer-bottom p');
    footerElements.forEach(element => {
        if (element.textContent.includes('2026')) {
            element.textContent = element.textContent.replace('2026', year);
        }
    });
});

// ==================== LAZY LOADING IMAGES ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== TOUCH SUPPORT FOR BUTTONS ====================
document.querySelectorAll('.btn, .product-card, .service-card, .review-card').forEach(element => {
    element.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.98)';
    });

    element.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', function(e) {
    // Scroll to top with Ctrl/Cmd + Home
    if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Open WhatsApp with Ctrl/Cmd + W
    if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
        e.preventDefault();
        const whatsappLink = document.querySelector('.whatsapp-chat');
        if (whatsappLink) {
            whatsappLink.click();
        }
    }
});

// ==================== DARK MODE TOGGLE (OPTIONAL) ====================
// Uncomment to add dark mode toggle functionality
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});
document.body.appendChild(darkModeToggle);

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
*/

// ==================== NOTIFICATION SOUND (OPTIONAL) ====================
// Uncomment to add a notification sound when user submits form
/*
function playNotificationSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}
*/

// ==================== END OF SCRIPT ====================