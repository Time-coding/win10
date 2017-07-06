//任务栏js
        //---------------高九栋js任务栏------------------------//
        var datas1 = [
            { "src": "images/72/Behance-Icon.png", "height": 72 },
            { "src": "images/72/Bing-Icon.png", "height": 72 },
            { "src": "images/72/weixin.png", "height": 72 },
            { "src": "images/72/qq1.png", "height": 72 },
            { "src": "images/72/309193914.png", "height": 72 },
            { "src": "images/72/21.png", "height": 72 },
            { "src": "images/72/Blinklist-Icon.png", "height": 72 },
            { "src": "images/72/youdao.png", "height": 72 },
            { "src": "images/72/youku.png", "height": 72 },
            { "src": "images/72/taobao.png", "height": 72 },
            { "src": "images/72/Twitter-Icon.png", "height": 72 },
            { "src": "images/72/iTunes-Icon.png", "height": 72 },
            { "src": "images/72/Twitter-Icon.png", "height": 72 },
            { "src": "images/72/Vimeo-Icon.png", "height": 72 },
            { "src": "images/72/Vimeo-Icon.png", "height": 72 },
            { "src": "images/72/Vimeo-Icon.png", "height": 72 },
            { "src": "images/72/Linkedin-Icon.png", "height": 72 },
            { "src": "images/72/Linkedin-Icon.png", "height": 72 },
            { "src": "images/72/iTunes-Icon.png", "height": 72 },
            { "src": "images/72/Identica-Icon.png", "height": 72 },
            { "src": "images/72/Hyves-Icon.png", "height": 72 }
        ];
        var gjd_box = document.getElementById("gjd_box");
        var gjd_sp = document.getElementById("gjd_sp");
        var gjd_menu = document.getElementById("gjd_menu");
        var gjd_pububox = document.getElementById("gjd_pububox");
        var gjd_messageli = document.getElementById("gjd_messageli");
        var gjd_czmiddle = document.getElementById("gjd_czmiddle");
        var czmiddle_b = document.getElementById("gjd_czmiddle_b").children;
        var gjdtime = document.getElementById("gjdtime");
        var flag = false;
        gjd_pububox.style.width = " 268px";
        gjd_pububox.style.height = " 490px";
        //点击菜单按钮弹出菜单
        //弹出左侧开始菜单
        gjd_sp.onclick = function (e) {
            var ev = e || window.event;
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;//兼容IE
            };
            if (flag == false) {
                animate(gjd_menu, { bottom: "40" });
                gjd_menu.style.display = "block";
                flag = true;
            } else {
                gjd_menu.style.display = "none";
                animate(gjd_menu, { bottom: "-493" });
                flag = false;
            }
        };
        //点击盒子本身不隐藏
        gjd_menu.onclick = function (e) {
            var ev = e || window.event;
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;//兼容IE
            }
            gjover.style.display = "none";
        };
        //点击关机按钮事件
        //创建
        var gj = document.createElement("div");
        gj.id = "gj";
        var gj_ul = document.createElement("ul");
        gj.appendChild(gj_ul);
        var i_3 = document.getElementById("i_3");
        i_3.appendChild(gj);
        var Gj_li = ["睡眠", "关机", "重启"];
        for (var j = 0; j < 3; j++) {
            var gj_li = document.createElement("li");
            gj_li.innerText = Gj_li[j];
            gj_ul.appendChild(gj_li);
        };
        //关机。黑屏
        var body = document.getElementById("gjd_body");
        gj_ul.children[1].onclick = function () {
            var timer = null;
            timer = setInterval(function () {
                $("#destop").fadeOut(400);
            }, 400);
        };
        //弹框
        var gjover = document.getElementById("gj");
        i_3.onclick = function (e) {
            var ev = e || window.event;
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;//兼容IE
            }

            if (flag == false) {
                animate(gjover, { bottom: "50" });
                gjover.style.display = "block";
                flag = true;
            } else {
                gjover.style.display = "none";
                animate(gjover, { bottom: "0" });
                flag = false;
            }
        };
        gjover.onclick = function (e) {
            var ev = e || window.event;
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;//兼容IE
            }
        };

        //点击搜索框
        var gjdipt_t = document.getElementById("gjdipt_t");
        gjdipt_t.onclick = function () {
            var ipt1_1 = document.createElement("i");
            ipt1_1.id = "ipt1_1";
            gjdipt_t.appendChild(ipt1_1);
        };
        //----------------------------------------右侧-------------------------
        //弹出右侧信息菜单
        gjd_messageli.onclick = function (e) {

            if (flag) {
                animate(gjd_czmiddle, { right: "0" });
                gjd_czmiddle.style.height = document.body.style.height;
                gjd_czmiddle.style.display = "block";

                flag = false;
            } else {
                gjd_czmiddle.style.display = "none";
                flag = true;
            }
            e.stopPropagation();
        };
        gjd_czmiddle.onclick = function (e) {
            var ev = e || window.event;
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;//兼容IE
            }
        };
        //点击右侧信息栏里面的模式谈出信息
        var czmboxBox = document.createElement("div");
        var czmboxBoxspan = document.createElement("span");
        czmboxBox.appendChild(czmboxBoxspan);
        czmboxBox.id = "czmboxBox";
        gjd_messageli.appendChild(czmboxBox);
        for (var i = 0; i < czmiddle_b.length; i++) {
            czmiddle_b[i].onclick = function () {

                gjd_czmiddle.style.display = "none";
                czmboxBox.style.display = "block";
                czmboxBoxspan.innerText = "你只有足够努力，才能让看不起你的人闭嘴！";
                animate(czmboxBox, { right: "0" });
            }
        }

        czmboxBox.onclick = function (e) {
            var ev = e || window.event;
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            else if (window.event) {
                window.event.cancelBubble = true;//兼容IE
            }
        };

        //点击右侧信息栏向上箭头
        var gjdjt = document.getElementById("gjdjt");
        var gjdjt_s = document.getElementById("gjdjt_s");
        gjdjt.onclick = function (e) {
            e.stopPropagation();
            if (flag) {
                animate(gjdjt_s, { bottom: "40" });
                gjdjt_s.style.display = "block";
                flag = false;
            } else {
                gjdjt_s.style.display = "none";
                flag = true;
            }
        };



        //点击其他地方隐藏
        document.body.onclick = function () {
            //e.stopPropagation();
            gjd_menu.style.display = "none";
            gjd_czmiddle.style.display = "none";
            czmboxBox.style.display = "none";
            gjdjt_s.style.display = "none";
            gjover.style.display = "none";
        };
        //设置时间
        var date = new Date();
        console.log(date);
        //gjdtime.children[0].innerText=date.getHours()+":"+date.getMinutes();
        //gjdtime.children[1].innerText=date.getYear()+"/"+date.getMonth()+"/"+date.getDate();
        var gjd_hour, gjd_minite
        gjd_hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        gjd_minite = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        gjdtime.innerHTML = gjd_hour + ":" + gjd_minite + "<br>" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();


        //开始菜单瀑布流
        console.log(gjd_pububox.style.width);
        var listCount = parseInt((268 - 17) / 74);//计算出当前页面能放入多少列
        console.log(listCount);
        var list;
        var heightArr = [];
        //2 动态的创建ul
        for (var i = 0; i < listCount; i++) {
            list = document.createElement("ul");
            list.style.float = "left";
            gjd_pububox.appendChild(list);
            //初始化每个ul的高度值为0，为了后续的计算可以使用
            heightArr.push(0);
        }
        createPic(datas1);
        //---------------------触底加载------
        //    gjd_pububox.onscroll = function () {
        //        //如果当前可视区域的高度+页面卷曲的高度>最低的ul的高度，进行加载
        //        var minHeight = getMin(heightArr).value;
        //        if(pububox.height + myScroll().scrollTop > minHeight){
        //            //加载新的图片,后面的时候，我们可以将datas2更改为从服务器请求到的数据，进行替换即可。
        //            createPic(datas);
        //        }
        //    };
        function createPic(datas1) {
            //创建li，和内部的图片，创建的个数根据datas中对象的个数即可
            var uls = gjd_pububox.children;//所有的ul
            var li, img, index;
            for (var i = 0; i < datas1.length; i++) {
                li = document.createElement("li");
                img = document.createElement("img");
                //设置src，从datas[i].src取到
                img.src = datas1[i].src;
                li.appendChild(img);

                //我们需要将当前li放入到，高度最小的ul中
                //获取最小值的索引，到所有的ul中找到对应的标签，进行添加即可
                index = getMin(heightArr).index;
                uls[index].appendChild(li);

                //更新heightArr中对应ul的高度
                //datas[i].height当前li的高度
                heightArr[index] += datas1[i].height;
            }
        }
