/**
 * 数字转中文汉字
 * @param {*} num 万亿以下的数字
 */
function toChineseNumber(num) {
    const absNum = Math.abs(num);
    const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    // 个位数，提前返回
    if (absNum < 10) return chars[absNum];
    const arr = (absNum).toString().replace(/(?=(\d{4})+$)/g, ',').split(',').filter(Boolean);
    const units = ['', '十', '百', '千'];
    const bigUnits = ['', '万', '亿'];
    const temp = num < 0 ? '负' : '';
    function _transform(numStr) {
        let result = '';
        for (let index = 0; index < numStr.length; index++) {
            const digit = +numStr[index];
            const char = chars[digit];
            const unit = units[numStr.length - index - 1];
            // 为0时无需追加单位
            if (digit === 0) {
                // 末尾不为零时才需要追加
                if (result[result.length - 1] !== chars[0]) {
                    result += char;
                }
            } else {
                // 当字符为一同时单位为十，此时可以不用带上字符，比如：10，100, 1000这类整数，转换后应该为十，一百，一千
                if (chars[1] === char && unit === units[1]) {
                    result += unit;
                } else {
                    result += char + unit;
                }
            }
        }
        if (result[result.length - 1] === chars[0]) {
            result = result.slice(0, -1);
        }
        return result;
    }
    let str = '';
    for (let index = 0; index < arr.length; index++) {
        const part = arr[index];
        const char = _transform(part);
        const unit = char ? bigUnits[arr.length - index - 1] : '';
        str += char + unit;
    }
    return temp + str;
}

console.log('toChineseNumber: ', toChineseNumber(123400007700));
console.log('toChineseNumber: ', toChineseNumber(30000000001));
console.log('toChineseNumber: ', toChineseNumber(1000000000));

console.log('toChineseNumber: ', toChineseNumber(3000));
console.log('toChineseNumber: ', toChineseNumber(200));
console.log('toChineseNumber: ', toChineseNumber(20));

console.log('toChineseNumber: ', toChineseNumber(-1001));
console.log('toChineseNumber: ', toChineseNumber(-101));
console.log('toChineseNumber: ', toChineseNumber(-11));

console.log('toChineseNumber: ', toChineseNumber(1000));
console.log('toChineseNumber: ', toChineseNumber(100));
console.log('toChineseNumber: ', toChineseNumber(10));

console.log('toChineseNumber: ', toChineseNumber(-30));
console.log('toChineseNumber: ', toChineseNumber(-20));
console.log('toChineseNumber: ', toChineseNumber(-10));

console.log('toChineseNumber: ', toChineseNumber(-3));
console.log('toChineseNumber: ', toChineseNumber(-2));
console.log('toChineseNumber: ', toChineseNumber(-1));

console.log('toChineseNumber: ', toChineseNumber(-0));
console.log('toChineseNumber: ', toChineseNumber(+0));
console.log('toChineseNumber: ', toChineseNumber(0));
