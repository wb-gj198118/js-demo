/**
 * 
 */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const size = 2; // 烟花粒子的大小
const start = {
  x: canvas.width / 2,
  y: canvas.height - 100,
};

function clearCanvas() {
  // ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
clearCanvas();
wm();

let rid = 0;
function fire() {
  createFireworks(Math.floor(Math.random() * 2) + 1); // 每次点击都会增加一个
  function tick() {
    clearCanvas();
    wm();
    for(let i = 0, len = fireworks.length; i < len; i++) {
      const f = fireworks[i];
      if (f.state === 1) {
        step1(f);
      } else if(f.state === 2) {
        step2(f);
      }
    }
    rid = requestAnimationFrame(tick);
  }
  cancelAnimationFrame(rid);
  tick()
}

// 烟花第一步，升空
function step1(p) {
  if (p.upSpeed < 0.1) {
    p.state = 2;
    return;
  }
  p.upSpeed = p.upSpeed - 0.2;
  p.y = p.y - p.upSpeed;
  p.x = p.x + p.xAngle;
  ctx.beginPath();
  ctx.arc(p.x, p.y, size, 0, Math.PI*2, false)
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
}

// 生成的烟花粒子
let fireworks = [];
function createFireworks(type) {
  const firework = {
    x: start.x + Math.floor(Math.random() * 100) - 50,
    y: start.y,
    xAngle: Math.random() * 6 - 3,
    upSpeed: Math.random() * 4 + 8,
    state: 1,
    particles: [], // 炸开后的粒子
    type: type,
  };
  let count = Math.floor(Math.random() * 100) + 80;
  let hue = Math.floor(Math.random() * 6) * 60; // 分6种主颜色
  for (let i = 0; i < count; i++) {
    let p = {vx:0, vy:0}; // 每一个粒子
    let angle = Math.floor(Math.random() * 360);
    if (type == 2) {
      angle = 360/count * i;
    }
    p.radians = angle * Math.PI / 180;
    p.speed = (Math.random() * 20) + 1;
    p.radius = p.speed;
    p.hue = Math.floor(Math.random() * 30) + hue;
    p.brightness = Math.floor(Math.random() * 30) + 70;
    p.alpha = (Math.floor(Math.random() * 61) + 40) / 100;
    firework.particles.push(p);
  }
  fireworks.push(firework);
}

function wm() {
  const beginPoint = {x: start.x - 70, y: start.y}
  const endPoint = {x: start.x + 70, y: start.y + 30}
  ctx.font = '30px Verdana';
  const gradient = ctx.createLinearGradient(beginPoint.x, beginPoint.y, endPoint.x, endPoint.y);
  gradient.addColorStop('0', 'rgba(255, 0, 0, 0.8)');
  gradient.addColorStop('0.5', 'rgba(0, 255, 0, 0.8)');
  gradient.addColorStop('1.0', 'rgba(0, 0, 255, 0.8)');
  ctx.fillStyle = gradient;
  ctx.fillText('', beginPoint.x, beginPoint.y);
}

function step2(f) {
  const particles = f.particles;
  for (let i = 0, len = particles.length; i < len; i++) {
    const p = particles[i];
    if (p.alpha <= 0) {
      continue;
    }
    switch(f.type){
      case 1:
        step2_circle(p, f.x, f.y);
        break;
      case 2:
        step2_heart(p, f.x, f.y);
        break;
      default:
        step2_circle(p, f.x, f.y);
        break;
    }
  }
}
// 炸开效果是圆圈
function step2_circle(p, x, y) {
  let vx = Math.cos(p.radians) * p.radius;
  let vy = Math.sin(p.radians) * p.radius + 0.4;

  p.vx += vx;
  p.vy += vy;
  p.radius *= 1 - p.speed / 100; // 逐步变慢
  p.alpha -= 0.01;
  ctx.beginPath();
  ctx.arc(x - 5 + p.vx, y - 5 + p.vy, size, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fillStyle = `hsla(${p.hue}, 100%, ${p.brightness}%, ${p.alpha})`;
  ctx.fill();
}
// 爆炸后的效果是爱心
function step2_heart(p, x, y) {
  const t = p.radians
  let vx = p.radius * Math.pow(Math.sin(t), 3);
  let vy = p.radius / 1.2 * Math.cos(t)
    - p.radius / 3.2 * Math.cos(2*t) 
    - p.radius / 8 * Math.cos(3*t) 
    - p.radius / 16 * Math.cos(4*t) 
    + p.radius / 6.4;

  p.vx += vx;
  p.vy -= vy;
  p.radius *= 1 - p.speed / 100; // 逐步变慢
  p.alpha -= 0.01;
  ctx.beginPath();
  ctx.arc(x - 5 + p.vx, y - 5 + p.vy, size, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fillStyle = `hsla(${p.hue}, 100%, ${p.brightness}%, ${p.alpha})`;
  ctx.fill();
}

function mouseDownHandler(e) {
  fire();
}
document.addEventListener('mousedown', mouseDownHandler, false);

