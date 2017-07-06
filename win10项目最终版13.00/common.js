/**
 * Created by yoyo on 2016-08-22.
 */
function animate(tag, obj, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var key in obj) {
            if (key == "opacity") {
                var leader = getStyle(tag, key) * 100;
                //step = ( target - leader ) / 10
                var target = obj[key] * 100;
                var step = (target - leader) / 10;
                step = leader > target ? Math.floor(step) : Math.ceil(step);
                //leader = leader +  step
                leader = leader + step;
                tag.style[key] = leader / 100;
            } else if (key == "zIndex") {
                tag.style[key] = obj[key];
            } else {
                var leader = parseInt(getStyle(tag, key)) || 0;
                var target = obj[key];
                var step = (target - leader) / 10;
                step = leader > target ? Math.floor(step) : Math.ceil(step);
                leader = leader + step;
                tag.style[key] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(tag.timer);
            if (typeof fn == "function") {
                fn();
            }
            //fn && fn();
        }
    }, 20);
}

function getStyle(tag, attr) {
    return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
}/**
 * Created by asus on 2017/5/6.
 */



//function createPic(datas) {
//    //创建li，和内部的图片，创建的个数根据datas中对象的个数即可
//    var uls = box.children;//所有的ul
//    var li, img, index;
//    for (var i = 0; i < datas.length; i++) {
//        li = document.createElement("li");
//        img = document.createElement("img");
//        //设置src，从datas[i].src取到
//        img.src = datas[i].src;
//        li.appendChild(img);
//
//        //我们需要将当前li放入到，高度最小的ul中
//        //获取最小值的索引，到所有的ul中找到对应的标签，进行添加即可
//        index = getMin(heightArr).index;
//        uls[index].appendChild(li);
//
//        //更新heightArr中对应ul的高度
//        //datas[i].height当前li的高度
//        heightArr[index] += datas[i].height;
//    }
//}
//计算数组最小值
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
function myClient() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

function myScroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}