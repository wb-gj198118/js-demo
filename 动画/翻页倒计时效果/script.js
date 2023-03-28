// const hours = document.querySelector('.hours');
// const minutes = document.querySelector('.minutes');
// const seconds = document.querySelector('.seconds');

// const hoursBox = hours.querySelectorAll('.item');
// const minutesBox = minutes.querySelectorAll('.item');
// const secondsBox = seconds.querySelectorAll('.item');

const formatTime = (time) => {
    if (time < 10) {
        return `0${time}`;
    }
    return time;
}

class CountDown {
    #cssVar = {
        hour: '--animation-play-state-hour',
        minute: '--animation-play-state-minute',
        second: '--animation-play-state-second',
    }

    #animationPlayState = {
        running: 'running', // 开启动画
        paused: 'paused', // 暂停动画
    }

    #doms = {
        hours: document.querySelector('.hours'),
        minutes: document.querySelector('.minutes'),
        seconds: document.querySelector('.seconds'),
        hoursBox: document.querySelectorAll('.hours .item'),
        minutesBox: document.querySelectorAll('.minutes .item'),
        secondsBox: document.querySelectorAll('.seconds .item'),
    }

    #hour = 0;
    #minute = 0;
    #second = 0;
    #timer = 0;

    constructor() {
        this.init();
        this.start();
    }

    init() {
        let currDate = new Date();
        let hour = parseInt(currDate.getHours());
        let minute = parseInt(currDate.getMinutes());
        let second = parseInt(currDate.getSeconds());
        this.#hour = hour;
        this.#minute = minute;
        this.#second = second;
        this.#updateHour(this.#doms.hoursBox, hour);
        this.#updateMinuteAndSecond(this.#doms.minutesBox, minute);
        this.#updateMinuteAndSecond(this.#doms.secondsBox, second);
    }

    // 检测是否需要更新小时值
    #checkUpdateHour() {
        return this.#minute === 0;
    }

    // 检测是否需要更新分钟值
    #checkUpdateMinute() {
        return this.#second === 0;
    }

    // 更新对应的小时值
    #updateHour(items, hour) {
        if (items && items.length > 0) {
            let curr = formatTime(hour);
            let next = formatTime(hour + 1 === 24 ? 23 : hour + 1);
            items[0].textContent = next;
            items[1].textContent = next;
            items[2].textContent = curr;
            items[3].textContent = curr;
        }
    }

    // 更新对应的分钟和秒值
    #updateMinuteAndSecond(items, value) {
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

    // 重置对应的时间值
    #reset() {
        if (this.#second >= 60) {
            this.#second = 0;
        }
        if (this.#minute >= 60) {
            this.#minute = 0;
        }
        if (this.#hour >= 24) {
            this.#hour = 0;
        }
    }

    // 更新相应的值的逻辑处理
    #update() {
        this.#reset();
        if (this.#checkUpdateMinute()) {
            // 启动分钟动画
            this.#setAnimationPlayState(this.#doms.minutes, this.#cssVar.minute, this.#animationPlayState.running);
            this.#updateMinuteAndSecond(this.#doms.minutesBox, this.#minute);
            this.#minute++;
            if (this.#checkUpdateHour()) {
                // 启动小时动画
                this.#setAnimationPlayState(this.#doms.hours, this.#cssVar.minute, this.#animationPlayState.running);
                this.#updateHour(this.#doms.hoursBox, this.#hour);
                this.#hour ++;
            } else {
                // 暂停小时动画
                this.#setAnimationPlayState(this.#doms.hours, this.#cssVar.minute, this.#animationPlayState.paused);
            }
        } else {
            // 暂停分钟动画
            this.#setAnimationPlayState(this.#doms.minutes, this.#cssVar.minute, this.#animationPlayState.paused);
        }
        this.#setAnimationPlayState(this.#doms.seconds, this.#cssVar.second, this.#animationPlayState.running);
        this.#updateMinuteAndSecond(this.#doms.secondsBox, this.#second);
        this.#second ++;
    }

    start() {
        this.#timer = setInterval(() => {
            this.#update();
        }, 1000);
    }

    stop() {
        if (this.#timer) {
            clearInterval(this.#timer);
            this.#setAnimationPlayState(this.#doms.hours, this.#cssVar.hour, this.#animationPlayState.paused);
            this.#setAnimationPlayState(this.#doms.minutes, this.#cssVar.minute, this.#animationPlayState.paused);
            this.#setAnimationPlayState(this.#doms.seconds, this.#cssVar.second, this.#animationPlayState.paused);
        }
    }

    // 启动或者暂停动画
    #setAnimationPlayState(doms, cssVar, state) {
        if (!doms || !doms.style) return;
        const prevState = window.getComputedStyle(doms).getPropertyValue(cssVar);
        if (prevState !== state) {
            doms.style.setProperty(cssVar, state);
        }
    }
}

const countDown = new CountDown();

// countDown.stop();

// setTimeout(function () {
//     countDown.init();
//     countDown.start();
// }, 5000);