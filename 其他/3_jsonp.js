// 利用<script>标签不受跨域限制的特点，缺点是只能支持 get 请求
// 跨域拿到想要的数据

function jsonp(url, params, callback) {
    return new Promise((resolve, reject) => {
        let arr = [];
        for (let key in params) {
            arr.push(`${key}=${params[key]}`);
        }

        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `${url}?callback=${callback}&${arr.join("&")}`;
        document.body.appendChild(script);

        window[callback] = function (data) {
            resolve(data);
            document.body.removerChild(script);
        };
    });
}

jsonp({
    url: "http://suggest.taobao.com/sug",
    callback: "callback",
    params: {
        q: "iphone手机",
        code: "utf-8"
    }
}).then((data) => {
    console.log(data);
});
