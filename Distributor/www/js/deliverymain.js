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
var temp1 = " <div class=\"log_item\">" +
        "<div class=\"log_list_title\">" +
        "   <div class=\"log_list_time\">{createdate}</div>" +
        "   <div class=\"log_list_tool\">{shopname}-{createname}</div>" +
        "</div>" +
        " <div class=\"frame_list_item\">" +
        "{itemhtml}" +
        " </div>" +
        " <div class=\"log_total\">" +
        "    <ul>" +
        "     <li>货品总数：{prodqtys}件</li>" +
        "     <li>总金额：￥{fiprice}</li>" +
        "  </ul>" +
        " </div>" +
        " </div>";
//送装单大栏目
var temp2 = " <div class=\"log_item\" pid=\"{sorderid}\">" +
        "   <div class=\"log_list_title\">" +
        "   <div class=\"log_list_time\">{createdate}</div>" +
        "<div  class=\"log_list_tool log_list_id\" status=\"{status}\" style=\"display:{display}\"><a href=\"javascript:void(0);\">转送装</a></div>" +
        "<div  class=\"log_list_tool log_return_id\"><a href=\"javascript:void(0);\">退货</a></div>" +
        "</div>" +
        " <div class=\"frame_list_item\">" +
        "{itemhtml}" +
        " </div>" +
        " <div class=\"log_total\">" +
        "    <ul>" +
        "     <li>货品总数：{prodqtys}件</li>" +
        "  </ul>" +
        " </div>" +
        " </div>";
//营业日报细栏
var temp3 = "<div class=\"list_item\">" +
//        " <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{imgpath}\" alt=\"\" height=\"70\"/></div>" +
        "<div class=\"list_item_detail\">" +
        "   <div class=\"item_detail_name\">{prodname}　{catename}</div>" +
        "    <div class=\"item_detail_price\">￥{unprice}</div>" +
        "    <div class=\"item_detail_size\">货号：{prodid}</div>" +
        "   <div class=\"item_detail_color\">颜色：{prodcolor}</div>" +
        "   <div class=\"item_detail_number\">数量：{prodqtys}</div>" +
        " </div> " +
        " </div> ";
//直接送装的货品
var temp3_1 = "               <tr>" +
        "                        <td  width=\"34%\">{catename}</td>" +
        "                        <td  width=\"52%\">{prodname} {prodcolor}</td>" +
        "                        <td >x{number}</td>" +
        "                    </tr>";
//直接送装的货品
var temp3_2 = "               <tr class='out'>" +
        "                        <td  width=\"5%\">   <input id=\"{prodcodes}_id\" class=\"select_checkbox\" type=\"checkbox\" data-pid=\"{prodcodes}\"><label for=\"{prodcodes}_id\"></label></td>" +
        "                        <td  class='other_pro_th' width=\"38%\">{catename}</td>" +
        "                        <td  class='other_pro_th' width=\"52%\">{prodname} {prodcolor}</td>" +
        "                        <td  class='other_pro_th' width=\"15%\">x{number}</td>" +
        "                    </tr>";
var temp3_3 =   "<div class=\"goods flex\">" +
                    "<input id=\"{prodcodes}_id\" type=\"checkbox\" class=\"select_checkbox\" data-pid=\"{prodcodes}\"/>" +
                    "<label for=\"{prodcodes}_id\" class=\"icon\"><i class=\"iconfont icon-wancheng\"></i></label>" +
                    "<div class=\"name flex-item\">{catename}</div>" +
                    "<div class=\"goods-num flex-item\">{prodname}（{prodcolor}）</div>" +
                    "<div class=\"button\" style=\"font-size: .32rem\">" +
                        "<span class=\"sub-\">-</span>" +
                        "<span class=\"number\" nid=\"{number}\">{number}</span>" +
                        "<span class=\"add-\">+</span>" +
                    "</div>" +
                "</div>";
//送装单细栏
var temp4 = "<div class=\"list_item pro_code_class\" pid=\"{prodcodes}\">" +
        "<div  class=\"list_item_detail list_item_id\">" +
        "   <div class=\"item_detail_name\">{prodname}</div>" +
        "    <div class=\"item_detail_price\"></div>" +
        "    <div class=\"item_detail_size\">货号：{prodid}</div>" +
        "   <div class=\"item_detail_color\">颜色：{prodcolor}</div>" +
        "   <div class=\"item_detail_number\">数量：{prodqtys}</div>" +
        "</div>" +
        "<div class=\"clear\"></div>" +
        "<div>" +
        "	<div class=\"type_del_class cur\" tid=\"0\">标准</div>" +
        "	<div class=\"type_del_class\"  tid=\"1\">拆样</div>" +
        "	<div class=\"type_del_class\"  tid=\"2\">免安装</div>" +
        "</div>" +
        "</div>";
