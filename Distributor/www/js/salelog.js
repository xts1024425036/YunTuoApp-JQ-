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
//送装单大栏目
var temp1 = " <div class=\"log_item\" pid=\"{deliveryoderid}\">" +
        "   <div class=\"log_list_title\">" +
        "   <div class=\"log_list_time\">{createdate}</div>" +
        "       <div id=\"log_return_id\" class=\"log_list_tool\" data-sid=\"{statusname}\" pid=\"{isafremark}\"><a href=\"javascript:void(0);\">送装跟踪</a></div>" +
        "       <div class=\"log_list_other log_left\">姓名 : {customer}</div>" +
        "       <div class=\"log_list_other log_right\">电话 : {cusphone}</div>" +
        "   </div>" +
        " <div class=\"frame_list_item\">" +
        "{itemhtml}" +
        " </div>" +
        " <div class=\"log_total\">" +
        "    <ul>" +
        "     <li class=\"stauts_c\">( {statusname} )</li>" +
        "     <li>总送装费：￥{fiprice}</li>" +
        "     <li>总数：{prodqtys}件</li>" +
        "  </ul>" +
        " </div>" +
        " </div>";

//送装单大栏目
var temp1_1 = " <div class=\"log_item\" pid=\"{deliveryoderid}\">" +
        "   <div class=\"log_list_title\">" +
        "   <div class=\"log_list_time\">{createdate}</div>" +
        "       <div class=\"log_list_tool log_cancel_c status_cancel_{status}\"><a href=\"javascript:void(0);\">订单取消</a></div>" +
        "       <div class=\"log_list_tool log_change_c show_{isupdate}\"><a href=\"javascript:void(0);\">修改订单</a></div>" +
//        "       <div class=\"log_list_tool log_new_c \"><a href=\"javascript:void(0);\">再来一单</a></div>" +
        "       <div class=\"clear\"></div>" +
        "       <div class=\"log_list_other log_left\">姓名 : {customer}</div>" +
        "       <div class=\"log_list_other log_right\">电话 : {cusphone}</div>" +
        "   </div>" +
        " <div class=\"frame_list_item\">" +
        "{itemhtml}" +
        " </div>" +
        " <div class=\"log_total\">" +
        "    <ul>" +
        "     <li class=\"stauts_c\">( {statusname} )</li>" +
        "     <li>总送装费：￥{fiprice}</li>" +
        "     <li>总数：{prodqtys}件</li>" +
        "  </ul>" +
        " </div>" +
        " </div>";

//送装单细栏
var temp2 = "<div class=\"list_item\" pid=\"{salesoderid}\">" +
//        " <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{imgpath}\" alt=\"\" height=\"70\"/></div>" +
        "<div  class=\"list_item_detail list_item_id\">" +
        "   <div class=\"item_detail_name\">{prodname}　{catename}</div>" +
//        "    <div class=\"item_detail_price\">安装费：￥{installationfee}</div>" +
        "    <div class=\"item_detail_size\">货号：{prodid}</div>" +
        "   <div class=\"item_detail_color\">颜色：{prodcolor}</div>" +
        "   <div class=\"item_detail_number\">数量：{prodqtys}</div>" +
        "</div>" +
        "</div>";

var temp3 = "<table cellspacing=\"0\" border=\"0\">" +
        "<tr>" +
        "  <th>类别</th>" +
        "  <th>采购入库</th>" +
        "  <th>销售数量</th>" +
        "  <th>销售金额</th>" +
//        "  <th>送装费用</th>" +
        "</tr>" +
        "{itemhtml}" +
        "</table>";

var temp4 = "<tr>" +
        " <td>{cateName}</td>" +
        " <td>{inAll}</td>" +
        " <td>{numberAll}</td>" +
        " <td>{priceAll}</td>" +
//        "<td>{transprotfee}</td>" +
        " </tr>";

var temp5 = " <tr>" +
        "<td colspan=\"2\">合计</td>" +
        "<td>{number}</td>" +
        "<td>{priceall}</td>" +
//        "<td>{transprotfeeall}</td>" +
        "</tr>";

var temp6 = " <ul>" +
        "            <li class=\"items_content_time\">{createdate}</li>" +
        "            <li class=\"items_content_text\">{remarks}</li>" +
        "            <li class=\"items_content_img\" pid=\"{status}\"></li>" +
        "        </ul>";

var temp6_1 = " <ul>" +
        "            <li class=\"items_content_time\">整改单 :整改时间{createdate}</li>" +
        "            <li class=\"items_content_text\">{problemdesc}</li>" +
        "            <li class=\"items_content_img\" pid=\"{afid}\"></li>" +
        "        </ul>";

var temp7 = "<table cellspacing=\"0\" border=\"0\">" +
        "<tr>" +
        "  <th>区域</th>" +
        "  <th>销售数量</th>" +
        "  <th>送装费用</th>" +
        "</tr>" +
        "{itemhtml}" +
        "</table>";

var temp8 = "<tr>" +
        " <td>{cateName}</td>" +
        " <td>{numberAll}</td>" +
        "<td>{transprotfee}</td>" +
        " </tr>";

var temp9 = " <tr>" +
        "<td>合计</td>" +
        "<td>{number}</td>" +
        "<td>{transprotfeeall}</td>" +
        "</tr>";

var temp10 = "<div class=\"list_class\"  pid=\"{deliveryspoderid}\"><ul class=\"track_items_title\">" +
        "<li class=\"track_items_time\" id=\"deliveryoder_id\"> 分订单号：{deliveryspoderid}</li>" +
        "<li class=\"track_items_status\" id=\"status_id\">状态:{statusname}</li>" +
        " </ul><ul  class=\"track_items_title\" ><li style=\"float:right;font-size:4vw;display:none;\" class=\"find_all\" pid=\"{deliveryspoderid}\">查看所有</li></ul></div>";

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
        case "salelog":
            temp = temp1;
            break;
        case "editorder":
            temp = temp1_1;
            break;
        case "saleitem":
            temp = temp2;
            endhtml = ""
            break;
        case "mouthlog":
            temp = temp3;
            endhtml = ""
            break;
        case "mouthitem":
            temp = temp4;
            endhtml = ""
            break;
        case "track":
            temp = temp6;
            endhtml = ""
            break;
        case "pro":
            temp = temp6_1;
            endhtml = ""
            break;
        case "deliverylog":
            temp = temp7;
            endhtml = ""
            break;
        case "deliveryitem":
            temp = temp8;
            endhtml = ""
            break;
        case "dellog":
            temp = temp10;
            endhtml = ""
            break;
        default:
            break;
    }
    if (typeof (data) == "undefined" || data.length == 0) {
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


