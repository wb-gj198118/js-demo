let width = 800
let height = 400
let isDownin = false
let lastX = 0
let lastY = 0
let cacheData = [];
let ph = 60;

const cvs = document.getElementById('cvs')
const ctx = cvs.getContext('2d')
cvs.width = width
cvs.height = height

cvs.addEventListener('mousedown', (e) => {
    isDownin = true
    lastX = e.clientX - ph + 40;
    lastY = e.clientY - ph - 20;
    let cacheItem = ctx.getImageData(0, 0, width, height);
    cacheData.push(cacheItem)
    ctx.moveTo(lastX, lastY)
})
cvs.addEventListener('mousemove', (e) => {
    if (!isDownin) return;
    e.preventDefault();
    drawLine(e.clientX - ph  + 40, e.clientY - ph - 20)
    ctx.stroke()
})
cvs.addEventListener('mouseup', (e) => {
    isDownin = false
})

function drawLine(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#000';
    ctx.lineCap = 'round'
    ctx.lineJoin = "round";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
}

/* 清空 */
const clear = document.getElementById('clear')
clear.onclick = () => {
    ctx.clearRect(0, 0, width, height)
}

/* 回退 */
const back = document.getElementById('back')
back.onclick = () => {
    if (cacheData.length === 0) return;
    ctx.putImageData(cacheData.pop(), 0, 0);
}

const save = document.getElementById('save')
save.onclick = () => {
    cvs.toBlob((blob) => {
        const a = document.createElement('a');
        document.body.append(a);
        a.download = `签名.png`;
        a.href = URL.createObjectURL(blob);
        a.click();
        a.remove();
    });
}
