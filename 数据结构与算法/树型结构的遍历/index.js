const { formatTree, generateData, list2Tree } = require('./utils.js');

console.time(' generate data');
const arr = generateData(10000000);
console.timeEnd(' generate data');

console.time(' 将平铺的数组转成tree ');
const tree = list2Tree(arr);
console.timeEnd(' 将平铺的数组转成tree ');

console.time(' 遍历树给其添加depth ');
const _newTree = formatTree(tree);
console.timeEnd(' 遍历树给其添加depth ');
