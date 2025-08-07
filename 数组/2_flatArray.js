// 1-3.递归
function flat1(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat1(cur) : cur);
    });
}
function flat2(arr) {
    let res = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            res = res.concat(flat2(item));
        } else {
            res.push(item);
        }
    });
}
function flat3(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
// console.log(flat3([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

// 4-5.转字符串
function flat4(arr) {
    //[1,[2,3]].toString()  =>  1,2,3
    return arr
        .toString()
        .split(",")
        .map((item) => parseInt(item));
}
function flat5(arr) {
    return arr
        .join(",")
        .split(",")
        .map((item) => Number(item));
}
