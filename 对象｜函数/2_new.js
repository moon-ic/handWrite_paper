function _new(constructor, ...args) {
    //  1. 创建新的对象，绑定原型
    const newObj = Object.create(constructor.prototype);
    // 2. 将obj设为this，执行constructor，传入参数
    // `new` 操作符在创建对象后会立即执行构造函数
    const res = constructor.apply(newObj, ...args);

    // `new` 操作符特性：返回对象
    return typeof res === "object" ? res : newObj;
}
