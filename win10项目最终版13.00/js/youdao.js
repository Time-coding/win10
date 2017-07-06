/**
 * Created by Administrator on 2017/5/8.
 */

$(function () {
    $("li").eq(5).dblclick(function () {
        $("#youdao").css("display", "block");
        $(".slider").mousedown(function () {
            return false;
        });

        //左右箭头操作
        var pic = 0;//记录当前需要显示的li的索引值
        var len = $(".slider .ydpic li").length;//li的个数
        $(".arrow-right").click(function () {
            pic++;
            //检测，如果pic的数值超出了最大值，归0
            if (pic == len) {
                pic = 0;
            }
            //根据pic，找到需要渐入的li，设置运动，再给其他同级li设置渐出效果
            $(".slider  .ydpic li").eq(pic).fadeIn(500).siblings().fadeOut(500);
            $(".slider  .yuandian li").eq(pic).css("opacity", "1").siblings().css("opacity", "0.5");

        });
        $(".arrow-left").click(function () {
            pic--;
            if (pic == -1) {
                pic = len - 1;
            }
            //根据pic，找到需要渐入的li，设置运动，再给其他同级li设置渐出效果
            $(".slider .ydpic li").eq(pic).fadeIn(500).siblings().fadeOut(500);
            $(".slider  .yuandian li").eq(pic).css("opacity", "1").siblings().css("opacity", "0.5");
        });
        //点击小圆点切换要显示的li
        $(".slider .yuandian li").each(function (i, e) {
            $(e).click(function () {
                $(this).css("opacity", "1").siblings().css("opacity", "0.5");
                pic = i;
                $(".slider .ydpic li").eq(i).fadeIn(500).siblings().fadeOut(500);
            });
        });

//自动轮播
        var ydtimer = null;
        ydtimer = setInterval(function () {
            $(".arrow-right").click();
        }, 3000);
        //移入停止播放
        $(".slider").mouseenter(function () {
            clearInterval(ydtimer);
        });
        //移出重新设置定时器
        $(".slider").mouseleave(function () {
            ydtimer = setInterval(function () {
                $(".arrow-right").click();
            }, 3000);
        });
//右上角功能实现
        $(".ydrt li").eq(0).click(function () {
            $("#youdao").animate({
                "width":0,
                "height": 0,
                "left": "400px",
                "top": "720px"
            }, 500, "linear", function () {
                youdao.style.display = "none";
            });
            //$("#youdao").css("display", "none");
            clearInterval(ydtimer);
        });
        $("#youdaoid").click(function () {
            $("#youdao").animate({
                "width": 789,
                "height": 543,
                "left": "400px",
                "top": "100px"
            }, 500, "linear", function () {
                youdao.style.display = "block";
            });
        });

        $(".ydrt li").eq(2).click(function () {
            $("#youdao").css("display", "none");
            clearInterval(ydtimer);
            $("#youdaoid").remove();
        });

    });

//有道词典拖动
    var ydHead = document.getElementById("ydhead");
    var youdao = document.getElementById("youdao");
    ydHead.onmousedown = function (e) {
        var e = e || event;
        var x = e.clientX - youdao.offsetLeft;
        var y = e.clientY - youdao.offsetTop;

        document.onmousemove = function (e) {
            var e = e || event;
            youdao.style.left = e.clientX - x + "px";
            youdao.style.top = e.clientY - y + "px";
        }
    };
    ydHead.onmouseup = function () {
        document.onmousemove = null;
    };

//计算器拖动
    var calculator = document.getElementById("calculator");
    var calcuHead = document.getElementById("calcu-head");
    calcuHead.onmousedown = function (e) {
        var e = e || event;
        var x = e.clientX - calculator.offsetLeft;
        var y = e.clientY - calculator.offsetTop;

        document.onmousemove = function (e) {
            var e = e || event;
            calculator.style.left = e.clientX - x + "px";
            calculator.style.top = e.clientY - y + "px";
        }
    };
    calcuHead.onmouseup = function () {
        document.onmousemove = null;
    };
    var zI = 5;
    $("#youdao").click(function () {
      this.style.zIndex=zI;
        zI++;
    });
    $("#calculator").click(function () {
        this.style.zIndex=zI;
        zI++;
    });

//腾讯新闻
$("#txn").click(function () {
    $("#txnews").css("display","block");
})
    $(".tab-item").click(function () {
        //3 设置自身添加active类名，同级元素移除类名
        $(this).addClass("active").siblings().removeClass("active");
        //4 使用当前li的索引值到底部的div中找到对应的div，设置操作
        $(".main").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
    });
    $("#txclosed").click(function () {
        $("#txnews").css("display","none");
    });
});