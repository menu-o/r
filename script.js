// رافت النسر للحاسبات - PC Gaming Store
// Professional Gaming Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ================================
    // Mobile Navigation Toggle
    // ================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // ================================
    // Navbar Background on Scroll
    // ================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(255, 107, 53, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // ================================
    // Scroll Reveal Animations
    // ================================
    const revealElements = document.querySelectorAll('.about-card, .social-card, .stat-card, .location-info, .map-container');
    
    const revealOnScroll = function() {
        revealElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };
    
    // Initialize elements
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    // ================================
    // Parallax Effect for Gaming Background
    // ================================
    const gamingBackground = document.querySelector('.gaming-background');
    const techCircles = document.querySelectorAll('.tech-circle');
    const nodes = document.querySelectorAll('.node');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        techCircles.forEach((circle, index) => {
            const speed = 0.1 * (index + 1);
            circle.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
        
        nodes.forEach((node, index) => {
            const speed = 0.05 * (index + 1);
            node.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // ================================
    // Smooth Scroll for Anchor Links
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ================================
    // Button Click Effects
    // ================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ================================
    // Social Card Hover Sound Effect (Visual)
    // ================================
    const socialCards = document.querySelectorAll('.social-card');
    
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // ================================
    // Typing Effect for Hero Title (Optional enhancement)
    // ================================
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle && window.innerWidth > 768) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid #ff6b35';
        heroTitle.style.paddingRight = '10px';
        
        let charIndex = 0;
        const typeChar = () => {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 100);
            } else {
                heroTitle.style.borderRight = 'none';
                heroTitle.style.paddingRight = '0';
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeChar, 500);
    }
    
    // ================================
    // ================================
    // Dynamic Circuit Grid Animation
    // ================================
    const circuitLinesH = document.querySelectorAll('.circuit-line-h');
    const circuitLinesV = document.querySelectorAll('.circuit-line-v');
    
    const animateCircuits = () => {
        circuitLinesH.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.boxShadow = '0 0 10px rgba(255, 107, 53, 0.5)';
                
                setTimeout(() => {
                    line.style.opacity = '0.7';
                    line.style.boxShadow = 'none';
                }, 500);
            }, index * 300);
        });
        
        circuitLinesV.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.boxShadow = '0 0 10px rgba(255, 107, 53, 0.5)';
                
                setTimeout(() => {
                    line.style.opacity = '0.7';
                    line.style.boxShadow = 'none';
                }, 500);
            }, index * 400 + 200);
        });
    };
    
    // Animate circuits every 4 seconds
    setInterval(animateCircuits, 4000);
    animateCircuits(); // Initial animation
    
    // ================================
    // Mouse Follow Glow Effect
    // ================================
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth follow
    const updateGlow = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        // Update CSS variables for glow position
        document.documentElement.style.setProperty('--glow-x', `${currentX}px`);
        document.documentElement.style.setProperty('--glow-y', `${currentY}px`);
        
        requestAnimationFrame(updateGlow);
    };
    
    updateGlow();
    
    // ================================
    // Stats Counter Animation
    // ================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target, suffix = '') => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    };
    
    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statCards = entry.target.querySelectorAll('.stat-card');
                statCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            card.style.transform = '';
                        }, 200);
                    }, index * 100);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
    
    // ================================
    // Tech Grid Animation Speed on Scroll
    // ================================
    let lastScrollY = 0;
    let scrollSpeed = 0;
    
    window.addEventListener('scroll', () => {
        scrollSpeed = Math.abs(window.scrollY - lastScrollY);
        lastScrollY = window.scrollY;
        
        // Adjust tech circles rotation speed based on scroll
        const techCircles = document.querySelectorAll('.tech-circle');
        const speedMultiplier = Math.min(scrollSpeed / 20, 2);
        
        techCircles.forEach((circle, index) => {
            const baseSpeed = 20 - index * 5;
            const newSpeed = baseSpeed / (1 + speedMultiplier);
            circle.style.animationDuration = `${newSpeed}s`;
        });
    });
    
    // ================================
    // Page Load Animation
    // ================================
    const pageLoadAnimation = () => {
        const body = document.body;
        body.style.opacity = '0';
        
        setTimeout(() => {
            body.style.transition = 'opacity 0.5s ease';
            body.style.opacity = '1';
        }, 100);
    };
    
    pageLoadAnimation();
    
    // ================================
    // Easter Egg: Konami Code
    // ================================
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Trigger RGB party mode
            document.body.style.animation = 'rgb-party 2s linear infinite';
            
            // Add party style
            const partyStyle = document.createElement('style');
            partyStyle.textContent = `
                @keyframes rgb-party {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(partyStyle);
            
            // Show message
            const message = document.createElement('div');
            message.textContent = '🎮 RGB PARTY MODE ACTIVATED! 🎮';
            message.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #ff6b35, #ff8c42);
                color: white;
                padding: 30px 50px;
                border-radius: 20px;
                font-size: 1.5rem;
                font-weight: 800;
                z-index: 10000;
                animation: party-bounce 1s ease infinite;
                box-shadow: 0 0 50px rgba(255, 107, 53, 0.8);
            `;
            
            const bounceStyle = document.createElement('style');
            bounceStyle.textContent = `
                @keyframes party-bounce {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); }
                    50% { transform: translate(-50%, -50%) scale(1.1); }
                }
            `;
            document.head.appendChild(bounceStyle);
            
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.remove();
                document.body.style.animation = '';
                partyStyle.remove();
                bounceStyle.remove();
            }, 5000);
        }
    });
    
    console.log('%c🦅 رافت النسر للحاسبات 🦅', 'font-size: 24px; font-weight: bold; color: #ff6b35;');
    console.log('%cPC Gaming Store - Professional Computer Assembly', 'font-size: 14px; color: #888;');
});
