//promise解决回调地狱的问题
//1.开始-洗菜做饭。2.开始-做下来吃饭。3.开始-收拾碗筷。
let state = 1;

function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭');
    if (state == 1) {
        resolve('1.洗菜做饭-完成')
    } else {
        reject('洗菜做饭-错误')
    }
}

function step2(resolve, reject) {
    console.log('2.开始-做下来吃饭');
    if (state == 1) {
        resolve('2.做下来吃饭-完成');
    } else {
        reject('做下来吃饭-错误');
    }
}

function step3(resolve, reject) {
    console.log('3.开始-收拾碗筷');
    if (state == 1) {
        resolve('3.收拾碗筷-完成');
    } else {
        reject('收拾碗筷-错误');
    }
}
new Promise(step1).then(function(val) {
    console.log(val);
    return new Promise(step2)
}).then(function(val) {
    console.log(val);
    return new Promise(step3)
}).then(function(val) {
    console.log(val);
})