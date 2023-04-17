// DOM
const masonry = document.querySelector('.masonry');
const divider1 = masonry.querySelector('.divider1');

let pageSize = 12; // 每页12个
let cardCount = 0; // 加载Card数量
let colHeights = [0, 0, 0, 0]; // 列高
let observer; // Intersection observer 监听对象

// 加载数据
function loadData() {
  for (let i = 0; i < pageSize; i++) {
    createCard(i);
  }
}

loadData();

// 创建数据展示对应的Card
async function createCard(i) {
  // 新建Card，初始化时隐藏
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.position = 'fixed';
  card.style.top = 0;
  card.style.left = 0;
  card.style.visibility = 'hidden';

  const img = await loadImage();
  if (img) {
    card.append(img);
    document.body.appendChild(card);
    const cardIndex = cardCount;
    const colIndex = (cardIndex + 1) % 4;
    const cardHeight = card.clientHeight;
    colHeights[colIndex] += cardHeight;
    setMasonryHeight();
    masonry.insertBefore(card, divider1);

    // 显示
    card.style.position = '';
    card.style.visibility = '';
    card.classList.add('show');
    cardCount++;

    // 监听加载更多
    if (i === pageSize - 1) {
      observe(card);
    }
  }
}

function observe(card) {
  if (!observer) {
    observer = new IntersectionObserver(entries => {
      // 加载更多
      if (entries.length === 1 && entries[0].isIntersecting) {
        loadData();
        observer.unobserve(entries[0].target);
      }
    });
  }
  observer.observe(card);
}

async function loadImage() {
  const img = document.createElement('img');
  // 300 < randomHeight < 800
  const randomHeight = Math.round(Math.random() * 500) + 300;
  const src = `http://source.unsplash.com/random/400x${randomHeight}`;
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function setMasonryHeight() {
  masonry.style.height = Math.max(...colHeights) + 10 + 'px';
}

// resize处理事件
function resetMasonryHeight() {
  colHeights = [0, 0, 0, 0];
  document.querySelectorAll('.card').forEach((card, index) => {
    const cardHeight = card.clientHeight;
    const colIndex = (index + 1) % 4;
    colHeights[colIndex] += cardHeight;
  });
  setMasonryHeight();
}

window.addEventListener('resize', resetMasonryHeight);