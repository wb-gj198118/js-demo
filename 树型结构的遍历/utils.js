
/**
 * 生成「len」条数据
 * @param {number} len 需要创建数组的长度
 * @returns 数组
 */
const generateData = (len = 500) => {
    let ids = [];
    const arr = Array.from({ length: len }, (v, k) => {
        ids[k] = k + 1;
        return { id: k + 1, name: `部门${k + 1}`, pid: null };
    });
    for (let i = 0; i < len; i++) {
        const idx = ids[Math.floor(Math.random() * len)];
        arr[i].pid = idx;
    }
    return arr;
}

/**
 * 数组list转tree
 * @param {Array} list 
 * @param {String} kid 主键key
 * @param {String} parentKey 父级key
 * @param {String} childKey 子集对应的key
 * @returns 树形数据结构
 */
function list2Tree(list, kid = 'id', parentKey = 'pid', childKey = 'children') {
    const [map, treeData] = [{}, []];
    const len = list.length;
    for (let i = 0; i < len; i++) {
        const node = list[i];
        const pid = node[parentKey];
        const id = node[kid];
        // 根据id记录下当前id在原先数组中的位置
        if (!map[id]) {
            map[id] = i;
            node[childKey] = [];
        }
        // 从map中取出pid对应的索引
        const idx = map[pid];
        // map中存在对应的pid项，只需向其子集添加当前项, 不存在，就说明它是单独的父项
        if (pid && list[idx]) {
            list[idx][childKey].push(node);
        } else {
            treeData.push(node);
        }
    }
    return treeData;
}

/**
 * 格式化树，向其每一项添加depth字段，depth表示当前项在tree中的层级
 * @param {Tree数组} tree
 * @returns Tree数组
 */
function formatTree(tree) {
    const dfs = (treeData, depth = 0) => {
        for (const node of treeData) {
            node.depth = depth;
            if (node.children && node.children.length) {
                dfs(node.children, depth + 1);
            }
        }
        return tree;
    }
    return dfs(tree);
}

module.exports = { generateData, list2Tree, formatTree };