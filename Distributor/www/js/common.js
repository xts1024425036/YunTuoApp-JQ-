/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *使用最频繁通用的方法
 **/
"use strict";
/**
 *系统常量
 *sl:var url = "http://192.168.5.44:80/datacenter/api/";
 **/

//var url = "http://192.168.5.200/datacenter/api/";
//var url = "http://192.168.5.41/datacenter/api/";
//var url = "http://localhost/datacenter/api/";
var url = "https://back.51yuntuo.com/datacenter/api/";




var file = "distributor";
var loading_param; //等待的图标
var windheight = window.innerHeight; //处理fixed

var token = "";
//设置ajax请求完成后运行的函数,-
var staticMessage = function (staticmessage) {
    document.addEventListener("deviceready", onDeviceReady, false);
    //监听tab 点击事件
    table.remenber();
    $.ajaxSetup({crossDomain: true});
    $.ajaxSetup({
        beforeSend: function (xhr) {
               xhr.setRequestHeader('Authorization', "Bearer " + storegeeditutil("token"));
        }
    });
    $.ajaxSetup({
        error: function (erro) {
            console.log(erro);
            var urltrue = window.location.href.search("01home");
            if (window.location.href.search("index") > 0) {
                return;
            }
            if (("403" == erro.status || erro.status == "401") && urltrue == -1) {
                window.location.href = "../../login.html";
            } else if (("403" == erro.status || erro.status == "401") && urltrue > 0) {
                window.location.href = "../login.html";
            } else if (erro.status == "500") {
                refusherror("连接异常,请检查数据或重新登录");
            } else if (erro.status == "401") {
                refusherror(erro.messasge);
            } else {
                refusherror("连接异常,数据请求错误,请检查网络和数据");
            }
            loading_close();
        }
    });

    refushpage();
    var userid = storegeeditutil("userid");
    var username = storegeeditutil("username");
    var gsid = storegeeditutil("gsid");
    var groupid = storegeeditutil("groupid");
    var distributid = storegeeditutil("distributid");
    var name = storegeeditutil("name");
    var needstorage = storegeeditutil("needstorage");
    token = storegeeditutil("token");
    staticmessage.profile = true;
    staticmessage.userid = isnotnull(userid) ? userid : "0000";
    staticmessage.username = isnotnull(username) ? username : "0000";
    staticmessage.gsid = isnotnull(gsid) ? gsid : "0000";
    staticmessage.groupid = isnotnull(groupid) ? groupid : "0000";
    staticmessage.distributid = isnotnull(distributid) ? distributid : "0000";
    staticmessage.name = isnotnull(name) ? name : "0000";
    staticmessage.needstorage = isnotnull(needstorage) ? needstorage : "A";
    if (url.indexOf("back.51yuntuo.com") > 0 && ("15800000066" == staticmessage.username || "13800000023" == staticmessage.username)) {
        url = "https://test.51yuntuo.com/datacenter/api/";
    }
    staticmessage.url = url;
    pushReg();
};
function pushReg() {
    storegeeditutil("procount", 0);//临时
    if ("undefined" != typeof (MyPush) && isnotnull(MyPush)) {
        MyPush.register(build_duriback(staticmessage.gsid, "RC", function (e) {
            findProNumber();
        }));
    }
}
function findProNumber() {
    $.post(staticmessage.url + "salelog/findOKStore",
            {
                "type": "change",
                "gsid": staticmessage.gsid,
                "startPage": 0,
                "sctype": "asc",
                "showtype": "all"
            }
    , function (data) {
        console.log(data);
        if (data.deliveryoder.length > 0) {
            storegeeditutil("procount", 0);
            refushpage();
        }
    });
}
function build_duriback(groupid, type, callback) {
    var _duri = new PushRegItem(type + groupid, "DU", callback);
    return _duri;
}
function refushpage() {
    if (storegeeditutil("salecount") > 0) {
        $(".cart_count_class").addClass("cart_class").attr("data-count", storegeeditutil("salecount"));
    }
    if (storegeeditutil("procount") > 0) {
        $("#menu_buttom_id .del_class").addClass("order_tag_class").attr("data-count", storegeeditutil("procount"));
        $(".cell-list .need_update span").addClass("order_tag_class_menu").attr("data-count", storegeeditutil("procount"));
    } else if (storegeeditutil("procount") < 0) {
        storegeeditutil("procount", "0");
    }
    page_event.keyboard("need_resize_obj");
}
var page_event = {
    keyboard: function (classparam1) {
        $(window).on("resize", function () {
            var docheight = window.innerHeight;
            var screenheight = window.screen.height;
            $("." + classparam1).each(function () {
                if (docheight < 500) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
//                console.log("resize", docheight + height - screenheight);
//                var height = $(this).offset().top;
//                $(this).css("bottom", docheight + height - screenheight);
            });
        });
    }
}



