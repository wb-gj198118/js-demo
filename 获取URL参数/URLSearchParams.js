const getUrlParams = (url) => {
    const u = new URL(url);
    const s = new URLSearchParams(u.search);
    const obj = {};
    s.forEach((v, k) => (obj[k] = v));
    return obj;
};
console.log(' result : ', getUrlParams('https://www.baidu.com?a=1&a=2&b=2&c=' + JSON.stringify([1, 2, 3]))); // { a: '2', b: '2', c: '[1,2,3]' }