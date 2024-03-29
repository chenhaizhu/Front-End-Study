// 我们已经定义了 filteredArray 函数，它接受一个嵌套的数组 arr 和一个 elem 作为参数，并要返回一个新数组。
// arr 数组中嵌套的数组里可能包含 elem 元素，也可能不包含。
// 请修改该函数，用一个 for 循环来做筛选，使函数返回一个由 arr 中不包含 elem 的数组所组成的新数组。

/*
function filteredArray(arr, elem) {
  let newArr = [];
  // 只修改这一行下面的代码

  // 只修改这一行上面的代码
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
*/

//               ↓

function filteredArray(arr, elem) {
    let newArr = [];
    // 只修改这一行下面的代码
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    // 只修改这一行上面的代码
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));