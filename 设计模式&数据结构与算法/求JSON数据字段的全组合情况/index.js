function isFullCombination(datas) {
    if (!datas || !datas.length) return false;
    const fieldMap = new Map(), keys = Object.keys(datas[0]), combinationSet = new Set(), valueMap = new Map();
    let n = 1;
    for (let item of datas) {
        let combination = '';
        for (let k of keys) {
            let value = item[k];
            let valueSet = fieldMap.get(k);
            if (!valueSet) {
                valueSet = new Set();
                fieldMap.set(k, valueSet);
            }
            valueSet.add(value);
            let num = valueMap.get(value);
            if (!num) {
                num = n++;
                valueMap.set(value, num);
            }
            combination += `-${num}`;
        }
        if (combinationSet.has(combination)) return false;
        combinationSet.add(combination);
    }
    console.log('fieldMap', fieldMap);
    const n1 = [...fieldMap].reduce((s, [, v]) => s *= v.size, 1);
    return n1 === datas.length;
}

const inputData = [
    { fieldA: '甲', fieldB: 'a', fieldC: '1' },
    { fieldA: '甲', fieldB: 'a', fieldC: '2' },
    { fieldA: '甲', fieldB: 'a', fieldC: '3' },

    { fieldA: '甲', fieldB: 'b', fieldC: '1' },
    { fieldA: '甲', fieldB: 'b', fieldC: '2' },
    { fieldA: '甲', fieldB: 'b', fieldC: '3' },

    { fieldA: '乙', fieldB: 'a', fieldC: '1' },
    { fieldA: '乙', fieldB: 'a', fieldC: '2' },
    { fieldA: '乙', fieldB: 'a', fieldC: '3' },

    { fieldA: '乙', fieldB: 'b', fieldC: '1' },
    { fieldA: '乙', fieldB: 'b', fieldC: '2' },
    { fieldA: '乙', fieldB: 'b', fieldC: '3' },
]

console.log(' isFullCombination results : ', isFullCombination(inputData));