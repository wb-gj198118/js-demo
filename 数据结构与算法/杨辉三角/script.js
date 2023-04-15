let rows1 = [];

for (let i = 0; i < 10; i++) {
    rows1[i] = Array(i + 1).fill(1);
    for (let j = 0; j <= i; j++) {
        rows1[i][j] = j === 0 || j === i ? 1 : rows1[i - 1][j] + rows1[i - 1][j - 1];
    }
}

let str1 = '<div class="yang">';
// 打印三角
for (var i = 0; i < rows1.length; i++) {
    str1 += "<div class=" + "row" + ">";
    for (var j = 0; j < rows1[i].length; j++) {
        str1 += "<span class=" + "col" + ">" + rows1[i][j] + "</span>";
    }
    str1 += "</div>";
}

str1 += "</div>";

document.querySelector('#container').insertAdjacentHTML('afterbegin', str1);