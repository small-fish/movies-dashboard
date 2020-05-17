import './index.css';
import './ratingbar.css';
import './movies.css';

init();

function init() {
    let ratingbarItems = document.querySelectorAll('.ratingbar__line--colored');
    let ratingbarLinks = document.querySelectorAll('.ratingbar__item');
    let firstActive = document.querySelectorAll(`[data-rating="5"]`)

    ratingbarItems.forEach((item) => {
        changeRatingbarWidth(item);
    });

    ratingbarLinks.forEach((item) => {
        item.addEventListener('click', onRatingClick);
    });

    firstActive.forEach((item) => {
        item.classList.add('is-active');
    })
}

function changeRatingbarWidth(element) {
    let total = element.dataset.total;
    let current = element.dataset.count;
    let width = current*100/total;

    element.style.width = `${width}%`;
}

function onRatingClick() {
    let element = this;

    if (!element.classList.contains('is-active')) {
        let rating = element.dataset.rating;
        let prevActiveElements = document.querySelectorAll('.container .is-active');
        let nextActiveElements = document.querySelectorAll(`[data-rating="${rating}"]`)

        prevActiveElements.forEach((item) => {
            item.classList.remove('is-active');
        })

        nextActiveElements.forEach((item) => {
            item.classList.add('is-active');
        })
    }
}
