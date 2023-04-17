window.addEventListener('load', function () {
    const container = document.querySelector('.container');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const circle = document.querySelector('.dots');
    const containerWidth = container.offsetWidth;
    const carousel = container.querySelector('.carousel');
    let num = 0;
    let autoPlay = 0;

    function stop() {
        autoPlay && clearInterval(autoPlay);
        autoPlay = null;// 清除定时器
    }

    function start() {
        autoPlay = setInterval(function () {
            // 手动调用点击事件
            next.click();
        }, 2000);
    }

    // 鼠标移动盒子内时停止自动轮播
    container.addEventListener('mouseenter', function () {
        stop();
    });

    // 离开时重新触发定时轮播
    container.addEventListener('mouseleave', function () {
        start();
    });

    // 设置carousel的宽度
    const nums = carousel.children.length;

    const fragment = document.createDocumentFragment();

    // 动态创建底部小圆点
    for (let k = 0; k < nums; k++) {
        let i = document.createElement('i');
        i.dataset.index = k;
        i.addEventListener('click', function () {
            num = parseInt(this.dataset.index);
            animation({
                obj: carousel,
                //   target: -num * containerWidth,
                num,
                // nums
            });
            currents();
        });
        fragment.append(i);
    }

    circle.appendChild(fragment);

    // 为创建的圆点添加相应的选中样式
    circle.children[num].classList.add('current');

    // 判断有没有执行完动画
    let flag = true;

    // 为按钮prev，next加事件
    next.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == nums - 1) {
                num = 0;
                animation({
                    obj: carousel,
                    // target: 0,
                    num,
                    // nums
                });
                flag = true;
            } else {
                num++;
                animation({
                    obj: carousel,
                    // target: -num * containerWidth,
                    // callback: function () {
                    //     flag = true;
                    // },
                    num,
                    // nums,
                });
            }
            currents();
        }
    });

    prev.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = nums - 1;
                animation({
                    obj: carousel,
                    // target: -nums * containerWidth - 1,
                    num,
                    //  nums
                });
                flag = true;
            } else {
                num--;
                animation({
                    obj: carousel,
                    // target: -num * containerWidth,
                    // callback: function () {
                    //     flag = true;
                    // },
                    num,
                    // nums,
                });
            }
            currents();
        }
    });

    function currents() {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        circle.children[num].classList.add('current');
    }

    // 无缝播放
    const item = carousel.children[0].cloneNode(true);
    carousel.appendChild(item);

    // 自动播放
    start();

    carousel.addEventListener('transitionend', (evt) => {
        flag = true;
        evt.target.classList.remove('running');
        carousel.timer && clearInterval(carousel.timer);
        carousel.timer = null;
    });

    document.addEventListener('visibilitychange', function () {
        var isHidden = document.hidden;
        if (isHidden) {
            flag = true;
            carousel.classList.remove('running');
            carousel.timer && clearInterval(carousel.timer);
            carousel.timer = null;
            stop();
        } else {
            flag = false;
            start();
        }
    });
});

function animation({
    obj,
    // target, 
    // callback,
    num,
    // nums
}) {// obj要实现的那个元素， target目标位置

    // 定时器方案
    // obj.timer && clearInterval(obj.timer);
    // obj.timer = setInterval(() => {
    //     let step = (target - obj.offsetLeft) / 15;
    //     step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //     if (obj.offsetLeft === target) {
    //         obj.timer && clearInterval(obj.timer);
    //         // 回调函数
    //         callback && callback();
    //     } else {
    //         obj.style.left = obj.offsetLeft + step + 'px';
    //     }
    // }, 15);

    // raf方案
    // obj.raf && cancelAnimationFrame(obj.raf);
    // obj.raf = requestAnimationFrame(() => {
    //     let step = (target - obj.offsetLeft) / 15;
    //     step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //     if (obj.offsetLeft === target) {
    //         obj.raf && cancelAnimationFrame(obj.raf);
    //         // 回调函数
    //         callback && callback();
    //     } else {
    //         obj.style.left = obj.offsetLeft + step + 'px';
    //     }
    //     animation({ obj, target, callback });
    // });

    // translate 方案
    // 获取动画执行时间，这里也可以获取css变量transition-delay的值
    let delay = window.getComputedStyle(obj, null).getPropertyValue('transition-delay');
    delay = delay && delay.includes('ms') ? delay : delay * 1000;
    obj.timer && clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        obj.classList.add('running');
        obj.style.transform = `translateX(-${num * 100}%)`;
    }, delay);
}