Function.prototype._call = function (thisArg, ...args) {
    let func = this;
    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

    let fn = Symbol();
    thisArg[fn] = this;

    let res = thisArg[fn](...args);
    delete thisArg[fn];

    return res;
};

// 参数不一样
Function.prototype._apply = function (thisArg, args) {
    let func = this;
    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

    let fn = Symbol();
    thisArg[fn] = this;

    let res = thisArg[fn](args);
    delete thisArg[fn];

    return res;
};
