/**
 * Created by Alex Mecer on 2017/4/26.
 */

/** 一次改多个
 * 加速版移动（需要配合下面的函数进行使用！！）
 * @param tag 要变化的标签
 * @param obj 要变化的类型 对象 如{width: 100, height: 200, top: 300}
 * @param fn 当运动结束时需要执行的代码 （可选项）
 * @param speed_px 像素类运动运行速度，默认为10，越小越快，越大越慢 （可选项）
 * @param speed_op 透明度运动运行速度，默认为15，越小越快，越大越慢 （可选项）
 */
function animate(tag, obj, fn, speed_px, speed_op) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //提前声明
        var attr, target, leader, step, speed;

        //1 当每次定时器开始执行时，假设已经运动完毕了
        var flag = true;

        //先对obj进行遍历，遍历过程中具有多少个属性，就代表着要修改多少个样式
        for (var k in obj) {
            //先判断是否为透明度
            if (k == "opacity") {
                //k - 属性名 - 字符串形式 - 相当于attr
                //obj[k] - 属性值 - 相当于target
                attr = k;
                target = obj[k] * 100;

                //下面是让一个样式进行运动的代码
                leader = getStyle(tag, attr) * 100 || 0;
                speed = speed_op || 15;
                step = (target - leader) / speed;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[attr] = leader / 100;

                //2 只要有某一个target和leader不等，阻止定时器清除，flag = false
                if (leader != target) {
                    flag = false;
                }
            }
            //再判断是否为zIndex
            else if (k == "zIndex") {
                tag.style.zIndex = obj[k];
            }
            //其他条件为px类型的值
            else {
                //k - 属性名 - 字符串形式 - 相当于attr
                //obj[k] - 属性值 - 相当于target
                attr = k;
                target = obj[k];

                //下面是让一个样式进行运动的代码
                leader = parseInt(getStyle(tag, attr)) || 0;
                //speed默认是10
                speed = speed_px || 10;
                step = (target - leader) / speed;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[attr] = leader + "px";

                //2 只要有某一个target和leader不等，阻止定时器清除，flag = false
                if (leader != target) {
                    flag = false;
                }
            }
        }
        //3 当循环结束以后，检测每个样式运动的状态，如果都运动完毕，清除，只要有一个样式没有到达指定位置，就阻止清除
        if (flag) {
            clearInterval(tag.timer);
            if (typeof fn == "function") {
                fn();
            }
            //短路操作，和上面的一样，写的渐变，不严谨，如果用户不按要求操作，会报错（活该）
            //fn && fn();
        }
    }, 15);
}


/** 可以结合上面的函数进行使用
 * 解决兼容性获取样式
 * @param tag 获取的标签
 * @param type 获取的类型 字符串
 * @returns {*} 字符串，获取的样式
 */
function getStyle(tag, type) {
    return tag.currentStyle ? tag.currentStyle[type] : getComputedStyle(tag, null)[type];
}

/** 一次改一个
 * 加速版移动移动（需要配合下面的函数进行使用！！）
 * @param tag 要移动的标签
 * @param target 移动距离
 * @param type 运动类型，字符串（越大越慢，通常取10）
 */
function animate_sgl(tag, type, target) {
    //清除之前的影响
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //获取元素当前位置
        //使用短路操作，解决兼容性
        var leader = parseInt(getStyle(tag, type)) || 0;
        //获取步进值，离得越远，速度月快
        var step = (target - leader) / 10;  // <--------------需要改变速度的话从这里改，至越小越快
        //由于step的小数没有意义，这样的话当目标距离特别近的时候，不让其为小数 0.777 --->  1    -0.888 ------>  -1
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //运动公式
        leader = leader + step;
        tag.style[type] = leader + "px";
        //当到目标位置时清除计时器
        if (leader == target) {
            clearInterval(tag.timer)
        }
    }, 15)
}


/**
 * 逐渐出现，由透明渐变到不透明（需要先设置opacity = 0）
 * @param tag 操作的标签
 * @param deep （可选项）控制渐变的速度，默认值为20,越大速度越快，最大值为1000
 */
function myShow(tag, deep) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //设置透明度渐变值
        var step = deep || 20;
        step = step / 1000;
        //取当前透明度的值
        var leader = tag.currentStyle ? tag.currentStyle.opacity : getComputedStyle(tag, null).opacity;
        //取目标值
        var target = 1;
        if (Math.abs(target - leader) > Math.abs(step)) {
            leader = leader - 0 + step;
            tag.style.opacity = leader;
        } else {
            tag.style.opacity = target;
            clearInterval(tag.timer);
        }
    }, 15)
}


