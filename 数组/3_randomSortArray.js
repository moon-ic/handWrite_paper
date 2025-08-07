// 1.
function randomArr1(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// 2.
function randomArr2(arr) {
    let backArr = [];
    while (arr.length) {
        let index = parseInt(Math.random() * arr.length);
        backArr.push(arr[index]);
        arr.splice(index, 1);
    }
    return backArr;
}

// 3.
function randomArr3(arr) {
    let len = arr.length - 1;
    for (let i = 0; i < len; i++) {
        let index = parseInt(Math.random() * (len + 1 - i));
        [a[index], a[lenNum - i]] = [a[lenNum - i], a[index]];
    }
    return arr;
}
