//缓动封装函数
function YDH(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 8);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
function myClient(){
    return{
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth||0,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight||0
    }
}


var WZ_btn3 = document.getElementById("WZ_btn3");////记事打开按钮
var jsb=document.getElementsByClassName("WZ_JSBbox")[0];//要放入的大盒子
//点击打开记事本
WZ_btn3.ondblclick=function(){

    var CJjsb= '<div id="jsbs"><div id="WZ_jsjtz"><i class="iconfont icon-jinlingyingcaiwangtubiao62-copy-copy"></i><span class = "WZ_JSBbox2">新建文本文档.txt-记事本</span><div class= "WZ_if"><i id="i1"> x </i><i id="i2">□</i><i id="i3">-</i></div></div><ul class="WZ_JSBbox1"><span>文件(F)</span><span>编辑(F)</span><span>格式(D)</span><span>查看(V)</span><span>帮助(H)</span> </ul><textarea name="TEXT" id="WZ_JSB" cols="30" rows="10"></textarea></div>'
    //打开效果
    jsb.style.display="none";
        jsb.innerHTML=CJjsb;
//右上角三个键的效果
    var i1=document.getElementById("i1");
    var i2=document.getElementById("i2");
    var i3=document.getElementById("i3");
    i1.onmouseenter=function(){i1.style.backgroundColor="red";}
    i1.onmouseleave=function(){i1.style.backgroundColor="#0078D7";}
    i2.onmouseenter=function(){i2.style.backgroundColor="cornflowerblue";}
    i2.onmouseleave=function(){i2.style.backgroundColor="#0078D7";}
    i3.onmouseenter=function(){i3.style.backgroundColor="cornflowerblue";}
    i3.onmouseleave=function(){i3.style.backgroundColor="#0078D7";}

    $(".WZ_JSBbox").show(2000);
    //关闭记事本
    var jsbg=document.getElementsByClassName("WZ_if")[0].children[0];//记事本关闭键
    jsbg.onclick=function(){
        jsb.innerHTML="";
    };
//缩放笔记本
//    var jsbs = document.getElementById("jsbs");//要进行操作的大盒子
    var text1=document.getElementById("WZ_JSB");//记事本输入框
        text1.innerText="//敲代码时请写注释——————小悠悠曾说过！"
    var jsbf=document.getElementsByClassName("WZ_if")[0].children[1];//记事本放大键
    var jsbs=document.getElementById("WZ_JSB");
    var counts2=0;
    jsbf.onclick=function(){
        counts2++;
        if(counts2 %2 != 0){
            this.lft=jsb.offsetLeft;
            this.tp=jsb.offsetTop;
            this.wih=text1.offsetWidth;
            this.hit=text1.offsetHeight;
            console.log(myClient().width);
            console.log(myClient().height);
            text1.style.height=myClient().height-51+"px";
            text1.style.width=myClient().width+"px";
            YDH(jsb,{left:0,top:0},function(){
                console.log("定位已完成");
            })
        }else if(counts2 %2 ==0){
            text1.style.height=this.hit+"px";
            text1.style.width=this.wih+"px";
            YDH(jsb,{left:(myClient().width-jsb.offsetWidth)/2,top:-jsb.offsetHeight-500},function(){
                jsb.style.left=((myClient().width-jsb.offsetWidth)/2)+"px";
                jsb.style.top=(myClient().height-jsb.offsetHeight)/2+"px";
                jsb.style.display="none";
                $(".WZ_JSBbox").show(2000);
                text1.innerText="//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过！//敲代码时请写注释——————小悠悠曾说过!"
            });
        };
    };

//记事本拖拽
    var jsjtz=document.getElementById("WZ_jsjtz");//记事本拖拽栏
    jsjtz.onmousedown=function(e){
        var e=e||event;
        var x= e.clientX-jsb.offsetLeft;
        var y= e.clientY-jsb.offsetTop;
        document.onmousemove=function(e){
            var e=e||event;
            jsb.style.left= e.clientX-x+"px";
            jsb.style.top= e.clientY-y+"px";
            jsjtz.style.webkitUserSelect="none";
        };
    };
    jsjtz.onmouseup=function(){
        document.onmousemove=null;
    };
    var spans = document.getElementsByClassName("WZ_JSBbox1")[0].children;
    for (var i = 0; i < spans.length; i++) {
        spans[i].index=i
        spans[i].onmouseenter=function(){
            spans[this.index].style.borderColor="#ccc";
        };
        spans[i].onmouseleave=function(){
            spans[this.index].style.borderColor="transparent";
        }
    }
};


