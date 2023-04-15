// https://www.baidu.com?a=1&a=2&b=[1,2]

// 统计数组中元素出现的次数
const getCount = (nums = []) => {
    return (nums || []).reduce((prev, curr) => {
        if (!prev[curr]) {
            prev[curr] = 1;
        } else {
            prev[curr] += 1;
        }
        return prev;
    }, {});
};

// 获取{obj}中大于等于{count}的key
const getKeys = (obj, count = 1) => {
    if (!obj || count <= 1) return obj;
    const result = Object.keys(obj).reduce((prev, curr) => {
        if (!prev[curr] && obj[curr] >= count) {
            prev.push(curr);
        }
        return prev;
    }, []);
    return result;
};

function getUrlQueryParams(url, options) {
    console.log(' url: ', url);
    const params = new URL(decodeURIComponent(url)).searchParams;
    const keys = [...params.keys()];
    const conts = getCount(keys);
    const contsKs = getKeys(conts, 2);
    const values = [...params.values()];
    const result = {};
    let index = 0;
    for (let k of keys) {
        // key出现了多次，表示它应该为数组
        if (
            Array.isArray(contsKs) &&
            contsKs.length > 0 &&
            contsKs.indexOf(k) > -1
        ) {
            if (!result[k]) {
                result[k] = [];
            }
            result[k].push(values[index]);
            // 数组 如: '1, 2, 3'
        } else if (values[index] && values[index].includes(',') && !values[index].includes('[')) {
            if (!result[k]) {
                result[k] = [];
            }
            // 对应的key里面的值均为数组
            if (options && options[k] === 'number') {
                result[k] = values[index].split(',').map(Number);
            } else { // 非数组
                result[k] = values[index].split(',');
            }
        } else {
            try {
                result[k] = JSON.parse(values[index]);
            } catch {
                result[k] = values[index];
            }
        }
        index++;
    }
    return result;
}

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];

const urlParams = getUrlQueryParams(`https://www.baidu.com?a=1&a=2&b=${JSON.stringify(a1)}&c=0&d=${a2}`, { d: 'number' });

console.log('urlParams => ', urlParams);