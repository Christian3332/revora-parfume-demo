const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section[id]');
const revealItems = document.querySelectorAll(
    'section, .product-card, .scent-card, .testimoni-card, .step-card, .faq-item, .about-box'
);

window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    let currentSection = '';

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

revealItems.forEach(function (item) {
    item.classList.add('reveal');
    observer.observe(item);
});

const orderButtons = document.querySelectorAll('.btn-product');

orderButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log('Customer membuka WhatsApp untuk order parfum.');
    });
});