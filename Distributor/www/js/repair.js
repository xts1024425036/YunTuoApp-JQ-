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

var template1 = "我是{0}，今年{1}了";
var template2 = "<li>{name}{age}</li>";
//日报大栏目
//地图
var temp1 = "            <div class=\"select_item\" style=\"border-bottom:1px solid #aaa9a9;\"  lng=\"{point.lng}\" lat=\"{point.lat}\" pad =\"{address}{title}\">" +
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

//选择维修类型
var temp2 = "               <tr>" +
        "                        <td  width=\"60%\"><span class='catename'>{catename}( {catedesc1} )</span></td>" +
        "                        <td  class='right_td' >" +
        "                        <i class=\"detail_number_delete detail_cart iconfont icon-minus-circle\" type=\"minus\" style=\"width: 8vw; font-size: 7vw; float: left; display: block;\"></i>" +
        "                           <input pcate=\"{cateid}\" pbigcate=\"{bigcateid}\" pname='{catename}' pdesc='{catedesc1}' class=\"cate_item\" type=\"number\" value=\"0\"/>" +
        "                           <i class=\"detail_number_add detail_cart iconfont icon-roundadd\" type=\"add\" style=\"width:8vw;font-size: 7vw;float:right;\"></i>" +
        "                        </td>" +
        "                    </tr>";

/**
 *循环生成html
 *初始文本+类别+数据
 *使用方法:
 *var a = htmladd(str,type,data);
 **/
var htmladd = function (type, data) {
    var temp = "";
    var html = "";
    var endhtml = "";
    switch (type) {
        case "mapselect":
            temp = temp1;
            break;
        case "repair":
            temp = temp2;
            break;
        default:
            break;
    }
    if (typeof (data) == "undefined" || data == null || data.length == 0) {
        return "<div class=\"no_more_data\">没有更多数据</div>";
    }
    for (var i = 0, j = data.length; i < j; i++) {
        html += temp.format(data[i]);
    }
    html += endhtml;
    return html;
};
/**
 *修改元素下html
 *使用方法:
 *change(id,str);
 **/
var change = function (id, str) {
    $("#" + id).append(str);
};

var changeAll = function (id, str) {
    $("#" + id).append(str);
};
/**
 *遍历所有货品
 *多此重用，添加
 **/
var listone = function (filed, filedvalue, array) {
    for (var y in array) {
        if (array[y][filed] == filedvalue) {
            return parseInt(y);
        }
    }
    return false;
}
/**
 *修改货品数量控制
 *多此重用，添加
 **/
var salecontroller = function () {
    $("body").on('click', '.detail_number_add,.detail_number_delete', function () {
        var element = $(this);
        var classtype = $(this).attr("type");
        if ("add" == classtype) {
            numberedit(classtype, element);
        } else if ("minus" == classtype) {
            numberedit(classtype, element);
        }
    });
}

//all edit
function numberedit(classtype, element) {
    var mainnow = $(element).siblings(".cate_item");
    var mainint = parseInt(mainnow.val());
    if ("add" == classtype) {
        $(mainnow).val(++mainint)
    } else {
        if (mainint > 0) {
            $(mainnow).val(--mainint)
        }
    }
    editItem();
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
 *并且排除array中的字段
 **objectout输出源头
 **/
var copyob = function (objectout, objectin, array) {
    if (typeof (array) != "undefined" && array != "undefined" && array.length > 0) {
        for (var y in objectout) {
            var bool = true;
            for (var x in array) {
                if (y == array[x]) {
                    bool = false;
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
 *cookie写入
 *多此重用，添加
 **/
var cookiemain = function (priceall, saleall) {
    var saleJson = JSON.stringify(saleall);
    storegeeditutil("saleall", saleJson);
    storegeeditutil("priceall", priceall);
}

/**
 *遍历所有货品 
 *主要是sn
 *多此重用，添加
 **/
var listonesn = function (sn, list) {
    for (var y in list) {
        if (list[y].salesorderitemPK.sn == sn) {
            return parseInt(y);
        }
    }
    return false;
}



