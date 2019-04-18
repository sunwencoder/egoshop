/*JavaScript Document
 * @author  dqzhai 2012-8
 */
/**
 * empty String
 */
var emptyString = '';
/**
 * JS 模拟StringBuffer
 */
function StringBuffer() {
    this._things_ = new Array();
};
/**
 * JS 实现 类似 java StringBuffer 的append 方法
 *
 * @param str
 * @return
 */
StringBuffer.prototype.append = function(str) {
    this._things_.push(str);
    return this;
};
/**
 * JS 实现 类似 java StringBuffer 的toString 方法
 *
 * @return
 */
StringBuffer.prototype.toString = function() {
    return this._things_.join(emptyString);
};

String.prototype.startWith = function(str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
};
/**
 * 判断字符串是不是以str结尾
 *
 * @param str
 * @return
 */
String.prototype.endWith = function(str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
};
/**
 * js中String 没有去掉空格的函数 因此必须自己定义 去掉String 两边的空格,(不去除字符串中间存在的空格)
 *
 * @return String
 */

String.prototype.trim = function() {
    return this.replace(/^\s\s*/, emptyString).replace(/\s\s*$/, emptyString);
};
/**
 * 判断是否相等，区分大小写
 *
 * @param {Object}
 *            str
 * @memberOf {TypeName}
 * @return {TypeName}
 */
var equals4String = function(str1, str2) {
    if (str1 == null && str2 == null) {
        return true;
    }
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }
};
/**
 * toUpperCase
 *
 * @param {Object}
 *            str
 * @param {Object}
 *            flag
 * @return {TypeName}
 */
var toUpperCase = function(str, flag) {
    if (str === null)
        return emptyString;
    if (flag == null || flag == false)
        return str.trim().toUpperCase();
    else
        return str.trim().toLocaleLowerCase();
};
/**
 * toLowerCase
 *
 * @param {Object}
 *            str
 * @param {Object}
 *            flag
 * @return {TypeName}
 */
var toLowerCase = function(str, flag) {
    if (str === null)
        return emptyString;
    if (flag == null || flag == false)
        return str.trim().toLowerCase();
    else
        return str.trim().toLocaleUpperCase();
};
/**
 *
 * @param {Object}
 *            str
 * @param {Object}
 *            startIndex
 * @param {Object}
 *            length
 * @return {TypeName}
 */
var substr = function(str, startIndex, length) {
    if (str == null || length <= 0)
        return emptyString;
    var strLength = str.length;
    if (startIndex >= strLength)
        return emptyString;
    if (startIndex < 0) {
        startIndex += strLength;
    }
    if (length != null && (startIndex + length > strLength))
        return str.substr(startIndex);
    return str.substr(startIndex, length);
};
/**
 *
 * @param {Object}
 *            str
 * @param {Object}
 *            startIndex
 * @param {Object}
 *            endIndex
 * @return {TypeName}
 */
var substring = function(str, startIndex, endIndex) {
    if (str == null)
        return emptyString;
    var strLength = str.length;
    if (endIndex == null) {
        if (startIndex >= strLength)
            return emptyString;
        if (startIndex < 0)
            startIndex = 0;
        return str.substring(startIndex);
    } else {
        if (startIndex > endIndex) {
            var temp = endIndex;
            endIndex = startIndex;
            startIndex = temp;
        }
        if (startIndex >= strLength)
            return emptyString;
        if (endIndex > strLength) {
            endIndex = strLength;
        }
        return str.substring(startIndex, endIndex);
    }
};

/**
 * 判断是否相等，不区分大小写
 *
 * @param {Object}
 *            str
 * @memberOf {TypeName}
 * @return {TypeName}
 */
var equalsIgnoreCase4String = function(str1, str2) {
    if (str1 == null && str2 == null) {
        return true;
    }
    if (str1 == null) {
        return false;
    } else {
        if (str2 == null) {
            return false;
        }
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        if (str1 == str2) {
            return true;
        } else {
            return false;
        }
    }
};

