function getUrlParams(url = window.location.href) {
  let reg = /[?&]([^?&#]+)=([^?&#]+)/g;
  let param = {};
  let ret = reg.exec(url);
  while (ret) { // 当ret为null时表示已经匹配到最后了，直接跳出
    let [, k, v] = ret;
    param[k] = v;
    ret = reg.exec(url);
  }
  return param;
}

console.log(' result : ', getUrlParams('https://www.baidu.com?a=1&a=2&b=2&c=' + JSON.stringify([1, 2, 3]))); // { a: '2', b: '2', c: '[1,2,3]' }