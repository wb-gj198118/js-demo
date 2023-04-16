// 获取Canvas元素和上下文
var canvas = document.getElementById("cvs");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

var ctx = canvas.getContext("2d");
// 绘制文本
ctx.font = "30px Arial";
ctx.fillText("Drag me!", 50, 50);

// 创建文本对象
var textObject = {
    x: 50,
    y: 50,
    text: "Drag me!",
    color: "black",
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    // 绘制文本
    draw: function () {
        ctx.fillStyle = this.color;
        ctx.font = "30px Arial";
        ctx.fillText(this.text, this.x, this.y);
    },
    // 开始拖动
    startDragging: function (x, y) {
        this.isDragging = true;
        this.dragStartX = x;
        this.dragStartY = y;
    },
    // 停止拖动
    stopDragging: function () {
        this.isDragging = false;
    },
    // 拖动文本
    drag: function (x, y) {
        var deltaX = x - this.dragStartX;
        var deltaY = y - this.dragStartY;
        this.x += deltaX;
        this.y += deltaY;
        this.dragStartX = x;
        this.dragStartY = y;
    }
};

// 绘制文本对象
textObject.draw();

// 添加mousedown事件侦听器以启动拖动操作
canvas.addEventListener("mousedown", function (event) {
    if (event.button == 0) { // 左键单击
        var mouseX = event.clientX - canvas.offsetLeft; // 获取鼠标相对于Canvas的x坐标
        var mouseY = event.clientY - canvas.offsetTop; // 获取鼠标相对于Canvas的y坐标
        if (mouseX > textObject.x && mouseX < textObject.x + ctx.measureText(textObject.text).width && mouseY > textObject.y - 30 && mouseY < textObject.y) { // 如果鼠标在文本上
            textObject.startDragging(mouseX, mouseY);
        }
    }
});

// 添加mousemove事件侦听器以更新文本对象位置
document.addEventListener("mousemove", function (event) {
    if (textObject.isDragging) {
        var mouseX = event.clientX - canvas.offsetLeft;
        var mouseY = event.clientY - canvas.offsetTop;
        textObject.drag(mouseX, mouseY);
        // textObject.drag(event.clientX, event.clientY);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除当前Canvas
        textObject.draw(); // 重新绘制文本对象
    }
});

// 添加mouseup事件侦听器以停止拖动操作
document.addEventListener("mouseup", function () {
    textObject.stopDragging();
});
