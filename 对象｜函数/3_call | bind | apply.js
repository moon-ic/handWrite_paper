Function.prototype._call = function (context = window, ...args) {
    if (typeof context !== "object") context = new Object(context);

    let fnKey = Symbol();
    context[fnKey] = this;

    // 相当于 obj.fn()执行
    // obj调用this，this就指向obj
    let res = context[fnKey](...args);

    delete context[fn];
    return res;
};

// 参数不一样
Function.prototype._apply = function (context = window, args) {
    if (typeof context !== "object") context = new Object(context);

    let fnKey = Symbol();
    context[fnKey] = this;

    let res = context[fnKey](...args);
    delete context[fn];

    return res;
};

Function.prototype._bind = function (context = window, ...args) {
    // this表示调用bind的函数，修改self的this
    let self = this;

    let fBound = function (...innerArgs) {
        // 当作为构造函数 new 时，忽略context，fBound自己的this指向实例fBound
        return self.apply(this instanceof fBound ? this : context, args.concat(innerArgs));
    };

    fBound.prototype = Object.create(this.prototype);
    return fBound;
};
