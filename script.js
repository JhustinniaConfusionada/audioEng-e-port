document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const footerCard = document.querySelector('.footer-card');
    if (footerCard) {
        footerCard.addEventListener('click', () => {
            footerCard.classList.toggle('active-card');
        });
    }

    document.querySelectorAll('.project-item').forEach((item) => {
        const video = item.querySelector('.project-video');
        const toggleButton = item.querySelector('.video-toggle');

        if (!video || !toggleButton) return;

        const updateLabel = () => {
            toggleButton.textContent = video.paused ? 'Play' : 'Stop';
        };

        toggleButton.addEventListener('click', () => {
            if (video.paused) {
                video.muted = false;
                video.volume = 1;
                video.play().catch(() => {});
            } else {
                video.pause();
                video.currentTime = 0;
            }
            updateLabel();
        });

        video.addEventListener('play', updateLabel);
        video.addEventListener('pause', updateLabel);
        video.addEventListener('ended', updateLabel);
        updateLabel();
    });
});
