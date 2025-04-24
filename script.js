const aboutMeButton = document.getElementById('about-me');
const closeAboutButton = document.getElementById('close-about');
const blackLayer = document.querySelector('.black-layer');

function toggleBlackLayer() {
    if (blackLayer.classList.contains('active')) {
        blackLayer.classList.remove('active');
        setTimeout(() => {
            blackLayer.style.display = 'none';
        }, 300);
    } else {
        blackLayer.style.display = 'block';
        setTimeout(() => {
            blackLayer.classList.add('active');
        }, 10);
    }
}

// Add event listeners
aboutMeButton.addEventListener('click', toggleBlackLayer);
closeAboutButton.addEventListener('click', toggleBlackLayer);