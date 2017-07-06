/**
 * Created by Administrator on 2017/5/8.
 */
var xx_recycle = document.getElementById("xx_recycle");
var xx_list = document.getElementById("xx_list");
var xx_box = document.getElementById("xx_box");
var des_icon = document.getElementById("des_icon");


$(".total_icon").eq(1).dblclick(function () {
    $("#xx_recycle").css("display", "block");
    return false;
})

var xx_delEle=document.getElementById("xx_delEle");

xx_delEle.onclick=function(){
    var tarELe= des_icon.children[0].children[7].children[1];
    console.log(tarELe);
    tarELe.style.zIndex=100;
    tarELe.style.width=60+"px";
    tarELe.style.height=60+"px";
    tarELe.style.left=0;
    tarELe.style.top=0;
    tarELe.children[0].children[0].style.width=50+"px";
    var li=document.createElement("li");
    li.appendChild(tarELe)
    xx_list.appendChild(li);
    var changpic=des_icon.children[0].children[1].children[0].children[0].children[0];
    changpic.setAttribute("src","icon_images/imageres.dll(54).ico")
}


xx_box.onclick = function () {
    xx_recycle.style.display = "none";
}



function movement(e, tag) {
    var e = e || event;
    var x, y;
    x = getPageX(e) - tag.offsetLeft;
    y = getPageY(e) - tag.offsetTop;
    document.onmousemove = function (e) {
        var e = e || event;
        tag.style.left = getPageX(e) - x + "px";
        tag.style.top = getPageY(e) - y + "px";
    }
}
function mouseRemoveEle(e, tag) {
    document.onmousemove = null;
    var leftVal, maxLeft
    leftVal = tag.offsetLeft;
    maxLeft = xx_recycle.offsetWidth - tag.offsetWidth;
    if (leftVal - xx_recycle.offsetLeft > 0 && leftVal - xx_recycle.offsetLeft < maxLeft) {
        var li = document.createElement("li");
        list.appendChild(li);
        li.appendChild(tag);
        tag.style.left = 0;
        tag.style.top = 0;
    }
}

function getPageX(e) {
    if (e.pageX) {
        return e.pageX;
    } else {
        //兼容方式，我们可以使用鼠标针对页面可视区域的横坐标+页面卷曲的宽度
        return e.clientX + myScroll().scrollLeft;
    }
}

function getPageY(e) {
    //兼容方式，我们可以使用鼠标针对页面可视区域的纵坐标+页面卷曲的高度
    return e.clientY + myScroll().scrollTop;
}

function myScroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

