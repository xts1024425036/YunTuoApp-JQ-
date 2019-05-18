"use strict";

////初始化用到的JS文件
//var jssrc = ['../../js/templatesale.js', '../../js/templateutils.js'];
//jsinit(jssrc);



var salefun = {
    init: function () {

    },
    htmladd: function (tempname, data) {
        return temputils.htmladd(template[tempname], data);
    },
    change: function (id, str) {
        $("#" + id).html(str);
    },
    saleaddnow: function () {
        var status = "2";
        $("body").on('click', '.list_item', function () {
            if (status == "1" || status == "2") {
                status = "0";
                setTimeout(function () {
                    status = "1";
                }, 1000)
                var element = $(this).find(".detail_number_add");
                var classtype = $(element).attr("type");
                if ("add" == classtype) {
                    $(this).closest(".list_item").addClass("list_item_addnow");
                    addone(element, "add");
                } else if ("color" == classtype) {
                    selectcolor(element, "select");
                }
            }
        });
    },
    listitem: function (saleall, salepage) {
        $(".list_item_addnow").each(function () {
            var parent = $(this);
            var prodcodes = $(this).find(".color").attr("code");
            var number = 1;
            var color = parent.find('.section_text')[0].innerText;
            if (color == "多种颜色") {
                return true;
            }
            var x = salefun.listone(prodcodes, saleall);
            if (x != 999) {
                saleall[x].number += number;
                salefun.cssedit(0, this, "all");
                return true;
            }
            var y = salefun.listone(prodcodes, salepage);
            salepage[y].prodcodes = prodcodes;
            salepage[y].number = number;
            salepage[y].prodcolor = color;
            var arrCopy = {};
            var item = salepage[y];
            for (var x in item) {
                arrCopy[x] = item[x];
            }
            console.log(arrCopy);
            nowhavecate.push(arrCopy.pbigcate);
            editneedtwo(arrCopy.pbigcate);
            saleall.push(arrCopy);
            $(this).removeClass("list_item_addnow");
            salefun.cssedit(0, this, "all");
        });
    },
    listitemchange: function (saleSelect, salepage) {
        $(".list_item_addnow").each(function () {
            var parent = $(this);
            var prodcodes = $(this).find(".color").attr("code");
            var number = 1;
            var y = salefun.listone(prodcodes, salepage);
            var color = parent.find('.section_text')[0].innerText;
            salepage[y].prodcodes = prodcodes;
            salepage[y].number = number;
            salepage[y].prodcolor = color;
            salepage[y].prodfee = salepage[y].unprice;
            var item = salepage[y];
            for (var x in item) {
                saleSelect[x] = item[x];
            }
            $(this).removeClass("list_item_addnow");
            console.log(saleSelect);
        });
    },
    listone: function (procode, saleall) {
        for (var y in saleall) {
            if (saleall[y].prodcodes == procode) {
                return parseInt(y);
            }
        }
        return parseInt(999);
    },
    cssedit: function (mainnow, element, type) {
        if ("all" == type) {
            var defaultcolor = $(element).closest(".list_item").find(".color").attr("default");
            if ("" != defaultcolor && "多种颜色" == defaultcolor) {
                $(element).closest(".list_item").find(".section_text").html("多种颜色");
            }
            return true;
        }
    }, cookiemain: function (name, data) {
        var saleJson = JSON.stringify(data);
        storegeeditutil(name, saleJson);
    }

}
//选货匹配,即有一种需要匹配另外一种
var needtwo = {"25": ["32", "33", "34"], "26": ["32", "33", "34"], "27": ["32", "33", "34"], "24": ["32", "33", "34"]};
var catename = {"25": "垫", "26": "垫", "27": "垫", "24": "垫"};
var nowhavecate = new Array();
function editneedtwo(bigid) {
    var have_bigkey = needtwo.hasOwnProperty(bigid);
    var now_havekey = true;
    if (have_bigkey) {
        console.log("包含当前的大类");
        for (var x in needtwo[bigid]) {
            for (var y in nowhavecate) {
                if (nowhavecate[y] == needtwo[bigid][x]) {
                    now_havekey = false;
                    break;
                } else {
                    continue;
                }
            }
            if (!now_havekey) {
                break;
            }
        }
        if (now_havekey) {
            refushmessage("该货品需要同步选购" + catename[bigid]);
        }
    }
}