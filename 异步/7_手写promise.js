function _Promise(constructor) {
    let self = this;
    self.status = "pending";
    self.value = undefined;
    self.reason = undefined;

    function resolve(value) {
        if (self.status === "pending") {
            self.value = value;
            self.status = "resolved";
        }
    }
    function reject(reason) {
        if (self.status === "pending") {
            self.reason = reason;
            self.status = "rejected";
        }
    }

    try {
        constructor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

_Promise.prototype.then = function (onFullfillled, onRejected) {
    let self = this;
    switch (self.status) {
        case "resolved":
            onFullfillled(self.value);
            break;
        case "rejected":
            onRejected(self.reason);
            break;
        default:
            break;
    }
};

var p = new _Promise(function (resolve, reject) {
    resolve(1);
});
p.then(function (x) {
    console.log(x); // 1
});

// 这个实现无法处理异步 resolve/reject
// `then` 方法没有处理 "pending" 状态，应该将回调函数存储起来，等状态改变时再调用。
// `then` 方法应该返回一个新的 Promise
// 缺少错误处理机制，当 `onRejected` 回调未提供时，应该有默认的错误处理机制