var pageutil = {
    refushheight: function () {
        if (window.screen.height < 600) {
            $("html").css("font-size", window.screen.height * 0.0259 + "px");
        } else if (window.screen.height > 600 && window.screen.height < 700) {
            $("html").css("font-size", window.screen.height * 0.0275 + "px");
        } else if (window.screen.height > 700 && window.screen.height < 780) {
            $("html").css("font-size", window.screen.height * 0.029 + "px");
        } else if (window.screen.height > 780) {
            $("html").css("font-size", window.screen.height * 0.0295 + "px");
        }
    },
    refushheightnew: function () {
        if (window.screen.height < 600) {
            $("html").css("font-size", 50 * 0.92 + "px");
        } else if (window.screen.height > 600 && window.screen.height < 700) {
            $("html").css("font-size", 50 + "px");
        } else if (window.screen.height > 700 && window.screen.height < 780) {
            $("html").css("font-size", 50 * 1.1 + "px");
        } else if (window.screen.height > 780) {
            $("html").css("font-size", 50 + "px");
        }
    },
    refushheightcontent: function () {
        var addheight = window.screen.height - 640;
        var now = $(".refushcontent").height();
        $(".refushcontent").css("height", (now + addheight) + "px");
    },
    refushbackground: function () {
        $(".refushback").css("background-size", "100% " + (window.screen.height) + "px");
    },
    refushpagetop: function () {
        if (window.screen.height < 600) {
            $(".refushpagetop").addClass("refushtop");
        }
    }
}



function onDeviceReady() {
    console.log(device.uuid);
    storegeeditutil("uuid", device.uuid);
    staticmessage.name = isnotnull(storegeeditutil("uuid")) ? storegeeditutil("uuid") : "0000";
    console.log(device.cordova);
    console.log(device.version);
    console.log(device.platform);
    console.log(device.model);
}

/**
 *调用某个url参数
 *使用方法:
 *GetQueryString(name)
 **/
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
}
function GetQueryStringByEncode(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null)
        return unescape(decodeURI(r[2]));
    return null; //返回参数值
}
/**
 *调用某个url参数
 *使用方法:
 *GetQueryString(name)
 **/
function setQueryString(data) {
    var params = "";
    if (isnotnull(data) && (typeof (data) == "object" && Object.keys(data).length > 0)) {
        params += "?";
        var num = 0;
        for (var x in data) {
            num++;
            params += x + "=" + data[x];
            if (num < Object.keys(data).length) {
                params += "&";
            }
        }
    }
    return params; //返回参数值
}


