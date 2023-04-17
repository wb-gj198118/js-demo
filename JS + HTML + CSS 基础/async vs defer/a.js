console.log(' a1 ');
setTimeout(() => {
    const lis = document.querySelectorAll('li');
    lis.forEach((element, index) => {
        if (index === Math.floor(lis.length / 2)) {
            element.insertAdjacentHTML('beforebegin', '<li>aaa - OK - aaa</li>');
        }
    });
}, daily);