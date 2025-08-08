// 用闭包和Proxy属性拦截
function proxy(fn) {
    let instance;
    let handler = {
        // 这个方法会在使用`new`操作符调用被代理的函数时触发。
        construct(target, args) {
            if (!instance) {
                instance = Reflect.construct(fn, args);
            }
            return instance;
        }
    };
    return new Proxy(fn, handler);
}