//long转时间戳
function timeFormat(time, type, num) {
    var _date;
    if (time instanceof Date) {
        _date = time;
    } else if (time instanceof String || "string" == typeof (time)) {
        _date = new Date(time.replace(/-/g, "/"));
    } else {
        _date = new Date(time);
    }
    var year = _date.getFullYear();
    var month = _date.getMonth() + 1;
    var day = _date.getDate();
    var hours = _date.getHours();
    var minutes = _date.getMinutes();
    var seconds = _date.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (type == undefined) {
        return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    } else if (type == "YMDHM") {
        return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
    } else if (type == "MMDDHH_CN") {
        return  month + "月" + day + "日 " + hours + "点";
    } else if (type == "MMDD_CN") {
        return  month + "-" + day;
    } else if (type == "YYMMDD") {
        return year + "-" + month + "-" + day;
    } else if (type == "YYMMDD_CN") {
        return year + "年" + month + "月" + day + "日";
    } else {
        return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    }
}

//循环生成
String.prototype.format = function () {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length === 1 && typeof (arguments[0]) === "object") {
            var argsObj = arguments[0];
            for (var key in argsObj) {
                if (argsObj[key] !== undefined) {
                    if ("object" != typeof (argsObj[key])) {
                        var reg = new RegExp("({" + key + "})", "g");
                        var value = argsObj[key];
                        if ("number" == typeof (argsObj[key]) && argsObj[key] > 1000000000) {
                            value = timeFormat(argsObj[key]);
                        }
                        result = result.replace(reg, value);
                    } else {
                        for (var x in argsObj[key]) {
                            var reg = new RegExp("({)" + key + "." + x + "(})", "g");
                            var value = argsObj[key][x];
                            if ("number" == typeof (argsObj[key][x]) && argsObj[key][x] > 1000000000) {
                                value = timeFormat(argsObj[key][x]);
                            }
                            result = result.replace(reg, value);
                        }
                    }
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    if ("object" != typeof (arguments[i])) {
                        var reg = new RegExp("({)" + i + "(})", "g");
                        var value = arguments[i];
                        if ("number" == typeof (arguments[i]) && arguments[i] > 1000000000) {
                            value = timeFormat(arguments[i]);
                        }
                        result = result.replace(reg, value);
                    } else {
                        for (var x in arguments[i]) {
                            var reg = new RegExp("({)" + i + "." + x + "(})", "g");
                            var value = arguments[i][x];
                            if ("number" == typeof (arguments[i][x]) && arguments[i][x] > 1000000000) {
                                value = timeFormat(arguments[i][x]);
                            }
                            result = result.replace(reg, value);
                        }
                    }

                }
            }
        }
    }
    return result;
};


/**
 *封装navigator.notification方法
 *已封装alert,confirm
 *使用方法:
 **/
var app = {
    alert: function (message, url) {
        //判断是什么环境
        if (/(Win|Mac|X11)/i.test(navigator.platform)) {//如果是电脑跳转到
            alert(message);
            if (isnotnull(url) && url.indexOf("html") > 0) {
                window.location.href = url;
            }
        } else {  //如果是手机,跳转到
            navigator.notification.alert(
                    message, // 对话的消息
                    function () {
                        windowhref(url);
                    }, // 回调函数
                    '提示', // 标题
                    '确认' // 按钮文字
                    );
        }

    },
    confirm: function (callback, message, param1, param2, confirmNot) {
        //判断是什么环境
        if (/(Win|Mac|X11)/i.test(navigator.platform)) {//如果是电脑跳转到
            if (confirm(message)) {
                callback(param1, param2);
            } else {
                if ("undefined" != typeof (confirmNot) && isnotnull(confirmNot)) {
                    confirmNot(param1, param2);
                }
            }
        } else {  //如果是手机,跳转到
            navigator.notification.confirm(
                    message, // 对话的消息
                    function (buttonIndex) {
                        if ("确定" == buttonIndex || "1" == buttonIndex) {
                            callback(param1, param2);
                        } else {
                            if ("undefined" != typeof (confirmNot) && isnotnull(confirmNot)) {
                                confirmNot(param1, param2);
                            }
                        }
                        console.log("你选择的按钮是：" + buttonIndex);
                    }, // 回调函数
                    '提醒', // 标题
                    ['确认', '取消']            	// 按钮文字
                    );
        }
    }
};
function windowhref(url) {
    if (isnotnull(url) && url.indexOf("html") > 0) {
        window.location.href = url;
    }
}

