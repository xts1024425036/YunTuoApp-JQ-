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
        "                <div class=\"item_detail_size\">货号：{prodcodes}</div>" +
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
        "                </div>" +
        "            </div>" +
        "        </div>";
//地图
var temp11 = "            <div class=\"select_item\" style=\"border-bottom:1px solid #aaa9a9;\"  lng=\"{point.lng}\" lat=\"{point.lat}\" pad =\"{address}{title}\">" +
        "                <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">" +
        "                    <tr>" +
        "                        <td width=\"15%\"><div style=\"width:4vw;height:4vw;border-radius:50%;background:#726f6f;margin:0 auto;\">&nbsp;</div></td>" +
        "                        <td style=\"line-height:5vw;padding:1.5vw 0 1.5vw 0;\">" +
        "                            {title}" +
        "                            <div class=\"gray\" style=\"font-size:3vw;\">{address}</div>" +
        "                        </td>" +
        "                    </tr>" +
        "                </table>" +
        "            </div>";
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
        "            <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{prodimgpath}\" alt=\"\" height=\"70\"/></div>" +
        "              <div class=\"list_item_detail\">" +
        "               <div class=\"item_detail_name\">{prodname}</div>" +
        "                <div class=\"item_detail_price\">￥{price}</div>" +
        "                <div class=\"item_detail_size\">货号：{prodcodes}</div>" +
        "                    <div class=\"item_detail_color\">颜色：{prodcolor}</div>" +
        "                     <div class=\"item_detail_number\">数量：{number}</div>" +
        "                </div>" +
        "            </div>" +
        "\n";



var temp6 = " <tr class=\"log_class\">" +
        "        <th style='display:none;'>{locationid}</th>" +
        "        <th style='display:none;'>{gsid}</th>" +
        "        <th style=\"text-align: left;\">{id}</th>" +
        "        <th style=\"text-align: center;\">{name}   {catename}</th>" +
        "        <th style=\"text-align: center;\">{number}</th>" +
//        "        <th><input type='text' value='{number}' style='width:30px;'></th>" +
        "     </tr>";


var temp7 = "<table cellspacing=\"0\" border=\"0\" id=\"log_order_id\">" +
        "    <tr >" +
        "        <th style=\"text-align: left;\">编号</th>" +
        "        <th>描述</th>" +
        "        <th>数量</th>" +
//        "        <th>修改</th>" +
        "    </tr>" +
        "       {itemhtml}" +
        "</table>";


//送装单库管细栏
var temp9 = "<div class=\"list_item\" pid=\"{deliveryoderid}\">" +
        " <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{imgpath}\" alt=\"\" height=\"70\"/></div>" +
        "<div  class=\"list_item_detail list_item_id\">" +
        "   <div class=\"item_detail_name\">{prodname}</div>" +
        "    <div class=\"item_detail_size\">货号：{prodcodes}</div>" +
        "   <div class=\"item_detail_color\">颜色：{prodcolor}</div>" +
        "   <div class=\"item_detail_number\">数量：{prodqtys}</div>" +
        "</div>" +
        "</div>";


var temp10 = " <div class=\"log_item\" pid=\"{transoderid}\">" +
        "   <div class=\"log_list_title\">" +
        "   <div class=\"log_list_time\">{createdate}</div>" +
        "<div  class=\"log_list_tool log_list_id\" status=\"{status}\" style=\"display:{display}\"><a href=\"javascript:void(0);\" pid=\"2\">确定</a></div>" +
        "<div  class=\"log_list_tool log_return_id\" style=\"display:{displayA}\"><a href=\"javascript:void(0);\" pid=\"0\">取消/驳回</a></div>" +
        "</div>" +
        " <div class=\"frame_list_item\">" +
        "{itemhtml}" +
        " </div>" +
        " <div class=\"log_total\">" +
        "    <ul>" +
        "     <li>调货单号：{transoderid}</li>" +
        "     <li>货品总数：{prodqtys}件</li>" +
        "  </ul>" +
        " </div>" +
        " </div>";
//地图
var temp11 = "            <div class=\"select_item\" style=\"border-bottom:1px solid #aaa9a9;\"  lng=\"{point.lng}\" lat=\"{point.lat}\" pad =\"{address}{title}\">" +
        "                <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">" +
        "                    <tr>" +
        "                        <td width=\"15%\"><div style=\"width:4vw;height:4vw;border-radius:50%;background:#726f6f;margin:0 auto;\">&nbsp;</div></td>" +
        "                        <td style=\"line-height:5vw;padding:1.5vw 0 1.5vw 0;font-size: 3.5vw;\">" +
        "                            {title}" +
        "                            <div class=\"gray item_address_c\" style=\"font-size:3vw;\">{address}</div>" +
        "                        </td>" +
        "                    </tr>" +
        "                </table>" +
        "            </div>";
/**
 *循环生成html
 *初始文本+类别+数据
 *使用方法:
 *var a = htmladd(str,type,data);
 **/
var htmladd = function (type, data) {
    var temp;
    var html = "";
    var str = "";
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
        case "store":
            temp = temp6;
            break;
        case "tranitem":
            temp = temp9;
            break;
        case "translog":
            temp = temp10;
            break;
        case "mapselect":
            temp = temp11;
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

var changeAll = function (id, str) {
    $("#" + id).append(str);
};
/**
 *遍历所有货品
 *多此重用，添加
 **/
var listone = function (procode, salecode) {
    for (var y in salecode) {
        if (salecode[y].prodcodes == procode) {
            return parseInt(y);
        }
    }
    return 999;
}
/**
 *遍历所有货品
 *多此重用，添加
 **/
var listonepid = function (prodid, salepage) {
    for (var y in salepage) {
        if (salepage[y].prodid == prodid) {
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
var listitem = function (salecode, salepage) {
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
        var x = listone(prodcodes, salecode);
        if (x != 999) {
            salecode[x].number += number;
            cssedit(0, this, "all");
            return true;
        }
        var pid = $(this).attr("pid");
        var y = listonepid(pid, salepage);
        salepage[y].prodcodes = prodcodes;
        salepage[y].number = number;
        var arrCopy = {};
        var item = salepage[y];
        arrCopy.prodcodes = item.prodcodes;
        arrCopy.number = item.number;
        salecode.push(arrCopy);
        $("#dot").html(listnumber(salecode));
        cssedit(0, this, "all");
    });
}

var listnumber = function (salecode) {
    var number = 0;
    for (var y in salecode) {
        number += salecode[y].number;
    }
    return number;
}

/**
 *cookie写入
 *多此重用，添加
 **/
var cookiemain = function (saleall) {
    var saleJson = JSON.stringify(saleall);
    storegeeditutil("invensaleall", saleJson, {path: '/'});
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
