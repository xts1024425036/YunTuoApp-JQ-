/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 送装通用函数
 */
var findsetInterval;
var deliveryutil = {
    getDateYYYYHHMM: function () {
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
        var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
        return  year + "-" + month + "-" + day;
    }, getDateYYYYHHMMHavaDate: function (nowDate) {
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
        var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
        return  year + "-" + month + "-" + day;
    },
    getDateByType: function (type, date) {
        var time;
        if (type == "YYYY") {
            time = date.getFullYear();
        } else if (type == "MM") {
            time = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        } else if (type == "DD") {
            time = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        } else if (type == "HH") {
            time = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        } else if (type == "mm") {
            time = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        }
        return time;
    },
    findtrans: function (address, warhouseout, callback) {
        var cusPoint = new BMap.Point(address.adresslongitude, address.adresslatitude);
        var stoPoint = new BMap.Point(warhouseout.warehouselongitude, warhouseout.warehouselatitude);
        clearInterval(findsetInterval);
        this.callMapResult(cusPoint, stoPoint, callback);
        findsetInterval = setInterval(function () {
            deliveryutil.callMapResult(cusPoint, stoPoint, callback);
        }, 3000);
    },
    findtransother: function (warehouseother, warhouseout, callback) {
        var cusPoint = new BMap.Point(warehouseother.warehouselongitude, warehouseother.warehouselatitude);
        var stoPoint = new BMap.Point(warhouseout.warehouselongitude, warhouseout.warehouselatitude);
        clearInterval(findsetInterval);
        this.callMapResult(cusPoint, stoPoint, callback);
        findsetInterval = setInterval(function () {
            deliveryutil.callMapResult(cusPoint, stoPoint, callback);
        }, 3000);
    },
    callMapResult: function (cusPoint, stoPoint, callback) {
        my_map.getPlanningDistance(cusPoint, stoPoint, function (distance) {
            if (!isnotnull(distance) || isNaN(distance) || 0 == distance) {
                distance = my_map.getDirectDistance(cusPoint, stoPoint);
            }
            clearInterval(findsetInterval);
            callback(distance);
        });
    },
    addwarehouse: function (deliveryobj, warhousearray) {
        var warhouseselect = {
            warehouselatitude: deliveryobj.warehouselatitude, warehouselongitude: deliveryobj.warehouselongitude,
            warehouseadress: deliveryobj.warehouseadress, warehouseid: deliveryobj.warehouseid,
            whtype: deliveryobj.whtype
        };
        warhousearray.push(warhouseselect);
    }, listonefiledtwo: function (filed, filedvalue, filed1, filedvalu1e1, array) {
        for (var y in array) {
            var obj = array[y];
            if (obj[filed] == filedvalue && obj[filed1] == filedvalu1e1) {
                return parseInt(y);
            }
        }
        return 99;
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
    }, findcateact: function () {
        $(".item_show").on("click", function () {
            var toid = $(this).attr("data-pid");
            if ($(this).hasClass("is_open")) {
                deliveryutil.closeSelect(toid);
            } else {
                deliveryutil.showSelect(toid);
            }
            $(this).toggleClass("is_open");
        });
        $(".service_close").on("click", function () {
            $(".select_popup_c").animate({left: "-200vw"}, 200);
        });
      
    }, showSelect: function (id) {
        var thisHtml = $("#" + id);
        thisHtml.show();
        thisHtml.parent().css("height", thisHtml.height());
    }, closeSelect: function (id) {
        var thisHtml = $("#" + id);
        thisHtml.hide(200);
        thisHtml.parent().css("height", 0);
        $("#" + id + "_select").html(thisHtml.children(".cate_cur").html());
    }

}