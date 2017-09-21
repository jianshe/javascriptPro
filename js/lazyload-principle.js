/**
* Created by Jianshe.zhang on 2017/9/21.
*/
//方法1：说明：document.documentElement.clientHeight 获取屏幕可视窗口高度
//document.documentElement.scrollTop获取浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离
//element.offsetTop获取元素相对于文档顶部的距离
//方法2：通过getBoundingClientRect()方法来获取元素的大小以及位置。
function isInSight(el){
    const bound = el.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    return bound.top <= clientHeight+100;
}
function checkImage(){
    const imgs = document.querySelectorAll('.my-photo');
    Array.from(imgs).forEach(el =>{
        if(isInSight(el)){
            loadImg(el);
        }
    })
}
function loadImg(el){
    if(!el.src){
        const source = el.dataset.src;//来访问data-*全局属性
        el.src = source;
    }
}
window.onscroll  = function(){
    checkImage();
};
//方法3
/*
function checkImgs() {
    const imgs = Array.from(document.querySelectorAll(".my-photo"));
    imgs.forEach(item => io.observe(item));
}

function loadImg(el) {
    if (!el.src) {
        const source = el.dataset.src;
        el.src = source;
    }
}

const io = new IntersectionObserver(ioes => {
    ioes.forEach(ioe => {
        const el = ioe.target;
        const intersectionRatio = ioe.intersectionRatio;
        if (intersectionRatio > 0 && intersectionRatio <= 1) {
            loadImg(el);
        }
        el.onload = el.onerror = () => io.unobserve(el);
    });
});
window.onload=checkImgs;*/
