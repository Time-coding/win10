/**
 * Created by Wilson on 2017/5/6.
 */
var dxtp=document.getElementById("dxtp");
var xtp=document.getElementById("xtp");
var lis=xtp.getElementsByTagName("img");
var destop=document.getElementById("destop");
for (var i = 0; i <lis .length; i++) {
lis[i].onclick=function(){
    dxtp.src=this.src;
    destop.style.backgroundImage="url(" + this.src + ")";
}
}

var dxtp2=document.getElementById("dxtp2");
var xtp2=document.getElementById("xtp2");
var liss=xtp2.getElementsByTagName("img");
var suoping_tt=document.getElementById("dzy_suoping_total");
for (var i = 0; i <liss .length; i++) {
liss[i].onclick=function(){
    dxtp2.src=this.src;
    suoping_tt.style.backgroundImage="url("+this.src+")"
}
  }







$(function(){
    $("#gxh").click(function () {
        $("#shezhi").fadeIn(200)
    })


    $("#zy").click(function(){
        $("#zhuye").fadeIn(200);

    })

    $("#guanbi").click(function(){
        $("#shezhi").fadeOut(500);
    })
    $("#guanbi1").click(function () {
        $("#zhuye").fadeOut(200)
        $("shezhi").fadeIn(300)
    })
    $("#fanhui").click(function () {
        $("#zhuye").fadeOut(200)
        $("#shezhi").fadeIn(200)
    })

    $("#bj").click(function(){
        $("#suoping").hide();
        $("#bjt").fadeIn(500);
                    })
    $("#sp").click(function(){
        $("#bjt").hide();
        $("#suoping").fadeIn(500);
    })
    $("#zx").click(function(){

        $("#zhuxiao").fadeIn(200);
        $("#shezhi").fadeOut(200);
    })

    $("#btn7").click(function(){
        setTimeout("window.location.reload()",500);
    })



    $("#btn8").click(function(){
        $("#zhuxiao").fadeOut(200);
        $("#shezhi").fadeIn(200);
    })

    $("#ks").click(function(e){
        var ev = e || window.event;
        if(ev.stopPropagation){
            ev.stopPropagation();
        }
        else if(window.event){
            window.event.cancelBubble = true;//兼容IE
        };
        if(flag==false){
            animate(gjd_menu,{bottom:"40"});
            gjd_menu.style.display="block";
            flag=true;
        }else{
            gjd_menu.style.display="none";
            animate(gjd_menu,{bottom:"-493"});
            flag=false;
        }

    })


})





























//拖动
var shezhi = document.getElementById("shezhi");
var drop = shezhi.children[0];

drop.onmousedown = function (e) {
    var e = e || event;
    var x = e.clientX - shezhi.offsetLeft;
    var y = e.clientY - shezhi.offsetTop;

    document.onmousemove = function (e) {
        var e = e || event;
        shezhi.style.left = e.clientX - x + "px";
        shezhi.style.top = e.clientY - y + "px";
    }
};
drop.onmouseup = function () {
    document.onmousemove = null;
};



//设置主页拖动


var zhuye = document.getElementById("zhuye");
var drop1 = zhuye.children[0];

drop1.onmousedown = function (e) {
    var e = e || event;
    var x = e.clientX - zhuye.offsetLeft;
    var y = e.clientY - zhuye.offsetTop;

    document.onmousemove = function (e) {
        var e = e || event;
        zhuye.style.left = e.clientX - x + "px";
        zhuye.style.top = e.clientY - y + "px";
    }
};
drop1.onmouseup = function () {
    document.onmousemove = null;
};































//
//
//function animate(tag, obj, fn) {
//    clearInterval(tag.timer);
//    tag.timer = setInterval(function () {
//        var flag = true;//假设当前这一次定时器代码执行可以设置清除（每个样式都到达了指定位置）
//        //先遍历obj
//        for (var k in obj) {
//            //由于obj中有一些属性可能是zIndex或者opacity，这时需要单独处理
//            if (k == "opacity") {
//                //将透明度当前值和目标值都设置为扩大后的倍数，设置时除以相应倍数即可
//                var target = obj[k] * 100;
//                var leader = getStyle(tag, k) * 100 || 0;
//                var step = (target - leader) / 10;
//                //给step设置取整
//                step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                leader = leader + step;
//                //透明度的设置需要去掉单位
//                tag.style[k] = leader / 100;
//
//            } else if (k == "zIndex") {
//                //zIndex不需要渐变，直接设置即可
//                tag.style.zIndex = obj[k];
//
//            } else {
//                var target = obj[k];
//                var leader = parseInt(getStyle(tag, k)) || 0;
//                var step = (target - leader) / 10;
//                //给step设置取整
//                step = step > 0 ? Math.ceil(step) : Math.floor(step);
//
//                leader = leader + step;
//                tag.style[k] = leader + "px";
//            }
//
//            //提取出每种条件都需要的代码
//            if (leader != target) {
//                flag = false;
//            }
//        }
//
//        if (flag) {
//            clearInterval(tag.timer);
//            fn && fn();
//        }
//
//    }, 20);
//}
//
//function getStyle(tag, attr) {
//    if (tag.currentStyle) {
//        return tag.currentStyle[attr];
//    } else {
//        return getComputedStyle(tag, null)[attr];
//    }
//}
