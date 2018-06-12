//promise方法的使用
//场景1：用Promise对象实现的Ajax操作的例子

const getJson = function(url) {
    const promise = new Promise(function(resolve, reject) {
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };

        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });
    return promise;
};

getJson("/data/list.json").then(function(json) {
    console.log('Contents: ' + JSON.stringify(json));
}, function(error) {
    console.log('出错了', error);
});