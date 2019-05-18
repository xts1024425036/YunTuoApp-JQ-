/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var temp1 = "                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"coupon\" pid=\"{mainid}\">" +
        "<tr>" +
        "    <td class=\"coupon_left\">" +
        "        <span>¥{money}</span>" +
        "        满{need}元可使用" +
        "    </td>" +
        "    <td class=\"coupon_right\">" +
        "        <div style=\"text-align: left;\">" +
        "            <div style=\"line-height: 5vw;\">{needtype}</div>" +
        "            <div class=\"clear\"></div>" +
        "            <div style=\"font-size:2.5vmin;margin-top: 1vh;\">{start} - {end}</div>" +
        "        </div>" +
        "    </td>" +
        "    <td class=\"status\">&nbsp;</td>" +
        "     </tr>" +
        "    </table>";


var temp3 = " <div class=\"sale_reports_table\">" +
        "    <table cellspacing=\"0\" border=\"0\" id=\"{payorderid}\">" +
        "        <tr>" +
        "            <th>{createdate}</th>" +
        "            <th>金额</th>" +
        "            <th>实收</th>" +
        "            <th>方式</th>" +
        "            <th><div class=\"cancel_now_class\">状态</div></th>" +
        "            <th><div class=\"pay_now_class\"></div></th>" +
        "        </tr>" +
        "         <tr>" +
        "                <td class=\"order_id_class\">{payorderid} </td>" +
        "               <td>¥{totalamount}</td>" +
        "                <td>¥{realin}</td>" +
        "                <td>{pay_type}</td>" +
        "                <td>{paystatus}</td>" +
        "                <td><div class=\"findall_now_class\">详情</div></td>" +
        "            </tr>" +
        "   </table>" +
        "</div>";


var temp4 = "         <tr>" +
        "                <td class=\"order_id_class\">{orderid} </td>" +
        "               <td>{type}</td>" +
        "                <td></td>" +
        "                <td></td>" +
        "                <td>序号:</td>" +
        "                <td>{sn}</td>" +
        "            </tr>";


//循环生成
String.prototype.format = function () {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length === 1 && typeof (arguments[0]) === "object") {
            var argsObj = arguments[0];
            for (var key in argsObj) {
                if (argsObj[key] !== undefined) {
                    if (key == "salesorderitemPK") {
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, argsObj.salesorderitemPK.sn);
                    } else {
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, argsObj[key]);
                    }
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};
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
        case "select":
            temp = temp1;
            break;
        case "paylog":
            temp = temp3;
            break;
        default:
            break;
    }
    if (typeof (data) == "undefined" || data == null || data.length == 0) {
        return "<div style=\"font-size:5vw;text-align:center;\">无</div>";
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