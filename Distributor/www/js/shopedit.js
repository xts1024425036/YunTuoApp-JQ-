/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var temp1 = " <div class = \"menuline\"  uid=\"{userid}\">" +
        "                <div class=\"menutext\" style=\"font-size:4.5vw;\">{name}</div>" +
        "                <div class=\"menutext gray\">" +
        "                    <span class=\"{post2}\">销售</span> " +
        "                    <span class=\"{post3}\">库管</span>" +
        "                    <span class=\"{post4}\">财务</span>" +
        "                    <span class=\"{post1}\">管理</span>" +
        "                 </div>" +
        "                <div class=\"menuimg\"><i class=\"iconfont icon-edit\"></i></div>" +
        "                <div class=\"clear\"></div>" +
        "            </div>";
//地图
var temp2 = "            <div class=\"select_item\" lng=\"{point.lng}\" lat=\"{point.lat}\" pad =\"{address}{title}\">" +
        "                <table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">" +
        "                    <tr>" +
        "                        <td width=\"10%\"><div class=\"map_dot\">&nbsp;</div></td>" +
        "                        <td class=\"addressitem_title\">" +
        "                            {title}" +
        "                            <div class=\"gray\" style=\"font-size:3vw;\">{address}</div>" +
        "                        </td>" +
        "                    </tr>" +
        "                </table>" +
        "            </div>";


var temp3 = " <div class=\"menuline\" data-pid=\"{warehouseid}\" warehouse-type=\"{addresstype}\" data-wtype=\"{whtype}\">" +
        "                <div class=\"select_now_tb\"></div>" +
        "                <div class=\"address_title\">" +
        "                    <div class=\"wtype_c w_{addresstype}\">{typename}</div>" +
        "                    <span class=\"name\">{linkman}</span>" +
        "                    <span class=\"phone\">{mobile}</span>" +
        "                </div>" +
        "                <div class=\"address_text\">{warehouseadress}</div>" +
        "                <i class=\"iconfont icon-edit\"></i>" +
        "            </div>";



String.prototype.endWith = function (str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}
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
        case "shopuser":
            temp = temp1;
            endhtml = ""
            break;
        case "mapselect":
            temp = temp2;
            endhtml = ""
            break;
        case "address":
            temp = temp3;
            endhtml = ""
            break;
        default:
            break;
    }
    if (typeof (data) == "undefined" || data == null || data.length == 0) {
        return "<div class=\"no_more_data\"></div>";
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
    $("#" + id).html(str);
};

var changeAll = function (id, str) {
    $("#" + id).append(str);
};

