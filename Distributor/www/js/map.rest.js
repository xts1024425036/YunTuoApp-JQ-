/* 
 * 存rest api的地图接口
 */
var my_map;
var BMap = {};
BMap.Point = function (lng, lat) {
    this.lng = lng;
    this.lat = lat;
};
my_map = {
    map: null,
    isFullApi: false,
    initZoom: 12,
    init: function (mapCtnrId, centerPoint) {
        console.log("rest map init!");
    },
    getWebApi: function (_path, _success, _fail) {
        //对于百度地图Lite版, 可以通过WEB API来实现某些功能, 详见: http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding
        $.getJSON("https://api.map.baidu.com" + _path + "&output=json&ak=hKBFdF14atwb7x87j3rGmjvG33Anr1QF&callback=?",
                function (data) {
                    if (data.status === 0) {
                        _success(data);
                    } else {
                        console.log("调用地图Web API[ " + _path + " ]失败, 错误:" + JSON.stringify(data));
                        if (typeof _fail !== "undefined")
                            _fail(data);
                    }
                });
    },
    getServerApi: function (_path, _success, _fail) {
        $.getJSON("https://back.51yuntuo.com/datacenter/api/map" + _path,
                function (r) {
                    if (r.result === 1) {
                        _success(r.data);
                    } else {
                        console.log("调用地图Server API[ " + _path + " ]失败, 错误:" + JSON.stringify(r));
                        if (typeof _fail !== "undefined")
                            _fail(r);
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
        console.log("not supported in rest map");
    },
    setCenter: function () {
        console.log("not supported in rest map");
    },
    setZoom: function (zoom) {
        console.log("not supported in rest map");
    },
    zoomIn: function () {
        console.log("not supported in rest map");
    },
    zoomOut: function () {
        console.log("not supported in rest map");
    },
    panTo: function (point, noAnimation) {
        console.log("not supported in rest map");
    },
    addressToPoint: function (addr, callback, city) {
        //将地址转换成坐标点(Lite版不可用), 成功直接返回Point({lng: 114.228684, lat: 30.583715})否则为null, 可以指定城市名city做详细查询
        //my_map.addressToPoint("武汉市硚口区建一路",function(point){});
        this.getWebApi("/geocoder/v2/?address=" + addr,
                function (s) {
                    callback(s.result.location);
                },
                function (f) {
                    callback(null);
                });
    },
    pointToAddress: function (point, callback) {
        //将坐标点转换成实际地址,结果 {"point":{"lng":114.228684,"lat":30.583715},"address":"湖北省武汉市硚口区","addressComponents":{"streetNumber":"","street":"","district":"硚口区","city":"武汉市","province":"湖北省"}}
        //my_map.pointToAddress(new BMap.Point(114.228684,30.583715),function(rs){});
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
    },
    getDirectDistance: function (point1, point2) {
        //计算两点之间的直线距离,单位为米
        var lat1 = (Math.PI / 180) * point1.lat;
        var lat2 = (Math.PI / 180) * point2.lat;
        var lng1 = (Math.PI / 180) * point1.lng;
        var lng2 = (Math.PI / 180) * point2.lng;
        return  Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1)) * 6370996.81;
    },
    getPlanningDistance: function (point1, point2, callback) {
        //计算两点之前的驾车距离
        this.getServerApi("/routeMatrix?oriLat=" + point1.lat + "&oriLng=" + point1.lng + "&desLat=" + point2.lat + "&desLng=" + point2.lng,
                function (s) {
                    callback(s.distance.value);
                },
                function (f) {
                    callback(null);
                });
    },
    addMarker: function (_overlay) {
        console.log("not supported in rest map");
    },
    removeMarker: function (_overlay) {
        console.log("not supported in rest map");
    },
    clearAllMarkers: function () {
        console.log("not supported in rest map");
    },
    changeMap: function () {
        console.log("not supported in rest map");
    },
    searchOther: function (region, queryStr, callback, pageSize, pageNum) {
        //地址检索
        if (pageSize === undefined || pageSize < 0) {
            pageSize = 20;
        }
        if (pageNum === undefined || pageNum < 0) {
            pageNum = 0;
        }
        this.getWebApi("/place/v2/search?query=" + queryStr + "&region=" + region + "&page_size=" + pageSize + "&page_num=" + pageNum + "&city_limit=true",
                function (s) {
                    var _rePois = {};
                    _rePois.total = s.total;
                    _rePois.pois = s.results;
                    var _ftrPois = [];
                    for (var i = 0; i < s.results.length; i++) {
                        var _curPoi = s.results[i];
                        //过滤掉公交站等简化地址
                        if (_curPoi.detail !== 0) {
                            _ftrPois.push(_curPoi);
                        }
                    }
                    if (_ftrPois.length > 0) {
                        _rePois.city = _ftrPois[0].city;
                        _rePois.province = _ftrPois[0].province;
                    }
                    _rePois.getCurrentNumPois = function () {
                        return _ftrPois.length;
                    };
                    _rePois.getPoi = function (index) {
                        var _poi = _ftrPois[index];
                        return {
                            address: _poi.address,
                            city: _poi.city,
                            point: _poi.location,
                            province: _poi.province,
                            tags: [],
                            title: _poi.name,
                            uid: _poi.uid
                        };
                    };
                    if (isnotnull(_rePois.city) && isnotnull(_rePois.province)) {
                        callback(_rePois);
                    } else {
                        callback(null);
                    }
                },
                function (f) {
                    callback(null);
                });
    },
    addressSuggestion: function (region, queryStr, callback, cityLimit) {
        //地点输入提示
        this.getWebApi("/place/v2/suggestion?query=" + queryStr + "&region=" + region + "&city_limit=" + cityLimit,
                function (s) {
                    callback(s);
                },
                function (f) {
                    callback(null);
                });
    }
};