//-------------------------------------------------添加点击效果--------------------------------------------------------
    //  设置及创建样式将图标全部居中
$("#des_icon>ul>li").css("position","absolute");
$("#des_icon>ul>li").css("left",35);
$("#des_icon>ul>li").css("top",40);
$("#des_icon>ul").css("position","absolute");
$("#des_icon>ul").css("left",(myClient().width/2)-60);
$("#des_icon>ul").css("top",(myClient().height/2)-60);
$("#des_icon>ul").css("width",150);
$("#des_icon>ul").css("height",150);
$("#des_icon>ul").css("backgroundColor","transform");
$("#des_icon>ul").css("borderRadius",75);

for (var i = 0; i < 4; i++) {
    var $WZ_sp1= $("<span class=WZ_sp1></span>")
    $WZ_sp1.css({
        "backgroundColor":"white",
        "display":"inline-block",
        "borderRadius":10,
        "position":"absolute",
        "opacity":0.9
             })
    $("#des_icon").prepend($WZ_sp1)
};
    $(".WZ_sp1").eq(0).css({"width":50,
                            "height":20,
                            "left":(myClient().width/2)-40,
                            "top":(myClient().height/2)+10})
    $(".WZ_sp1").eq(1).css({"width":20,
                            "height":50,
                            "left":(myClient().width/2)+5,
                            "top": (myClient().height/2)-35})
    $(".WZ_sp1").eq(2).css({"width":50,
                            "height":20,
                            "left":(myClient().width/2)+20,
                            "top":(myClient().height/2)+10})
    $(".WZ_sp1").eq(3).css({"width":20,
                            "height":50,
                            "left":(myClient().width/2)+5,
                            "top": (myClient().height/2)+25})


//图标父盒子旋转
var WZ_SZtimer1=setInterval(function(){
    var date = new Date();
    ss=date.getSeconds()+date.getMilliseconds()/999;
    $("#des_icon>ul")[0].style.transform="rotate("+5*6*ss+"deg)";
},20);

//图标定位
var WZ_datas1=[
    {"left":0,"top":0,},
    {"left":0,"top":90},
    {"left":0,"top":180},
    {"left":0,"top":270},
    {"left":0,"top":360},
    {"left":0,"top":450},
    {"left":0,"top":540},
    {"left":0,"top":630},
    {"left":90,"top":0},
    {"left":90,"top":90},
    {"left":90,"top":240},
    {"left":90,"top":360},
    {"left":90,"top":480},
    {"left":90,"top":600},
    {"left":90,"top":0},
    {"left":90,"top":120},
    {"left":90,"top":240},
    {"left":90,"top":360},
    {"left":90,"top":480},
    {"left":90,"top":600},
]
var WZ_datas2=[
    {"left":35,"top":40-300},
    {"left":35+176,"top":40-242},
    {"left":35+285,"top":40-92},
    {"left":35+285,"top":40+92},
    {"left":35+176,"top":40+242},

    {"left":35,"top":40+300},
    {"left":35-176,"top":40+242},
    {"left":35-285,"top":40+92},
    {"left":35-285,"top":40-92},
    {"left":35-176,"top":40-242},
]
for (var i = 0; i < $("#des_icon>ul>li").length; i++) {
    $("#des_icon>ul>li").eq(i).animate(WZ_datas2[i],600)
}
//鼠标移动上去变成手指
$("#des_icon>ul").css("cursor","pointer")

