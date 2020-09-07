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
};

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
};

const animateJsAnimation = () => {
    const jsAnimation = document.querySelector('.js-animation');
    jsAnimation.animate([{ backgroundColor: 'turquoise' }, { backgroundColor: 'teal' }], 3000);
};

const animateJsAnimationButton = document.querySelector('.js-animation-btn');
animateJsAnimationButton.onclick = animateJsAnimation;

const animateTweenMaxExample = () => {
    const tweenMaxExample = document.querySelector('.tweenmax-example');
    TweenMax.to(
        tweenMaxExample,
        2,
        {
            y: '100%',
            ease: 'Elastic.easeOut',
            repeat: 1,
            yoyo: true,
        },
    );
};

const tweenMaxExampleButton = document.querySelector('.tweenmax-example-btn');
tweenMaxExampleButton.onclick = animateTweenMaxExample;

const itemNames = document.querySelectorAll('.item-name');
itemNames.forEach((itemName, index) => {
    itemName.onclick = () => {
        document.querySelector('.item-list').style.transform = 'translateX(-100%)';
        document.querySelector(`.item-description:nth-of-type(${index + 1})`).style.transform = 'translateX(0)';
    }
});

const itemDescriptions = document.querySelectorAll('.item-description');
itemDescriptions.forEach(itemDescription => {
    itemDescription.onclick = () => {
        itemDescription.style.transform = 'translateX(100%)';
        document.querySelector('.item-list').style.transform = 'translateX(0)';
    }
});


const CAROUSEL_ITEM_COUNT = 5;
const updateCarouselControlButtons = () => {
    slideLeftButton.disabled = carouselIndex === 0;
    slideRightButton.disabled = carouselIndex === CAROUSEL_ITEM_COUNT - 1;
};

const carouselItems = document.querySelectorAll('.carousel-container>div');
const slide = slideTo => {
    if (slideTo === 'right') carouselIndex++;
    else carouselIndex--;
    updateCarouselControlButtons();
    carouselItems.forEach(item => item.style.transform = `translateX(calc(-100% * ${carouselIndex}))`);
};

let carouselIndex = 0;
const slideLeftButton = document.querySelector('.slide-left-btn');
slideLeftButton.onclick = slide.bind(null, 'left');
const slideRightButton = document.querySelector('.slide-right-btn');
slideRightButton.onclick = slide.bind(null, 'right');
updateCarouselControlButtons();

document.querySelector('.show-modal-btn').onclick = () => {
    document.querySelector('.modal-container').classList.add('shown');
};

document.querySelector('.dismiss-modal').onclick = () => {
    document.querySelector('.modal-container').classList.remove('shown');
};

render();
