// 每个setTimeout产生的任务会直接push到任务队列中；
// 而setInterval在每次把任务push到任务队列前，都要进行一下判断(看上次的任务是否仍在队列中)。
// 因而我们一般用setTimeout模拟setInterval，来规避掉上面的缺点
function _setInterval(fn, t) {
    let timer = null;
    function interval() {
        fn();
        timer = setTimeout(interval, t); //递归
    }
    timer = setTimeout(interval, t); //首次
    return {
        cancel: () => {
            clearTimeout(timer);
        }
    };
}

function _setTimeout(fn, t) {
    const timer = setInterval(() => {
        clearInterval(timer);
        fn();
    }, t);
}
