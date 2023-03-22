
const daily = Math.ceil(Math.random() * 1000 + 1);

const create = () => {
    setTimeout(function () {
        const dom = document.createElement('ul');
        const fragment = document.createDocumentFragment();
        let len = 1000;
        let elements = [];
        for (let i = 1; i <= len; i++) {
            const element = document.createElement('li');
            element.textContent = i;
            elements.push(element);
            fragment.append(element);
        }
        dom.appendChild(fragment);
        document.body.appendChild(dom);
    }, daily);
}

create();