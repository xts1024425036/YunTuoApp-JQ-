//地图相关接口, 此处坐标点都为百度经纬度坐标(类型为bd09ll)
//百度demo  http://lbsyun.baidu.com/jsdemo.htm#i7_1
var my_map;
var mapApiUrlV3 = "http://api.map.baidu.com/api?v=3.0&ak=hKBFdF14atwb7x87j3rGmjvG33Anr1QF";
var mapApiUrlLite = "http://api.map.baidu.com/api?ak=hKBFdF14atwb7x87j3rGmjvG33Anr1QF&type=lite&v=1.0";

//加载js API文件
var script = document.createElement("script");
script.type = "text/javascript";
script.src = mapApiUrlV3 + "&callback=_maponload";
document.getElementsByTagName('head')[0].appendChild(script);
function _maponload() {
    console.log("map api loaded");
}
//下面方法添加onload事件防止事件被覆盖
if (document.all) {
    window.attachEvent("onload", consCusOverlay);//对于IE
} else {
    window.addEventListener("load", consCusOverlay, false);//对于FireFox
}

//构建自定义地图覆盖物, 由于百度map相关文件加载问题,需在windiw.onload里面执行Overlay的定义
function consCusOverlay() {
    console.log("overlay load");
    my_map.TruckOverlay = function (point) {
        this._point = point;
    };
    my_map.TruckOverlay.prototype = new BMap.Overlay();
    my_map.TruckOverlay.prototype.initialize = function (map) {
        this._map = map;
        var div = this._div = document.createElement("div");
        div.className = "truck-maker";

        var _that = this;
        //div.onmouseover = function () {};

        //div.onmouseout = function () {};

        this._map.getPanes().markerPane.appendChild(div);
        return div;
    };
    my_map.TruckOverlay.prototype.draw = function () {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x + "px";
        this._div.style.top = pixel.y + "px";
    };

}

