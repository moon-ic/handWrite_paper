function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer); //清空重新计算
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null; //清空
            }, delay);
        }
    };
}
