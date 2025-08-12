// 1. sleep函数
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function test() {
    console.log("开始");
    await sleep(4000);
    console.log("结束");
}
// test();

//
// 2.异步循环打印 1，2，3
async function sleep2(time, i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i);
        }, time);
    });
}

async function start() {
    for (let i = 1; i <= 3; i++) {
        let res = await sleep2(1000, i);
        console.log(res);
    }
}
// start();

//
// 3.异步循环打印 红黄绿
function red() {
    console.log("red");
}
function green() {
    console.log("green");
}
function yellow() {
    console.log("yellow");
}

const task = (timer, light) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === "red") {
                red();
            } else if (light === "green") {
                green();
            } else if (light === "yellow") {
                yellow();
            }
            resolve(); //让await等待有意义
        }, timer);
    });
};
const taskRunner = async () => {
    await task(3000, "red");
    await task(2000, "green");
    await task(100, "yellow");
    taskRunner();
};
taskRunner();
