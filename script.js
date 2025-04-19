document.addEventListener('DOMContentLoaded', () => {
    const collapseElement = document.getElementById('collapseExample');
    const blackLayer = document.getElementById('black-layer');

    collapseElement.addEventListener('show.bs.collapse', () => {
        blackLayer.style.opacity = '0.7';
        blackLayer.style.display = 'flex';
    });

    collapseElement.addEventListener('hide.bs.collapse', () => {
        blackLayer.style.opacity = '0';
    });
});