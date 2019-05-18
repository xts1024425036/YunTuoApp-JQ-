"use strict";
var temputils = {
    htmladd: function (temp, data) {
        var html = "";
        var endhtml = "<div class=\"nomore_html\"></div>";
        if (isnotnull(data)) {
            for (var i = 0, j = data.length; i < j; i++) {
                html += temp.format(data[i]);
            }
        }
        html += endhtml;
        return html;
    },
    oneobjhtmladd: function (temp, data) {
        var html = temp.format(data);
        return html;
    },
    findbigCate: function (type) {

    },
    htmlappend: function (id, str) {
        $("#" + id).append(str);
    },
    htmlchange: function (id, str) {
        $("#" + id).html(str);
    },
    dateTempEdit: function (list, param, type) {
        for (var x in list) {
            var obj = list[x][param];
            switch (type) {
                case "mdh":
                    list[x][param] = timeFormat(obj, "MMDDHH_CN");
                    break;
                case "md":
                    list[x][param] = timeFormat(obj, "MMDD_CN");
                    break;
                default:
                    break;
            }
        }
    }
}


//循环生成
String.prototype.format = function () {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length === 1 && typeof (arguments[0]) === "object") {
            var argsObj = arguments[0];
            for (var key in argsObj) {
                if (argsObj[key] !== undefined) {
                    if ("object" != typeof (argsObj[key])) {
                        var reg = new RegExp("({" + key + "})", "g");
                        var value = argsObj[key];
                        if ("number" == typeof (argsObj[key]) && argsObj[key] > 1000000000) {
                            value = timeFormat(argsObj[key]);
                        }
                        result = result.replace(reg, value);
                    } else {
                        for (var x in argsObj[key]) {
                            var reg = new RegExp("({)" + key + "." + x + "(})", "g");
                            var value = argsObj[key][x];
                            if ("number" == typeof (argsObj[key][x]) && argsObj[key][x] > 1000000000) {
                                value = timeFormat(argsObj[key][x]);
                            }
                            result = result.replace(reg, value);
                        }
                    }
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    if ("object" != typeof (arguments[i])) {
                        var reg = new RegExp("({)" + i + "(})", "g");
                        var value = arguments[i];
                        if ("number" == typeof (arguments[i]) && arguments[i] > 1000000000) {
                            value = timeFormat(arguments[i]);
                        }
                        result = result.replace(reg, value);
                    } else {
                        for (var x in arguments[i]) {
                            var reg = new RegExp("({)" + i + "." + x + "(})", "g");
                            var value = arguments[i][x];
                            if ("number" == typeof (arguments[i][x]) && arguments[i][x] > 1000000000) {
                                value = timeFormat(arguments[i][x]);
                            }
                            result = result.replace(reg, value);
                        }
                    }

                }
            }
        }
    }
    return result;
};