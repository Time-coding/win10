//<script src="jquery-1.12.4.js"></script>
window.onload=function(){
  //设置登录窗口的拖拽
  var loginZt = document.getElementById("login-zt");
  var loginZtUp = document.getElementById("login-zt-up");
  loginZtUp.onmousedown = function(e){
    var e = e|| event;
    var x = e.clientX -loginZt.offsetLeft;
    var y = e.clientY -loginZt.offsetTop;
    document.onmousemove = function(e){
      var e = e|| event;
      var tempX = e.clientX - x + 215;
      var maxLeft = document.body.offsetWidth - loginZt.offsetWidth/2;
      tempX = tempX<215?215:tempX;
      tempX = tempX>maxLeft?maxLeft:tempX;
      loginZt.style.left = tempX + "px";
      var tempY = e.clientY - y + 165;
      var maxTop = document.body.offsetHeight - loginZt.offsetHeight/2;
      tempY = tempY<165?165:tempY;
      tempY = tempY>maxTop?maxTop:tempY;
      loginZt.style.top = tempY + "px";
    }
    return false;
  }
  loginZtUp.onmouseup = function(){
    document.onmousemove = null;
  }
  //设置聊天窗口的拖拽
  var chatWindowZt = document.getElementById("chatWindow-zt");
  var chatWindowZtTop = document.getElementById("chatWindow-zt-top");
  chatWindowZtTop.onmousedown = function(e){
    var e = e|| event;
    var x = e.clientX -chatWindowZt.offsetLeft;
    var y = e.clientY -chatWindowZt.offsetTop;
    document.onmousemove = function(e){
      var e = e|| event;
      var tempX = e.clientX - x;
      var maxLeft = document.body.offsetWidth - chatWindowZt.offsetWidth;
      tempX = tempX<0?0:tempX;
      tempX = tempX>maxLeft?maxLeft:tempX;
      chatWindowZt.style.left = tempX + "px";
      var tempY = e.clientY - y;
      var maxTop = document.body.offsetHeight - chatWindowZt.offsetHeight;
      tempY = tempY<0?0:tempY;
      tempY = tempY>maxTop?maxTop:tempY;
      chatWindowZt.style.top = tempY + "px";
    }
    return false;
  }
  chatWindowZtTop.onmouseup = function(){
    document.onmousemove = null;
  }
  //设置主窗口的拖拽
  var mainWindowZt = document.getElementById("mainWindow-zt");
  var mainWindowZtTop = document.getElementById("mainWindow-zt-top");
  mainWindowZtTop.onmousedown = function(e){
    var e = e|| event;
    var x = e.clientX -mainWindowZt.offsetLeft;
    var y = e.clientY -mainWindowZt.offsetTop;
    document.onmousemove = function(e){
      var e = e|| event;
      var tempX = e.clientX - x;
      var maxLeft = document.body.offsetWidth - mainWindowZt.offsetWidth;
      tempX = tempX<0?0:tempX;
      tempX = tempX>maxLeft?maxLeft:tempX;
      mainWindowZt.style.left = tempX + "px";
      var tempY = e.clientY - y;
      var maxTop = document.body.offsetHeight - mainWindowZt.offsetHeight;
      tempY = tempY<0?0:tempY;
      tempY = tempY>maxTop?maxTop:tempY;
      mainWindowZt.style.top = tempY + "px";
    }
    return false;
  }
  mainWindowZtTop.onmouseup = function(){
    document.onmousemove = null;
  }
  //设置主窗口自动隐藏
  mainWindowZt.onmouseleave = function(){
    var maxLeft = document.body.offsetWidth - mainWindowZt.offsetWidth;
    if(this.offsetTop==0){
      //this.style.top = -this.offsetHeight + 1 + "px";
      animate(mainWindowZt, {top:-this.offsetHeight + 1})
    }
    if(this.offsetLeft==maxLeft){
      animate(mainWindowZt,{left:document.body.offsetWidth-1})
    }
  }
  mainWindowZt.onmouseenter = function(){
    var maxLeft = document.body.offsetWidth - mainWindowZt.offsetWidth;
    if(this.offsetTop==-this.offsetHeight + 1){
      animate(mainWindowZt, {top:0})
    }
    if(this.offsetLeft==document.body.offsetWidth-1){
      animate(mainWindowZt,{left:maxLeft})
    }
  }
}



