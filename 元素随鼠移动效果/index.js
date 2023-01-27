const box = document.querySelector('.content');
let isDown = false;
let mX = 0;
let mY = 0;
let currentX = 0;
let currentY = 0;

box.addEventListener('mousedown', (e) => {
    isDown = true;
    mX = e.pageX;
    mY = e.pageY;
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
});

const move = (e) => {
    if (!isDown) return;
    let x = e.pageX - mX;
    let y = e.pageY - mY;
    if (currentX && currentY) {
        x += currentX;
        y += currentY;
    }

    let elHeight = box.offsetHeight;
    let elWidth = box.offsetWidth;
    let rangeHeight = (document.body.offsetHeight / 2 - elHeight / 2);
    let rangeWidth = (document.body.offsetWidth / 2 - elWidth / 2);
    
    if (Math.abs(y) > rangeHeight) {
        if (y < 0) {
            y = -rangeHeight;
        } else {
            y = rangeHeight;
        }
    }

    if (Math.abs(x) > rangeWidth) {
        if (x < 0) {
            x = -rangeWidth;
        } else {
            x = rangeWidth;
        }
    }

    box.style.cssText = `transform:translate3d(${x}px, ${y}px, 1px)`;
}

const up = () => {
    isDown = false;
    let formatValue = window.getComputedStyle(box, null).transform.replace(/[^0-9\-,]/g, '');
    let formatArr = formatValue.split(',');
    currentX = Number(formatArr[formatArr.length - 4]);
    currentY = Number(formatArr[formatArr.length - 3]);
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
}