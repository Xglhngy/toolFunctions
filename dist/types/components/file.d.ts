/**
 * 格式转换：先将base64转换成blob，再将blob转换成file文件，此方法不存在浏览器不兼容问题
 * // base64ToBlob：base64 转 blob，参数为 base64
 */
export function base64ToBlob(base64: any): Blob;
/**
 * blob 转 file，第一个参数为 blob，第二个参数为转换后的文件名
 */
export function blobToFile(blob: any, fileName: any): any;
/**
 * fileToBase64：file 转 base64，参数为 file 图片文件
 */
export function fileToBase64(file: any): void;
