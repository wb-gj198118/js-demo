const Singleton = require("../单例模式/singleton.js");

class Demo {
    constructor() {
        console.log(' demo ');
    }
}

const t = Singleton(Demo);

module.exports = { Demo: t };