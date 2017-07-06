
//点击换肤按钮，弹出换肤
$(".zy_huanfu").click(function () {
  $(".zy_slider").show();
  return false;
})
$(".all").click(function () {
  $(".zy_slider").hide();
  return false;
})
//皮肤部分
$(function () {

  $(".zy_slider").mousedown(function () {
    return false;
  });

  //左右箭头操作
  var pic = 0;//记录当前需要显示的li的索引值
  var len = $(".zy_slider li").length;//li的个数
  $(".arrow-right").click(function () {
    pic++;
    //检测，如果pic的数值超出了最大值，归0
    if (pic == len) {
      pic = 0;
    }
    //根据pic，找到需要渐入的li，设置运动，再给其他同级li设置渐出效果
    $(".zy_slider li").eq(pic).fadeIn(500).siblings().fadeOut(500);
    return false;
  });
  $(".arrow-left").click(function () {
    pic--;
    if (pic == -1) {
      pic = len - 1;
    }
    //根据pic，找到需要渐入的li，设置运动，再给其他同级li设置渐出效果
    $(".zy_slider li").eq(pic).fadeIn(500).siblings().fadeOut(500);
    return false;

  });

});
$(".zy_slider li").mouseenter(function () {
  $(".logo img").prop({
    "src":"img/logo_white.png",
  });
  var ind = $(this).index() + 1
  $(".all").css("background","url(img/bag"+ind+".jpg)");
  $(".zy_footer .one,.one a").css("color","#fff");
  $(".zy_footer .two,.two a").css("color","#fff");
  $(".zy_erweima p").css("color","#fff");
})
$(".zy_slider li").on("mouseleave",function () {
  if($(this).hasClass("zhege")) {
    return;
  }
  $(".all").css("background","");
  $(".zy_footer .one,.one a").css("color","#666");
  $(".zy_erweima p").css("color","#999");
  $(".zy_footer .two").css("color","#999");
  $(".zy_footer .two a").css("color","#666");
})
//换肤效果
$(".zy_slider li").click(function () {
  $(".logo img").prop({
    "src":"img/logo_white.png",
  });
  var ind = $(this).index() + 1
  $(".all").css("background","url(img/bag"+ind+".jpg)");

  $(".zy_footer .one,.one a").css("color","#fff");
  $(".zy_footer .two,.two a").css("color","#fff");
  $(".zy_erweima p").css("color","#fff");
  $(this).addClass("zhege").siblings().removeClass("zhege");
})


//more隐藏显示
$(".more_pro").mouseenter(function () {
  $(".zy_more").stop().slideDown(1000);
});
$(".zy_more").mouseleave(function () {
  $(".zy_more").stop().slideUp(1000);
})

//导航登录按钮
$("#zy_login").click(function () {
  $(".zy_DL").fadeIn(500);
})
$(".zy_close").click(function () {
  $(".zy_DL").fadeOut(500);
})
//登录窗口登录按钮
$(".zy_dlBtn>button").click(function () {
  $(".zy_DL").hide();

  $(".zy_t_l").show();
  $("#zy_login")[0].innerText = $(".zy_userName>input").val();
  $("#txtSearch").val("生活不止眼前的苟且，还有旧爱发来的请帖");
})

//登录窗口拖拽
var zy_DL = document.getElementsByClassName("zy_DL")[0];//登录窗口
var zy_DL_t = document.getElementsByClassName("zy_DL_t")[0];//拖拽窗口
zy_DL_t.onmousedown = function (e) {
  var e = e || event;
  //获取坐标
  var x = e.clientX - zy_DL.offsetLeft;
  var y = e.clientY - zy_DL.offsetTop;

  //跟随事件
  document.onmousemove = function (e) {
    var e = e || event;
    zy_DL.style.left = e.clientX - x + "px";
    zy_DL.style.top = e.clientY - y + "px";
  }

}
zy_DL_t.onmouseup = function () {
  document.onmousemove = null;
}

//模拟词库
var datas = ["chuan", "chuanzhi", "传智", "传智播客", "jianwangsan", "京东", "xm", "xiaomi", "xjj"];

//1 触发效果的方式为在输入框内部，点击后，抬起来的时候，检测
//2 根据当前用户输入的内容，到datas中依次判断
//3 如果某个词库中的词汇是一输入的内容开头的，取出
//4 根据取出的内容，创建下面要显示的列表

//实现：
//1 获取元素
var txt = document.getElementById("txtSearch");
var zy_sea = document.getElementById("zy_sea");


//2 添加keyup事件
txt.onkeyup = function () {
  var resultArr = [];//用于保存满足条件的词汇

  //3 遍历datas中的每个词汇，用于依次检测
  for (var i = 0; i < datas.length; i++) {
    //4 如果datas[i]是以this.value开头的，取出即可
    if (datas[i].indexOf(this.value) == 0) {
      resultArr[resultArr.length] = datas[i];
    }
  }


  //-------------------------------
  var pop = document.getElementById("pop");

  if (pop) {
    //只有获取到了真正的pop，才能进行这个if
    zy_sea.removeChild(pop);
  }

  //---------小细节-------
  //如果用户输入的内容为""，这时在检测时会匹配到任意的一个字符串，这种情况没有意义，我们阻止后面的创建即可
  if (this.value == "") {
    return;
  }

  //如果当前输入的内容没有匹配到结果，同样也不需要进行结果创建
  if (resultArr.length == 0) {
    return;
  }

  //-------------------------------

  //5 根据resultArr中获取的词汇，进行结构创建
  //结构的创建需要根据样式的需求设置
  var div = document.createElement("div");
  div.id = "pop";
  zy_sea.appendChild(div);
  var list = document.createElement("ul");
  div.appendChild(list);

  //5.1 根据resultArr中元素的个数创建li
  var li;
  for (var i = 0; i < resultArr.length; i++) {
    li = document.createElement("li");
    li.innerText = resultArr[i];
    list.appendChild(li);
  }
  //失去光标下方创建的div隐藏
  txt.onblur = function () {
    $("#pop").hide();
  }
};
var baiduBtn = document.getElementById("zy_btn");
txt.onkeydown = function (event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if (e && e.keyCode == 13) { // enter 键
    if (txt.value == "chuanzhi" || txt.value == "传智") {
      var zy_chuanzhi = window.open("传智播客/index.html", "_blank", "width=1300,height=650");
      zy_chuanzhi.moveTo(20, 10);
      txt.value = "";
    }
  }
}

baiduBtn.onclick = function () {
  if (txt.value == "chuanzhi" || txt.value == "传智") {
    var zy_chuanzhi = window.open("传智播客/index.html", "_blank", "width=1300,height=650");
    zy_chuanzhi.moveTo(20, 10);
    txt.value = "";

  }
}
