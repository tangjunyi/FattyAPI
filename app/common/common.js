'use strict';
const request = require('request');
const rp = require('request-promise');
module.exports = function() { 
    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
    // 例子： 
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
    Date.prototype.Format = function(fmt) { //author: meizz 
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds(), //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    //定义全局加载js文件方法
    global.loadScript = function(classIdentifer) {
        let result = false;
        let exp = null;
        try {
            result = require(config.appBaseDir + classIdentifer);
        } catch (e) {
            exp = e;
        }
        if (result) return result;
        throw exp;
    }

    //全局定义Service层载入文件方法
    global.importService = function(url) {
        let ServiceClass = loadScript(url);
        return 'function' === typeof ServiceClass ? new ServiceClass : ServiceClass;
    }

    //全局定义Controller层载入文件方法
    global.importController = function(url) {
        let ControllerClass = loadScript(url);
        return 'function' === typeof ControllerClass ? new ControllerClass : ControllerClass;
    }

    //全局定义请求方法
    global.__Ajax = function(url, params, res) {
        let apiUrl = config.openapi + url;
        let options= {
            method:'post',
            uri: apiUrl,
            body: params,
            headers:{
                'User-Agent': 'Request-Promise',
                'contentType': 'application/json; charset=utf-8'
            },
            json: true
        };
        return rp(options).then(function(data){
            console.log(ajaxLogs());
            function ajaxLogs() {
                let backStr = '[' + new Date().Format("yyyy-MM-dd hh:mm:ss.S") + '][INFO][FattyAPI] - {"project":"FattyAPI", "method":"POST", "uri":"' + apiUrl + '", "response":"' + JSON.stringify(data) + '"}';
                return backStr;
            }
            return data;
        });
    }
}