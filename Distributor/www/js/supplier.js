/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * 供应商设置主要JS
 */
//供应商列表
var temp1 = "<div class=\"supplier_item\"  pid=\"{supid}\">" +
        " <div class=\"supplier_tool\">" +
        "   <div class=\"tool_name\">{supname}</div>" +
        "   <div class=\"tool_edit\"><i class=\"iconfont icon-edit\"></i></div>" +
        "   <div class=\"tool_delete\"><i class=\"iconfont icon-delete\"></i></div>" +
        "</div>" +
        "<div class=\"supplier_info\">" +
        "   <ul>" +
        "       <li>联系人<span class=\"massage\">{linkman}</span></li>" +
        "   </ul>" +
        "    <ul>" +
        "      <li>电话<span class=\"massage\">{mobile}</span></li>" +
        "   </ul>" +
        "   <ul>" +
        "       <li>备注<span class=\"massage\">{remarks}</span></li>" +
        "   </ul>" +
        "</div>" +
        "</div>";


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
        //供应商列表
        case "gys":
            temp = temp1;
            break;
        default:
            break;
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

/**
 *将一个对象的某些属性放进另外一个对象里面
 仅复制需要的字段array
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

