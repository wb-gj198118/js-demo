const searcher = {};

function addMethod(object, name, fn) {
    const old = object[name];
    object[name] = function () {
        if (arguments.length === fn.length) {
            fn.apply(this, arguments);
        } else if (typeof old === "function") {
            old.apply(this, arguments);
        }
    };
}

addMethod(searcher, 'find', () => {
    console.log('查询所有用户');
});
addMethod(searcher, 'find', (name) => {
    console.log('按照用户名称查询');
});
addMethod(searcher, 'find', (firstName, lastName) => {
    console.log('按照姓和名用户查询');
});

searcher.find('g', 'j');