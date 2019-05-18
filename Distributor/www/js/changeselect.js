"use strict";
/**
 * String 格式化方法, 下面是两种调用方法
 * var template1="我是{0}，今年{1}了";
 * var template2="我是{name}，今年{age}了";
 * var result1=template1.format("loogn",22);
 * var result2=template2.format({name:"loogn",age:22});
 * temp1.format({img:"loogn",name:"111",price:"111.11",size:"200*300"});
 * temp3.format("loogn");
 */
var staticClear = "<div class=\"clear\"></div>";
var template1 = "我是{0}，今年{1}了";
var template2 = "<li>{name}{age}</li>";
//货品html模板
var temp1 = "                <div class=\"content rightmenu list_item\" pid=\"{prodid}\" pbig=\"{pbigcate}\" pcate=\"{pcate}\">" +
        "                    <div class=\"innercontent\">" +
        "                        <div class=\"left\">{prodname} {catename}</div>" +
        "                        <div class=\"clear\"></div>" +
        "                        <div>货号：{prodid} <span class=\"remark_class_{remarks}\">( {remarks} )</span></div>" +
        "                        <div class=\"left \">颜色：<span class=\"section_text color\" pid=\"颜色\" default=\"{defaultcolor}\" type=\"color\" code=\"{prodcodes}\">{defaultcolor}</span></div>" +
        "                        <div class=\"right detail_number_add\" type=\"add\">" +
        "                            <i class=\"iconfont icon-roundadd\" style=\"font-size: 7vw;\"></i>" +
        "                        </div>" +
        "                        <div class=\"clear\"></div>" +
        "                    </div>" +
        "                </div>";
//货品html模板
var temp1_1 = "                <div class=\"content rightmenu list_item\" psn=\"{sn}\" pid=\"{prodid}\" pbig=\"{pbigcate}\" pcate=\"{pcate}\">" +
        "                    <div class=\"innercontent\">" +
        "                        <div class=\"left\">{prodname} {catename}</div>" +
        "                        <div class=\"clear\"></div>" +
        "                        <div class=\"prod_code_class\">货号：{prodid}　 {defaultcolor}</div>" +
        "                        <div class=\"right detail_number_add\" type=\"add\" pcolor='{defaultcolor}'>" +
        "                            <i class=\"iconfont icon-right\" ></i>" +
        "                        </div>" +
        "                        <div class=\"clear\"></div>" +
        "                    </div>" +
        "                </div>";
//货品大类html模板
//temp2.format("loogn");
var temp2 = " <div class=\"leftmenu\" pid=\"{bigcateid}\" >{catename}</div>";
//货品小类html模板
//temp3.format("loogn");
var temp3 = " <a class=\"field5 swiper-slide\" href=\"javascript:void(0)\" pid=\"{condistributorcatePK.cateid}\"><span>{catename}</span></a>";
//var temp3 = "     <span class=\"swiper-slide sale_cate_class\" pid=\"{0}\" >{1}</span>";
//购物车模板
//price1 : 不带符号

//颜色
var temp6 = "<li code=\"{prodcodes}\" psn='{sn}'>{prodcolor}</li>" +
        "\n";

/**
 *循环生成html
 *初始文本+类别+数据
 *使用方法:
 *var a = htmladd(str,type,data);
 **/
var htmladd = function (type, data) {
    var temp;
    var html;
    var str = "";
    switch (type) {
        case "大类":
            temp = temp2;
            html = "";
            break;
        case "细类":
            temp = temp3;
            html = "";
            html += str;
            break;
        case "货品类":
            temp = temp1;
            html = "";
            break;
        case "购物车":
            temp = temp4;
            html = "";
            break;
        case "cart_del":
            temp = temp4_1;
            html = "";
            break;
        case "订单清单":
            temp = temp5;
            html = " <div id=\"sale_cart_id\" class=\"sale_order_list_title\">货品清单</div>";
            break;
        case "颜色":
            temp = temp6;
            html = "";
            break;
        case "prolist":
            temp = temp1_1;
            html = "";
            break;
        default:

            break;
    }
    if (data instanceof Array && data.length == 0) {
        return "<div></div>";
    } else if (typeof (data) == "undefined" || data == null || Object.keys(data).length == 0) {
        return "<div></div>";
    }
    if (data instanceof Array) {
        for (var i = 0, j = data.length; i < j; i++) {
            html += temp.format(data[i]);
        }
    } else {
        for (var x in data) {
            html += temp.format(x, data[x]);
        }
    }
    return html;
};
/**
 *修改元素下html
 *使用方法:
 *change(id,str);
 **/
var change = function (id, str) {
    $("#" + id).html(str);
};
/**
 *生成页面
 *多此重用，添加
 **/
var htmlhelpmain = function (str, saleall) {
    //刷新货品列表
    var saleHtml = htmladd(str, saleall);
    change("sale_cart_id", saleHtml);
    $('.detail_number_delete').css("display", "block");
    $('.detail_number').css("display", "inline-block");
}

/**
 * -------------
 *修改后刷新数量
 *多此重用，添加
 *-------已废除
 **/
var refushmain = function (saleall) {
};
var refushdetail = function ( saleall) {
};
/**
 *cookie写入
 *多此重用，添加
 **/
