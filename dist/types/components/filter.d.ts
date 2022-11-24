declare namespace _default {
    export { secrecyMobile };
    export { getParams };
    export { getByteLen };
    export { getQueryObject };
    export { uniqueArr };
}
export default _default;
/**
 * 13888888888 -> 138****8888
 * @param mobile
 * @returns {*}
 */
declare function secrecyMobile(mobile: any): any;
/**
 * getParams：获取指定拼接在 url 后面字段,第一个参数为 url，第二个参数为要截取的字段
 */
declare function getParams(url: any, name: any): string | null;
/**
 * getByteLen：获取字符串字节长度,参数为 srting
 */
declare function getByteLen(val: any): number;
/**
 *  getQueryObject：截取 url 后面的参数,返回 obj，参数为 url 路径
 */
declare function getQueryObject(url: any): {};
/**
 *数组去重uniqueArr：参数为目标数组
 */
declare function uniqueArr(arr: any): any[];
