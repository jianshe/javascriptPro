//proxy实例：关于属性
//在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截。
let obj = {
    add: function(val) {
        return val + 100;
    },
    name: 'I am jianshe'
}
let pro = new Proxy({
    add: function(val) {
        return val + 100;
    },
    name: 'I am jianshe'
}, {
    get: function(target, key, property) {
        console.log("come in get");
        return target[key];
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}=${value}`);
        return Reflect.set(target, key, value, receiver);
    }
});
console.log(pro.name)
pro.name = "jianshe";
console.log(pro.name);

//proxy 关于方法
// var target = function() {
//     return "I am jianshe";
// }
// var handler = {
//     apply(target, ctx, args) {
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// var pro = new Proxy(target, handler);
// console.log(pro())


//eg set方法用来拦截某个属性的赋值操作。
// let validator = {
//     set: function(obj, prop, value) {
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('The age is not an integer');
//             }
//             if (value > 200) {
//                 throw new RangeError('The age seems invalid');
//             }
//         }
//         //对于满足条件的age 属性以及其他属性直接保存
//         obj[prop] = value;
//     }
// };

// let person = new Proxy({}, validator);
// person.age = 300;

//the use of proxy

var obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});