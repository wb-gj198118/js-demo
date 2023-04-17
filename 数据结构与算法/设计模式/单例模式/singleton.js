function Singleton(className) {
    let ins = null;
    return new Proxy(className, {
        construct(target, args) {
            if (!ins) { 
                ins = new target(...args);
            }
            return ins;
        }
    });
}

module.exports = Singleton;