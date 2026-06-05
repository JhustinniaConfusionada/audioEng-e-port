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

    const allVideos = () => Array.from(document.querySelectorAll('.project-video'));

    const stopAllVideos = () => {
        allVideos().forEach((video) => {
            if (!video.paused) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const setupVideoControl = (container) => {
        const video = container.querySelector('.project-video');
        const toggleButton = container.querySelector('.video-toggle');

        if (!video || !toggleButton) return;

        const updateLabel = () => {
            toggleButton.textContent = video.paused ? 'Play' : 'Stop';
        };

        toggleButton.addEventListener('click', () => {
            if (video.paused) {
                stopAllVideos();
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
    };

    document.querySelectorAll('.project-item').forEach(setupVideoControl);
    document.querySelectorAll('.footer-card').forEach(setupVideoControl);
});
