document.body.appendChild(document.createElement('canvas'));
const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');
cvs.width = document.documentElement.clientWidth;
cvs.height = document.documentElement.clientHeight;
const p = {
    x: 0,
    y: 0,
    r: 50,
};
document.onmousemove = (e) => {
    p.x = e.clientX || e.pageX;
    p.y = e.clientY || e.pageY;
    render();
};
const render = () => {
    ctx.beginPath();
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    var radial = ctx.createRadialGradient(p.x, p.y, p.r, p.x, p.y, p.r * 3);
    radial.addColorStop(0, 'rgba(255, 255, 255, 0)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, cvs.width, cvs.height);
};
render();
window.onresize = () => {
    cvs.width = document.documentElement.clientWidth;
    cvs.height = document.documentElement.clientHeight;
    render();
};