// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const section = document.getElementById(targetId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple animation on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

function toggleMenu() {
    const nav = document.getElementById("nav-links");
    const btn = document.getElementById("menu-btn");
    nav.classList.toggle("show");
    btn.textContent = nav.classList.contains("show") ? "✖" : "☰";
}