//给LI设置移入移出事件
var WZ_flag=true;
$("#des_icon>ul>li").mouseenter(function(){
if(WZ_flag==true){
    clearInterval(WZ_SZtimer1);
    $("#des_icon>ul").eq(0)[0].onmouseenter="";
    $("#des_icon>ul").eq(0)[0].onmouseleave="";
    $(".WZ_sp1").remove();
    $("#des_icon>ul")[0].style.transform="";
    $("#des_icon>ul").css({
        "position":"absolute",
        "left":0,
        "top":0,
        "width":0,
        "height":0,
        "backgroundColor":"",
        "borderRadius":0,
    })
    $("#des_icon>ul>li").css({"left":(myClient().width/2)-60+35,
        "top":(myClient().height/2)-60+35,
    })


    $("#des_icon>ul>li").animate({"left":500,"top":-300},300,function(){
        $("#des_icon>ul>li").eq(0).animate(WZ_datas1[0],150,function(){
            $("#des_icon>ul>li").eq(1).animate(WZ_datas1[1],150,function(){
                $("#des_icon>ul>li").eq(2).animate(WZ_datas1[2],150,function(){
                    $("#des_icon>ul>li").eq(3).animate(WZ_datas1[3],150,function(){
                        $("#des_icon>ul>li").eq(4).animate(WZ_datas1[4],150,function(){
                            $("#des_icon>ul>li").eq(5).animate(WZ_datas1[5],150,function(){
                                $("#des_icon>ul>li").eq(6).animate(WZ_datas1[6],150,function(){
                                    $("#des_icon>ul>li").eq(7).animate(WZ_datas1[7],150,function(){
                                        $("#des_icon>ul>li").eq(8).animate(WZ_datas1[8],150,function(){
                                            $("#des_icon>ul>li").eq(9).animate(WZ_datas1[9],150,function(){
                                                WZ_flag=false;
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

}
})

//给UL移入事件设置透明度
$("#des_icon>ul").mouseenter(function(){
    $(".WZ_sp1").eq(0).animate({"left":(myClient().width/2)-40-20},500)
    $(".WZ_sp1").eq(1).animate({"top": (myClient().height/2)-35-20+1},500)
    $(".WZ_sp1").eq(2).animate({"left":(myClient().width/2)+20+20},500)
    $(".WZ_sp1").eq(3).animate({"top": (myClient().height/2)+25+20},500)

//移入后可设置点击事件
    $("#des_icon>ul")[0].onclick=function(){
       if(WZ_flag==true){
           clearInterval(WZ_SZtimer1);
           $("#des_icon>ul").eq(0)[0].onmouseenter="";
           $("#des_icon>ul").eq(0)[0].onmouseleave="";
           $(".WZ_sp1").remove();
           $("#des_icon>ul")[0].style.transform="";
           $("#des_icon>ul").css({
               "position":"absolute",
               "left":0,
               "top":0,
               "width":0,
               "height":0,
               "backgroundColor":"",
               "borderRadius":0,
           })
           $("#des_icon>ul>li").css({"left":(myClient().width/2)-60+35,
               "top":(myClient().height/2)-60+35,
           })
           console.log($("#des_icon>ul>li").length);

           $("#des_icon>ul>li").animate({"left":500,"top":-300},150,function(){
               $("#des_icon>ul>li").eq(0).animate(WZ_datas1[0],150,function(){
                   $("#des_icon>ul>li").eq(1).animate(WZ_datas1[1],150,function(){
                       $("#des_icon>ul>li").eq(2).animate(WZ_datas1[2],150,function(){
                           $("#des_icon>ul>li").eq(3).animate(WZ_datas1[3],150,function(){
                               $("#des_icon>ul>li").eq(4).animate(WZ_datas1[4],150,function(){
                                   $("#des_icon>ul>li").eq(5).animate(WZ_datas1[5],150,function(){
                                       $("#des_icon>ul>li").eq(6).animate(WZ_datas1[6],150,function(){
                                           $("#des_icon>ul>li").eq(7).animate(WZ_datas1[7],150,function(){
                                               $("#des_icon>ul>li").eq(8).animate(WZ_datas1[8],150,function(){
                                                   $("#des_icon>ul>li").eq(9).animate(WZ_datas1[9],150,function(){
                                                       WZ_flag=false;
                                                   })
                                               })
                                           })
                                       })
                                   })
                               })
                           })
                       })
                   })
               })
           })
       }

    }
});

//设置移出事件
$("#des_icon>ul").eq(0)[0].onmouseleave=function(){
    $(".WZ_sp1").eq(0).animate({"left":(myClient().width/2)-40},500,"swing")
    $(".WZ_sp1").eq(1).animate({"top": (myClient().height/2)-35},500,"swing")
    $(".WZ_sp1").eq(2).animate({"left":(myClient().width/2)+20},500,"swing")
    $(".WZ_sp1").eq(3).animate({"top": (myClient().height/2)+25},500,"swing")
};


//------------------------------------------下雨啦，回家收衣服啦------------------------------------------------------
var WZ_datas3=[{"left":1400,
    "top":-150,
    "opacity":0.8,
}]
var WZ_datas4=[{"left":1230,
    "top":20,
    "opacity":0.8,
}]
$("<div id=WZ_taiyang></div>").appendTo($("#desArea"))
$("<div id=WZ_wuyun></div>").appendTo($("#desArea"))
//-----------------------------------------给太阳乌云设置样式---------------------------
$("#WZ_taiyang").css({"position":"absolute",
    "left":1230,
    "top":30,
    "opacity":0.8,
    "width":256,
    "height":256,
    "backgroundImage":"url(images/太阳.png)",
    "cursor":"pointer",
    "borderRadius":256});
$("#WZ_wuyun").css({"position":"absolute",
    "left":1400,
    "top":-150,
    "opacity":0.8,
    "width":256,
    "height":256,
    "backgroundImage":"url(images/雪.png)",
    "cursor":"pointer",
    "borderRadius":256});
//----------------------------------------------------给太阳乌云设置移入移出事件------------------------------------------
$("#WZ_taiyang").mouseenter(function(){
    $(this).animate({"top":0,"opacity":1})
});
$("#WZ_taiyang").mouseleave(function(){
    $(this).animate({"top":30,"opacity":0.8})
});
$("#WZ_wuyun").mouseenter(function(){
    $(this).animate({"top":0,"opacity":1})
});
$("#WZ_wuyun").mouseleave(function(){
    $(this).animate({"top":30,"opacity":0.8})
});
//----------------------------------------------------给太阳设置点击事件------------------------------------------
var   WZ_xydsq=null;
$("#WZ_taiyang").click(function(){
    $("#WZ_taiyang").animate(WZ_datas3[0],"swing")
    $("#WZ_wuyun").animate(WZ_datas4[0],"swing")
    clearInterval(WZ_xydsq)
    WZ_xydsq = setInterval(function(){
        var WZ_ys=Math.floor(Math.random()*5);//出现多少颗雨
        for (var i = 0; i < WZ_ys; i++) {
            var WZ_ysS=Math.floor(Math.random()*1000)+10000;//运动到地方的时间
            var WZ_yl=Math.floor(Math.random()*1400);//出现的left值
            var WZ_yt=-Math.floor(Math.random()*200)+30;//出现的top值
            var WZ_yd=Math.floor(Math.random()*21)+5;//出现的top值
            console.log(WZ_yd);
            $("<span id=WZ_y>❉</span>").appendTo($("#desArea")).css({"left":WZ_yl,"top":WZ_yt,"position":"absolute","color":"skyblue","fontSize":WZ_yd,"userSelect":"none"}).animate({"top":1000},WZ_ysS,"swing",function(){
                $(this).remove();
            })
        }
    },150)
})
//----------------------------------------------------给乌云设置点击事件------------------------------------------
$("#WZ_wuyun").click(function(){
    $("#WZ_taiyang").animate(WZ_datas4[0],"swing")
    $("#WZ_wuyun").animate(WZ_datas3[0],"swing")
    clearInterval(WZ_xydsq)
})
//------------------------------------------------------------下雨还没结束---------------------------------------------