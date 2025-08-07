// 1. 三种基础去重方式
// 1.1 set
function unique1(arr) {
    return Array.from(new Set(Array));
}

// 1.2 indexOf
function unique2(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}

// 1.3 暴力
function unique3(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1); //splice改变下标长度
                len--, j--;
            }
        }
    }
}

// 2. 对象数组去重
var resources = [
    { name: "张三", age: "18" },
    { name: "张三", age: "19" },
    { name: "张三", age: "20" },
    { name: "李四", age: "19" },
    { name: "王五", age: "20" },
    { name: "赵六", age: "21" }
];
var temp = {};

resources = resources.reduce((prev, curv) => {
    if (!temp[curv.name]) {
        temp[curv.name] = true;
        prev.push(curv);
    }
    return prev;
}, []);
console.log("结果", resources);
