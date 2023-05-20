// const list = [{
//     id: 1,
//     name: 'a',
// }, {
//     id: 2,
//     name: 'b',
//     pid: 1,
// }, {
//     id: 3,
//     name: 'c',
//     pid: 1,
// }, {
//     id: 4,
//     name: 'd',
//     pid: 2
// }, {
//     id: 5,
//     name: 'e',
//     pid: 4
// }, {
//     id: 6,
//     name: 'f',
// }]

// function hasChildren(list, id) {
//     return list.some(item => item.pid === id);
// }

// function list2Tree(list, fn = () =>
//     ({ uniqueKey: 'id', parentKey: 'pid', childrenKey: 'children' })
// ) {
//     const { uniqueKey = 'id', parentKey = 'pid', childrenKey = 'children' } = fn();
//     if (!list || !list.length) return [];
//     let [map, results] = [new Map(), []];
//     function toTree(data, depth = 0) {
//         data.forEach((element, index) => {
//             element.leaf = hasChildren(list, element.id);
//             const { [uniqueKey]: id, [parentKey]: pid } = element;
//             if (!map.has(id)) map.set(id, index);
//             const i = map.get(pid);
//             if (i > -1 && list[i] && pid) {
//                 if (!list[i][childrenKey]) list[i][childrenKey] = [];
//                 if (typeof list[i].depth === 'number') {
//                     element.depth = list[i].depth + 1;
//                 }
//                 list[i][childrenKey].push(element);
//             } else {
//                 element.depth = depth;
//                 results.push(element);
//             }
//         });
//     }
//     toTree(list);
//     map = null;
//     return results;
// }

// const treeData = list2Tree(list);

// console.log('list2Tree', JSON.stringify(treeData, null, 2));

// function bfs(tree) {
//     const stack = [...tree];
//     while (stack.length > 0) {
//         const node = stack.shift();
//         const { children, ...others } = node;
//         console.log('bfs 遍历: ', others.name, others.id);
//         if (children && children.length > 0) {
//             stack.push(...children);
//         }
//     }
// }

// bfs(treeData);

// console.log('\n');

// function dfs(tree) {
//     const stack = [...tree];
//     while (stack.length) {
//         const node = stack.shift();
//         const { children, ...others } = node;
//         console.log('dfs 遍历: ', others.name, others.id);
//         if (children && children.length > 0) {
//             children.forEach(d => {
//                 stack.unshift(d);
//             });
//         }
//     }
// }

// dfs(treeData);

// console.log('\n');

// const flatten = function (obj, preKey, result = {}) {
//     if (!obj || !Object.keys(obj).length) return obj;
//     for (let k in obj) {
//         let newKey = k;
//         if (Array.isArray(obj)) {
//             newKey = preKey ? `${preKey}[${k}]` : k;
//         } else {
//             newKey = preKey ? `${preKey}.${k}` : k;
//         }
//         if (typeof obj[k] === 'object' && obj[k]) {
//             flatten(obj[k], newKey, result);
//         } else {
//             result[newKey] = obj[k];
//         }
//     }
//     return result;
// }

// console.log('flatten', flatten({ a: 1, b: [2, 3], c: { d: { e: 'e' } } }));

// function flattenArray(arr, depth = 1) {
//     // return arr.reduce((prev, curr) => {
//     //     let item = curr;
//     //     if (Array.isArray(item)) {
//     //         if (depth > 0) {
//     //             item = flattenArray(item, depth - 1);
//     //         } else {
//     //             item = [curr];
//     //         }
//     //     }
//     //     return prev.concat(item);
//     // }, []);
//     let results = [];
//     for (let i = 0; i < arr.length; ++i) {
//         let item = arr[i];
//         if (Array.isArray(item)) {
//             if (depth > 0) {
//                 item = flattenArray(item, depth - 1);
//             } else {
//                 item = [arr[i]];
//             }
//         }
//         results = results.concat(item);
//     }
//     return results;
// }

// console.log('\n');

// console.log(' flattenArray: ', flattenArray([1, 2, 3, [4, 5, 6, [8, 9, 10]]]));

Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];
  const len = this.length;
  let results = [];
  let step = 1;
  let rowIndex = 0;
  for (let i = 0; i < len; ++i) {
    results[rowIndex] ? results[rowIndex].push(this[i]) : results[rowIndex] = [this[i]];
    if (step === 1) {
      rowIndex === rowsCount - 1 ? step = -1 : rowIndex++;
    } else {
      rowIndex === 0 ? step = 1 : rowIndex--;
    }
  }
  return results;
}

console.log(' snail: ', [1, 2, 3, 4, 5, 6, 7, 8, 9].snail(3, 3));