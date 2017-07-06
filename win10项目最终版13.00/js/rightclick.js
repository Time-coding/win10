/**
 * Created by Administrator on 2017/5/7.
 */
var oMenu = document.getElementById("menu");
var aLi = oMenu.getElementsByTagName("li");



//加载后隐藏自定义右键菜单
oMenu.style.display = "none";
//菜单鼠标移入/移出样式
for (i = 0; i < aLi.length; i++) {
    //鼠标移入样式
    aLi[i].onmouseover = function () {
        this.className = "active"
    };
    //鼠标移出样式
    aLi[i].onmouseout = function () {
        this.className = ""
    }
}
//自定义菜单
document.oncontextmenu = function (event) {
    var event = event || window.event;
    oMenu.style.display = "block";
    oMenu.style.top = event.clientY + "px";
    oMenu.style.left = event.clientX + "px";
    return false;
};
//页面点击后自定义菜单消失
document.onclick = function () {
    oMenu.style.display = "none";
};

//新建拓展菜单
var cre = oMenu.children[0];
var crea = document.getElementById("createMenu");
cre.onmouseover= function (event) {
    crea.style.display = "block";
    creatNewIcon(4,5);
    creatNewIcon(3,2);
    creatNewIcon(2,7);


};
cre.onmouseout = function () {
    crea.style.display = "none";
};
//个性化功能链接



function creatNewIcon(cn,tn) {
    var createMenuLis = crea.children;
    createMenuLis[cn].onclick = function (event) {
        //var newYouDaoLi = document.getElementById("des_icon").children[0].children[5];
        var newYouDao = $("li").eq(tn)[0].children[0]

        //creatNewIcon(this,newYouDao)

        var newDiv = document.createElement("div");

        newDiv = newYouDao.cloneNode(true);


        newDiv.style.left = 90 + "px";
        newDiv.style.top = -450  + "px";
        newDiv.style.position = "absolute"
        //图标的重命名
        newDiv.children[1].ondblclick = function (event) {
            event.stopPropagation();
            this.innerHTML = "<input type='text' style='width:75px'>";
            //给input焦点
            this.children[0].focus();
            this.children[0].onblur = function () {
                if (this.value) {
                    this.parentNode.innerHTML = "<p>" + this.value + "</p>";
                } else {
                    this.parentNode.innerHTML = "<p>新建图标</p>";
                }
            }
        }
        //图标的拖动
        var paddingX, paddingY, positionX, positionY;

        newDiv.onmousedown = function (event) {
            paddingX = event.pageX - newDiv.offsetLeft;
            paddingY = event.pageY - newDiv.offsetTop;

            document.onmousemove = function (event) {
                positionX = event.pageX - paddingX;
                positionY = event.pageY - paddingY;

                newDiv.style.top = positionY + "px";
                newDiv.style.left = positionX + "px";
            }
            return false;
        }
        newDiv.onmouseup = function () {
            document.onmousemove = null;
        }

        //添加事件
        newDiv.children[0].addEventListener("dblclick", function () {
            newDiv.children[1].ondblclick();
        })

        //这里最后要改
        //这里最后要改
        newYouDao.parentNode.append(newDiv);
    }
}