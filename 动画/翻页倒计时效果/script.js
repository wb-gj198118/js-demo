const hoursBox = document.querySelectorAll('.hours .item');
const minutesBox = document.querySelectorAll('.minutes .item');
const secondsBox = document.querySelectorAll('.seconds .item');

const formatTime = (time) => {
    if (time < 10) time = '0' + time
    return time
}

function init() {
    startTimer();
}

init();

function startTimer() {
    setInterval(function () {
        const { second, minute } = CountDown(hoursBox, minutesBox, secondsBox);
        if (second === 0) {
            // 启动分钟动画
            minutesBox[1].style.setProperty('--animation-play-state-minute', 'running');
            minutesBox[2].style.setProperty('--animation-play-state-minute', 'running');
            if (minute === 0) {
                // 启动小时动画
                hoursBox[1].style.setProperty('--animation-play-state-hour', 'running');
                hoursBox[2].style.setProperty('--animation-play-state-hour', 'running');
            } else {
                // 小时动画停止
                hoursBox[1].style.setProperty('--animation-play-state-hour', 'paused');
                hoursBox[2].style.setProperty('--animation-play-state-hour', 'paused');
            }
        } else if (second < 60) {
            // 小时和分钟动画都需要停止
            minutesBox[1].style.setProperty('--animation-play-state-minute', 'paused');
            hoursBox[1].style.setProperty('--animation-play-state-hour', 'paused');
            minutesBox[2].style.setProperty('--animation-play-state-minute', 'paused');
            hoursBox[2].style.setProperty('--animation-play-state-hour', 'paused');
        } else if (second % 10 === 0 || second === 59) {
            // 秒动画停止
            secondsBox[1].style.setProperty('--animation-play-state-minute', 'paused');
            secondsBox[2].style.setProperty('--animation-play-state-minute', 'paused');
        } else {
            // 秒动画启动
            secondsBox[1].style.setProperty('--animation-play-state-minute', 'running');
            secondsBox[2].style.setProperty('--animation-play-state-minute', 'running');
        }
    }, 1000);
}

// 实现打印此时的剩余时间数，需要和定时器配合使用，以便一秒刷新一次，达成倒计时效果
function CountDown(hourBox, minBox, secBox) {
    let currDate = new Date();
    let hour = parseInt(currDate.getHours());
    let min = parseInt(currDate.getMinutes());
    let sec = parseInt(currDate.getSeconds());
    setHours(hourBox, hour);
    setMinutes(minBox, min);
    setSeconds(secBox, sec);
    return { hour, minute: min, second: sec };
}

function setHours(items, hour) {
    if (items && items.length > 0) {
        let curr = formatTime(hour);
        let next = formatTime(hour + 1 === 24 ? 23 : hour + 1);
        items[0].textContent = next;
        items[1].textContent = next;
        items[2].textContent = curr;
        items[3].textContent = curr;
    }
}

function setSeconds(items, seconds) {
    if (items && items.length > 0) {
        let curr = formatTime(seconds);
        let next = formatTime(seconds + 1 === 60 ? 59 : seconds + 1);
        items[0].textContent = next;
        items[1].textContent = next;
        items[2].textContent = curr;
        items[3].textContent = curr;
    }
}

function setMinutes(items, minute) {
    if (items && items.length > 0) {
        let curr = formatTime(minute);
        let next = formatTime(minute + 1 === 60 ? 59 : minute + 1);
        items[0].textContent = next;
        items[1].textContent = next;
        items[2].textContent = curr;
        items[3].textContent = curr;
    }
}