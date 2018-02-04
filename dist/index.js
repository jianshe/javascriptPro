'use strict';

//proxy实例：关于属性
var obj = {
    add: function add(val) {
        return val + 100;
    },
    name: 'I am jianshe'
};
var pro = new Proxy({
    add: function add(val) {
        return val + 100;
    },
    name: 'I am jianshe'
}, {
    get: function get(target, key, property) {
        console.log("come in get");
        return target[key];
    }
});
console.log(pro.name);
