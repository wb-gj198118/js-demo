
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const indacitors = document.querySelectorAll('.indacitor span');
const indacitor = document.querySelector('.indacitor');

function clearTransform() {
    items.forEach((item, i) => {
        item.style.transform = 'none';
    });
}

function moveTo(index) {
    clearTransform();
    items[index].style.transform = `translateX(-${index * 100}%)`;
    const activeIndacitor = document.querySelector('.indacitor span.active');
    if (indacitors[index]) {
        if (activeIndacitor) {
            activeIndacitor.classList.remove('active');
        }
        indacitors[index].classList.add('active');
    }
}

function getActiveIndacitorIndex(ele) {
    let clickedElementIndex = 0;
    indacitors.forEach((element, index) => {
        ele === element ? clickedElementIndex = index : clickedElementIndex;
    });
    return clickedElementIndex;
}

indacitor.addEventListener('click', (evt) => {
    if (evt.currentTarget !== evt.target && !evt.target.classList.contains('active')) {
        console.log(evt.currentTarget, evt.target);
        const i = getActiveIndacitorIndex(evt.target);
        moveTo(i);
    }
});