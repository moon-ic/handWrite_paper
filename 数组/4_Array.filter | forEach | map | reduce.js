// 1. filter
Array.prototype._filter = function (callback, context = window) {
    let len = this.length,
        newArr = [];
    for (let i = 0; i < len; i++) {
        if (callback.apply(context, [this[i], i, this])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

// 2. forEach
Array.prototype._forEach = function (callback, context = window) {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        typeof callback === "function" && callback.call(context, this[i], i);
    }
};

// 3. map
Array.prototype._map = function (callback, context) {
    let arr = Array.prototype.slice.call(this),
        res = [];
    for (let i = 0; i < arr.length; i++) {
        arr.push(callback.call(context, arr[i], i, this));
    }
    return res;
};

// 4. reduce
Array.prototype._reduce = function (callback, initVal) {
    let arr = Array.prototype.slice.call(this);
    let res = initVal ? initVal : arr[0];
    let index = initVal ? 0 : 1;

    for (let i = index; i < arr.length; i++) {
        res = this.find.call(null, res, arr[i], this);
    }

    return res;
};
