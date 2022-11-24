/**
 * 格式转换：先将base64转换成blob，再将blob转换成file文件，此方法不存在浏览器不兼容问题
 * // base64ToBlob：base64 转 blob，参数为 base64
 */

const base64ToBlob = (base64) => {
  let arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
/**
 * blob 转 file，第一个参数为 blob，第二个参数为转换后的文件名
 */
function blobToFile(blob, fileName) {
  blob.lastModifiedDate = new Date()
  blob.name = fileName
  return blob
}
/**
 * fileToBase64：file 转 base64，参数为 file 图片文件
 */
const fileToBase64 = (file) => {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function (e) {
    return e.target.result
  }
}

export default {
  base64ToBlob,
  blobToFile,
  fileToBase64
}
