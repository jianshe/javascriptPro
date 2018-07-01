//关于对象：
//1、函数、数组、对象、null、new Number(10)都是对象。他们都是引用类型。
//2、函数/数组之流，只要是对象，它就是属性的集合。
//3、一切引用类型都是对象，对象是属性的集合。
//4、对象都是通过函数来创建的。
//5、每个函数function都有一个prototype，即原型。
//6、每个对象都有一个__proto__属性，指向创建该对象的函数的prototype。
//7、Object.prototype确实一个特例--它的__proto__指向的是null,切记切记!
//8、InstanceOf的判断队列是：沿着A的__proto__这条线来找，同时沿着B的prototype这条线来找，如果两条线能找到同一个引用，即同一个对象，那么就返回true,如果找到终点还未重合，则返回false.

//对继承的理解
function Foo(){};
Foo.prototype.name = 'alex';
Foo.prototype.getName = function(){
    return this.name;
}
//要求，如何添加数的实例，要求这个实例拥有Foo 的name属性和getName方法，并且有自己的一个getAge方法，但是不影响原构造函数的属性
function SubType(){}
//继承了Foo
SubType.prototype = new Foo();
SubType.prototype.age = 24;
SubType.prototype.getAge = function(){
    return this.age;
}
var instance = new SubType();
var parentInstance = new Foo();
instance.name='jianshe';
console.log(instance.getName());
console.log(parentInstance.name);
console.log(instance.getAge());
