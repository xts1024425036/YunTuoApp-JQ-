/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var orderfun = {
    init: function () {

    },
    htmledit: function (tempname, data, datetype) {

        if (isnotnull(datetype)) {
            temputils.dateTempEdit(data, "createdate", datetype);
        }
        return temputils.htmladd(template[tempname], data);
    },
    change: function (id, str) {
        $("#" + id).html(str);
    },
    oneobjhtmledit: function (tempname, data, datetype) {
        return temputils.oneobjhtmladd(template[tempname], data);
    },
    listoneparam: function (paramname, value, list) {
        for (var x in list) {
            if (list[x][paramname] == value) {
                return x;
            }
        }
        return 99999;
    },
    listoneparamin: function (paramname, param2, value, list) {
        for (var x in list) {
            if (list[x][paramname][param2] == value) {
                return x;
            }
        }
        return 99999;
    },
    cacheedit: function (obj, type) {
        for (var x in obj) {
            storegeeditutil(x, obj[x]);
        }
    },
    editcache: function (data, type) {
        if ("del" == type) {
            orderfun.editcachedel(data);
        } else if ("sale" == type) {
            orderfun.editcachesale(data);
        } else if ("ware" == type) {
            orderfun.editcacheware(data, "57warhouse");
        } else if ("wareother" == type) {
            orderfun.editcacheware(data, "57warhouseother");
        }
    },
    editcachedel: function (data) {
        var remember = {
            customeradress: data["customeradress"],
            addressdetailed: data["addressdetailed"],
            customer: data["customer"],
            cusphone: data["cusphone"],
            devdate: data["devdate"],
            remarks: data["remarks"],
            isurgent: data["isurgent"],
            upselect: data["upselect"],
            address: {
                provinces: data["provinces"],
                address: data["customeradress"],
                city: data["city"],
                adresslongitude: data["adresslongitude"],
                adresslatitude: data["adresslatitude"]
            }
        }
        storegeeditutil("57remember", JSON.stringify(remember));
    },
    editcachesale: function (data) {
        var saleall = new Array();
        for (var x in data) {
            var item = {
                "imgpath": data[x].imgpath,
                "isactive": true,
                "pcate": data[x].pcate,
                "qtys": data[x].qtys / data[x].prodqtys,
                "prodname": data[x].prodname,
                "prodid": data[x].prodid,
                "psize": data[x].psize,
                "pbigcate": data[x].pbigcate,
                "defaultcolor": data[x].prodcolor,
                "prodcodes": data[x].prodcodes,
                "sn": 486,
                "unprice": 888,
                "catename": data[x].catename,
                "number": data[x].prodqtys,
                "prodcolor": data[x].prodcolor,
                "isnoinstall": data[x].isnoinstall,
                "isdismantling": data[x].isdismantling
            }
            saleall.push(item);
        }
        storegeeditutil("saleall", JSON.stringify(saleall));
    },
    editcacheware: function (data, sid) {
        var remember = {
            warehouseid: data["warehouseid"],
            whtype: data["whtype"],
            warehouseadress: data["warehouseadress"],
            warehouselatitude: data["warehouselatitude"],
            warehouselongitude: data["warehouselongitude"],
            mobile: data["warehousemobile"],
            linkman: data["warehouselinkman"]
        }
        storegeeditutil(sid, JSON.stringify(remember));
    }

}