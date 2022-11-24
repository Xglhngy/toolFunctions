declare namespace _default {
    export { base64ToBlob };
    export { blobToFile };
    export { fileToBase64 };
}
export default _default;
/**
 * 格式转换：先将base64转换成blob，再将blob转换成file文件，此方法不存在浏览器不兼容问题
 * // base64ToBlob：base64 转 blob，参数为 base64
 */
declare function base64ToBlob(base64: any): Blob;
/**
 * blob 转 file，第一个参数为 blob，第二个参数为转换后的文件名
 */
declare function blobToFile(blob: any, fileName: any): any;
/**
 * fileToBase64：file 转 base64，参数为 file 图片文件
 */
declare function fileToBase64(file: any): void;
