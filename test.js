const list = [{
    id: 1,
    name: 'a',
}, {
    id: 2,
    name: 'b',
    pid: 1,
}, {
    id: 3,
    name: 'c',
    pid: 1,
}, {
    id: 4,
    name: 'f',
    pid: 2
}]

function hasChildren(list, id) {
    return list.some(item => item.pid === id);
}

function list2Tree(list, fn = () =>
    ({ uniqueKey: 'id', parentKey: 'pid', childrenKey: 'children' })
) {
    const { uniqueKey = 'id', parentKey = 'pid', childrenKey = 'children' } = fn();
    if (!list || !list.length) return [];
    let [map, results] = [new Map(), []];
    function toTree(data, depth = 0) {
        data.forEach((element, index) => {
            element.leaf = hasChildren(list, element.id);
            const { [uniqueKey]: id, [parentKey]: pid } = element;
            if (!map.has(id)) map.set(id, index);
            const i = map.get(pid);
            if (i > -1 && list[i] && pid) {
                if (!list[i][childrenKey]) list[i][childrenKey] = [];
                if (typeof list[i].depth === 'number') {
                    element.depth = list[i].depth + 1;
                }
                list[i][childrenKey].push(element);
            } else {
                element.depth = depth;
                results.push(element);
            }
        });
    }
    toTree(list);
    map = null;
    return results;
}

console.log('list2Tree', JSON.stringify(list2Tree(list), null, 2));

const flatten = function (obj, preKey, result = {}) {
    if (!obj || !Object.keys(obj).length) return obj;
    for (let k in obj) {
        let newKey = k;
        if (Array.isArray(obj)) {
            newKey = preKey ? `${preKey}[${k}]` : k;
        } else {
            newKey = preKey ? `${preKey}.${k}` : k;
        }
        if (typeof obj[k] === 'object' && obj[k]) {
            flatten(obj[k], newKey, result);
        } else {
            result[newKey] = obj[k];
        }
    }
    return result;
}

console.log('flatten', flatten({ a: 1, b: [2, 3], c: { d: { e: 'e' } } }));

function flattenArray(arr, depth = 1) {
    if (depth <= 1) return arr;
}

var reverseString = function (s) {
    for (left = 0, right = s.length - 1; left < right; ++left, --right) {
        swap(s, left, right);
    }
    return s;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

var r = reverseString(['h', 'e', 'l', '', 'l', 'o']);

console.log('r', r);

var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; ++i) {
        if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
            return i;
        }
    }
    return -1;
};

console.log('firstUniqChar', firstUniqChar('leetcode'));

