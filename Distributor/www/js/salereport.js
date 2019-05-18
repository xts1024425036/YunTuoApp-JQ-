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
var temp1 = "<div id=\"shop_list_item\" class=\"sale_list_items\">" +
        "  <div class=\"list_items\">" +
        " <div class=\"list_items_title\">" +
        "<ul class=\"items_title_left\">" +
        "    <li>订单号：{sorderid}</li>" +
        "   <li>" +
        "       <span>客户：{customer}</span>" +
        "   </li>" +
        " </ul>" +
        " <ul class=\"items_title_right\">" +
        "      <li>状态：{status}</li>" +
        "      <li>销售人员:{createname}</li>" +
        "  </ul>" +
        " </div>" +
        "  <div class=\"list_content\">" +
        "{itemhtml}" +
        " </div>" +
        " </div>" +
        "</div>"
//送装单细栏
var temp2 = "                        <div class=\"list_content_items\">" +
        "      <ul class=\"content_item_details\">" +
        "         <li>名称 : {prodname}</li>" +
        "         <li>价格 : ¥{totprice}</li>" +
        "         <li>货号 : {prodcodes}</li>" +
        "       </ul>" +
        "       <ul class=\"content_item_info\">" +
        "         <li>数量：{prodqtys}</li>" +
        "      </ul>" +
        "</div>";

var temp3 = "<tr>" +
        "<th>客户</th>" +
        "<th>区域</th>" +
        "<th>金额</th>" +
        "</tr>" +
        "{itemhtml}";

var temp4 = " <div class=\"name_phone_class\">{cusName}　　{cusPhone}<span class='price_class'>￥{price}</span></div>" +
        "<div class='address_customer_class'>{cusAdress}</div>" ;

//采购分析大栏目
var temp5 = " <div class=\"log_item\">" +
        "   <div class=\"log_list_title\">" +
        "       <div class=\"log_list_time\">{createdate}</div>" +
        "       <div class=\"log_list_tool\">{statusString}</div>" +
        "   </div>" +
        "    <div class=\"frame_list_item\">" +
        "       {itemhtml}" +
        "   </div>" +
        " </div>";
//采购分析细栏
var temp6 = "<div class=\"list_item\">" +
        "       <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{imgpath}\" alt=\"\" height=\"70\"/></div>" +
        "       <div class=\"list_item_detail\">" +
        "           <div class=\"item_detail_name\">{prodname}</div>" +
        "           <div class=\"item_detail_price\">￥{fee1}（配送费）</div>" +
        "           <div class=\"item_detail_color analysis_log\">采购数量：{prodqtys}</div>" +
        "           <div class=\"item_detail_number\">到货数量：{prodqtys}</div>" +
        "       </div> " +
        " </div> ";

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
        case "saleitem":
            temp = temp2;
            endhtml = ""
            break;
        case "cushead":
            temp = temp3;
            break;
        case "cuslog":
            temp = temp4;
            endhtml = ""
            break;
        case "analog":
            temp = temp5;
            break;
        case "anaitem":
            temp = temp6;
            endhtml = ""
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