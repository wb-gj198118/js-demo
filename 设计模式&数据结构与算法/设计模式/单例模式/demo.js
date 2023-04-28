const Singleton = require("../单例模式/singleton.js");

class Demo {
    constructor(...args) {
        console.log(' demo ', args);
    }
}

const t = Singleton(Demo);

module.exports = { Demo: t };