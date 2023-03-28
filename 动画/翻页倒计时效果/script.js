const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const hoursBox = hours.querySelectorAll('.item');
const minutesBox = minutes.querySelectorAll('.item');
const secondsBox = seconds.querySelectorAll('.item');

const formatTime = (time) => {
    if (time < 10) time = '0' + time
    return time
}

function init() {
    let { second, minute, hour } = CountDown(hoursBox, minutesBox, secondsBox);
    startTimer(second, minute, hour);
}

init();

function startTimer(second, minute, hour) {
    setInterval(function () {
        if (second >= 60) {
            second = 0;
        }
        // let { second, minute, hour } = CountDown(hoursBox, minutesBox, secondsBox);
        if (second === 0) {
            // seconds.style.setProperty('--animation-play-state-second', 'paused');
            // 启动分钟动画
            minutes.style.setProperty('--animation-play-state-minute', 'running');
            if (minute === 0) {
                // 启动小时动画
                hours.style.setProperty('--animation-play-state-hour', 'running');
            } else {
                // 小时动画停止
                hours.style.setProperty('--animation-play-state-hour', 'paused');
            }
        } else if (second < 60) {
            seconds.style.setProperty('--animation-play-state-second', 'running');
            // 小时和分钟动画都需要停止
            minutes.style.setProperty('--animation-play-state-minute', 'paused');
            hours.style.setProperty('--animation-play-state-hour', 'paused');
        } else {
            // 秒动画启动
            seconds.style.setProperty('--animation-play-state-second', 'running');
        }
        second ++;
        setMinutesAndSeconds(secondsBox, second);
    }, 1000);
}

// 实现打印此时的剩余时间数，需要和定时器配合使用，以便一秒刷新一次，达成倒计时效果
function CountDown(hourBox, minBox, secBox) {
    let currDate = new Date();
    let hour = parseInt(currDate.getHours());
    let min = parseInt(currDate.getMinutes());
    let sec = parseInt(currDate.getSeconds());
    setHours(hourBox, hour);
    setMinutesAndSeconds(minBox, min);
    setMinutesAndSeconds(secBox, sec);
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

function setMinutesAndSeconds(items, value) {
    if (items && items.length > 0) {
        if (value === 60) value = 0;
        let curr = formatTime(value);
        let next = formatTime(value < 59 ? value + 1 : 0);
        items[0].textContent = next;
        items[1].textContent = next;
        items[2].textContent = curr;
        items[3].textContent = curr;
    }
}

// function setMinutes(items, minute) {
//     if (items && items.length > 0) {
//         let curr = formatTime(minute);
//         let next = formatTime(minute < 59 ? minute + 1 : 0);
//         items[0].textContent = next;
//         items[1].textContent = next;
//         items[2].textContent = curr;
//         items[3].textContent = curr;
//     }
// }