/**
 * 去掉 String 左边的空格
 *
 * @return String
 */

String.prototype.leftTrim = function() {
    return this.replace(/(^\s*)/g, emptyString);
};

var trimToEmpty = function(str) {
    return isEmpty(str) ? emptyString : str.trim();
};
var trimToNull = function(str) {
    return isNull(str) ? null : str.trim();
}

/**
 * 去掉 String 右边的空格
 *
 * @return String
 */
String.prototype.rightTrim = function() {
    return this.replace(/(\s*$)/g, emptyString);
};
/**
 * 替换所有 的
 *
 * @param {}
 *            s1
 * @param {}
 *            s2
 * @return {}
 */
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}
/**
 * split去除为空的字符串
 *
 * @param {Object}
 *            str
 * @memberOf {TypeName}
 * @return {TypeName}
 */
String.prototype.split4RemoveEmpty = function(str) {
    if (this == null)
        return null;
    var dest = [];
    if (this.length == 0) {
        dest[0] = '';
        return dest;
    }
    var temp = this.split(str)
    var srcLength = temp.length;
    var j = 0;
    for (var i = 0; i < srcLength; i++) {
        if (temp[i] == null || temp[i] == emptyString
            || $.trim(temp[i]) == emptyString)
            continue;
        dest[j++] = temp[i];
    }
    return dest;
};

/**
 * 是否为null,ture:null null:true "" : true " ":false;
 *
 * @param {}
 *            str
 * @return {Boolean}
 */
function isNull(str) {
    if (null == str || emptyString == str) {
        return true;
    }
    return false;
};
/**
 * null:true "" : true " ":false;
 *
 * @param {Object}
 *            str
 * @return {TypeName}
 */
var isEmpty = function(str) {
    if (null == str || emptyString == str.trim()) {
        return true;
    }
    return false;
};
/**
 * @param {Object}
 *            str
 * @return {TypeName}
 */
function isNotNull(str) {
    return !isNull(str)
};
function isNotEmpty(str) {
    return !isEmpty(str);
};
/**
 * 转换json串
 *
 * @memberOf {TypeName}
 * @return {TypeName}
 */
String.prototype.strToJson = function() {
    if (isNull(this)) {
        return null;
    } else {
        return eval('(' + this + ')');
    }
}

function isChinse(data) {
    // /^[\\u4E00-\\u9FA5]+$/ =/^[\\u4E00-\\u9FA5]+$/;
    var pattern = /^[\u4E00-\u9FA5]+$/;
    if (data != null) {
        for (var i = 0; i < data.length; i++) {
            if (!pattern.test(data)) {
                return false;
            }
        }
    }
    return true;
};
/**
 * 判断是否为数字
 *
 * @param input
 * @returns {Boolean}
 */
function isNum(input) {
    var re = /^[0-9]+.?[0-9]*$/; // 判断字符串是否为数字
    if (!re.test(input)) {
        // alert("请输入数字(例:0.02)");
        return false;
    }
    return true;
};
/**
 * 验证是否字母和字母组合
 *
 * @param {Object}
 *            data
 * @return {TypeName}
 */
function isNumberAndChar(data) {
    var pattern = /^[0-9a-zA-Z]*$/;
    if (pattern.test(data)) {
        return true;
    } else {
        return false;
    }
};
function isMobile(data) {
    var PHONE_RES = /^[1][34578][0-9]{9}$/;
    if (PHONE_RES.test(data)) {
        return true;
    }
    return false;
};
/**
 * 函数参数必须是字符串，因为二代身份证号码是十八位， 而在javascript中，十八位的数值会超出计算范围，
 * 造成不精确的结果，导致最后两位和计算的值不一致， 从而该函数出现错误。
 *
 * @param idcode
 * @returns
 */
