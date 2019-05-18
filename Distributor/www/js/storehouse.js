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
//库存大栏目var temp1 = "<div class='list-item' pid='{deliveryspoderid}' sid='{warehousenumber}'>" +
        "<ul class='item-info'>" +
        "<li class='left'>单号：</li>" +
        "<li class='flex-item right clearfix'>{deliveryspoderid}<span class='issample-des' pid='{issample}'></span></li>" +
        "<li class='left'>送货时间：</li>" +
        "<li class='flex-item right'>{devdate}</li>" +
        "<li class='left'>拣货地址：</li>" +
        "<li class='flex-item right'>{warehouseadress}</li>" +
        "<li class='left'>联系人：</li>" +
        "<li class='flex-item right'>{warehouselinkman} {warehousemobile}</li>" +
        "<li class='left two'>带货地址：</li>" +
        "<li class='flex-item right two'>{otherwarehouseadress}</li>" +
        "<li class='left two'>联系人：</li>" +
        "<li class='flex-item right two'>{otherwarehouselinkman} {otherwarehousemobile}</li>" +
        "<li class='left {remarks}'>订单备注：</li>" +
        "<li class='flex-item right {remarks}'>{remarks}</li>" +
        "</ul>" +
        "<img class='image' flag={isconfirm} src='../../images/picking.png'>" +
        "</div>";

var temp2 = "<div class='info' pid='{warehousenumber}'>" +
        "<ul class='item-info'>" +
        "<li class='left'>单号：</li>" +
        "<li class='flex-item right clearfix'>{deliveryspoderid}<span class='issample-des' pid='{issample}'></span></li>" +
        "<li class='left'>送货时间：</li>" +
        "<li class='flex-item right sdate'>{devdate}</li>" +
        "<li class='left'>提货地址：</li>" +
        "<li class='flex-item right'>{warehouseadress}</li>" +
        "<li class='left'>联系人：</li>" +
        "<li class='flex-item right'>{warehouselinkman} {warehousemobile}" +
        "<span class='control-text-right-phone' tid='tel:{warehousemobile}'>" +
        "<i class='iconfont icon-dianhua'></i>" +
        "</span>" +
        "</li>" +
        "<li class='left two'>带货地址：</li>" +
        "<li class='flex-item right two'>{otherwarehouseadress}</li>" +
        "<li class='left two'>联系人：</li>" +
        "<li class='flex-item right two'>{otherwarehouselinkman} {otherwarehousemobile}" +
        "<span class='control-text-right-phone' tid='tel:{otherwarehousemobile}'>" +
        "<i class='iconfont icon-dianhua'></i>" +
        "</span>" +
        "</li>" +
        "<li class='left driver-info'>司机信息：</li>" +
        "<li class='flex-item right driver-info'>{driverName} {driverPhone}" +
        "<span class='control-text-right-phone' tid='tel:{driverPhone}'>" +
        "<i class='iconfont icon-dianhua'></i>" +
        "</span>" +
        "</li>" +
        "<li class='left'>客户信息：</li>" +
        "<li class='flex-item right'>{customer} {cusphone}" +
        "<span class='control-text-right-phone' tid='tel:{cusphone}'>" +
        "<i class='iconfont icon-dianhua'></i>" +
        "</span>" +
        "</li>" +
        "<li class='left {remarks}'>订单备注：</li>" +
        "<li class='flex-item right {remarks}'>{remarks}</li>" +
        "</ul>" +
        "</div>" +
        "<div class='info-extra'>" +
        "<div class='goods-info'>" +
        "<div class='goods-info-title'>" +
        "<span class='decorate'></span>" +
        "<span class='goods-info-title-text'>货品信息</span>" +
        "<span class='goods-info-name'>{shopName}</span>" +
        "</div>" +
        "<div style='overflow-y: scroll;height: 262px;'>" +
        "{itemhtml}" +
        "</div>" +
        "</div>" +
        "<div class='goods-info'>" +
        "<div class='goods-info-title'>" +
        "<span class='decorate'></span>" +
        "<span class='goods-info-title-text'>分拣备注</span>" +
        "</div>" +
        "<div class='table-info'>" +
        "<textarea rows='3' cols='50' id='problemdesc' placeholder='请填写备注信息'></textarea>" +
        "</div>" +
        "</div>" +
        "<div class='goods-info'>" +
        "<div class='goods-info-title'>" +
        "<span class='decorate'></span>" +
        "<span class='goods-info-title-text'>上传照片</span>" +
        "</div>" +
        "<div class='table-info-photo upload' style='margin-bottom: 1rem;'>" +
        "<div class='table-info-photo-number'>" +
        "<div class='flex-item txtc'><i class='iconfont icon-zhaopian'></i></div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

