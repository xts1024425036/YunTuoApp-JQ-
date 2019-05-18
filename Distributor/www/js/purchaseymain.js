/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * 采购入库主要通用js
 */
//货品html模板
var temp1 = "                   <div class=\"list_item\" pid=\"{prodid}\" pbig=\"{pbigcate}\" pcate=\"{pcate}\">" +
        "            <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{imgpath}\" alt=\"\" height=\"70\"/></div>" +
        "            <div class=\"list_item_detail\">" +
        "                <div class=\"item_detail_name\">{prodname}</div>" +
        "                <div class=\"item_detail_price\">￥{unprice}</div>" +
        "                <div class=\"item_detail_size\">货号：{prodcodes} </div>" +
        "                <div class=\"item_detail_color\">" +
        "                    <ul class=\"item_detail_color_name\">" +
        "                        <li>颜色：</li>" +
        "                    </ul>" +
        "                    <ul class=\"item_detail_color_section\"  >" +
        "                        <li class=\"section_text color\" pid=\"颜色\" default=\"{defaultcolor}\" type=\"color\" code=\"{prodcodes}\">{defaultcolor}</li>" +
        "                    </ul>" +
        "                </div>" +
        "                <div class=\"item_detail_number\">" +
        "                    <div class=\"detail_number_delete need\" type=\"minus\"><img src=\"../../images/icon_sale_delete.png\"></div>" +
        "                    <div class=\"detail_number main need\">0</div>" +
        "                    <div class=\"detail_number_add\" type=\"add\"><img src=\"../../images/icon_sale_add.png\"></div>" +
        "         </div>" +
        "            </div>" +
        "        </div>";
//货品大类html模板
//temp2.format("loogn");
var temp2 = "<li pid=\"{0}\">{1}</li>" +
        "\n";
//货品小类html模板
//temp3.format("loogn");
var temp3 = "     <span class=\"swiper-slide sale_cate_class\" pid=\"{0}\" >{1}</span>";

//颜色
var temp4 = "<li code=\"{prodcodes}\">{prodcolor}</li>" +
        "\n";
//货品报表
var temp5 = " <div class=\"list_item\">" +
        "            <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{imgpath}\" alt=\"\" height=\"70\"/></div>" +
        "              <div class=\"list_item_detail\">" +
        "               <div class=\"item_detail_name\">{prodname}</div>" +
        "                <div class=\"item_detail_price\">￥{unprice}</div>" +
        "                <div class=\"item_detail_size\">货号：{prodcodes}</div>" +
        "                    <div class=\"item_detail_color\">颜色：{color}</div>" +
        "                     <div class=\"item_detail_number\">数量：{number}</div>" +
        "                </div>" +
        "            </div>" +
        "\n";
/**
 *循环生成html
 *初始文本+类别+数据
 *使用方法:
 *var a = htmladd(str,type,data);
 **/
