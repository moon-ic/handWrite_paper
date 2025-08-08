function add(a, b) {
    let maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, 0);
    b = b.padStart(maxLen, 0);
    //"0009007199254740991"

    let sum = "",
        p = 0;
    for (let i = maxLen - 1; i >= 0; i--) {
        let cur = parseInt(a[i]) + parseInt(b[i]) + p;
        p = Math.floor(cur / 10);
        sum = (cur % 10) + sum;
    }
    if (p) {
        sum = "" + p + sum;
    }
    return sum;
}

let a = "9007199254740991";
let b = "1234567899999999999";
console.log(add(a, b));
