const generateData = (len = 500) => {
    let ids = [];
    const arr = Array.from({ length: len }, (v, k) => {
        ids[k] = k + 1;
        return { id: k + 1, title: `部门${k + 1}`, pid: null };
    });
    for (let i = 0; i < len; i++) {
        const idx = ids[Math.floor(Math.random() * len)];
        arr[i].pid = idx;
    }
    return arr;
}

function list2Tree(data, kid = 'id', parentKey = 'pid') {
    data = JSON.parse(JSON.stringify(data));
    function loop(list, kid, parentKey) {
        const [map, treeData] = [new Map(), []];
        const len = list.length;
        for (let i = 0; i < len; i++) {
            const node = list[i];
            const pid = node[parentKey];
            const id = node[kid];
            if (!map.has(id)) {
                map.set(id, i);
                node.children = [];
            }
            const idx = map.get(pid);
            if (pid && pid !== id && list[idx]) {
                list[idx].children.push({ ...node, display: node.display || 'none' });
            } else {
                treeData.push({ ...node, dispaly: node.dispaly || 'block' });
            }
        }
        return treeData;
    }
    return loop(data, kid, parentKey);
}

const datas = generateData(500);

const treeData = list2Tree(datas);

function treeLoop(treeData) {
    treeData = JSON.parse(JSON.stringify(treeData));
    let str = [];
    const loop = function (data, depth = 0) {
        str.push('<section class="content">');
        data.forEach(element => {
            element.depth = depth;
            const _hasChildren = element.children && element.children.length > 0;
            if (_hasChildren) {
                let open = element.open ? 'open' : '';
                str.push('<details class="list"' + open + '>');
                str.push('<summary class="category-title">' + element.title + '</summary>');
            } else {
                str.push('<p class="list-content-item">' + element.title + '</p>');
            }
            _hasChildren && loop(element.children, element.depth + 1);
            str.push(_hasChildren ? '</details>' : '');
        });
        str.push('</section>');
    }
    loop(treeData);
    return str.join('');
}

function insertTreeHtml(treeData, dom) {
    const html = treeLoop(treeData);
    dom.innerHTML = html;
}

function changeOpenState(treeData, state) {
    const _newTreeData = JSON.parse(JSON.stringify(treeData));
    const loop = function (data) {
        data.forEach(element => {
            if (element.open !== state) {
                element.open = state;
            }
            if (element.children && element.children.length > 0) {
                loop(element.children);
            }
        });
    }
    loop(_newTreeData);
    insertTreeHtml(_newTreeData, document.querySelector('#tree'));
}

insertTreeHtml(treeData, document.querySelector('#tree'));

window.onload = function () {
    const openElement = document.querySelector('.buttons > .open');
    openElement.addEventListener('click', function () {
        changeOpenState(treeData, true);
        console.log('1', 1);
    }, false);
    const closeElement = document.querySelector('.buttons > .close');
    closeElement.addEventListener('click', function () {
        changeOpenState(treeData, false);
    }, false);
    const treeElement = document.querySelector('#tree');
    treeElement.addEventListener('click', handleClick);
}

function handleClick(evt) {
    // evt.preventDefault();
    evt.stopPropagation();
    if (evt.target && evt.target.parentElement && evt.target.parentElement.classList.contains('list')) {
        if (evt.target.parentElement.getAttribute('open') === null) {
            evt.target.parentElement.classList.add('open');
        } else {
            evt.target.parentElement.classList.remove('open');
        }
    }
}