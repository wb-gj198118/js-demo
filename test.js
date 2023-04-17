var obj = {
    a: 1,
    b: function () {

    },
    sym: Symbol(1),
}

var obj1 = {};

Object.assign(obj1, obj);

console.log('obj1', obj1);

console.log('obj1', obj1.a === obj1.a, obj.b === obj1.b, obj1.sym === obj.sym);