my_map = {
    map: null,
    isFullApi: false,
    initZoom: 12,
    init: function (mapCtnrId, centerPoint) {
        if (typeof BMap === "undefined") {
            alert("百度地图初始化失败, 为引入百度地图jsapi!");
            return;
        }
        this.isFullApi = /\d+\.\d+/.test(BMap.version);//引入的js为Lite版时此处为false (Lite为轻量版,少很多功能,而且在file:// 链接下引入无法加载某些文件)
        this.map = new BMap.Map(mapCtnrId);
        if (typeof centerPoint !== "undefined") {
            this.map.centerAndZoom(centerPoint, this.initZoom);
        } else {
            this.map.centerAndZoom(new BMap.Point(114.3162001, 30.58108413), this.initZoom);
            this.getLocation(function (loc) {
                if (loc.success) {
                    var loc = new BMap.Point(loc.lng, loc.lat);
                    my_map.map.centerAndZoom(loc, 16);
                }
            });
        }
        this.map.addControl(this.isFullApi ? new BMap.NavigationControl() : new BMap.ZoomControl());
    },
    getWebApi: function (_path, _success, _fail) {
        //对于百度地图Lite版, 可以通过WEB API来实现某些功能, 详见: http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding
        $.getJSON("http://api.map.baidu.com" + _path + "&output=json&ak=hKBFdF14atwb7x87j3rGmjvG33Anr1QF&callback=?",
                function (data) {
                    if (data.status === 0) {
                        _success(data);
                    } else {
                        console.log("调用地图Web API[ " + _path + " ]失败, " + data.msg);
                        if (typeof _fail !== "undefined")
                            _fail(data);
                    }
                });
    },
    getLocation: function (locCallback) {
        //获取手机定位result {"success":true,"latitude":30.58108413,"longitude":114.3162001,"radius":40,"countryCode":"0","country":"中国","citycode":"218","city":"武汉市","district":"硚口区","street":"建一路","addr":"中国湖北省武汉市硚口区建一路1号","province":"湖北省","userIndoorState":1,"direction":-1,"locationDescribe":"在硚口宗关店附近"}
        if (typeof (baidumap_location) === "undefined") {
            console.log("未找到APP定位插件");
            locCallback({success: false, resultDesc: "未找到定位插件"});
            return;
        }
        baidumap_location.getCurrentPosition(function (result) {
            if (/^[0-9]+.?[0-9]*$/.test(result.longitude)) {
                result.lng = result.longitude;
                result.lat = result.latitude;
                result.success = true;
            } else {
                result.success = false;
                result.resultDesc = result.locTypeDescription;
            }
            locCallback(result);
        }, function (error) {
            locCallback({success: false, resultDesc: error});
        });
    },
    getCenter: function () {
        //获取当前地图的中心点坐标Point: {lng:Number,lat:Number}
        return this.map.getCenter();
    },
    setCenter: function () {
        //设置地图的中心点.  setCenter(100.123,30.123); setCenter({lnt:100.123,lat:30.123});
        if (arguments.length <= 0)
            return;
        if (typeof arguments[0] === "object") {
            this.map.setCenter(arguments[0]);
        } else if (arguments.length >= 2) {
            this.map.setCenter(new BMap.Point(arguments[0], arguments[1]));
        }
    },
    setZoom: function (zoom) {
        //将视图切换到指定的缩放等级，中心点坐标不变。 取值:1~18
        this.map.setZoom(zoom);
    },
    zoomIn: function () {
        //放大一级视图
        this.map.zoomIn();
    },
    zoomOut: function () {
        //缩小一级视图
        this.map.zoomOut();
    },
    panTo: function (point, noAnimation) {
        //将地图的中心点更改为给定的点。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置，强制移动过程不使用动画效果
        this.map.panTo(point, (noAnimation || false));
    },
    addressToPoint: function (addr, callback, city) {
        //将地址转换成坐标点(Lite版不可用), 成功直接返回Point({lng: 114.228684, lat: 30.583715})否则为null, 可以指定城市名city做详细查询
        //my_map.addressToPoint("武汉市硚口区建一路",function(point){});
        if (this.isFullApi) {
            var _myGeo = new BMap.Geocoder();
            _myGeo.getPoint(addr, callback, city);
        } else {
            this.getWebApi("/geocoder/v2/?address=" + addr,
                    function (s) {
                        callback(s.result.location);
                    },
                    function (f) {
                        callback(null);
                    });
        }
    },
    pointToAddress: function (point, callback) {
        //将坐标点转换成实际地址,结果 {"point":{"lng":114.228684,"lat":30.583715},"address":"湖北省武汉市硚口区","addressComponents":{"streetNumber":"","street":"","district":"硚口区","city":"武汉市","province":"湖北省"}}
        //my_map.pointToAddress(new BMap.Point(114.228684,30.583715),function(rs){});
        if (this.isFullApi) {
            var _myGeo = new BMap.Geocoder();
            _myGeo.getLocation(point, callback);
        } else {
            this.getWebApi("/geocoder/v2/?location=" + point.lat + "," + point.lng + "&pois=1&radius=200",
                    function (s) {
                        var _rs = {point: s.result.location,
                            address: s.result.formatted_address,
                            business: s.result.business,
                            addressComponents: s.result.addressComponent,
                            pois: s.result.pois};
                        callback(_rs);
                    },
                    function (f) {
                        callback(null);
                    });
        }
    },
    getDirectDistance: function (point1, point2) {
        //计算两点之间的直线距离,单位为米
        var _dist;
        var lat1 = (Math.PI / 180) * point1.lat;
        var lat2 = (Math.PI / 180) * point2.lat;
        var lng1 = (Math.PI / 180) * point1.lng;
        var lng2 = (Math.PI / 180) * point2.lng;
        _dist = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1)) * 6370996.81;
        return _dist;
    },
    getPlanningDistance: function (point1, point2, callback) {
        var _dist;
        var options = {
            policy: BMAP_DRIVING_POLICY_DEFAULT,
            onSearchComplete: function (results) {
                if (driving.getStatus() == BMAP_STATUS_SUCCESS) {
                    _dist = results.getPlan(0).getDistance(false);
                    callback(_dist);
                }
            }
        };
        var driving = new BMap.DrivingRoute(this.map, options);
        driving.search(point1, point2);
    },
    addMarker: function (_overlay) {
        //添加标记覆盖物
        //my_map.addMarker(new BMap.Marker( new BMap.Point(116.400244,39.92556) ));
        this.map.addOverlay(_overlay);
    },
    removeMarker: function (_overlay) {
        //移除标记覆盖物
        this.map.removeOverlay(_overlay);
    },
    clearAllMarkers: function () {
        //清除所有标记
        this.map.clearOverlays();
    },
    changeMap: function () {
        this.map.addEventListener("dragend", function () {
            var centerselect = my_map.getCenter();
            var pointselect = new BMap.Point(centerselect.lng, centerselect.lat);
            changeMapSelect(pointselect);
        });
    },
    searchOther: function (param, changeMapSelect) {
        var options = {
            onSearchComplete: function (results) {
                if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                    //调用回调函数
                    changeMapSelect(results);
                }
            }
        };
        var local = new BMap.LocalSearch(this.map, options);
        local.search(param);
    }
};





