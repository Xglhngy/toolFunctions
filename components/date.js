/**
 *  days：传入天数   获取几天前或几天后时间日期格式
 */
function getDateArr(days) {
  var today = new Date() //今天
  var daysData = [] //定义一个空数组存放数据
  for (var i = 0; i < days; i++) {
    var day = i * 24 * 60 * 60 * 1000 //每天的时间戳差值
    var todayTimeStamp = today.getTime() //今天的时间戳
    var finalDay = new Date(todayTimeStamp - day) //最后一天的时间戳 ，几天前是减 ，几天后就改成加
    var Y = finalDay.getFullYear() //年
    var M = finalDay.getMonth() + 1 //月
    var D = finalDay.getDate() //日 //将月和日格式标准化组合成需要的格式
    if (M.toString().length == 1) {
      M = '0' + M
    }
    if (D.toString().length == 1) {
      D = '0' + D
    }
    var timeData = Y + '-' + M + '-' + D
    daysData.push(timeData) //添加进数组
  }
}
/**
 *  dateFormat：格式化日期组件，第一个参数为时间，第二个参数为时间格式
 */
function dateFormat(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay() // 周
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
// 时间转换为yyyy-MM-dd
function getDate(d) {
  var date = new Date(d)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  month = month > 9 ? month : `0${month}`
  var day = date.getDate()
  day = day > 9 ? day : `0${day}`

  return `${year}-${month}-${day}`
}
// 时间转换为（yyyy-MM-dd hh:mm:ss格式）
function formatTime(d) {
  var date = new Date(d)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 获取当天周几(具体日期周几)
function getTodayWeek(date) {
  var arr = new Array('日', '一', '二', '三', '四', '五', '六')
  var week
  if (date === undefined) {
    week = new Date().getDay()
  } else {
    week = new Date(date).getDay()
  }
  return '周' + arr[week]
}

// 获取当前周(或具体日期的当周)周一日期格式：yyyy-MM-dd
function getMondayDate(date) {
  var now = new Date()
  var nowTime
  if (date === undefined) {
    nowTime = now.getTime()
  } else {
    now = new Date(date)
    nowTime = now.getTime()
  }
  var day = now.getDay()
  var oneDayTime = 24 * 60 * 60 * 1000
  //显示周一
  var MondayTime = nowTime - (day - 1) * oneDayTime
  //初始化日期时间
  var monday = new Date(MondayTime)
  var y = monday.getFullYear()
  var m = monday.getMonth() + 1
  m = m > 9 ? m : `0${m}`
  var d = monday.getDate()
  d = d > 9 ? d : `0${d}`
  return `${y}-${m}-${d}`
}
// 获取当前周(具体天当周)周日日期格式：yyyy-MM-dd
function getSundayDate(date) {
  var now = new Date()
  var nowTime
  if (date === undefined) {
    nowTime = now.getTime()
  } else {
    now = new Date(date)
    nowTime = now.getTime()
  }
  var day = now.getDay()
  var oneDayTime = 24 * 60 * 60 * 1000
  //显示周日
  var MondayTime = nowTime + (7 - day) * oneDayTime
  //初始化日期时间
  var monday = new Date(MondayTime)
  var y = monday.getFullYear()
  var m = monday.getMonth() + 1
  m = m > 9 ? m : `0${m}`
  var d = monday.getDate()
  d = d > 9 ? d : `0${d}`
  return `${y}-${m}-${d}`
}

// 获取某月第一天和最后一天日期时间戳数组
function getCurrentMonthStarEnd(yearMonth) {
  let year = Number(yearMonth.split('-')[0])
  let month = Number(yearMonth.split('-')[1])
  let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (year % 4 === 0) {
    arr.splice(1, 1, 29)
  }
  let lastDayTimeStamp = new Date(`${year}-${month}-${arr[month - 1]} 23:59:59`).getTime()
  let firstDayTimeStamp = new Date(`${year}-${month}-01 00:00:00`).getTime()
  return [firstDayTimeStamp, lastDayTimeStamp]
}

//获取当月星期数组
function getWeekArr(year, month) {
  let week = getSomeMonthFirDayWeek(year, month) // x月第一天周几
  let weekArr = ['日', '一', '二', '三', '四', '五', '六']
  let dataList = []
  let totalDays = getSomeMonthDays(year, month) //当月总天数
  for (let i = 0; i < totalDays; i++) {
    dataList.push(weekArr[(week + i) % 7])
  }

  return dataList
}
// 获取某个月份1号周几
function getSomeMonthFirDayWeek(year, month) {
  const firDate = new Date(`${year}-${month}-1`)
  return firDate.getDay()
}
// 获取某月份下的天数
function getSomeMonthDays(year, month) {
  let febDays = year % 4 === 0 ? 29 : 28
  let days = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (month <= days.length) {
    return days[month - 1]
  }
  return ''
}
export {
  getDateArr,
  dateFormat,
  getDate,
  formatTime,
  getSomeMonthDays,
  getTodayWeek,
  getSomeMonthFirDayWeek,
  getMondayDate,
  getSundayDate,
  getCurrentMonthStarEnd,
  getWeekArr
}
