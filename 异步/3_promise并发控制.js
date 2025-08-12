// 1. 基于Promise.race的特性配合Promise.all 实现并行请求的限制请求数量，保持请求数量。
const asyncPool = async (limit, arr, itratorFn) => {
    const res = [];
    const executing = [];

    for (const item of arr) {
        console.log("循环", item);
        const p = Promise.resolve().then(() => {
            console.log("初始化", item);
            return itratorFn(item);
        }); //注册
        res.push(p);

        if (arr.length >= limit) {
            const e = p.then(() => {
                return executing.splice(executing.indexOf(e), 1); //执行回调
            });
            executing.push(e);

            if (executing.length > limit) {
                console.log("运行Promise.race");
                await Promise.race(executing); //等待任意一个任务完成
            }
        }
    }

    return Promise.all(res); //全量执行结果数组
};
// const timeout = (i) =>
//     new Promise((resolve) => {
//         setTimeout(resolve, i, i);
//     });

// const main = async () => {
//     const aa = await asyncPool(3, [10, 20, 30, 40, 50, 60, 60, 70, 80, 1000], timeout);
// };

// main();

// 2.有并行限制的 Promise 调度器
class Scheduler {
    constructor(limit) {
        this.queue = [];
        this.size = limit;
        this.running = 0;
    }

    add(time, order) {
        const fn = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(order);
                    resolve();
                }, time);
            });
        };
        this.queue.push(fn);
    }

    taskStart() {
        for (let i = 0; i < this.size; i++) {
            this.request();
        }
    }

    request() {
        if (!this.queue.length || this.running >= this.size) {
            return;
        }
        this.running++;
        this.queue
            .shift()()
            .then(() => {
                this.running--;
                this.request();
            });
    }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
    scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();
