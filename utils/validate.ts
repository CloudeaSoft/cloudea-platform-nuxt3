/**
 * 字符串是否为空
 * @param {*} str
 * @returns
 */
function isEmpty(str: string) {
  if (str === null || str === "" || str === undefined) {
    return true;
  }
  return false;
}

/**
 * 是否包含中文
 * @param {*} str
 * @returns
 */
function hasChinese(str: string) {
  if (/.*[\u4e00-\u9fa5]+.*$/.test(str)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 校验手机号码
 * @param {*} str
 * @retrun 正确返回 true，错误返回 false
 */
function checkMobilephone(str: string) {
  return /^1[3456789]\d{9}$/.test(str);
}

/**
 * 校验邮箱
 * @param {*} str
 * @retrun 正确返回 true，错误返回 false
 */
function checkEmail(str: string) {
  return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
    str
  );
}

/**
 * 校验是否是整数
 * @param {*} str
 * @retrun 正确返回 true，错误返回 false
 */
function checkInteger(str: string) {
  return /^\d+$/g.test(str);
}
/**
 * 只允许输入数字
 * @param {*} str
 * @retrun 数字
 */
function onlyNum(e: string) {
  if (e == "0") {
    return "";
  } else {
    let c = e.replace(/^\.+|[^\d]/g, "");
    return c;
  }
}
/**
 * 只允许输入数字和小数点
 * @param {*} str
 * @retrun 数字
 */
function onlyNumPoint(e: string) {
  if (e == "00") {
    return "0";
  }
  let c = e.replace(/^\.+|[^\d.]/g, "");
  return c;
}
/**
 * 只允许输入数字和小数点并保留三位小数
 * @param {*} str
 * @retrun 数字
 */
function onlyNumPointThree(e: string) {
  if (e == "00") {
    return "0";
  }
  if (e == ".") {
    return "";
  }
  // let c = ""
  // var re = /([0-9]+\.[0-9]{3})[0-9]*/;
  // c = e.replace(re,"$1");
  const reg = /\d+\.?(\d{1,3})?/;
  const res = e.match(reg);
  const num = res ? res[0] : "";
  return num;
  // return c
}
/**
 * 只允许输入数字和小数点并保留5位小数
 * @param {*} str
 * @retrun 数字
 */
function onlyNumPointFive(e: string) {
  if (e == "00") {
    return "0";
  }
  if (e == ".") {
    return "";
  }
  // let c = ""
  // var re = /([0-9]+\.[0-9]{3})[0-9]*/;
  // c = e.replace(re,"$1");
  const reg = /\d+\.?(\d{1,5})?/;
  const res = e.match(reg);
  const num = res ? res[0] : "";
  return num;
  // return c
}
/**
 * 只允许输入正负整数
 * @param {*} str
 * @returns
 */
function onlyPNNum(e: string) {
  if (e == "-") {
    return e;
  }
  const reg = /-?\d+/;
  const res = e.match(reg);
  const num = res ? res[0] : "";
  return num;
}

/**
 * 只允许输入正整数 和 0
 * @param {*} str
 * @returns
 */
function onlyNumOrZero(e: string) {
  if (e == "0") {
    return e;
  }
  const reg = /^([1-9]\d*|[0]{1,1})$/;
  const res = e.match(reg);
  const num = res ? res[0] :'' ;
  return num;
}

export default {
  isEmpty,
  hasChinese,
  checkMobilephone,
  checkEmail,
  checkInteger,
  onlyNum,
  onlyNumPoint,
  onlyNumPointThree,
  onlyNumPointFive,
  onlyPNNum,
  onlyNumOrZero,
};
