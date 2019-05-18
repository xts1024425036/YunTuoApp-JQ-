/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var fileurl;
//var staticmessage = {};
//var picList = new Array();

function cameraTakePicture(num, pid) {
    ImagePicker.getPictures(function (result) {
        htmledit(result, pid);
    }, function (err) {
        var msg = JSON.stringify(err).indexOf("已取消") > 0 ? "相册已取消" : "请按照要求选择:" + err;
        refushmessage(msg);
    }, {
        maximumImagesCount: num,
        width: 1920,
        height: 1440,
        quality: 100
    });
}
//上传图片公共类
//uptype:driverdistributor/other
//date:时间戳
function uploadFile(fileurl, name, gid, number, uptype, imgtype, date, imgfirst, gsid) {
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = name;
    options.mimeType = "text/plain";
    var headers = {'headerParam': 'headerValue'};
    options.headers = headers;
    //上传附带参数
    var params = {};
    params.gid = gid;
    params.gsid = gsid;
    params.number = number;
    params.imgfirst = imgfirst;
    params.date = date;
    params.uptype = uptype;
    params.imgtype = imgtype;
    options.params = params;
//            options.httpMethod = "POST";
//设置提交方式，可以修改，修改方式如上
    var ft = new FileTransfer();
    ft.upload(fileurl, encodeURI(staticmessage.url + "file/upimgcommon"), onSuccess, onError, options);
    function onSuccess(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
        uploadhelp(r.response);
    }
    function onError(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
}

function uploadimg() {
    uploadFile();
}

//function uploadact() {
//    $("#pic_item_add_id").on("mousedown", cameraGetPicture);
//}
