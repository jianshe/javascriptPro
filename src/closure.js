//闭包的应用场景 场景一：函数防抖
//一般方法
// var time = "";
// var fn = function() {
//     console.log('fn');
// }

// window.onresize = function() {
//     debounce(fn, 1000);
// }

// function debounce(fn, timelong) {
//     if (time) {
//         clearTimeout(time);
//         time = ""
//     }
//     time = setTimeout(function() {
//         fn();
//     }, timelong);
// }
//使用闭包
// var fn = function() {
//     console.log("fn");
// }
// window.onresize = debounce(fn, 500);

// function debounce(fn) {
//     var timer = null;
//     return function() {
//         if (timer) { //timer第一次执行后会保存在内存里 永远都是执行器 直到最后被触发
//             clearTimeout(timer);
//             timer = null;
//         }
//         timer = setTimeout(function() {
//             fn();
//         }, 1000)
//     }
// }

//闭包的应用场景 场景二：使用闭包设计单例模式

// class CreateUser {
//     constructor(name) {
//         this.name = name;
//         this.getName();
//     }
//     getName() {
//         return this.name;
//     }
// }
// // 代理实现单例模式
// var ProxyMode = (function() {
//     var instance = null;
//     return function(name) {
//         if (!instance) {
//             instance = new CreateUser(name);
//         }
//         return instance;
//     }
// })();
// // 测试单体模式的实例
// var a = ProxyMode("aaa");
// var b = ProxyMode("bbb");
// // 因为单体模式是只实例化一次，所以下面的实例是相等的
// console.log(a === b); //true


//闭包的应用场景 场景二：使用闭包设计单例模式