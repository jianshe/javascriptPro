//ES6之Set和Map数据结构深入学习
//关于Set
//数组去重的方法，方法一：使用Set
// const s = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

// for (let i of s) {
//     console.log(i);
// }

// 方法二、简单写法：去除数组的重复成员
// let array = [2, 3, 5, 4, 5, 2, 2];
// console.log([...new Set(array)])
//方法三、Array.from方法可以将Set结构转为数组。
// function dedupe(array) {
//     return Array.from(new Set(array));
// }
// console.log(dedupe([1, 1, 2, 3]));
//方法四、实现数组间的并集、交集和差集
// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);

// // 并集
// let union = new Set([...a, ...b]);
// // Set {1, 2, 3, 4}

// // 交集
// let intersect = new Set([...a].filter(x => b.has(x)));
// // set {2, 3}

// // 差集
// let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}

//关于Map :Object结构提供了""字符串-值"的对应，Map结构提供了"值-值""的对应，是一种更完善的Hash结构实现。
const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
map.size;
map.has('name');
map.has('title');
map.get('title'); //Author
//注意Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键。Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。

//易错点;const map = new Map();map.set(['a'], 555);map.get(['a']) // undefined