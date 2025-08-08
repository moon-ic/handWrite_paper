// 1.
function quicSort(arr) {
    const len = arr.length;
    if (!len) return arr;

    let mid = Math.floor(len / 2);
    let p = arr.slice(mid, mid + 1)[0];

    const left = [],
        right = [];

    for (let i = 0; i < len; i++) {
        if (i !== mid) {
            const cur = arr[i];
            if (cur < p) {
                left.push(cur);
            } else {
                right.push(cur);
            }
        }
    }

    return quicSort(left).concat([p], quicSort(right));
}

// 2.
function buddleSort(arr) {
    let len = arr.length;
    if (!len) return [];

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// 3.
function selectSort(arr) {
    let len = arr.length;
    if (!len) return [];

    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        } //更换最小数到头部
    }
    return arr;
}

// 4.
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        let key = arr[j]; //维护未排序部份第一个元素
        while (j >= 0 && arr[j - 1] > key) {
            arr[j] = arr[j - 1];
            j--;
        } //从后向前扫描已排序
        arr[j] = key; //插入
    }
    return arr;
}

// 5.
function search(arr, target) {
    const len = arr.length;
    let left = 0;
    let right = len - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target < arr[mid]) {
            right = mid - 1;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else {
            return left;
        }
    }

    return -1;
}
