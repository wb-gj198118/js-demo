'use strict';

const preferredDisplaySurface = document.getElementById('displaySurface');
const startButton = document.getElementById('startButton');

if (adapter.browserDetails.browser === 'chrome' &&
    adapter.browserDetails.version >= 107) {
    // docs: https://developer.chrome.com/docs/web-platform/screen-sharing-controls/
    document.getElementById('options').style.display = 'block';
} else if (adapter.browserDetails.browser === 'firefox') {
    // docs https://blog.mozilla.org/webrtc/getdisplaymedia-now-available-in-adapter-js/
    adapter.browserShim.shimGetDisplayMedia(window, 'screen');
}

function handleSuccess(stream) {
    startButton.disabled = true;
    preferredDisplaySurface.disabled = true;
    const video = document.querySelector('video');
    video.srcObject = stream;
    stream.getVideoTracks()[0].addEventListener('ended', () => {
        errorMsg('结束了');
        startButton.disabled = false;
        preferredDisplaySurface.disabled = false;
    });
}

function handleError(error) {
    errorMsg(`error: ${error.name}`, error);
}

function errorMsg(msg, error) {
    const errorElement = document.querySelector('#errorMsg');
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== 'undefined') {
        console.error(error);
    }
}


startButton.addEventListener('click', () => {
    const options = { audio: true, video: true };
    const displaySurface = preferredDisplaySurface.options[preferredDisplaySurface.selectedIndex].value;
    if (displaySurface !== 'default') {
        options.video = { displaySurface };
    }
    navigator.mediaDevices.getDisplayMedia(options)
        .then(handleSuccess, handleError);
});

if ((navigator.mediaDevices && 'getDisplayMedia' in navigator.mediaDevices)) {
    startButton.disabled = false;
} else {
    errorMsg('不支持');
}