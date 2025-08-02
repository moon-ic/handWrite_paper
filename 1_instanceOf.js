function _instanceOf(obj, _class) {
    let proto = Object.getPrototypeOf(obj);
    let prototype = _class.prototype;

    while (true) {
        if (proto === null) return false;
        if (proto === prototype) return true;

        proto = obj.getPrototypeOf(proto);
    }
}
