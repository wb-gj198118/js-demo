let hHand = document.querySelector('.hours-hand');
let hWrapper = document.querySelector('.hours-wrapper');
let mHand = document.querySelector('.minutes-hand');
let mWrapper = document.querySelector('.minutes-wrapper');
let sHand = document.querySelector('.seconds-hand');
let sWrapper = document.querySelector('.seconds-wrapper');

function setTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let currentSec = h * 60 * 60 + m * 60 + s;
    let totalSec = 24 * 60 * 60;
    let hProgress = currentSec / totalSec;
    let hAngle = hProgress * 720;
    let mProgress = (m * 60 + s) / (60 * 60);
    let mAngle = mProgress * 360;
    let sProgress = s / 60;
    let sAngle = sProgress * 360;

    hHand.style.transform = 'rotate(' + hAngle + 'deg) translateY(-36%)';
    mHand.style.transform = 'rotate(' + mAngle + 'deg) translateY(-38%)';
    sHand.style.transform = 'rotate(' + sAngle + 'deg) translateY(-34%)';

    triggerReflow();
}

function triggerReflow() {
    hWrapper.classList.remove('running');
    hWrapper.offsetHeight;
    hWrapper.classList.add('running');

    mWrapper.classList.remove('running');
    mWrapper.offsetHeight;
    mWrapper.classList.add('running');

    sWrapper.classList.remove('running');
    sWrapper.offsetHeight;
    sWrapper.classList.add('running');

}

setTime();

window.onfocus = setTime;