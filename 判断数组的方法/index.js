// 1. 通过构造构造函数
console.log(1, [1, 2, 3].constructor === Array);

// 2. 通过Array.isArray
console.log(2, Array.isArray([3, 3, 3]));

// 3. 通过Object原型上的toString
console.log(3, Object.prototype.toString.call([1, 2, 3]) === '[object Array]');

// 4. instanceof 
console.log(4, [5, 5, 8] instanceof Array);

// const arr = [1, 2, 3];

// const obj = {};

// Object.setPrototypeOf(arr, obj);

// arr.constructor = obj;

// arr.__proto__ = obj;

// console.log(5, arr instanceof Array, arr.constructor === Array);