/**
 * 逐渐消失，由透明渐变到不透明（需要先设置opacity = 1）
 * @param tag 操作的标签
 * @param deep （可选项）控制渐变的速度，默认值为20,越大速度越快，最大值为1000
 */
function myDis(tag, deep) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //设置透明度渐变值
        var step = -deep || -20;
        step = step / 1000;
        //取当前透明度的值
        var leader = tag.currentStyle ? tag.currentStyle.opacity : getComputedStyle(tag, null).opacity;
        //取目标值
        var target = 0;
        if (Math.abs(target - leader) > Math.abs(step)) {
            leader = leader - 0 + step;
            tag.style.opacity = leader;
        } else {
            tag.style.opacity = target;
            clearInterval(tag.timer);
        }
    }, 15)
}


/**
 * 水平匀速
 * @param tag 要移动的标签名
 * @param target 要移动的距离
 * @param speed 移动速度
 */
function animate_avg(tag, target, speed) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //取实际位置
        var leader = tag.offsetLeft;
        //设置步进值（速度）
        var step = speed;
        //判断实际位置与目标位置的相对位置，对step取正负
        step = leader > target ? -step : step;
        //解决整除问题,如果目标位置与实际位置的距离小于步进值，那么使实际位置直接到目标位置
        if (Math.abs(target - leader) > step) {
            //基本运动
            leader = leader + step;
            //设置偏移
            tag.style.left = leader + "px";
        } else {
            //使实际位置直接到目标位置
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        }
    })
}


/**
 * 根据类名获取元素
 * @param clsName 指定要获取的元素的类名属性
 * @param tarEle 指定在某个标签内进行查找 (可选，如果不传，默认为document.body) - 传入标签
 * @returns {*} 获取到的所有标签，数组形式
 */
function getByClass(clsName, tarEle) {
    //由于tarEle这个参数是一个可选参数，意味着用户可能没有传这个值。
    //可以给tarEle参数设置一个默认值：
    tarEle = tarEle || document.body;

    //能力检测：
    if (typeof document.getElementsByClassName == "function") {
        return tarEle.getElementsByClassName(clsName);
    } else {
        //自己实现功能：
        //1 获取用户指定范围中的所有标签
        var allTag = tarEle.getElementsByTagName("*");
        var resultArr = [];//保存最终获取结果
        var tempClass, tempArr, j;//将变量声明书写到开始位置，防止重复声明

        for (var i = 0; i < allTag.length; i++) {
            //2 依次查看类名className属性值
            tempClass = allTag[i].className;
            //3 在检测的时候需要考虑，如果一个标签同时具有多个类名，无法与指定的类名"heZi"相等
            //我们需要将取出来的类名，使用" "进行分割，根据结果数组再遍历后进行依次检测
            tempArr = tempClass.split(" ");
            for (j = 0; j < tempArr.length; j++) {
                //4 依次检测tempArr中的每个元素值与指定的类名是否相同
                if (tempArr[j] == clsName) {
                    //5 将这个标签保存到resultArr中
                    resultArr[resultArr.length] = allTag[i];
                    //6 如果找到了需要的类名部分。后面的其他部分就没有检测的必要了，直接跳出即可
                    break;//减少循环的执行次数
                }
            }
        }
        return resultArr;//返回结果
    }
}


/**
 * 用于获取标签内部的纯文本内容
 * @param tag 要进行内容获取的标签
 * @returns {string} 返回值为获取到的文本内容，字符串类型
 */
function getText(tag) {
    //如果浏览器不认识这个属性，那么值为undefined
    if (tag.innerText !== undefined) {
        //说明支持
        return tag.innerText;
    } else {
        //不支持innerText，使用textContent
        return tag.textContent;
    }
}


/**
 * 获取可视区域的宽度或高度
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function myClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}


/**
 * 获取卷曲高度/左
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function myScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


/**
 * 获取数组中的最大值
 * @param arr
 * @returns {{index: number, value: *}}
 */
function getMin(arr) {
    var minValue = arr[0];
    var minIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
            minIndex = i;
        }
    }
    return {
        index: minIndex,
        value: minValue
    };
}


/**
 * 获取数组中的最大值及索引
 * @param arr
 * @returns {{index: number, value: *}}
 */
function getMax(arr) {
    var maxValue = arr[0];
    var maxIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    return {
        index: maxIndex,
        value: maxValue
    };
}

/**
 * 获取相对于页面的位置
 * @param e
 * @returns {{x: *, y: *}}
 */
function getPageLocation(e) {
    return {
        x: myScroll().scrollLeft + e.clientX,
        y: myScroll().scrollTop + e.clientY
    }
}