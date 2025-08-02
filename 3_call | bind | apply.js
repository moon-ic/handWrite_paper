Function.prototype._call = function (thisArg, ...args) {
    let func = this;
    thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
};
