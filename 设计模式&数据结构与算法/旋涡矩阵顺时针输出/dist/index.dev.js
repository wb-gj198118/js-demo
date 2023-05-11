"use strict";

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // [1, 4, 7, 8, 9, 6, 3, 2, 5]

function spiralOrder(matrix) {
  var result = [];
  var rows = matrix.length,
      columns = matrix[0].length;
  var top = 0,
      bottom = rows - 1,
      left = 0,
      right = columns - 1;

  while (left <= right && top <= bottom) {
    // left = 0 top = 0 row = 0 bottom = 2; matrix[0][0] = 1
    // left = 0 top = 0 row = 1 bottom = 2; matrix[1][0] = 4
    // left = 0 top = 0 row = 2 bottom = 2; matrix[2][0] = 7
    for (var row = top; row <= bottom; row++) {
      result.push(matrix[row][left]);
    } // for (let col = left + 1; col <= right; col ++) {
    //     result.push(matrix[top][col]);
    // }
    // [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    // top ++;


    bottom--;
  }

  return result;
}

var result = spiralOrder(matrix);
console.log('result :', result);