//生成随机数
function RndNum(n) {
    var rnd = "";
    for (var i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
    return rnd;
}

/**
 *验证所有的输入框，选择框等，判断是否为空
 *要求：在输入框，选择框class中加入need
 **/
function validate() {
    var booleana = "true"
    $(".need").each(function () {
        var item = $(this).val();
        if (item == "" || item == "undefined") {
            if ($(this).attr("placeholder")) {
                booleana = $(this).attr("placeholder");
                $(this).focus();
                return false;
            } else {
                booleana = "信息填写不完整";
                return false;
            }
        }
    });
    return booleana;
}


/**
 *验证数字输入框，不为空且均为数字
 *要求：在输入框，选择框class中加入needNumber
 **/
function validateNumber() {
    var booleana = "true"
    $(".needNumber").each(function () {
        var item = $(this).val();
        var reg = /^[1-9]\d*$/;
        if (item == "" || item == "undefined" || !reg.test(item) || "0" == item) {
            if (item == "0") {
                booleana = "数据不可为 0 ,请检查";
                $(this).focus();
                return false;
            } else if ($(this).attr("placeholder")) {
                booleana = $(this).attr("placeholder") + "(要求为数字)";
                $(this).focus();
                return false;
            } else {
                booleana = "信息填写错误";
                return false;
            }
        }
    });
    return booleana;
}
/**
 *判断是否含有中文
 **/
function includeChineses(message) {
    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    if (reg.test(message)) {
        return false;
    } else {
        return true;
    }
}

/**
 *往storege中存放数据,取出数据,通过参数数量判断
 **/
function storegeeditutil(name, value, option) {
    if (arguments.length == 1) {
        return window.localStorage.getItem(name);
    } else if (arguments.length == 2) {
        window.localStorage.setItem(name, value);
    } else if (arguments.length == 3) {
//设置参数
        storegeditOption(option);
        window.localStorage.setItem(name, value);
    }
}

function storegeditOption(option) {

}


/** 
 * param 将要转为URL参数字符串的对象 
 * key URL参数字符串的前缀 
 * encode true/false 是否进行URL编码,默认为true 
 *  
 * return URL参数字符串 
 */
var urlEncode = function (param, key, encode) {
    if (param == null)
        return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};
/**
 *进行参数不为空判断
 **/
function isnotnull(data) {
    if ("" == data || "undefined" == data || "null" == data || null == data || typeof data == "undefined") {
        return false;
    }
    return true;
}

var urlpage1 = "sale/02sale.html";
var urlpage2 = "sale/02sale.html";
var urlpage3 = "sale/02sale.html";
var urlpage4 = "sale/02sale.html";
var urlpage5 = "../sale/02sale.html";
var urlpage6 = "../store/24storehouse_delivery.html";
var urlpage7 = "../sale/31sale_menu.html";
var urlpage8 = "../sale/02sale.html";
var myurl = "sale/02sale.html";
var myurl2 = "../sale/02sale.html";
function getpages1() {
    var a = storegeeditutil("usertype");
    switch (a) {
        case "1":
            myurl = urlpage1;
            break;
        case "2":
            myurl = urlpage2;
            break;
        case "3":
            myurl = urlpage3;
            break;
        case "4":
            myurl = urlpage4;
            break;
    }
    page1();
}

function getpages2() {
    var a = storegeeditutil("usertype");
    switch (a) {
        case value:

            break;
        default:

            break;
    }
}

var table = {
    index: "01home.html",
    order: "menu/61send.html",
    buy: "onlydelivery/55onlysale.html",
    cart: "onlydelivery/56onlysale_cart.html",
    my: "menu/63my.html",
    pageLevelOne: function () {
        return  "	<div id=\"banner_down_id\" class=\"bottom_nav\">" +
                "		 <a href=\"" + this.index + "\" class=\"item\"><div class=\"iconfont icon-home-fill\"/>首页</a>" +
                "		 <a href=\"" + this.order + "\" class=\"item del_class\" data-count=\"1\"><div class=\"iconfont icon-shouhou\"/>售后</a>" +
                "		 <a href=\"" + this.buy + "\"  class=\"item sale_class\"><div class=\"iconfont icon-xiadan\"/>下单</a>" +
                "		 <a href=\"" + this.cart + "\"  class=\"item cart_count_class\" data-count=\"0\"><div class=\"iconfont icon-gouwu\"/>购物车</a>" +
                "		 <a href=\"" + this.my + "\"  class=\"item my_class\"><div class=\"iconfont icon-wode\"/>我的</a>" +
                "	</div>"
    },
    pageLevelTwo: function () {
        return  "	<div id=\"banner_down_id\" class=\"bottom_nav\">" +
                "		 <a href=\"../" + this.index + "\" class=\"item\"><div class=\"iconfont icon-home\"/>首页</a>" +
                "		 <a href=\"../" + this.order + "\" class=\"item del_class\" data-count=\"1\"><div class=\"iconfont icon-shouhou\"/>售后</a>" +
                "		 <a href=\"../" + this.buy + "\"  class=\"item sale_class\"><div class=\"iconfont icon-xiadan\"/>下单</a>" +
                "		 <a href=\"../" + this.cart + "\"  class=\"item cart_count_class\" data-count=\"0\"><div class=\"iconfont icon-gouwu\"/>购物车</a>" +
                "		 <a href=\"../" + this.my + "\"  class=\"item my_class\"><div class=\"iconfont icon-wode\"/>我的</a>" +
                "	</div>"
    },
    htmlTabel: function (type) {
        if ("one" == type) {
            $("#menu_buttom_id").html(this.pageLevelOne());
        } else if ("two" == type) {
            $("#menu_buttom_id").html(this.pageLevelTwo());
        }
    },
    remenber: function () {
        $("#menu_buttom_id").on("click", ".cart_class", function () {
            var thisurl = window.location.pathname;
            transitionLocation("56onlysale_cart", thisurl, null);
        })
    }
}
//window.onload加载多个函数
function addLoadEvent(func) {
    if (document.all) {
        window.attachEvent("onload", func); //对于IE
    } else {
        window.addEventListener("load", func, false); //对于FireFox
    }
}

//关闭等待的图标
function loading_close() {
    if (isnotnull(loading_param)) {
        zeroModal.close(loading_param);
    }
    if (isnotnull($("#send_id")[0])) {
        $("#send_id").attr("disabled", "false").css("pointer-events", "auto").css("background", "#5478c4");
    }
}
//访问权限查看
function powerfind(pid) {
    var power = storegeeditutil("power");
    if (power.indexOf(pid) > 0) {
        return true;
    } else {
        return false;
    }
}

//获取离当前的n天的日期
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期 
    var year = dd.getFullYear();
    var month = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    var day = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return year + "-" + month + "-" + day;
}


