
/**
 * 平铺对象
 * @param {*} obj 
 * @returns 
 */
function objectFlatten(obj) {
    const result = {};
    function flat(item, preKey) {
        for (let k in item) {
            let newKey = k;
            if (Array.isArray(item)) {
                newKey = preKey ? `${preKey}[${k}]` : k;
            } else {
                newKey = preKey ? `${preKey}.${k}` : k;
            }
            if (typeof item[k] === 'object' && item[k]) {
                flat(item[k], newKey);
            } else {
                result[newKey] = item[k];
            }
        }
    }
    flat(obj);
    return result;
}

const obj = { a: 1, b: [2, 3, { 4: 5 }], c: 0, d: null };

const flagObj = objectFlatten(obj);

console.log('objectFlatten', flagObj);