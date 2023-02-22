/**
 * URL参数对象化
 * @param {*} url 
 * @returns 
 */
const getUrlParams = (url) => {
    const arrSearch = url.split('?').pop().split('#').shift().split('&');
    let obj = {};
    arrSearch.forEach((item) => {
      const [k, v] = item.split('=');
      obj[k] = v;
      return obj;
    });
    return obj;
  };

console.log(' result : ', getUrlParams('https://www.baidu.com?a=1&a=2&b=2&c=' + JSON.stringify([1, 2, 3]))); // { a: '2', b: '2', c: '[1,2,3]' }