//退货
var temp5 = "   <div class=\"log_item log_item_list\" pid=\"{salesorderitemPK}\" num=\"{proportion}\" >" +
        " <div class=\"log_item_delivery_detail\" pid=\"main\">" +
        "  <div  class=\"delivery_detail_title prodname\">{prodname}</div>" +
        "   <div  class=\"delivery_detail_text oldmain\">{prodqtys}件</div>" +
        "   <div  class=\"item_detail_number\">" +
        " <div class=\"detail_number_delete\" type=\"minus\"><img src=\"../../images/icon_sale_delete.png\"></div>" +
        "                    <div class=\"detail_number main\">0</div>" +
        "  </div>" +
        "  <div class=\"item_detail_delete return_one\" type=\"add\">退一件</div>" +
        " </div>" +
        "  <div class=\"log_item_delivery_detail\" pid=\"other\"> " +
        "   <div class=\"delivery_detail_title \">&nbsp;&nbsp;&nbsp;配件数</div>" +
        "   <div  class=\"delivery_detail_text oldother\">{qtys}个</div>" +
        "   <div  class=\"item_detail_number\">" +
        "                    <div class=\"detail_number_delete need\" type=\"minus\"><img src=\"../../images/icon_sale_delete.png\"></div>" +
        "                    <div class=\"detail_number other\">0</div>" +
        "                    <div class=\"detail_number_add\" type=\"add\"><img src=\"../../images/icon_sale_add.png\"></div>" +
        "  </div>" +
        "   <div  class=\"item_detail_delete\" type=\"all\">全退</div>" +
        "  </div>" +
        "</div>"
//确认退货
var temp6 = "   <div class=\"log_item log_item_list\">" +
        " <div class=\"log_item_delivery_detail\" >" +
        "  <div  class=\"delivery_detail_title prodname\">{prodname}</div>" +
        "   <div  class=\"delivery_detail_text\">{main}个</div>" +
        " </div>" +
        "  <div class=\"log_item_delivery_detail\" > " +
        "   <div class=\"delivery_detail_title\">&nbsp;&nbsp;&nbsp;配件数</div>" +
        "   <div  class=\"delivery_detail_text \">{other}个</div>" +
        "  </div>" +
        "</div>"
//确认送装
var temp8 = "<span>{prodname} {cate} ( {qtys} 包 )</span>";

//送装单库管细栏
var temp9 = "<div class=\"list_item\" pid=\"{deliveryoderid}\">" +
//        " <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{imgpath}\" alt=\"\" height=\"70\"/></div>" +
        "<div  class=\"list_item_detail list_item_id\">" +
        "   <div class=\"item_detail_name\">{prodname} {catename}</div>" +
//        "    <div class=\"item_detail_price\">￥{installationfee}(安装费)</div>" +
        "    <div class=\"item_detail_size\">货号：{prodid}</div>" +
        "   <div class=\"item_detail_color\">颜色：{prodcolor}</div>" +
        "   <div class=\"item_detail_number\">数量：{prodqtys}</div>" +
        "</div>" +
        "</div>";

//送装库管单大栏目
var temp10 = " <div class=\"log_item\" pid=\"{deliveryoderid}\">" +
        "   <div class=\"log_list_title\">" +
        "       <div class=\"log_list_time\">{createdate}</div>" +
        "       <div  class=\"log_list_tool log_list_id\" status=\"{status}\" style=\"display:{display}\"><a href=\"javascript:void(0);\">转送装</a></div>" +
        "       <div  class=\"log_list_tool log_return_id\" style=\"display:{display}\"><a href=\"javascript:void(0);\">退货</a></div>" +
        "       <div class=\"clear\"></div>" +
        "       <div class=\"log_list_other log_left\">姓名 : {customer}</div>" +
        "       <div class=\"log_list_other log_right\">电话 : {cusphone}</div>" +
        "       <div class=\"clear\"></div>" +
//        "       <div class=\"log_list_other log_left\">单号 : {deliveryoderid}</div>" +
//        "       <div class=\"log_list_other log_right\">{deliveryoderid}</div>" +
        "</div>" +
        " <div class=\"frame_list_item\">" +
        "{itemhtml}" +
        " </div>" +
        " <div class=\"log_total\">" +
        "    <ul>" +
        "     <li>货品总数：{prodqtys}件</li>" +
        "     <li>总送装费：￥{fiprice}</li>" +
        "  </ul>" +
        " </div>" +
        " </div>";
//地图
var temp11 = "            <div class=\"select_item\" lng=\"{point.lng}\" lat=\"{point.lat}\" data-city=\"{city}\" data-province=\"{province}\" pad =\"{address}{title}\">" +
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
        case "营业日报":
            temp = temp1;
            break;
        case "送装单":
            temp = temp2;
            endhtml = ""
            break;
        case "日报细":
            temp = temp3;
            break;
        case "onlyorder":
            html = "";
            temp = temp3_1;
            break;
        case "proall":
            html = "";
            temp = temp3_3;
            break;
        case "送装细":
            temp = temp4;
            break;
        case "退货":
            temp = temp5;
            break;
        case "确认退货":
            html = " <div class=\"sale_order_list_title\">货品清单</div>";
            temp = temp6;
            break;
        case "货品细":
            temp = temp8;
            break;
        case "库管送细":
            temp = temp9;
            break;
        case "送装库管单":
            temp = temp10;
            break;
        case "mapselect":
            temp = temp11;
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
var htmlall = function (id, str) {
    $("#" + id).html(str);
};
/**
 *遍历所有货品
 *多此重用，添加
 **/
var listone = function (sorderid, saleall) {
    for (var y in saleall) {
        if (saleall[y].sorderid == sorderid) {
            return parseInt(y);
        }
    }
    return false;
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
    storegeeditutil("salecount", 0);
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



