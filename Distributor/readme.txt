部分文件说明:
#android版app签名密钥库
/android.keystore

#构建app安装包时的参数配置
/build.json

#热更新配置模版
/cordova-hcp.json

命令:
#添加android/ios平台,   删除的话将add换rm
cordova platform add android

#添加cordova插件(下面是添加cordova-plugin-camera插件)
cordova plugin add cordova-plugin-camera
cordova plugin add http://github.com/asdadad/asdasdasda

#添加某个插件到"开发"模式下
npm install CORDOVA_PLUGIN_NAME -save-dev

#复制www/res文件到platform中以便构建
cordova prepare PLATFORM_NAME

#构建指定平台(android)
cordova build android

#运行指定平台项目(android)
cordova run android

#使用默认模拟器运行(android)
cordova emulate android

#手动安装其它包到手机   -r 覆盖安装 ; -s 安装到SD卡; -rs覆盖安装到SD卡
adb install APK_PATH

#将实时日志信息导出到本地
adb logcat >d:/android_log.txt

可用插件:
#百度地图定位插件
#cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY="lF5TFuL7bWL0faNGnNRf1ju3ktaL3hUj" --variable IOS_KEY="4ayTENGMcGM0DWgAiQCNaGDWYGvLbggZ"

cordova plugin add https://github.com/lazydan/cordova-plugin-baidumaplocation.git --variable ANDROID_KEY="lF5TFuL7bWL0faNGnNRf1ju3ktaL3hUj" --variable IOS_KEY="4ayTENGMcGM0DWgAiQCNaGDWYGvLbggZ"  --variable IOS_LOCATION_DESC="获取当前位置，在地图上展示确切位置以及辅助地址的输入" --variable IOS_ALWAYS_LOCATION_DESC="持续获取地理位置，使我们了解您的实时位置"

#crosswalk
#cordova plugin add cordova-plugin-crosswalk-webview --variable XWALK_MULTIPLEAPK="false" --variable XWALK_FILE_SCHEME_COOKIES="true"

cordova plugin add https://github.com/lazydan/cordova-plugin-crosswalk-webview.git --variable XWALK_MULTIPLEAPK="false" --variable XWALK_FILE_SCHEME_COOKIES="true"


#WXPAY
#cordova plugin add cordova-plugin-wechat --variable wechatappid=wx8b272225f95cb3e6

cordova plugin add https://github.com/lazydan/cordova-plugin-wechat.git --variable wechatappid=wx8b272225f95cb3e6


#Alipay
cordova plugin add https://github.com/lazydan/cordova-plugin-alipay-v2.git --variable APP_ID=2018061460403322



热更新相关:
#需先安装cli工具
npm install -g cordova-hot-code-push-cli

#在www目录生成 热更新配置chcp.json 和 文件列表 chcp.manifest,  每次发布web的新版本都需要执行此命令
cordova-hcp build



