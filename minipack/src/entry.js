import message from './message.js';

class Demo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    apply() {
        console.log('this.apply', this.apply);
    }
}

new Demo('小高', 23);

console.log('message', message);