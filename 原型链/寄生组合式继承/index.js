function extend(child, parent) {
    const prototype = Object.create(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

function Parent() {
    
}

Parent.prototype.age = 11;

function Child() {
    Parent.call(this, arguments);
}

extend(Child, Parent);

let c = new Child();

console.log('c : ', c.age);