//关于执行上下文
//1.函数每被调用一次，都会产生一个新的执行上下文环境。
//2.函数在定义的时候（不是调用的时候），就已经确定了函数体内部自由变量的作用域。
//3.在执行代码之前，把将要用到的所有的变量都事先拿出来，有的直接赋值了，有的先用undefined占个空。
//4.处于活动状态的执行上下文环境只有一个。
//5.javascript没有块级作用域，javascript除了全局作用域之外，只有函数可以创建的作用域。
//6.我们在声明变量时，全局代码要在代码前端声明，函数中要在函数体一开始就声明好。除了这两个地方，其他地方就不要出现变量声明。而且建议用""单var"形式。
//7.作用域有上下级的关系，上下级关系的确定就看函数是在哪个作用域下创建的。
//8.作用域最大的用处就是隔离变量，不同作用域下同名变量不会冲突。
//9.作用域在函数定义时就已经确定了，而不是在函数调用时确定的。
//10.作用域只是一个“地盘”，一个抽象的概念，其中没有变量。要通过作用域对应的执行上下文环境来获取变量的值。同一个作用域下，不同的调用会产生不同的执行上下文环境，继而产生不同的变量的值。
//11.作用域中变量的值是在执行过程中产生的确定的，而作用域却是在函数创建时确定的。
//12.如果要查找一个作用域下某个变量的值，就需要找到这个作用域对应的执行上下文环境，再在其中寻找变量的值。
//13.要到创建这个函数的那个作用域中取值——是“创建”，而不是“调用”，切记切记.


//关于this
//1.在函数中this到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了。因为this的取值是执行上下文环境的一部分，每次调用函数，都会产生一个新的执行上下文环境。
//不同的情况下，this的指向不一样
//情况一：构造函数
//如果函数作为构造函数用，那么其中的this就代表它即将new出来的对象。
// function Foo() {
//     this.name = 'alex';
//     this.year = 1988;
//     console.log(this);
// }
// var f1 = new Foo();
// console.log(f1.name);
// console.log(f1.year);
//如果直接调用Foo函数，而不是new Foo()，这种情况下this是window.
// function Foo() {
//     this.name = 'alex';
//     this.year = 1988;
//     console.log(this);
// }

// Foo();

//情况二：函数作为对象的一个属性
//如果函数作为对象的一个属性，并用作为对象的一个属性被调用时，函数中的this指向该对象。
// var obj = {
//     x: 10,
//     fn: function() {
//         console.log(this);
//         console.log(this.x);
//     }
// }
// obj.fn();


//如果fn函数不作为obj的一个属性被调用，而是被赋值到了另一个变量中，并没有作为obj的一个属性被调用，那么this的值就是window,this.x为undefined.
// var obj = {
//     x: 10,
//     fn: function() {
//         console.log(this);
//         console.log(this.x);
//     }
// }
// var fn1 = obj.fn;
// fn1();

//情况三：函数用call或者apply调用 
//当一个函数被call和apply调用时，this的值就取传入的对象的值。
// function add(c, d) {
//     return this.a + this.b + c + d;
// }

// var s = { a: 1, b: 2 };
// console.log(add.call(s, 3, 4)); // 1+2+3+4 = 10 //其中s代表函数运行的作用域，另一个是传递的参数要一一列举出来
// console.log(add.apply(s, [5, 6])); // 1+2+5+6 = 14 //其中s代表函数运行的作用域，另一个是参数数组。
//情况四：全局&&调用普通函数
//1.在全局环境下，this永远是window，普通函数在调用时，其中的this也都是window.
// var x = 10;
// var fn = function(){
//     console.log(this);
//     console.log(this.x);
// }
// fn();
//2.特殊情况下，函数f在obj.fn内部定义。
// var obj = {
//     x: 10,
//     fn: function() {
//         function f() {
//             console.log(this);
//             console.log(this.x);
//         }
//         f();
//     }
// }
// obj.fn();

//关于闭包
//闭包就是一个函数引用 另一个函数的变量，因为变量被引用着所以不会被回收

function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function() {
            return i;
        };
    }
    return result;
}
var funcs = createFunctions();
for (var i = 0; i < funcs.length; i++) {
    console.log(funcs[i]());
}
//解释如下：
var result = new Array(),
    i;
result[0] = function() { return i; }; //没执行函数，函数内部不变，不能将函数内的i替换！
result[1] = function() { return i; }; //没执行函数，函数内部不变，不能将函数内的i替换！
result[9] = function() { return i; }; //没执行函数，函数内部不变，不能将函数内的i替换！
i = 10;
funcs = result;
result = null;
console.log(i); // funcs[0]()就是执行 return i 语句，就是返回10
console.log(i); // funcs[1]()就是执行 return i 语句，就是返回10
console.log(i); // funcs[9]()就是执行 return i 语句，就是返回10
//为什么只垃圾回收了 result，但却不收了 i 呢？ 因为 i 还在被 function 引用着啊。
//好比一个餐厅，盘子总是有限的，所以服务员会去巡台回收空盘子，但还装着菜的盘子他怎么敢收？ 
//当然，你自己手动倒掉了盘子里面的菜（=null），那盘子就会被收走了，这就是所谓的内存回收机制。