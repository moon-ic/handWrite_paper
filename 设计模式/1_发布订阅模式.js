// 发布订阅者模式，一种对象间一对多的依赖关系，但一个对象的状态发生改变时，所依赖它的对象都将得到状态改变的通知。
class EventEmiter {
    constructor() {
        this._events = {};
    }

    // 订阅
    on(key, callback) {
        if (!this._events) {
            this._events = {};
        }
        this._events[key] = [...(this._events[key] || []), callback];
    }

    // 触发
    emit(key, ...args) {
        if (!this._events[key]) {
            return;
        }
        this._events.forEach((fn) => fn(...args));
    }

    // 移除
    off(key, callback) {
        if (!this._events[key]) {
            return;
        }

        this._events[key] = this._events[key].filter((fn) => fn != callback && fn.l !== callback);
    }

    // 触发1次后移除
    once(key, callback) {
        const one = (...args) => {
            callback(args);
            this.off(key, one);
        };
        one.l = callback;
        this.on(key, one);
    }
}
