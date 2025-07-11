document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const body = document.body;

    function setDarkTheme() {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        icon.innerHTML = `
            <circle cx="12" cy="12" r="5" stroke="#ffd166" stroke-width="2" fill="none"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#ffd166" stroke-width="2" stroke-linecap="round"/>
        `;
    }
    function setLightTheme() {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        icon.innerHTML = `
            <circle cx="12" cy="12" r="5" stroke="#ffb300" stroke-width="2" fill="#fffbe6"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#ffb300" stroke-width="2" stroke-linecap="round"/>
        `;
    }

    // Tema predeterminado oscuro
    setDarkTheme();

    toggleBtn.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    });
});

window.addEventListener('load', function() {
    const loader = document.getElementById('loader-bg');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 600);
    }
});

// Scroll suave para los tabs del navbar
const navbarLinks = document.querySelectorAll('.navbar-links a[href^="#"]');
navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId) || document.querySelector(`[name='${targetId}']`);
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70, // Ajuste para el navbar fijo
                behavior: 'smooth'
            });
        }
    });
}); 