$(function () {
  //$("#destop").css("display","block");
  //点击登录窗口的删除按钮, 删除当前窗口，状态图标，任务栏图标
  $("#login-zt .close-zt").click(function () {
    $(this).parent().parent().hide();
    //      任务栏删除或隐藏qq黑白小图标;
      $("#liqq").remove();
  });
    //点击主窗口的删除按钮, 删除当前窗口，任务栏图标
    $("#mainWindow-zt .close-zt").click(function () {
        $(this).parent().parent().hide();
        //      任务栏删除或隐藏qq黑白小图标;
    });
    //点击对话窗口的删除按钮, 删除当前窗口和任务栏图标
    $(".close-zt").click(function () {
        $(this).parent().parent().hide();
        //      任务栏删除或隐藏qq黑白小图标;
        $("#qqid").remove();
    });
  //点击最小化按钮, 把窗口隐藏到状态栏
  $(".min-zt").click(function () {
    $(this).parent().parent().fadeOut(300);
//        再点击状态栏小图标时, 显示登录框
  })
//      $("#login-username-zt").focus(function () {
//        $(this).val("");
//      })
  $("#login-password-zt").blur(function () {
    if ($(this).val() == "admin" && $(this).prev().val() == "2412586330") {
      $("#right-zt").css("display", "block");
      $("#wrong-zt").css("display", "none");
    } else {
      $("#wrong-zt").css("display", "block");
      $("#right-zt").css("display", "none");
    };
  })
  $("#login-username-zt").blur(function () {
    if ($(this).val() == "2412586330" && $(this).next().val() == "admin") {
      $("#right-zt").css("display", "block");
      $("#wrong-zt").css("display", "none");
    } else {
      $("#wrong-zt").css("display", "block");
      $("#right-zt").css("display", "none");
    };
  })
  //点击登录按钮时检测用户名和密码是否正确,若错误,提示,若正确,跳转至主窗口
  $("#login-bar-zt").click(function () {
    if ($("#login-username-zt").val() == "2412586330" && $("#login-password-zt").val() == "admin") {
      $("#right-zt").css("display", "block");
      $("#wrong-zt").css("display", "none");
      $("#login-zt").fadeOut(500);
      $("#mainWindow-zt").slideDown(1500);
    }else{
      $("#wrong-zt").css("display", "block");
      $("#right-zt").css("display", "none");
    }
  });
  //主窗口
  //点击我的好友,切换至我的好友
  $("#mainWindow-zt-middle-tagBar li").eq(0).click(function(){
    $(this).next().removeClass("chosen").children("i").toggleClass("icon-lianxiren icon-lianxiren11");
    $(this).addClass("chosen").children("i").toggleClass("icon-lianxiren1 icon-lianxiren-copy");
    $("#mainWindow-zt-middle-list .friends").css("display","block");
    $("#mainWindow-zt-middle-list .group").css("display","none");

  })
  //点击我的群, 切换至我的群
  $("#mainWindow-zt-middle-tagBar li").eq(1).click(function(){
    $(this).prev().removeClass("chosen").children("i").toggleClass("icon-lianxiren-copy icon-lianxiren1");
    $(this).addClass("chosen").children("i").toggleClass("icon-lianxiren11 icon-lianxiren");
    $("#mainWindow-zt-middle-list .friends").css("display","none");
    $("#mainWindow-zt-middle-list .group").css("display","block");
  })

  //点击Aragorn那一栏, 弹出对话窗口, 任务栏出现小图标
  $("#mainWindow-zt-middle-list ul li").eq(0).dblclick(function(){
    $("#chatWindow-zt").show(500);
      //任务栏出现小窗口
      var li=document.createElement("li");
      li.id="qqid";
      $(li).css("width",50).css("height",37).css("lineHeight","37px")
          .css("float","left")
          .css("border-bottom","3px solid rgba(240, 240, 240, 0.3)")
          .css("textAlign","center");
      var img=document.createElement("img");
      img.src="icon_images/QQicon.png";
      $(img).css("width",27).css("marginTop",3);
      $(li).append(img);
      $("#gjd_Ul").append(li);
      $("#qqid").click(function(){
         $("#chatWindow-zt").show(500) ;
      })
  });

  //-----对话窗口------------------------------------//
  //点击发送按钮, 下段输入的文字显示到中段, 并设置自动回复
  var countZt = 0;
  $("#chatWindow-zt-bottom input").click(function () {
    //添加聊天当前时间
    if (countZt == 0) {
      var timeNow = new Date();
      var str = checkTime(timeNow.getHours()) + ":" + checkTime(timeNow.getMinutes()) + ":" + checkTime(timeNow.getSeconds());
      var timeDiv = $("<div></div>");
      timeDiv.text(str).appendTo("#chatWindow-zt-middle").css({
        "text-align": "center",
        "height": 30 + "px",
        "font": "12px Microsoft Yahei",
        "color": "#808080",
        //"margin-top": "10px"
      });
    }
    //添加聊天内容
    var tempDiv = $("<div></div>");
    tempDiv.css({
      "position": "absolute",
      "right": "10px",
      "top": countZt * 40 + 20 + "px"
    })
    tempDiv.prependTo("#chatWindow-zt-middle");
    var tempImage = $("<img src='images/阿汤哥.jpg'>");
    tempImage.prependTo(tempDiv).css({
      "width": "28px",
      "height": "28px",
      "border": "1px solid #D5E6F5",
      "border-radius": "14px",
      "margin-left": "10px",
      "vertical-align": "top"
    });
    var tempText = $("<span>" + $("#chatWindow-zt-bottom textarea").val() + "</span>");
    tempText.css({
      "display": "inline-block",
      "backgroundColor": "#009BDB",
      "border": "1px solid deepskyblue",
      "border-radius": "5px",
      "height": "20px",
      "line-height": "20px",
      "text-align": "center",
      "padding": "5px",
      "color": "white",
      "font-size": "14px",
    })
    tempText.prependTo(tempDiv);
    countZt++;
    $("#chatWindow-zt-bottom textarea").val("");
    //设置2秒后自动回复
    var chatTimerZt = setTimeout(function () {
      //添加聊天内容
      var tempDiv = $("<div></div>");
      tempDiv.css({
        "position": "absolute",
        "left": "10px",
        "top": countZt * 40 + 20 + "px"
      })
      tempDiv.prependTo("#chatWindow-zt-middle");
      var tempImage = $("<img src='images/aragorn.jpg'>");
      tempImage.prependTo(tempDiv).css({
        "width": "28px",
        "height": "28px",
        "border": "1px solid #D5E6F5",
        "border-radius": "14px",
        "margin-right": "10px",
        "vertical-align": "top"
      });
      var tempText = $("<span>" + "游戏中, 别烦我" + "</span>");
      tempText.css({
        "display": "inline-block",
        "backgroundColor": "#D2D7DE",
        "border": "1px solid #D2D7DE",
        "border-radius": "5px",
        "height": "20px",
        "line-height": "20px",
        "text-align": "center",
        "padding": "5px",
        "color": "black",
        "font-size": "14px",
      })
      tempText.appendTo(tempDiv);
      countZt++;
      clearTimeout(chatTimerZt);
    }, 2000)
  })
})
