// 是否Object类型
function isObject(o) {
    return o !== null && typeof o === 'object';
}

// 是否Number类型
function isNumber(o) {
    return typeof o === 'number';
}

// 将已经平铺的对象根据key的组合规则将其还原成原来的对象
const parseObject = (data) => {
    if (Object(data) !== data || Array.isArray(data)) {
        return data;
    }
    const regex = /\.?([^.\[\]]+)$|\[(\d+)\]$/;
    const props = Object.keys(data);
    let result, p;
    while ((p = props.shift())) {
        const match = regex.exec(p);
        let target;
        if (match.index) {
            const rest = p.slice(0, match.index);
            if (!(rest in data)) {
                data[rest] = match[2] ? [] : {};
                props.push(rest);
            }
            target = data[rest];
        } else {
            if (!result) {
                result = match[2] ? [] : {};
            }
            target = result;
        }
        target[match[2] || match[1]] = data[p];
    }
    return result;
}

// 参数归一
function transformArgsToFun(arg) {
    if (!arg) {
        return function () {
            return [];
        };
    }
    if (typeof arg === 'function') {
        return arg;
    }
    if (typeof arg === 'string') {
        return function () {
            return arg.split(',');
        }
    }
    if (Array.isArray(arg)) {
        return function () {
            return arg;
        }
    }
    throw arg + '参数类型无法匹配';
}

/**
 * 求平均值
 * 
 * 主要思路：
 * 1. 将数组里面的每一项转换为平铺的对象，已嵌套的层级对象key的全路径为平铺对象的key统计出总和数量
 * 2. 根据统计出的总和和数量计算出平均值
 * 3. 最后将平铺的对象进行反向转换为真实嵌套的对象进行格式化返回，确保数据嵌套结构不变，返回
 * 
 * @param {*} testListWithNestedDicts 
 * @param {*} dictKeys 结果中不用输出的Key
 * @returns {*}「testListWithNestedDicts」中每个数值属性的平均值
 */
function calculateAverage(testListWithNestedDicts, dictKeys) {
    const fmt = transformArgsToFun(dictKeys);
    const statistics = {
        // [path]: { sum: 0, count: 0 }
    }; // 总和和数量统计

    // 将「obj」对象进行平铺
    function flattenObject(obj, prefix = '') {
        if (isObject(obj)) {
            for (let key in obj) {
                const fullKey = Array.isArray(obj) ?
                    (prefix ? `${prefix}[${key}]` : key) :
                    (prefix ? `${prefix}.${key}` : key);
                const value = obj[key];
                if (isObject(value)) {
                    flattenObject(value, fullKey);
                } else {
                    const { sum = 0, count = 0 } = statistics[fullKey] || {};
                    statistics[fullKey] = { sum: sum + value, count: count + 1 };
                }
            }
        }
    }

    testListWithNestedDicts.forEach(obj => flattenObject(obj));

    // 将已经平铺的对象根据key的组合规则将其还原成原来的对象
    function calcAvg(object) {
        const result = {};
        for (let key in object) {
            const { sum, count } = object[key] || {};
            const value = sum / count;
            result[key] = value;
        }
        return result;
    }

    const avgObject = calcAvg(statistics);
    const result = parseObject(avgObject);

    return JSON.parse(JSON.stringify(result, (key, value) => {
        if (fmt(key, value).includes(key)) {
            return undefined;
        }
        if (isNumber(value)) {
            return (Math.round(value * 100) / 100).toFixed(2);
        }
        return value;
    }));
}

let testListWithNestedDicts = [
    {
        "studentId": 1,
        "age": 7,
        "height": 2,
        "weight": 3,
        "scores": {
            "spanish": 80,
            "mathematics": 90,
            "english": 100,
            "pe": {
                "run": 85,
                "jump": 95,
                "tea": {
                    "run": 85,
                    "jump": 95,

                }
            }
        }
    },
    {
        "studentId": 2,
        "age": 8,
        "height": 4,
        "weight": 6,
        "scores": {
            "spanish": 90,
            "mathematics": 90,
            "english": 80,
            "pe": {
                "run": 90,
                "jump": 90,
                "tea": {
                    "run": 85,
                    "jump": 95,

                }
            }
        }
    },
    {
        "studentId": 3,
        "age": 7,
        "height": 3,
        "weight": 6,
        "scores": {
            "spanish": 86,
            "mathematics": 90,
            "english": 75,
            "pe": {
                "run": 65,
                "jump": 90,
                "tea": {
                    "run": 85,
                    "jump": 95,
                }
            }
        }
    }
]

console.log(calculateAverage(testListWithNestedDicts));

console.log(calculateAverage(testListWithNestedDicts, function () {
    return [];
}));

console.log(calculateAverage(testListWithNestedDicts, function () {
    return ['studentId'];
}));

console.log(calculateAverage(testListWithNestedDicts, ['studentId']));

console.log(calculateAverage(testListWithNestedDicts, 'studentId'));