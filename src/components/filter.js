/**
 * 13888888888 -> 138****8888
 * @param mobile
 * @returns {*}
 */
function secrecyMobile(mobile) {
  mobile = String(mobile)
  if (!/\d{11}/.test(mobile)) {
    return mobile
  }
  return mobile.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')
}
/**
 * getParams：获取指定拼接在 url 后面字段,第一个参数为 url，第二个参数为要截取的字段
 */
function getParams(url, name) {
  url = url.substring(url.indexOf('?') + 1)
  const r = url.match(new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'))
  return r !== null ? unescape(r[2]) : null
}
/**
 * getByteLen：获取字符串字节长度,参数为 srting
 */
function getByteLen(val) {
  let len = 0
  for (let i = 0; i < val.length; i++) {
    len += 1
  }
  return Math.floor(len)
}

/**
 *  getQueryObject：截取 url 后面的参数,返回 obj，参数为 url 路径
 */
function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 *数组去重uniqueArr：参数为目标数组
 */
function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

export default {
  secrecyMobile,
  getParams,
  getByteLen,
  getQueryObject,
  uniqueArr
}
