// 沿着实例原型链 _proto_ 一直找
function _instanceOf(instance, _class) {
    if (typeof instance !== "object" || instance === null) return false;

    let proto = Object.getPrototypeOf(instance); //instance.__ptoto__
    let prototype = _class.prototype;

    while (true) {
        if (proto === null) return false;
        if (proto === prototype) return true;

        proto = instance.getPrototypeOf(proto);
    }
}
