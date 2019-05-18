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
    //货品选择加入购物车
    saleaddnow: function () {
        var status = "2";
        $("body .pro_main").on('click', '.list_item', function () {
            if (status == "1" || status == "2") {
                status = "0";
                setTimeout(function () {
                    status = "1";
                }, 1000)
                var element = $(this).find(".detail_number_add");
                var classtype = $(element).attr("type");
                if ("add" == classtype) {
                    $(this).closest(".list_item").addClass("list_item_addnow");
                    salefun.addone(element, "add");
                } else if ("color" == classtype) {
//                    selectcolor(element, "select");
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
    refush_cart: function (saleall) {
        var saleHtml = salefun.htmladd("add_new_change", saleall);
        if (isnotnull(saleall) && saleall.length > 0) {
            $("#sale_cart_id").removeClass("no_sale_incart");
            salefun.change("sale_cart_id", saleHtml);
            $('.detail_number_delete').css("display", "block");
            $('.detail_number').css("display", "inline-block");
            $(".hava_show").show();
            salefun.refushdetail(saleall);
        } else {
            $("#sale_cart_id").addClass("no_sale_incart");
            $("#sale_cart_id").append("<div class='add_pro_bt_first add_pro_bt_a'>请下方选择货品</div>");
        }
    },
    refush_addnew: function (addpro) {
        var addin = new Array();
        addin.push(addpro);
        var saleHtml = salefun.htmladd("add_new_change", addin);
        salefun.change("sale_cart_id", saleHtml);
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
            salepage[y].prodqtys = number;
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
    listonefiledtwo: function (filed, filedvalue, filed1, filedvalu1e1, array) {
        for (var y in array) {
            var obj = array[y];
            if (obj[filed] == filedvalue && obj[filed1] == filedvalu1e1) {
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
    },
    cookiemain: function (name, data) {
        var saleJson = JSON.stringify(data);
        storegeeditutil(name, saleJson);
    },
    firstFilter: function (type, callback) {
        var firstfilter = {};
        firstfilter.filterMain = "功能分类";
        firstfilter.filterBig = filterBig;
        firstfilter.filterSmall = clist;
        firstfilter.gsid = staticmessage.gsid;
        firstfilter.filtertype = type;
        firstfilter.filtersearch = filtersearch;
        //main.js-初始化查询，默认按照区域-返回按区域的大类和细类
        if (firstfilter.filterSmall.length == 0) {
            firstfilter.filterSmall = allsmall;
        }
        $.ajax({
            type: "POST",
            crossDomain: true,
            contentType: "application/json; charset=UTF-8",
            url: staticmessage.url + "sale/filter",
            data: JSON.stringify(firstfilter),
            success: function (data) {
                loading_close();
                loading_param = "0000";
                salepage = data.sale;
                if ("head" == type) {
                    //修改大类
                    var bigHtml = salefun.htmladd("sale_big", data.big);
                    allcatename = data.small;
                    salefun.change("list_category_id", bigHtml);
                    $("#list_category_id div:first").addClass("bigcur");
                    if (!isnotnull(data.big) || data.big.length == 0) {
                        app.confirm(function () {
                            $('#add_bottom_id').trigger("click");
                        }, "货品为空,是否现在添加货品?", "", "");
                    }
                }
                if ("big" == type || "head" == type) {
                    allcatename = data.small;
                    //修改细类
                    var smallHtml = salefun.htmladd("sale_small", data.small);
                    salefun.change("shop_alltype_id", smallHtml);
                    var itemsmall = new Array();
                    for (var x in  data.small) {
                        itemsmall.push(data.small[x].condistributorcatePK.cateid);
                    }
                    allsmall = itemsmall;
                }
                var saleHtml = "";
                saleHtml = salefun.htmladd("sale_list", data.sale);
                //刷新货品列表
                salefun.change("shop_list_item", saleHtml);
                isnotnull(callback) ? callback() : null;
            }
        });
    },
    coloredit: function (pid, cateid) {
        $.post(staticmessage.url + "sale/colors", {"pid": pid, "cateid": cateid}, function (data) {
            var smallHtml = salefun.htmladd("sale_color", data.colors);
            salefun.change("color_choose_id", smallHtml);
        });
        $('.back_page_c').css('display', 'block');
    },
    refushCache: function () {
        salefun.cookiemain("saleall", saleall);
        salefun.cookiemain("salecount", saleall.length);
    },
    addone: function (colorhtml, type) {
        var colorobj = $(colorhtml).closest(".list_item");
        var coloritem = colorobj.find(".section_text");
        var pid = colorobj.attr("pid");
        var cateid = colorobj.attr("pcate");
        if ("多种颜色" == coloritem[0].innerText) {
            salefun.coloredit(pid, cateid);
        } else {
            if (coloritem.attr("default") == "多种颜色" && "select" == type) {
                salefun.coloredit(pid, cateid);
            } else {
                $('.back_page_c').css('display', 'none');
                salefun.ensureadd(pid);
            }
        }
        $(".bottom_choose_item").attr("pid", pid);

    },
    copyone: function () {

    },
    refushdetail: function (saleall) {
        var number = 0;
        if (typeof (saleall) != "undefined" && saleall.length > 0) {
            for (var x in saleall) {
                number += saleall[x].number;
            }
        }
        $("#count_id").html(number);
    },
    salecontroller: function () {
        $("body .sale_cart_main").on('click', '.detail_number_add,.detail_number_delete,.section_text', function () {
            var element = $(this);
            var classtype = $(this).attr("type");
            var prodcodes = $(this).closest(".list_item_detail").find(".color").attr("code");
            if ("add" == classtype) {
                salefun.numberedit(classtype, element, prodcodes);
                addone(element, prodcodes);
            } else if ("minus" == classtype) {
                salefun.numberedit(classtype, element, prodcodes);
            } else if ("color" == classtype) {
//                selectcolor(element, "select");
            }
        });
    },
    saleAct: function () {
        //选择大类
        $('#list_category_id').on('click', '.salebig_menu', function (event) {
            filterBig = $(this).attr("data-pid");
            $(this).siblings("div").removeClass("bigcur").end().addClass("bigcur");
            clist.pop();
            salefun.firstFilter("big", "");
            $(".select_now_item_delete").trigger("click");
        });
        //新增货品
        $('#add_bottom_id').click(function () {
            transitionLocation("15produce_add.html", "../onlydelivery/56onlysale_cart.html", "../purchase/15produce_add.html?type=add");
        });
        //选择颜色
        $('.bottom_choose_item').on('click', 'li', function () {
            //获取发生事件的对象
            $('.bottom_choose_item li').removeClass('act');
            $(this).addClass("act");
            var pid = $('.bottom_choose_item').attr("pid");
            var code = $(this).attr("code");
            $("[pid='" + pid + "']").find(".section_text").attr("code", code).text($(this).text());
            $('.back_page_c').css("display", "none");
            salefun.ensureadd(pid);
        });
    },
    numberedit: function (classtype, element, prodcodes) {
        var mainnow = $(element).closest(".list_item").find(".main");
        var mainint = parseInt($(element).closest(".list_item").find(".main").html());
        if ("add" == classtype) {
            $(mainnow).html(++mainint)
        } else {
            if (mainint > 1) {
                $(mainnow).html(--mainint)
                deleteone(prodcodes);
            } else {
                app.confirm(function () {
                    deleteone(prodcodes);
                }, "确定不选购该货品?", "delete", prodcodes, "", function () {
                    return;
                });
            }
        }
        salefun.cssedit(mainint, element, "one");
    },
    ensureadd: function (pid) {
        var type = "";
        if ("change" == proselecttype) {
            salefun.listitemchange(proselectnew, salepage);
        } else {
            salefun.listitem(saleall, salepage);
        }
//            cartoon(pid);
        salefun.refushCache();
//        $(".select_pro_c").animate({left: "-300vw"}, 300);
        htmlhelp(type);
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