function _new(obj, ...args) {
    //  1. 创建新的对象，绑定原型
    const newObj = Object.create(obj.prototype);
    // 2. ？？？？？？？？？？？？？
    const res = obj.apply(newObj, ...args);

    return typeof res === "object" ? res : newObj;
}
