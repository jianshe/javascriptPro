//浅复制
// var obj = { a: 1, arr: [2, 3] };
// var shallowObj = shallowCopy(obj);

// function shallowCopy(src) {
//     var dst = {};
//     for (var prop in src) {
//         if (src.hasOwnProperty(prop)) {
//             if (typeof(prop) == "Object") {

//             }
//             dst[prop] = src[prop];
//         }
//     }
//     return dst;
// }
// shallowObj.arr[1] = 5;
// obj.arr[1] // = 5
// console.log(obj.arr[1]);
//浅复制只会将对象的各个属性进行依次复制，并不会进行递归复制，而javascript存储对象都是存地址的，所以浅复制会导致obj.arr和shallowObj.arr指向同一块内存地址。

//深复制 方法一：
// var a = { name: 'yy', age: 26 };
// var b = new Object();
// b.name = a.name;
// b.age = a.age;
// a.name = 'xx';
// console.log(b); //Object { name="yy", age=26}
// console.log(a); //Object { name="xx", age=26}
//方法二：
var a = { name: 'jianshe', message: { age: 28, sex: '男' } };
var deepCopy = function(source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] == 'object' ? deepCopy(source[key]) : source[key];
    }
    return result;
}
var b = deepCopy(a);
b.message.age = 30;
console.log(b.message.age);
console.log(a.message.age);