var itemhtml = "<div class='table-info flex wrap' pid='{imgpath}' sid='{groupid}' uid='{prodcodes}'>" +
        "<span>{prodcodes}</span>" +
        "<span class='line'>{bigcatename}</span>" +
        "<span class='line'>{catename}</span>" +
        "<span>{prodname}</span>" +
        "<span class='line'>{prodcolor}</span>" +
        "<span class='line'>{prodqtys}件 ({qtys}包/件)</span>" +
        "<span class='red {remarks}' style='width: 100%;'>备注:<span class={remarks}>{remarks}</span></span>" +
        "</div>";

var temp3 = "<div class='choice'>" +
        "<input type='checkbox' pid='{catename}' style='margin-right:1em;'>" +
        "<span class='details'>{prodcodes}&nbsp;&nbsp;&nbsp;{catename}&nbsp;&nbsp;&nbsp;{prodcolor}</span>" +
        "</div>";

var temp4 = "<div class='list-item' pid='{deliveryspoderid}' ptype='1' wid='{warehousenumber}'>" +
        "<ul class='item-info'>" +
        "<li class='left'>单号:</li>" +
        "<li class='flex-item right clearfix'>{deliveryspoderid}<span class='fr money-r'>￥{summoney}</span></li>" +
        "<li class='left'>送货时间:</li>" +
        "<li class='flex-item right'>{devdate}</li>" +
        " <li class='left'>拣货地址：</li>" +
        "<li class='flex-item right'>{warehouseadress}</li>" +
        "<li class='left two'>带货地址：</li>" +
        "<li class='flex-item right two'>{otherwarehouseadress}</li>" +
        " <li class='left order_param_{remarks}'>订单备注：</li>" +
        "<li class='flex-item right order_param_{remarks}'>{remarks}</li> " +
        "</ul>" +
        "</div>";

var temp5 = "<div class='list-item_a' pid='{date}' ptype='0'>" +
        "<ul class='item-info_a flex'>" +
        "<li class='left_a'>{date}</li>" +
        " <li class='center_a txtc'><span class='footer-btr-num'>{count}</span>单</li>" +
        "<li class='right_a txtr'>￥" +
        "<span class='fr money-r' style='color:#333333;'>{sum}<i class='iconfont icon-jinru'></i></span>" +
        " </li></ul></div>";

var temp6 = "<div class='info' pid='{warehousenumber}'>" +
        "<ul class='item-info'>" +
        "<li class='left'>单号：</li>" +
        "<li class='flex-item right clearfix'>{deliveryspoderid}</li>" +
        "<li class='left'>送货时间：</li>" +
        "<li class='flex-item right'>{devdate}</li>" +
        "<li class='left'>提货地址：</li>" +
        "<li class='flex-item right'>{warehouseadress}</li>" +
        "<li class='left'>联系人：</li>" +
        "<li class='flex-item right'>{warehouselinkman} {warehousemobile}" +
        "<span class='control-text-right-phone' tid='tel:{warehousemobile}'>" +
        "<i class='iconfont icon-dianhua'></i>" +
        "</span>" +
        "</li>" +
        "<li class='left two'>带货地址：</li>" +
        "<li class='flex-item right two'>{otherwarehouseadress}</li>" +
        "<li class='left two'>联系人：</li>" +
        "<li class='flex-item right two'>{otherwarehouselinkman} {otherwarehousemobile}" +
        "<span class='control-text-right-phone' tid='tel:{otherwarehousemobile}'>" +
        "<i class='iconfont icon-dianhua'></i>" +
        "</span>" +
        "</li>" +
        "<li class='left {remarks}'>订单备注：</li>" +
        "<li class='flex-item right {remarks}'>{remarks}</li>" +
        "</ul>" +
        "</div>" +
        "<div class='info-extra'>" +
        "<div class='goods-info'>" +
        "<div class='goods-info-title'>" +
        "<span class='decorate'></span>" +
        "<span class='goods-info-title-text'>货品信息</span>" +
        "</div>" +
        "<div style='overflow-y: scroll;height: 262px;'>" +
        "{itemhtml}" +
        "</div>" +
        "</div>" +
        "<div class='goods-info'>" +
        "<div class='goods-info-title'>" +
        "<span class='decorate'></span>" +
        "<span class='goods-info-title-text'>分拣备注</span>" +
        "</div>" +
        "<div class='table-info'>" +
        "<textarea rows='3' cols='50' id='problemdesc' readonly='readonly' placeholder='请填写备注信息'></textarea>" +
        "</div>" +
        "</div>" +
        "<div>";

