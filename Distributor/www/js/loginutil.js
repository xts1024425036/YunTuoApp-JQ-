/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var login_util = {
    countdown: function (_generate_code) {
        _generate_code.addClass("sendOk");
        var countdown = 59;
        var time60 = setInterval(function () {
            if (countdown == 0) {
                sendcode = true;
                _generate_code.removeClass("sendOk");
                _generate_code.attr("disabled", false);
                _generate_code.text("发送验证码");
                clearInterval(time60);
            } else {
                _generate_code.text("重新发送(" + countdown + ")");
                countdown--;
            }
        }, 1000);
    },
    createcache: function (data) {
        storegeeditutil('gsid', data.gsid);
        storegeeditutil('username', data.username);
        storegeeditutil('name', data.name);
        storegeeditutil('userid', data.userid);
        storegeeditutil('distributid', data.distributid);
        storegeeditutil('groupid', data.groupid);
        storegeeditutil('power', data.power);
        storegeeditutil('needstorage', data.needstorage);
        storegeeditutil('shoplevel', data.shoplevel);
        storegeeditutil('token', data.token);
        if (isnotnull(data.url)) {
            window.location.href = data.url;
        } else {
            refushmessage("跳转失败");
        }
    }
}
