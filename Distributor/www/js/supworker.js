/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var temp1 = "    <div class=\"content\">" +
        "       <div class=\"order_container\">" +
        "            <div class=\"order_detail\" style=\"margin:0;\">" +
        "                <div class=\"order_no\">单号：{deliveryspoderid}</div>" +
        "                <div class=\"time\">{devdate}</div>" +
        "                <div class=\"clear\"></div>" +
        "                <div class=\"full\">" +
        "                    <div class=\"leftcol\">订单概要：</div>" +
        "                    <span class=\"centercol_wo_icon\">{proddesc}</span>" +
        "                    <div class=\"clear\"></div>" +
        "                </div>" +
        "                <div class=\"full\">" +
        "                    <div class=\"leftcol\">地&#12288;&#12288;址：</div>" +
        "                    <span class=\"centercol_wo_icon\">{customeradress}{addressdetailed}</span>" +
        "                    <div class=\"clear\"></div>" +
        "                </div>" +
        "                <div class=\"full\">" +
        "                    <div class=\"leftcol workerinfo\">待接单司机 :  </div>" +
        "                    <span class=\"centercol_w_icon\">" +
        "                        <div class=\"workerblock\">{driverName} {driverPhone}</div>" +
        "                    </span>" +
        "                    <div class=\"righticon righticon_s\" tid=\"tel:{driverPhone}\"><img src=\"../../images/13.png\" /></div>" +
        "                    <div class=\"clear\"></div>" +
        "                </div>" +
        "                <div class=\"full\">" +
        "                    <div class=\"leftcol workerinfo\">待接单师傅 :  </div>" +
        "                    <span class=\"centercol_w_icon\">" +
        "                        <div class=\"workerblock\">{installName}  {installPhone}</div>" +
        "                    </span>" +
        "                    <div class=\"righticon righticon_s\" tid=\"tel:{installPhone}\"><img src=\"../../images/13.png\" /></div>" +
        "                    <div class=\"clear\"></div>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>";


var temp2 = "  <tr>" +
        "      <td width=\"20%\">{deliveryspoderid}</td>" +
        "      <td>客人{customer}，{customeradress}，{proddesc}，司机{driverName}，安装师傅{installName}，<br />{insdateactual}安装完毕</td>" +
        "      <td width=\"30%\">投诉{ramark}</td>" +
        " </tr>";

var temp3 = "            <div class=\"content\" style=\"margin-top:1%;\" pid=\"{afid}\">" +
        "                <div class=\"order_container\">" +
        "                    <div class=\"order_detail\" style=\"margin-top:2%;\">" +
        "                        <div class=\"order_no\">单号 : {deliveryoderid}</div>" +
        "                        <div class=\"creator_class\">提交人:{createname}</div>" +
        "                        <div class=\"time\">时间 : {createdate}</div>" +
        "                        <div class=\"commission\">提成<span>￥{percentage}</span></div>" +
        "                        <div class=\"clear\"></div>" +
        "                        <div class=\"full\">" +
        "                            <div class=\"leftcol workerinfo\">订单概要</div>" +
        "                            <div class=\"colon\">:</div>" +
        "                            <span class=\"centercol_wo_icon\">{proddesc}</span>" +
        "                            <div class=\"clear\"></div>" +
        "                        </div>" +
        "                        <div class=\"full\">" +
        "                            <div class=\"leftcol workerinfo\">{customer}地址</div>" +
        "                            <div class=\"colon\">:</div>" +
        "                            <span class=\"centercol_wo_icon\">{cusadress}</span>" +
        "                            <div class=\"clear\"></div>" +
        "                        </div>" +
        "                        <div class=\"full\">" +
        "                            <div class=\"leftcol workerinfo\">问题描述</div>" +
        "                            <div class=\"colon\">:</div>" +
        "                            <span class=\"centercol_wo_icon\"><div class=\"textbox\">{problemdesc}</div></span>" +
        "                            <div class=\"clear\"></div>" +
        "                        </div>" +
        "                        <div class=\"full\">" +
        "                            <div class=\"leftcol workerinfo\">送装司机</div>" +
        "                            <div class=\"colon\">&nbsp;</div>" +
        "                            <span class=\"centercol_w_icon\">" +
        "                                <div class=\"workerblock\">{drivername} {driverphone}</div>" +
        "                            </span>" +
        "                            <div class=\"righticon righticon_s\" tid=\"tel:{installPhone}\"><img src=\"../../images/13.png\" /></div>" +
        "                            <div class=\"clear\"></div>" +
        "                        </div>" +
        "                        <div class=\"full\">" +
        "                            <div class=\"leftcol workerinfo\">安装师傅</div>" +
        "                            <div class=\"colon\">&nbsp;</div>" +
        "                            <span class=\"centercol_w_icon\">" +
        "                                <div class=\"workerblock\">{workername} {workerphone}</div>" +
        "                            </span>" +
        "                            <div class=\"righticon righticon_s\" tid=\"tel:{installPhone}\" ><img src=\"../../images/13.png\" /></div>" +
        "                            <div class=\"clear\"></div>" +
        "                        </div>" +
        "                        <div class=\"full\">" +
        "                            <div class=\"leftcol workerinfo\">解决方案</div>" +
        "                            <div class=\"colon\">:</div>" +
        "                            <span class=\"centercol_wo_icon\"><textarea class=\"return_class\"></textarea></span>" +
        "                            <div class=\"clear\"></div>" +
        "                        </div>" +
        "                        <div class=\"button endure_id\"  pid=\"{afid}\">保存方案</div>" +
        "                        <div class=\"clear\"></div>" +
        "                    </div>" +
        "                </div>" +
        "            </div>";

var temp4 = "<div class=\"item\"\">" +
        "                    <div class=\"left\" style=\"width:40%;\">{prodcodes}</div>" +
        "                    <div class=\"left\" style=\"width:30%;\">{prodname}</div>" +
        "                    <div class=\"left\">{prodcolor}</div>" +
        "                    <div class=\"right editpro_class\" pid=\"{sn}\"><img src=\"../../images/right.png\" /></div>" +
        "                    <div class=\"clear\"></div>" +
        "</div>";

var temp5 = "                <div class=\"seller\">" +
        "                    <div class=\"left title\">{shopname}</div>" +
        "                    <div class=\"left\">{shoplinkman}</div>" +
        "                    <div class=\"left blue\">{}</div>" +
        "                    <div class=\"right editgsid_class\" pid=\"{gsid}\"><img src=\"../../images/right.png\" /></div>" +
        "                    <div class=\"clear\"></div>" +
        "                </div>";

/**
 *循环生成html
 *初始文本+类别+数据
 *使用方法:
 *var a = htmladd(str,type,data);
 **/
var htmladd = function (type, data) {
    var temp;
    var html = "";
    switch (type) {
        case "wait":
            temp = temp1;
            break;
        case "finish":
            temp = temp2;
            break;
        case "problem":
            temp = temp3;
            break;
        case "pro":
            temp = temp4;
            break;
        case "shop":
            temp = temp5;
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
    $("#" + id).html(str);
};
