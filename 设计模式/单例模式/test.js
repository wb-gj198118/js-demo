const { Demo } = require("./demo.js");

const a = new Demo();
const b = new Demo();
const c = new Demo();

console.log(' a === b => ', a === b, a === c, b === c);  // true