var htmladd = function (type, data) {
    var temp;
    var html = "";
    var str = "<div id = \"shop_alltype_png\" class=\"sale_list_title_state\"><img src=\"../../images/ico_down.png\" alt=\"\"/></div>";
    switch (type) {
        case "大类":
            temp = temp2;
            break;
        case "细类":
            temp = temp3;
            html += str;
            break;
        case "货品类":
            temp = temp1;
            break;
        case "颜色":
            temp = temp4;
            break;
        case "订单清单":
            temp = temp5;
            break;
        default:

            break;
    }
    if (data instanceof Array && data.length == 0) {
        return "<div></div>";
    } else if (typeof (data) == "undefined" || data == null || Object.keys(data).length == 0) {
        return "<div></div>";
    }
    console.log("typeof:" + data + "\n type=" + typeof (data));
    console.log("typeof:" + data + "\n type=" + (data.constructor == Array));
    console.log("typeof:" + data + "\n type=" + (data instanceof Array));
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
 *遍历所有货品
 *多此重用，添加
 **/
var listone = function (procode, saleall) {
    for (var y in saleall) {
        if (saleall[y].prodcodes == procode) {
            return parseInt(y);
        }
    }
    return 999;
}
/**
 *遍历所有货品
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
/**
 *遍历所有货品,不指定字段(单比较)
 *多此重用，添加
 **/
var listonefiledone = function (filed, filedvalue, array) {
    for (var y in array) {
        var obj = array[y];
        if (obj[filed] == filedvalue) {
            return parseInt(y);
        }
    }
    return 99;
}

/**
 *遍历所有货品,不指定字段(双比较)
 *多此重用，添加
 **/
var listonefiledtwo = function (filed, filedvalue, filed1, filedvalu1e1, array) {
    for (var y in array) {
        var obj = array[y];
        if (obj[filed] == filedvalue && obj[filed1] == filedvalu1e1) {
            return parseInt(y);
        }
    }
    return 99;
}
/**
 *将一个对象的某些属性放进另外一个对象里面
 *并且排除不需要的字段array
 *objectout输出源头
 **/
var copyob = function (objectout, objectin, array) {
    if (typeof (array) != "undefined" && array != "undefined" && array.length > 0) {
        for (var y in objectout) {
            var bool = false;
            for (var x in array) {
                if (y == array[x]) {
                    bool = true;
                }
            }
            if (bool) {
                objectin[y] = objectout[y];
            }
        }
    } else {
        for (var y in objectout) {
            objectin[y] = objectout[y];
        }

    }

    return 99;
}
/**
 *遍历所有货品
 *多此重用，添加
 **/
var listitem = function (saleall, salepage) {
    var price = parseInt(0);
    $(".list_item").each(function () {
        var parent = $(this);
        var prodcodes = $(this).find(".color").attr("code");
        var number = parseInt(parent.find('.detail_number')[0].innerText);
        if (number == 0) {
            return true;
        }
        var color = parent.find('.section_text')[0].innerText;
        if (color == "多种颜色") {
            return true;
        }
        var x = listone(prodcodes, saleall);
        if (x != 999) {
            saleall[x].number += number;
            cssedit(0, this, "all");
            return true;
        }
        var y = listone(prodcodes, salepage);
        salepage[y].prodcodes = prodcodes;
        salepage[y].number = number;
        salepage[y].color = color;
        var arrCopy = {};
        var item = salepage[y];
        for (var x in item) {
            arrCopy[x] = item[x];
        }
        saleall.push(arrCopy);
        cssedit(0, this, "all");
        $("#dot").html(listnumber(saleall));
    });
    return price;
}

var listnumber = function (saleall) {
    var number = 0;
    for (var y in saleall) {
        number += saleall[y].number;
    }
    return number;
}

/**
 *cookie写入
 *多此重用，添加
 **/
var cookiemain = function (priceall, saleall) {
    var saleJson = JSON.stringify(saleall);
    storegeeditutil("pursaleall", saleJson);
    storegeeditutil("purpriceall", priceall);
}
/**
 *修改添加货品控制
 *多此重用，添加
 **/
var salecontroller = function () {
    /**
     *修改添加货品控制
     *多此重用，添加
     **/
    $('body').on('click', '.detail_number_add,.detail_number_delete,.section_text,.item_detail_delete', function () {
        var element = $(this);
        var classtype = $(this).attr("type");
        var prodcodes = $(this).closest(".list_item_detail").find(".color").attr("code");
        if ("add" == classtype) {
            numberedit(classtype, element);
            addone(element, prodcodes);
        } else if ("minus" == classtype) {
            numberedit(classtype, element);
            deleteone(prodcodes);
        } else if ("color" == classtype) {
            selectcolor(element, "select");
        } else if ("delete" == classtype) {
            deleteall(prodcodes);
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
    var a = $(element).closest(".list_item").find(".main").html();
    var mainint = parseInt($(element).closest(".list_item").find(".main").html());
    if ("add" == classtype) {
        $(mainnow).html(++mainint)
    } else {
        $(mainnow).html(--mainint)
    }
    cssedit(mainint, element, "one");
}
