let arr = new Array(1, 4, true, 'strokas', 0, -100);
console.log(arr);
//
let arr_1 = [1, 4, true, 'strokas', 0, -100];
arr_1[2] = false;
console.log(arr_1);
//
let arr_3 = [[1, 4, true, 'strokas', 0, -100], [0], [true]];
console.log(arr_3[1]);
//
let arr_4 = [1, 4, 5, 66, 0, false,true, 9];
console.log(arr_4.length);
//
let matrix =[[34,55,77], [909,76,55],[7,9,1]];
matrix[1][1] = true;
console.log(matrix);
//
let arr_5 = [[],[1, true, 'false']];
console.log([1],[2]);
//
let arr_6 = [4, 8, 9, 3, 6, 1];
console.log(arr_6.length);
console.log(arr_6.join('|'));

console.log(arr_6.sort());
console.log(arr_6.reverse());

