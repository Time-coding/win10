  //谷歌快捷方式点击事件--------------------------------------------------------
        $("li").eq(2).dblclick(function () {
            var zy_pos = window.open("Googel Chrome/百度一下.html", "_blank", "width=1300,height=650");
            zy_pos.moveTo(20, 10);
            //创建一个li添加到图标e的后面
            var li = document.createElement("li");
            $(li).css("width", 50).css("height", 37).css("lineHeight", "37px")
                .css("float", "left")
                .css("border-bottom", "3px solid rgba(240, 240, 240, 0.3)")
                .css("textAlign", "center");
            var img = document.createElement("img");
            img.src = "icon_images/smalllogo.png";
            $(img).css("width", 35).css("marginTop", 3);
            $(li).append(img);
            $("#gjd_Ul").append(li);
        });
        //计算器快捷方式双击事件-----王超-------------------------------------------------------------------
        var calc = document.getElementById("calculator");
        $("li").eq(7).dblclick(function () {
            calc.style.display = "block";
            //创建一个li添加到图标e的后面
            var li = document.createElement("li");
            li.id = "jsqid";
            $(li).css("width", 50).css("height", 37).css("lineHeight", "37px")
                .css("float", "left")
                .css("border-bottom", "3px solid rgba(240, 240, 240, 0.3)")
                .css("textAlign", "center");
            var img = document.createElement("img");
            img.src = "icon_images/jisuanqi.png";
            $(img).css("width", 35).css("marginTop", 3);
            $(li).append(img);
            $("#gjd_Ul").append(li);
        });

        //右上角最小化和关闭功能实现
        var rt = document.getElementById("rt");
        var getMinh = rt.children[0];
        getMinh.onclick = function () {
            calc.style.display = "none";
        };
        $("#jsqid").click(function () {
            calc.style.display = "block";
        });
        var closeX = rt.children[1];
        closeX.onclick = function () {
            calc.style.display = "none";
            $("#jsqid").remove();
        };
        //有道快捷方式双击事件------------------------------------------------------------------------------------
        var youdao = document.getElementById("youdao");
        //双击快捷方式
        $("li").eq(5).dblclick(function () {

            youdao.style.display = "block";
            //创建一个li添加到图标e的后面
            var li = document.createElement("li");
            li.id = "youdaoid";
            $(li).css("width", 50).css("height", 37).css("lineHeight", "37px")
                .css("float", "left")
                .css("border-bottom", "3px solid rgba(240, 240, 240, 0.3)")
                .css("textAlign", "center");
            var img = document.createElement("img");
            img.src = "icon_images/youdao6.png";
            $(img).css("width", 35).css("marginTop", 3);
            $(li).append(img);
            $("#gjd_Ul").append(li);
        });

        /*--朱涛qq快捷方式双击事件-----------------------------*/
        /*--朱涛qq快捷方式双击事件-----------------------------*/
        $("li").eq(3).dblclick(function () {
            $("#login-zt").fadeIn(1000);
            //创建一个li添加到图标e的后面
            //        var li=document.createElement("li");
            //        li.id="qqid";
            //        $(li).css("width",50).css("height",37).css("lineHeight","37px")
            //                .css("float","left")
            //                .css("border-bottom","3px solid rgba(240, 240, 240, 0.3)")
            //                .css("textAlign","center");
            //        var img=document.createElement("img");
            //        img.src="icon_images/QQicon.png";
            //        $(img).css("width",27).css("marginTop",3);
            //        $(li).append(img);
            //        $("#gjd_Ul").append(li);
            //右侧任务栏小图标
            var $liqq = document.createElement("li");
            $liqq.id = "liqq";
            $($liqq).css("width", "40px").css("lineHeight", "40px");
            var imgqq = document.createElement("img");
            imgqq.src = "icon_images/QQicon.png";
            imgqq.style.width = "20px";
            $($liqq).append(imgqq);
            $("#gjdjt").after($liqq);
            //点击显示
            $("#gjd_toolbar ul li").eq(2).dblclick(function () {
                var loginZT = document.getElementById("login-zt");
                if (loginZT.style.display == "none") {
                    $("#mainWindow-zt").fadeIn(1000);
                }
            });
        });

     //朱涛qq快捷方式双击事件结束