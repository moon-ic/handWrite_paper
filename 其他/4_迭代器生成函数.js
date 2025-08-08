// 以ES6在推出新数据结构的同时也推出了一套统一的接口机制——迭代器（Iterator), 通过for...of...进行遍历
// 针对Array、Map、Set、String、TypedArray、函数的 arguments 对象、NodeList 对象
// Symbol.iterator生成了它对应的迭代器对象，通过反复调用迭代器对象的next方法访问了数组成员

function itratorGenerator(list) {
    let index = 0; //闭包维护
    let len = list.length;
    return {
        next: function () {
            let done = index >= len;
            let value = done ? undefined : list[index++];
            return {
                done,
                value
            };
        }
    };
}

let itrator = itratorGenerator(["1", "222", "33"]);
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
