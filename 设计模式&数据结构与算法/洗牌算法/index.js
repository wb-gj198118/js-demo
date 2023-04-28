function shuffle(arr) {
    for (let i = 0; i < arr.length; i ++) {
        const k = Math.floor(Math.random() * (i + 1));
        [arr[k], arr[i]] = [arr[i], arr[k]];
    }
    return arr;
}

const arr = [4, 9, 6, 7, 8];

console.log(' shuffle : ', shuffle(arr));
