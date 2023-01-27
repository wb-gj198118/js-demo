console.log(' a1 ' );

setTimeout(function () {
    const lis = document.querySelectorAll('li');
    lis.forEach((element, index) => {
        if (index === 10) {
            element.insertAdjacentHTML('beforebegin', '<li>aaa - OK - aaa</li>');
        }
    });
}, 1000);