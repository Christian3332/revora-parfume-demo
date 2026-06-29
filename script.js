const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const faqItems = document.querySelectorAll('.faq-item');
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section[id]');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const revealItems = document.querySelectorAll('section, .product-card, .about-card, .guide-card, .testimoni-card, .faq-item');

filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const category = button.getAttribute('data-category');

        filterButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        productCards.forEach(function (card) {
            const productCategory = card.getAttribute('data-category');

            if (category === 'all' || category === productCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
        item.classList.toggle('open');

        const icon = item.querySelector('span');

        if (item.classList.contains('open')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
});

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navMenu.classList.remove('show');
    });
});

window.addEventListener('scroll', function () {
    let currentSection = '';

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 140;
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