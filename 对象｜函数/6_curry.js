// 1. 接受部份参数，，返回一个函数接受剩余参数，接受足够之后，执行原函数
// 参数复用，提前返回，延迟执行

function curry(fn) {
    function calc(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function (...args2) {
            return calc.apply(this, args.concat(args2));
        };
    }

    return calc;
}

// 使用：
function add(a, b, c) {
    console.log(a + b + c);
    return a + b + c;
}

// 对函数进行柯里化
var curryAdd = curry(add);

curryAdd(10, 20, 30);
curryAdd(10, 20)(30);
curryAdd(10)(20)(30);
