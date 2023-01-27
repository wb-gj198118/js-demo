let rows = [];

for (let row = 1; row <= 9; row++) {
    let cols = [];
    for (let col = 1; col <= row; col++) {
        cols.push(`${col} * ${row} = ${col * row}`);
    }
    rows.push(cols);
}

const str = rows.map(row => {
    return `<div class='row'>${row.map(col => {
        let c = `<span class='col'>${col}</span>`;
        return c;
    }).join('')}</div>`;
}).join('');

document.querySelector('#container').insertAdjacentHTML('afterbegin', str);