function dateIsOk(devdatestamp) {
    var val = Date.parse(devdatestamp);
    var editDate = new Date(val);
    var nowDate = new Date();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    if (parseInt(month) - 1 > editDate.getMonth() && editDate.getDate() - day < 0) {
        app.alert("时间设置错误,请检查");
        return false;
    } else {
        return true;
    }
}
//刷新新消息
//  <div id="add_msg"></div>
function refushmessage(message) {
    $("#add_msg").html(message).show().animate({width: '80vw'}, 400).fadeOut(2400);
    setTimeout(function () {
        $("#add_msg").hide();
    }, 2400)
}

//刷新新消息
function refusherror(message) {
    $("#add_msg").css("background", "#f47272").html(message).show().animate({width: '80vw'}, 400).fadeOut(3300);
    setTimeout(function () {
        $("#add_msg").hide().css("background", "#558bc3");
    }, 3300)
}
//刷新新消息
function refushinfo(message) {
    $("#add_msg").css("background", "#fb8600").html(message).show().animate({width: '80vw'}, 400).fadeOut(3300);
    setTimeout(function () {
        $("#add_msg").css({"width": "0px", "background": "#558bc3"});
    }, 3300)
}
function transitionLocation(pagecode, backpage, tourl) {
    storegeeditutil("oldurl", pagecode + ";" + backpage);
    if (isnotnull(tourl)) {
        window.location.href = encodeURI(tourl);
    }

}

