// Generator函数，把函数中的内容基于Iterator迭代器的特点一步步的执行
function readFile(file) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(file);
        }, 1000);
    });
}

function _async(generator) {
    const iterator = generator();

    const next = (data) => {
        // data是第一次执行的结果
        let { value, done } = iterator.next(data); //第二次执行
        if (done) return;

        value.then((data) => {
            next(data);
        });
    };

    next();
}

_async(function* () {
    let data = yield readFile("a.js");
    data = yield readFile(data + "b.js");
    return data;
});
