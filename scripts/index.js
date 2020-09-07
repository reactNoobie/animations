const render = () => {
    const toggleRainButton = document.querySelector('#toggle-rain-btn');
    toggleRainButton.onclick = () => {
        const rains = document.querySelectorAll('.rain');
        rains.forEach(rain => rain.classList.toggle('raining'));
    }

    const rainContainer = document.querySelector('.rain-container');
    for (let i = 0; i < 50; i++) {
        const rain = document.createElement('div');
        rain.classList.add('rain');
        rainContainer.appendChild(rain);
    }

    const pausables = document.querySelectorAll('.pausable');
    pausables.forEach(pausable => {
        pausable.onclick = (e) => {
            e.stopPropagation();
            pausable.classList.toggle('paused');
        }
    });
}

const clickbait = document.querySelector('.clickbait');
clickbait.onclick = () => {
    clickbait.classList.toggle('clicked');
};

const getRandom = (max, min) => Math.floor(Math.random() * (min - max + 1)) + max;

const containerGrid = document.querySelector('.container-grid');
containerGrid.onclick = () => {
    const emergingBox = document.createElement('div');
    emergingBox.style.backgroundColor = `rgb(${getRandom(0, 256)}, ${getRandom(0, 256)}, ${getRandom(0, 256)})`;
    emergingBox.classList.add('emerging-box');
    emergingBox.classList.add('pausable');
    containerGrid.appendChild(emergingBox);
    render();
}

render();