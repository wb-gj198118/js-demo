function extend(obj) {
    let clone = Object.create(obj);
    clone.sayHello = function () {
        console.log(' hello ');
    }
    return clone;
}

function A() {

}

const o = extend(A);

const o1 = extend(A);

o.age = 22;
