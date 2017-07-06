/**
 * 获取标签的某一个样式
 * @param tag 标签名
 * @param property 字符串类型
 */
function getStyle(tag, property) {
  //方式一
  //if (typeof getComputedStyle == "function") {
  //  console.log(getComputedStyle(tag, null)[property]);
  //}
  //else {
  //  console.log(tag.currentStyle[property]);
  //}
  //方式二
//    if(tag.currentStyle){
//        console.log(tag.currentStyle[property]);
//    } else{
//        console.log(getComputedStyle(tag, null)[property]);
//    }
  //以下为简化写法
  return tag.currentStyle ? tag.currentStyle[property] : getComputedStyle(tag, null)[property];
}

/**
 * 在targetTag的包裹范围内, 获取类名为claName的标签
 * @param claName 标签名,字符串
 * @param targetTag 查询范围(父标签), 不加双引号
 * @returns {*} 符合条件的所有标签
 */
function getElementsByClassName(claName, targetTag) {
  targetTag = targetTag || document.body;
  if (typeof targetTag.getElementsByClassName == "function") {
    return targetTag.getElementsByClassName(claName);
  } else {
    var allTags = targetTag.getElementsByTagName("*");
    var tempArray = [];
    var tempArray2 = [];
    var j;
    for (var i = 0; i < allTags.length; i++) {
      tempArray2 = allTags[i].className.split(" ");
      for (j = 0; j < tempArray2.length; j++) {
        if (tempArray2[j] == claName) {
          tempArray[tempArray.length] = allTags[i];
          break;
        }
      }
    }
    return tempArray;
  }
}

/**
 * 获取同级的其他所有标签
 * @param item 参考标签
 * @returns {Array} 同级的其他所有标签
 */
function getSib(item) {
  var fa = item.parentNode;
  var sib = fa.children;
  var arr = [];
  for (var i = 0; i < sib.length; i++) {
    if (sib[i] != item) {
      arr[sib.length] = sib[i];
    }
  }
  return arr;
}

/**
 * 获取标签内的文本
 * @param Tag 标签名
 * @returns {string} 标签内的文本
 */
function getText(Tag) {
  if (Tag.innerText == undefined) {
    return Tag.textContent;
  } else {
    return Tag.innerText;
  }
}

/**
 * 设置标签内的文本
 * @param Tag 标签名
 * @param text 要设置的文本内容
 */
function setText(Tag, text) {
  if (Tag.innerText == undefined) {
    Tag.textContent = text;
  } else {
    Tag.innerText = text;
  }
}
/**
 * 获取前一个元素
 * @param node 本元素
 * @returns {*|Node} 前一个元素
 */
function preSib(node) {
  var pre = node.previousSibling;
  while (pre && pre.nodeType != 1) {
    pre = pre.previousSibling;
  }
  return pre;
}

/**
 * 获取下一个元素
 * @param node 本元素
 * @returns {*|Node} 后一个元素
 */
function nextSib(node) {
  var next = node.nextSibling;
  while (next && next.nodeType != 1) {
    next = next.nextSibling;
  }
  return next;
}

/**
 * 使tag的某些样式属性缓动到指定值
 * @param tag 要运动的元素标签
 * @param obj 存储参与运动的属性和属性值
 * @param fn 函数, 吩咐缓动结束后干什么
 */
function animate(tag, obj, fn) {
  clearInterval(tag.timer);//防止点击加速
  tag.timer = setInterval(function () {
    //提前声明
    var attr, target, leader, step;
    //1 当每次定时器开始执行时，假设已经运动完毕了
    var flag = true;
    //先对obj进行遍历，遍历过程中具有多少个属性，就代表着要修改多少个样式
    for (var k in obj) {
      //单独对待透明度
      if (k == "opacity") {
        //k - 属性名 - 字符串形式 - 相当于attr
        //obj[k] - 属性值 - 相当于target
        attr = k;
        target = obj[k] * 100;
        //下面是让一个样式进行运动的代码
        //短路操作, 因为ie会把未赋值的属性解析成auto
        leader = getStyle(tag, attr) * 100 || 0;//动态获取元素当前位置
        step = (target - leader) / 10;//设置步长
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;//运动公式
        tag.style[attr] = leader / 100;
      }
      //单独对待层级
      else if (k == "zIndex") {
        tag.style.zIndex = obj[k];
      } else {
        //k - 属性名 - 字符串形式 - 相当于attr
        //obj[k] - 属性值 - 相当于target
        attr = k;
        target = obj[k];
        //下面是让一个样式进行运动的代码
        //短路操作, 因为ie会把未赋值的属性解析成auto
        leader = parseInt(getStyle(tag, attr)) || 0;//动态获取元素当前位置
        step = (target - leader) / 10;//设置步长
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;//运动公式
        tag.style[attr] = leader + "px";
      }
      //2 只要有某一个target和leader不等，阻止定时器清除，flag = false
      if (leader != target) {
        flag = false;
      }
    }
    //3 当循环结束以后，检测每个样式运动的状态，如果都运动完毕，清除，只要有一个样式没有到达指定位置，就阻止清除
    if (flag) {
      clearInterval(tag.timer);
      //if(typeof fn == "function"){
      //  fn();
      //}
      fn && fn();//上述if代码的简化
    }
  }, 20);
}

function myScroll (){
  var obj = {};
  obj.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  obj.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  return obj;
}

function myClient() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
  };
}

function myCode (){
  console.log("这是我的代码");
}

function addEvent(tag, eventName, myCode){
  var oldClick = tag["on"+eventName];
  if(typeof oldClick == "function"){
    tag["on"+eventName] = function(){
      myCode();
      oldClick();
    }
  }else{
    tag["on"+eventName] = function(){
      myCode();
    }
  }
}

function checkTime(i){
  if(i<10){
    i="0"+i;
  }
  return i;
}
