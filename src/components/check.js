// 密码格式
function validPassword(str) {
  // const regPsw = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/; // 必须包含数字和字母，且长度范围为6~20
  // const regPsw = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/ // 只能包含数字和字母，且长度范围为8~20
  // const regPsw = /^(?=.*[a-z,A-Z])(?=.*\d)[^]{7,16}$/ // 至少包含数字和字母，且长度范围为7~16
  const regPsw = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,16}$/ // 必须包含数字、字母、特殊符号中的两种，不包含中文和空格，且长度范围为8~16
  return regPsw.test(str)
}

/**
 * 邮箱
 * @param {*} s
 */
function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
function isMobile(s) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * 手机号码和电话号码
 * @param {*} s
 */
function isTel(str) {
  return /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/.test(str)
}

/**
 * URL地址
 * @param {*} s
 */
function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s)
}

/* 合法uri */
function validateURL(textval) {
  const urlregex =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 验证pad还是pc */
const vaildatePc = function () {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
function validateEmail(email) {
  const re =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * 判断身份证号码
 */
function cardid(code) {
  let pass
  var city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  }
  var tip = ''
  pass = true

  if (!code || !/^\d{17}(\d|X)$/i.test(code)) {
    tip = '身份证号格式错误'
    pass = false
  } else if (!city[code.substr(0, 2)]) {
    tip = '地址编码错误'
    pass = false
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split('')
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      //校验位
      var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
      var sum = 0
      var ai = 0
      var wi = 0
      for (var i = 0; i < 17; i++) {
        ai = code[i]
        wi = factor[i]
        sum += ai * wi
      }
      var last = parity[sum % 11]
      if (parity[sum % 11] != code[17]) {
        tip = '校验位错误'
        pass = false
      }
    }
  }
  return tip
}

/**
 * 判断手机号码是否正确
 */
function isvalidatemobile(phone) {
  const list = []
  let result = true
  let msg = ''
  var isPhone = /^0\d{2,3}-?\d{7,8}$/
  // 增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]
  if (!validatenull(phone)) {
    if (phone.length === 11) {
      if (isPhone.test(phone)) {
        msg = '手机号码格式不正确'
      } else {
        result = false
      }
    } else {
      msg = '手机号码长度不为11位'
    }
  } else {
    msg = '手机号码不能为空'
  }
  list.push(result)
  list.push(msg)
  return list
}

/**
 * 判断手机号码是否正确（可以为空）
 */
function isValidateNoneMobile(phone) {
  const list = []
  let result = true
  let msg = ''
  var isPhone = /^0\d{2,3}-?\d{7,8}$/
  // 增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]
  if (!validatenull(phone)) {
    if (phone.length === 11) {
      if (isPhone.test(phone)) {
        msg = '手机号码格式不正确'
      } else {
        result = false
      }
    } else {
      msg = '手机号码长度不为11位'
    }
  } else {
    result = false
  }
  list.push(result)
  list.push(msg)
  return list
}

/**
 * 判断姓名是否正确
 */
function validateName(name) {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/
  if (!regName.test(name)) return false
  return true
}

/**
 * 判断是否为整数，包括0
 * 001, 002 验证通过
 */
function validateInteger(num) {
  const reg = /^\d+$/
  return reg.test(num)
}

/**
 * 判断是否为整数，包括0
 * 验证通过场景：0、 0.00、 10.00、 0.000（即以小数点无数个0结束都通过）
 * 验证不通过场景：00、 010、 00.2、20.01（0开头和小数大于0.1结束都不通过）
 */
function validateIntegerIncludeDecimalZero(num) {
  const reg = /(^[1-9]([0-9]+)?(\.[0]*)?$)|(^(0){1}$)|(^[0-9]\.[0]([0]*)?$)/
  return reg.test(num)
}

/**
 * 至多只能输入两位小数，不包括0；可0.**开头;type='3',可以输入三位小数
 */
function validateTwoDecimalNotZero(str, type) {
  // const reg = /^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/ eg：001校验是通过的
  let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)/
  if (type == '3') {
    reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,3})?$)|(^[0-9]\.[0-9]([0-9])([0-9])?$)/
  }
  return reg.test(str)
}

/**
 * 至多只能输入两位小数，包括0；可0.**开头 ;type='3',可以输入三位小数
 * 验证通过场景：0、 0.1、 0.01、 0.10
 * 验证不通过场景：00、 010、 00.2
 */
function validateTwoDecimalInZero(val, type) {
  let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
  if (type == '3') {
    reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,3})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])([0-9])?$)/
  }
  return reg.test(val)
}

/**
 * 大于0的正整数
 */
function integerExceptZero(str) {
  const reg = /^\+?[1-9]\d*$/
  return reg.test(str)
}

/**
 * 判断是否为空
 */
function validatenull(val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true
    return false
  }
  return false
}

export default {
  validPassword,
  isEmail,
  isMobile,
  isPhone,
  isTel,
  isURL,
  validateURL,
  validateLowerCase,
  validateUpperCase,
  validatAlphabets,
  vaildatePc,
  validateEmail,
  cardid,
  isvalidatemobile,
  isValidateNoneMobile,
  validateName,
  validateInteger,
  validateIntegerIncludeDecimalZero,
  validateTwoDecimalNotZero,
  validateTwoDecimalInZero,
  integerExceptZero,
  validatenull
}
