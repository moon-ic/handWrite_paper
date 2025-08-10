Promise._all = function (promises) {
    return new Promise((resolve, reject) => {
        let res = [];
        let index = 0;
        let len = promises.length;
        if (len === 0) {
            resolve(res);
            return;
        }

        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i])
                .then((data) => {
                    res[i] = data;
                    index++;
                    if (index === len) {
                        resolve(res);
                        return;
                    }
                })
                .catch((err) => {
                    reject(err);
                    return;
                });
        }
    });
};

Promise._race = function (promises) {
    (resolve, reject) => {
        let len = promises.length;
        if (len === 0) {
            return;
        }

        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i])
                .then((data) => {
                    resolve(data);
                    return;
                })
                .catch((err) => {
                    reject(err);
                });
        }
    };
};
