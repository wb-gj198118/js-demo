const box = document.querySelector('.content');
let isDown = false;
let mX = 0;
let mY = 0;

box.addEventListener('mousedown', (e) => {
    isDown = true;
    mX = e.offsetX;
    mY = e.offsetY;
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
});

box.addEventListener('mouseup', function (e) {
    isDown = false;
});

const move = (e) => {
    if (!isDown) return;
    let h = window.innerHeight - box.offsetHeight;
    let w = window.innerWidth - box.offsetWidth;
    let x = Math.min(Math.max(e.pageX - mX, 0), w);
    let y = Math.min(Math.max(e.pageY - mY, 0), h);
    box.style.cssText = `transform:translate3d(${x}px, ${y}px, 1px)`;
}

const up = () => {
    isDown = false;
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
}