var temp7 = '<div class="list-text" pid="{prodcodes}">' +
        '<div class="name clearfix">{catename}' +
        '<span class="color">{prodcolor}</span>' +
        '<span class="fr"><i class="iconfont icon-wancheng"></i></span>' +
        '</div>' +
        '<div class="type">规格：<span>{psize}</span></div>' +
        '<div class="namber">货号：' +
        '<span>{prodcodes}</span>' +
        '<div class="table-info">' +
        '<textarea class="one_desc" rows="3" cols="40" placeholder="请输入此货品的问题描述"></textarea>' +
        '</div>' +
        '</div>' +
        '</div>';
var temp101 = " <div class=\"log_item\">" +
        "<div class=\"log_list_title\">" +
        "   <div class=\"log_list_time\">{createdate}</div>" +
        "   <div class=\"log_list_tool\">操作员：{createname}</div>" +
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
//库存日报细栏
var temp102 = "<div class=\"list_item\">" +
        " <div class=\"list_item_pic\"><img src=\"" + url + "file/imgs/" + file + "/" + storegeeditutil('gsid') + "/conimg" + "/{imgpath}\" alt=\"\" height=\"70\"/></div>" +
        "<div class=\"list_item_detail\">" +
        "   <div class=\"item_detail_name\">{prodname}</div>" +
        "    <div class=\"item_detail_price\">{type}</div>" +
        "    <div class=\"item_detail_size\">货号：{prodcodes}</div>" +
        "   <div class=\"item_detail_color\">颜色：{prodcolor}</div>" +
        "   <div class=\"item_detail_number\">数量：{prodqtys}</div>" +
        " </div> " +
        " </div> ";

var temp103 = " <div class=\"sale_reports_table\">" +
        "    <table cellspacing=\"0\" border=\"0\">" +
        "        <tr>" +
        "            <th>{createdate}</th>" +
        "            <th>数量</th>" +
        "            <th>类型</th>" +
        "            <th>操作人</th>" +
        "        </tr>" +
        "        {itemhtml}" +
        "   </table>" +
        "</div>";

var temp104 = "  <tr>" +
        "                <td>{cateName} {prodname}</td>" +
        "               <td>{prodqtys}</td>" +
        "                <td>{typeString}</td>" +
        "                <td>{creator}</td>" +
        "            </tr>";

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
        case "unpicklist":
            temp = temp1;
            break;
        case "unpickitem":
            temp = itemhtml;
            break;
        case "problem":
            temp = temp7;
            break;
        case "pickedlist":
            temp = temp4;
            break;
        case "monthpickedlist":
            temp = temp5;
            break;
        case "orderdetail":
            temp = temp6;
            break;
        case "goodlog":
            temp = temp101;
            break;
        case "gooditem":
            temp = temp102;
            endhtml = ""
            break;
        case "outinlog":
            temp = temp103;
            break;
        case "outinitem":
            temp = temp104;
            endhtml = ""
            break;

        default:
            break;
    }
    if (data instanceof Array && data.length == 0) {
        return "<div></div>";
    } else if (typeof (data) == "undefined" || Object.keys(data).length == 0) {
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

/**1
 *循环生成html
 *初始文本+类别+数据
 *使用方法:
 *var a = htmladd(str,type,data);
 **/
var htmladd = function (type, data) {
    var temp;
    var html = "";
    switch (type) {
        case "unpicklist":
            temp = temp1;
            break;
        case "unpickitem":
            temp = itemhtml;
            break;
        case "problem":
            temp = temp7;
            break;
        case "pickedlist":
            temp = temp4;
            break;
        case "monthpickedlist":
            temp = temp5;
            break;
        case "orderdetail":
            temp = temp6;
            break;
        default:

            break;
    }
    if (data instanceof Array && data.length == 0) {
        return "<div></div>";
    } else if (typeof (data) == "undefined" || Object.keys(data).length == 0) {
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
    $("#" + id).append(str);
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
