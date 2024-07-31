document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.activity-image');
    images.forEach(image => {
        image.style.position = 'relative';
        image.style.animation = 'moveImage 10s linear infinite';
    });
});

@keyframes moveImage {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
