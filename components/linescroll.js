/**
 * Created by Jianshe.zhang on 2017/9/25.
 */
/*
 * 单行滚动特效
 */
$.fn.extend({
    newScroll:function(){
        var obj=$(this);
        setInterval(function(){
            //prepend()-在被选元素的开头插入内容。
            obj.find("li:first").animate({"marginTop":"82px"},500,function(){
                $(this).css({"marginTop":"0"});
                obj.prepend(obj.find("li:last"));
            });
        },3500);
    }
});