console.log(' b1 ');
setTimeout(function () {
    const lis = document.querySelectorAll('li');
    lis.forEach((element, index) => {
        if (index === 10) {
            element.insertAdjacentHTML('beforebegin', '<li>bbb - OK - bbb</li>');
        }
    });
}, 1000);