function locationold(type, url, message) {
    var old = storegeeditutil("oldurl");
    var thisurl = window.location.pathname;
    var endurl = "../01home.html";
    if (isnotnull(old) && old.length > 10) {
        var arrays = old.split(";");
        if (thisurl.indexOf(arrays[0]) > 0 && isnotnull(arrays[1])) {
            storegeeditutil("oldurl", "");
            endurl = arrays[1];
        } else if (isnotnull(url)) {
            endurl = url;
        } else {
            app.alert("页面跳转出现异常", endurl);
        }
    } else if (isnotnull(url)) {
        endurl = url;
    } else {
        app.confirm(function () {
            window.location.href = endurl;
        }, "跳转出现异常,是否返回首页?");
    }
    if (isnotnull(message) && message.length > 5) {
        app.alert(message, endurl);
    } else {
        window.location.href = endurl;
    }
}

//动态激活
$(window).on("resize", function () {
    var docheight = window.innerHeight;
    var bottomx = document.getElementById('fixed_position_id');
    if (isnotnull(bottomx)) {
        if (docheight < windheight) {
            bottomx.style.position = 'static';
        } else {
            bottomx.style.position = 'fixed';
        }
    }
});

//textarea自增长
$.fn.autoHeight = function () {
                    function autoHeight(elem) {
                            elem.style.height = 'auto';
                            elem.scrollTop = 0; //防抖动
                            elem.style.height = (elem.scrollHeight - 1) + 'px';
                    }
                    this.each(function () {
                            autoHeight(this);
                            $(this).on('keyup', function () {
                                    autoHeight(this);
                            });
                    });
            }

if (/iP(ad|hone|od)/.test(navigator.userAgent)) {
    addLoadEvent(function () {
        document.body.className = document.body.className + " ios";
    });
}
//websocket对象
//修改小红标 MyPush.send("D1002", "Dmessage", "TRANS", "MSG");
// cordova.plugins.notification.badge.set(badgenum);
function build_duri(groupid, type) {
    var _duri = new PushRegItem(type + groupid, "MSG", function (e) {
        console.log("trigger du" + e);
    });
    return _duri;
}

//判断两个对象是否相等
function diff(obj1, obj2) {
    var o1 = obj1 instanceof Object;
    var o2 = obj2 instanceof Object;
    if (!o1 || !o2) {/*  判断不是对象  */
        return obj1 === obj2;
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
        //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
    }

    for (var attr in obj1) {
        var t1 = obj1[attr] instanceof Object;
        var t2 = obj2[attr] instanceof Object;
        if (t1 && t2) {
            return diff(obj1[attr], obj2[attr]);
        } else if (obj1[attr] !== obj2[attr]) {
            return false;
        }
    }
    return true;
}

function checkUpdate(errfunc) {
    chcp.fetchUpdate(function (error, data) {
        if (error) {
            console.log('Load update fail: ' + error.code + ' ' + error.description);
            if (typeof (errfunc) == "function") {
                errfunc();
            }
            return;
        }
        console.log('Update is loaded');
//                console.log('Current version: ' + data.currentVersion);
        console.log('About to install: ' + data.config.release);
        chcp.installUpdate(function (error) {
            if (error) {
                console.log('Install update fail: ' + error.code + ' ' + error.description);
            } else {
                console.log('Update installed!');
            }
        });
    });
}

