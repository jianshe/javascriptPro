//proxy实例：关于属性
// let obj = {
//     add: function (val) {
//         return val + 100;
//     },
//     name: 'I am jianshe'
// }
// let pro = new Proxy({
//     add: function (val) {
//         return val + 100;
//     },
//     name: 'I am jianshe'
// }, {
//     get: function (target, key, property) {
//         console.log("come in get");
//         return target[key];
//     },
//     set: function (target, key, value, receiver) {
//         console.log(`setting ${key}=${value}`);
//         return target[key]=value;
//     }
// });
// console.log(pro.name)
// pro.name="jianshe";
// console.log(pro.name);
//proxy 关于方法
var target = function(){
    return "I am jianshe";
}
var handler = {
    apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}
var pro = new Proxy(target,handler);
console.log(pro())