var cookiemain = function ( saleall) {
    var saleJson = JSON.stringify(saleall);
    storegeeditutil("saleall", saleJson);
}

/**
 *修改货品
 *多此重用，添加
 *editonemain(pid,all,"number",1);
 **/
var editonemain = function (str, saleall, key, value) {
    for (var x in saleall) {
        console.log(saleall[x].pid == str);
        if (saleall[x].pid == str) {
            switch (key) {
                case "number":
                    saleall[x].number = value;
                    break;
            }
        }
    }
};
/**
 *遍历所有货品PCODE
 *多此重用，添加
 **/
var listone = function (procode, saleall) {
    for (var y in saleall) {
        if (saleall[y].prodcodes == procode) {
            return parseInt(y);
        }
    }
    return parseInt(999);
}
/**
 *遍历所有货品PID
 *多此重用，添加
 **/
var listonepid = function (prodid, saleall) {
    for (var y in saleall) {
        if (saleall[y].prodid == prodid) {
            return parseInt(y);
        }
    }
    return 999;
}

var listoneByColumn = function (column, value, arrays) {
    for (var y in arrays) {
        if (arrays[y][column] == value) {
            return parseInt(y);
        }
    }
    return parseInt(999);
}

/**
 *查询货品数量
 *多此重用，添加
 **/
var listnumber = function (saleall) {
    var number = 0;
    for (var y in saleall) {
        number += saleall[y].number;
    }
    return number;
}
/**
 *遍历所有货品
 *多此重用，添加
 **/
var listitem = function (saleSelect, salepage) {
    $(".list_item_addnow").each(function () {
        var parent = $(this);
        var prodcodes = $(this).find(".color").attr("code");
        var number = 1;
        var color = parent.find('.section_text')[0].innerText;
        if (color == "多种颜色") {
            return true;
        }
        var y = listone(prodcodes, salepage);
        salepage[y].prodcodes = prodcodes;
        salepage[y].number = number;
        salepage[y].prodcolor = color;
        salepage[y].prodfee = salepage[y].unprice;
        var item = salepage[y];
        for (var x in item) {
            saleSelect[x] = item[x];
        }
        console.log(saleSelect);

    });
}

//选货匹配,即有一种需要匹配另外一种
var needtwo = {"25": ["32", "33", "34"], "26": ["32", "33", "34"], "27": ["32", "33", "34"], "24": ["32", "33", "34"]};
var catename = {"25": "垫", "26": "垫", "27": "垫", "24": "垫"};
var nowhavecate = new Array();
function editneedtwo(bigid) {
    var have_bigkey = needtwo.hasOwnProperty(bigid);
    var now_havekey = true;
    if (have_bigkey) {
        console.log("包含当前的大类");
        for (var x in needtwo[bigid]) {
            for (var y in nowhavecate) {
                if (nowhavecate[y] == needtwo[bigid][x]) {
                    now_havekey = false;
                    break;
                } else {
                    continue;
                }
            }
            if (!now_havekey) {
                break;
            }
        }
        if (now_havekey) {
            refushmessage("该货品需要同步选购" + catename[bigid]);
        }
    }
}
/**
 *新版添加货品(点击大框直接加入)
 *多此重用，添加
 **/
var saleaddnow = function () {
    var status = "2";
    $("body").on('click', '.list_item', function () {
        if (status == "1" || status == "2") {
            status = "0";
            setTimeout(function () {
                status = "1";
            }, 1000)
            var element = $(this).find(".detail_number_add");
            var classtype = $(element).attr("type");
            var prodcodes = $(element).closest(".list_item_detail").find(".color").attr("code");
            if ("add" == classtype) {
                $(this).closest(".list_item").addClass("list_item_addnow");
                numberedit(classtype, element);
                addone(element, prodcodes);
            } else if ("minus" == classtype) {
                numberedit(classtype, element);
                deleteone(prodcodes);
            } else if ("color" == classtype) {
                selectcolor(element, "select");
            }
        }
    });
}

//辅助 ： 编辑css
function cssedit(mainnow, element, type) {
    var mainhtml = $(element).closest(".list_item").find(".main");
    if ("all" == type) {
        var defaultcolor = $(element).closest(".list_item").find(".color").attr("default");
        if ("" != defaultcolor && "多种颜色" == defaultcolor) {
            $(element).closest(".list_item").find(".color").html("多种颜色");
        }
        $(element).closest(".list_item").find(".main").html(0);
        $(mainhtml).prev().css("display", "none");
        return true;
    }
    (mainnow > 0) ? $(mainhtml).prev().css("display", "block") : null;
    (mainnow == 0) ? $(mainhtml).prev().css("display", "none") : null;
    (mainnow == 0) ? $(mainhtml).next().css("display", "block") : null;
}
//all edit
function numberedit(classtype, element) {
    var mainnow = $(element).closest(".list_item").find(".main");
    var mainint = parseInt($(element).closest(".list_item").find(".main").html());
    if ("add" == classtype) {
        $(mainnow).html(++mainint)
    } else {
        $(mainnow).html(--mainint)
    }
    cssedit(mainint, element, "one");
}

function test() {
    console.log("success");
}