function checkIdCard(idcode) {
    // 加权因子
    var weight_factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
    // 校验码
    var check_code = [ '1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2' ];

    var code = idcode + "";
    var last = idcode[17];// 最后一个

    var seventeen = code.substring(0, 17);

    // ISO 7064:1983.MOD 11-2
    // 判断最后一位校验码是否正确
    var arr = seventeen.split("");
    var len = arr.length;
    var num = 0;
    for (var i = 0; i < len; i++) {
        num = num + arr[i] * weight_factor[i];
    }
    // 获取余数
    var resisue = num % 11;
    var last_no = check_code[resisue];
    // 格式的正则
    // 正则思路
    /*
     * 第一位不可能是0 第二位到第六位可以是0-9 第七位到第十位是年份，所以七八位为19或者20 十一位和十二位是月份，这两位是01-12之间的数值
     * 十三位和十四位是日期，是从01-31之间的数值 十五，十六，十七都是数字0-9 十八位可能是数字0-9，也可能是X
     */
    var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;

    // 判断格式是否正确
    var format = idcard_patter.test(idcode);

    // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
    return last === last_no && format ? true : false;
}

function isChar(data) {
    var pattern = /^[a-zA-Z]*$/;
    if (pattern.test(data)) {
        return true;
    } else {
        return false;
    }
};
/**
 * 验证email格式
 *
 * @param {Object}
 *            str
 * @return {TypeName}
 */
function isEmail(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str);
};
/**
 * ajax编码 {汉字}
 */
var ajaxEncode = function(o) {
    return encodeURIComponent(encodeURIComponent(o));
};
/**
 * 验证是否由数字组成
 *
 * @param {Object}
 *            data
 * @return {TypeName}
 */
function isNumber(data) {
    var pattern = /^[0-9]*$/;
    if (pattern.test(data)) {
        return true;
    } else {
        return false;
    }
};

/**
 * 判断是否是正整数
 *
 * @param str
 * @return true :是，false 否
 */

function isPositiveInteger(str) {
    var res = /^[0-9]*[1-9][0-9]*$/;// 正整数
    if (res.test(str)) {
        return true;
    } else {
        return false;
    }
};
/**
 * 判断是否是大于等于0的整数() {快于isPositiveInteger()}
 *
 * @param str
 * @return true :是，false 否
 */
function isPositiveIntegerAnd0(str) {
    if (isNull(str)) {
        return false;
    }
    if (isNaN(str)) {
        return false;
    }
    if (stopDay.split('.').length > 1) {
        return false;
    }
    if (parseInt(str) < 0) {
        return false;
    }
    return true;
}
/**
 * 数组中不能有重复的元素
 *
 * @param {}
 *            array1 数组1
 * @param {}
 *            array2 数组2
 * @param {}
 *            flag true：数组下标对应的标识必须相同,false：具有相同的元素
 */
function arrayIsEquals(array1, array2, flag) {
    if (array1 == null && array2 == null)
        return true;
    if (array1 == undefined && array2 == undefined)
        return true;
    if (array1.length != array2.length)
        return false;
    if (flag) {
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i])
                return false;
        }
        return true;
    } else {
        var staticValue = '-';
        var map1 = new Map();
        var map2 = new Map();
        for (var i = 0; i < array1.length; i++) {
            map1.put(array1[i], staticValue);
            map2.put(array2[i], staticValue);
        }
        if (map1.size() != map2.size())
            return false;
        var temp = map1.keyArray();
        for (var i = 0; i < temp.length; i++) {
            if (map2.get(temp[i]) != staticValue)
                return false;
        }
        return true;
    }
};
/**
 * 转换字符串为日期形式 字符串格式:yyyy-MM-dd HH:mm:ss
 *
 * @memberOf {TypeName}
 * @return {TypeName}
 */
