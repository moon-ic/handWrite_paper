//简单的事件委托
function delegateEvent(targetEle, selector, type, fn) {
    targetEle.addEventListener(type, eventfn);

    function eventfn(e) {
        var target = e.target;
        if (matchSelector(target, selector)) {
            if (fn) {
                fn.call(target, e); //targetEle改变指向
            }
        }
    }
}

// 比较函数：判断事件的作用目标是否与选择器匹配；匹配则返回 true
function matchSelector(ele, selector) {
    if (selector.charAt(0) === "#") {
        return ele.id === selector.slice(1);
    }
    if (selector.charAt(0) === ".") {
        return (" " + ele.className + " ").indexOf(" " + selector.slice(1) + " ") != -1;
    }
    return ele.tagName.toLowerCase() === selector.toLowerCase();
}

//调用
var odiv = document.getElementById("oDiv");
delegateEvent(odiv, "a", "click", function () {
    alert("1");
});
