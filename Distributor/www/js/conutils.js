/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 货品操作通用函数
 */
var conutils = {
    htmlutil: function (type, obj) {
        var html = "";
        if ("style" == type) {
            for (var x in obj) {
                html += "<div class=\"swiper-slide\"  data-oid=\"" + obj[x].mtype + "\"data-mid=\"" + obj[x].mtid + "\" data-did=\"" + obj[x].mtdesc + "\">" + obj[x].mname + "</div> ";
            }
        } else if ("type" == type) {
            console.log(obj);
            for (var x in obj) {
                html += "<div class=\"swiper-slide\" data-pid=\"" + obj[x].sn + "\" data-mid=\"" + obj[x].mId + "\">" + obj[x].mDesc + "</div>";
            }
        } else if ("stype" == type) {
            for (var x in obj) {
                html += "<div class=\"swiper-slide\" data-sid=\"" + obj[x].mtid + "\">" + obj[x].mtdesc + "</div> ";
            }
        } else if ("small" == type) {
            for (var x in obj) {
                html += "<div class=\"swiper-slide\"  data-desc=\"" + obj[x].catename + "\"data-big=\"" + obj[x].bigcateid + "\" data-pid=\"" + obj[x].cateid + "\">" + obj[x].catename + "</div> ";
            }
            html += "<div class='small_bottom_class'></div>"
        }
        return html;
    }, findbigCate: function (type) {
        var catestyle = $("#bigstyle_id .cate_cur");
        if ("small" == type) {
            storegeeditutil("prostyle", catestyle.attr("data-mid"));
            storegeeditutil("protype", $("#bigtype_id .cate_cur").attr("data-mid"));
        }
        var catetype = $("#bigtype_id .cate_cur");
        oldtype = $("#bigtype_id .cate_cur").attr("data-oid");
        var whole = $("#big_ins_type_id .cate_cur").attr("data-pid");
        var stype = $("#stype_id .cate_cur").attr("data-sid");
        $.post(staticmessage.url + "purchase/findbigcate", {"catecode": catestyle.attr("data-mid"), "stype": stype, "whole": whole, "type": type, "styleid": catestyle.attr("data-pid"), "typeid": catetype.attr("data-pid")}
        , function (data) {
            console.log(data);
            if ("style" == type) {
                $("#s_show").hide();
                var item = data.stylelist;
                $("#bigstyle_id").html(conutils.htmlutil(type, item));
                var prostyle = storegeeditutil("prostyle");
                if (item.length == 1) {
                    $("#bigstyle_id div").first().trigger("click");
                    $("#bigstyle_id div").hide();
                }
                if (isnotnull(prostyle)) {
                    $("#bigstyle_id .submenu[data-mid=" + prostyle + "]").trigger("click");
                }
                var switchobj = $(".item_show[data-pid='bigstyle_id']");
                if (!$(switchobj).hasClass("is_open")) {
                    switchobj.trigger("click");
                } else {
                    conutils.showSelect("bigstyle_id");
                }

            } else if ("type" == type) {
                $("#s_show").hide();
                var item = data.typelist;
                $("#bigtype_id").html(conutils.htmlutil(type, item));
                var haveold = $("#bigtype_id div[data-oid=" + oldtype + "]");
                var protype = storegeeditutil("protype");
                if (item.length == 1) {
                    setTimeout(function () {
                        $("#bigtype_id div").first().trigger("click");
                    }, 400);
                }
                var switchobj = $(".item_show[data-pid='bigtype_id']");
                if (!$(switchobj).hasClass("is_open")) {
                    switchobj.trigger("click");
                } else {
                    conutils.showSelect("bigtype_id");
                }
            } else if ("stype" == type) {
                $("#s_show").hide();
                $("#stype_id").html(conutils.htmlutil(type, data.stypelist));
                if (data.stypelist.length == 1) {
                    $(".item_show[data-pid=stype_id]").css("display", "none");
//                    setTimeout(function () {
                        $("#stype_id div").first().trigger("click");
//                    }, 400);
                    $("#stype_id div").hide();
                } else {
                    $(".item_show[data-pid=stype_id]").css("display", "block");
                }
                var switchobj = $(".item_show[data-pid='stype_id']");
                if (!$(switchobj).hasClass("is_open")) {
                    switchobj.trigger("click");
                } else {
                    conutils.showSelect("stype_id");
                }
//                $("#out_big_item_type_id").css("height", $("#big_item_type_id").height() + 25);
            } else if ("small" == type) {
                bigArray = data.biglist;
                $("#s_show").hide();
                if (data.catelist.length > 0 && data.catelist1.length > 0) {
                    $("#s_show").show();
                    if (whole == "0") {
                        $("#big_item_type_id").html(conutils.htmlutil(type, data.catelist));
                    } else {
                        $("#big_item_type_id").html(conutils.htmlutil(type, data.catelist1));
                    }
                } else if (data.catelist.length == 0 && data.catelist1.length > 0) {
                    $("#big_item_type_id").html(conutils.htmlutil(type, data.catelist1));
                } else if (data.catelist.length > 0 && data.catelist1.length == 0) {
                    $("#big_item_type_id").html(conutils.htmlutil(type, data.catelist));
                }
//                $("#out_big_item_type_id").css("height", $("#big_item_type_id").height() + 25);
            }
        });
    }, changeCSS: function (out_obj, in_obj) {
        out_obj.css("height", in_obj.height());
    }, findcateact: function () {
        $(".item_show").on("click", function () {
            var toid = $(this).attr("data-pid");
            if ($(this).hasClass("is_open")) {
                conutils.closeSelect(toid);
            } else {
                conutils.showSelect(toid);
            }
            $(this).toggleClass("is_open");
        });
        $("#bigstyle_id").on("click", "div", function () {
            $(this).siblings(".swiper-slide").removeClass("cate_cur").end().addClass("cate_cur");
            $(".item_show[data-pid='bigstyle_id']").trigger("click");
            $(".item_show[data-pid='bigtype_id'].is_open").trigger("click");
            conutils.findbigCate("stype");
            $("#stype_id").html("");
            $("#big_item_type_id").html("");
        });
        $("#bigtype_id").on("click", "div", function () {
            $(this).siblings(".swiper-slide").removeClass("cate_cur").end().addClass("cate_cur");
            $(".item_show[data-pid='bigtype_id']").trigger("click");
            conutils.findbigCate("style");
            $("#stype_id").html("");
            $(".item_show[data-pid='stype_id']").removeClass("is_open");
            $("#stype_id_select").html("");
            $("#big_item_type_id").html("");
        });
        $("#stype_id").on("click", "div", function () {
            $(this).siblings(".swiper-slide").removeClass("cate_cur").end().addClass("cate_cur");
            $(".item_show[data-pid='stype_id']").trigger("click");
            $(".item_show[data-pid='bigstyle_id'].is_open,.item_show[data-pid='bigtype_id'].is_open").trigger("click");
            conutils.findbigCate("small");
        });
        $("#big_ins_type_id").on("click", "div", function () {
            $(this).siblings(".swiper-slide").removeClass("cate_cur").end().addClass("cate_cur");
            conutils.findbigCate("small");
        });
        $("#big_item_type_id").on("click", ".swiper-slide", function () {
            var select = $(this);
            select.siblings(".swiper-slide").removeClass("cate_cur").end().toggleClass("cate_cur");
            conproduct.prodcate = select.attr("data-pid");
            conproduct.prodbigcate = select.attr("data-big");
            $("#prodcate_id").val(select.attr("data-desc"));
            $("#prodbigcate_id").val($("#bigstyle_id .cate_cur").attr("data-did"));
            $(".close_why").trigger("click");
        });
        $(".show_all").on("click", function (event) {
            var open = $(this);
            var in_obj = $("#" + open.attr("data-pid"));
            var out_obj = $("#out_" + open.attr("data-pid"));
            in_obj.toggleClass("submenu").toggleClass("no-swiper-wrapper");
            if ("close" == open.attr("data-status")) {
                open.attr("data-status", "open");
                in_obj.css("height", "auto");
            } else {
                open.attr("data-status", "close");
                in_obj.css("height", "8vw");
            }
            out_obj.toggleClass("pro_show_all").css("height", in_obj.height());
            console.log(open);
        });
        $(".have_more_slide").on("click", function () {
            $(".toid_select").hide();
            var to_id = $(this).attr("data-pid");
            $(".toid_select[data-toid='" + to_id + "']").show();
        });
        $(".close_why").on("click", function () {
            $(".select_popup_c").animate({left: "-200vw"}, 200);
        });
        $("#prodcate_id,#prodbigcate_id").on("click", function () {
            $(".select_popup_c").animate({left: "0vw"}, 250);
        });
    }, createpro: function (data) {
        data.returnid['number'] = 1;
        data.returnid['catename'] = $("#prodcate_id").val();
        data.returnid['imgpath'] = data.returnid.prodimgpath;
        data.returnid['qtys'] = data.returnid.prodqtys;
        data.returnid['unprice'] = data.returnid.price;
        data.returnid['pbigcate'] = data.returnid.prodbigcate;
        data.returnid['pcate'] = data.returnid.prodcate;
        var newSale = {};
        var needParam = ['catename', 'defaultcolor', 'imgpath', 'number',
            'pbigcate', 'pcate', 'prodcodes', 'prodcolor', 'prodid', 'prodname', 'qtys', 'remarks', 'sn', 'unprice'];
        for (var key in data.returnid) {
            if ($.inArray(key, needParam) >= 0) {
                newSale[key] = data.returnid[key];
            }
        }
        newSale['psize'] = "10*10*10";
        newSale['remarks'] = "";
        return newSale;
    }, closeSelect: function (id) {
        var thisHtml = $("#" + id);
        thisHtml.hide(200);
        thisHtml.parent().css("height", 0);
        $("#" + id + "_select").html(thisHtml.children(".cate_cur").html());
    }, showSelect: function (id) {
        var thisHtml = $("#" + id);
        thisHtml.show();
        thisHtml.parent().css("height", thisHtml.height());
    }, showSmall: function () {
        var height = $(".popup_in_c").height() - $("#out_big_item_type_id").height() - $("#out_big_item_type_id")[0].offsetTop + 100;
        var new_height = $("#out_big_item_type_id").height() + height;
        if (height > 50) {
            $("#out_big_item_type_id").height($("#out_big_item_type_id").height() + height);
            $("#big_item_type_id").css("max-height", new_height);
        }
    }
}