String.prototype.toDate = function(hasTime) {
    if (getDataType(hasTime) != 'Boolean') {
        hasTime = false;
    }
    var strs, strTime;
    if (hasTime) {
        var tempStr = this.split(" ");
        strs = tempStr[0].split("-");
        strTime = tempStr[1].split(":");
    } else {
        strs = this.split("-");
    }
    if (strs[2].length == 1) {
        strs[2] = "0" + strs[2];
    }
    if (strs[1].length == 1) {
        strs[1] = "0" + strs[1];
    }
    var yStr, mStr, dStr;
    yStr = strs[0];
    mStr = strs[1] - 1; // 月份从0开始
    dStr = strs[2];
    var date = new Date();
    date.setFullYear(yStr, mStr, dStr);
    if (hasTime) {
        date.setHours(strTime[0], strTime[1], strTime[2]);
    }
    return date;
};
/**
 * 判断元素是否在数组中
 *
 * @param {Object}
 *            str
 * @param {Object}
 *            arrays
 * @return {TypeName}
 */
var contains = function(str, arrays) {
    var indexOf = -1;
    if (arrays == null || getDataType(arrays) != 'Array')
        return indexOf;
    for (var i = 0; i < arrays.length; i++) {
        if (str == arrays[i]) {
            indexOf = i;
            break;
        }
    }
    return indexOf;
};
/**
 * double 相加
 *
 * @param {Object}
 *            arg1
 * @param {Object}
 *            arg2
 * @return {TypeName}
 */
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m;
};
/**
 * double 相乘
 *
 * @param {Object}
 *            arg1
 * @param {Object}
 *            arg2
 * @return {TypeName}
 */
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) {
    }
    try {
        m += s2.split(".")[1].length
    } catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", ""))
        / Math.pow(10, m);
}
/**
 * jquery 支持
 *
 * @param {Object}
 *            selector jqeruy 选择器
 * @param {Object}
 *            attr 属性
 * @param {Object}
 *            value 值
 */
function selectedOption(selector, attr, value) {
    // $("#statusSelector").find("option[value='"+querySation+"']").attr("selected",true);
    // $("#statusSelector
    // option[value='"+querySation+"']").attr("selected",true);
    var selectorExp = selector + ' option[' + attr + '="' + value + '"]';
    $(selectorExp).attr("selected", true);
};
function checkedRadio(selector, attr, value) {
    var selectorExp = selector + '[' + attr + '="' + value + '"]';
    $(selectorExp).attr('checked', true);
}
/**
 * jquery 支持
 *
 * @param {Object}
 *            selector jqeruy 选择器
 * @param {Object}
 *            attr 属性
 * @return {TypeName}
 */
function getValue(selector, attr) {
    if (attr == null || attr == undefined)
        return $(selector).val();
    return $(selector).attr(attr)
};

/**
 * jquery 支持
 *
 * @param {Object}
 *            selector
 * @param {Object}
 *            isShow
 */
function showOrHidden(selector, isShow) {
    if (isShow)
        $(selector).css('display', 'block');
    else
        $(selector).css('display', 'none');
    // $("#top_notice").attr("style", "display:block;");//第2种方法
    // $("#top_notice").show();//第3种方法
    // $("#top_notice").hide();//第3种方法
}

var beforeSubmit = function() {
    return true;
};
var afterSubmit = function(data) {

};

/**
 * http://malsup.github.io/jquery.form.js ajax jquery form
 */
var options = {
    // target: '#output1', // target element(s) to be updated with server
    // response
    beforeSubmit : beforeSubmit, // pre-submit callback
    success : afterSubmit
// post-submit callback

// other available options:
// url: url // override for form's 'action' attribute
// type: type // 'get' or 'post', override for form's 'method' attribute
// dataType: null // 'xml', 'script', or 'json' (expected server response type)
// clearForm: true // clear all form fields after successful submit
// resetForm: true // reset the form after successful submit

// $.ajax options can be used here too, for example:
// timeout: 3000
};
function isMobileDevice() {
    var userAgentInfo = navigator.userAgent;
    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone",
        "iPad", "iPod" ];
    var mobile_flag = false;
    // 根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    if (mobile_flag) {
        return mobile_flag;
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;
    // 根据屏幕分辨率判断是否是手机
    if (screen_width < 500 && screen_height < 800) {
        mobile_flag = true;
    }
    return mobile_flag;
}