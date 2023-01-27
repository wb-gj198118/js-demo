
setTimeout(() => {
    const dom = document.createElement('ul');
    let len = 20;
    let elements = [];
    for (let i = 1; i <= len; i++) {
        const element = document.createElement('li');
        element.textContent = i;
        elements.push(element);
        dom.appendChild(element);
    }
    document.body.appendChild(dom);
}, 1000);
