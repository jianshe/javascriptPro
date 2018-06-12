//Reflect实例：1.关于属性
// var obj = {
//     name: 'alex'
// }
// var loggedObj = new Proxy(obj, {
//     get(target, key) {
//         console.log('get', target, key);
//         return Reflect.get(target, key);
//     },
//     deleteProperty(target, key) {
//         console.log('delete ' + key);
//         return Reflect.deleteProperty(target, key);
//     },
//     has(target, key) {
//         console.log('has' + key);
//         return Reflect.has(target, key);
//     }
// });

// loggedObj.name;
// delete loggedObj.name;
// if (name in loggedObj) {

// }


//2.Reflect.get
// var myObject = {
//     foo: 1,
//     bar: 2,
//     get baz() {
//         return this.foo + this.bar
//     }
// }

// Reflect.get(myObject, 'foo');
// Reflect.get(myObject, 'bar');
// Reflect.get(myObject, 'baz');
// debugger

//3.Reflect.apply()
const ages = [11, 33, 12, 54, 18, 96];
//旧写法
// const youngest = Math.min.apply(Math, ages);
// const oldest = Math.max.apply(Math, ages);
// const type = Object.prototype.toString.call(youngest);

//新写法
const youngest = Reflect.apply(Math.min, Math, ages);
const oldest = Reflect.apply(Math.max, Math, ages);
const type = Reflect.apply(Object.prototype.toString, youngest, []);
debugger