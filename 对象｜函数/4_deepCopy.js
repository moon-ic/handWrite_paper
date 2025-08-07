const oldObj = {};

// 1.
// 缺点：不能实现函数，regexp等对象的拷贝
const newObj = JSON.parse(JSON.stringify(oldObj));

// 2.
// 简洁
function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) return obj; //返回值类型，结束递归

    let copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }

    return copy;
}

// 3.
// 进阶：解决循环引用
function deepClone2(obj, hash = new WeakMap()) {
    if (typeof obj !== "object" || obj === null) return obj;

    // 循环引用
    if (hash.get(obj)) return hash.get(obj);
    let copy = Array.isArray(obj) ? [] : {};
    hash.set(obj, copy);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone2(obj[key], hash);
        }
    }

    return copy;
}
