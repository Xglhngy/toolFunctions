declare namespace _default {
    export { validPassword };
    export { isEmail };
    export { isMobile };
    export { isPhone };
    export { isTel };
    export { isURL };
    export { validateURL };
    export { validateLowerCase };
    export { validateUpperCase };
    export { validatAlphabets };
    export { vaildatePc };
    export { validateEmail };
    export { cardid };
    export { isvalidatemobile };
    export { isValidateNoneMobile };
    export { validateName };
    export { validateInteger };
    export { validateIntegerIncludeDecimalZero };
    export { validateTwoDecimalNotZero };
    export { validateTwoDecimalInZero };
    export { integerExceptZero };
    export { validatenull };
}
export default _default;
declare function validPassword(str: any): boolean;
/**
 * 邮箱
 * @param {*} s
 */
declare function isEmail(s: any): boolean;
/**
 * 手机号码
 * @param {*} s
 */
declare function isMobile(s: any): boolean;
/**
 * 电话号码
 * @param {*} s
 */
declare function isPhone(s: any): boolean;
/**
 * 手机号码和电话号码
 * @param {*} s
 */
declare function isTel(str: any): boolean;
/**
 * URL地址
 * @param {*} s
 */
declare function isURL(s: any): boolean;
declare function validateURL(textval: any): boolean;
declare function validateLowerCase(str: any): boolean;
declare function validateUpperCase(str: any): boolean;
declare function validatAlphabets(str: any): boolean;
declare function vaildatePc(): boolean;
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
declare function validateEmail(email: any): boolean;
/**
 * 判断身份证号码
 */
declare function cardid(code: any): string;
/**
 * 判断手机号码是否正确
 */
declare function isvalidatemobile(phone: any): (string | boolean)[];
/**
 * 判断手机号码是否正确（可以为空）
 */
declare function isValidateNoneMobile(phone: any): (string | boolean)[];
/**
 * 判断姓名是否正确
 */
declare function validateName(name: any): boolean;
/**
 * 判断是否为整数，包括0
 * 001, 002 验证通过
 */
declare function validateInteger(num: any): boolean;
/**
 * 判断是否为整数，包括0
 * 验证通过场景：0、 0.00、 10.00、 0.000（即以小数点无数个0结束都通过）
 * 验证不通过场景：00、 010、 00.2、20.01（0开头和小数大于0.1结束都不通过）
 */
declare function validateIntegerIncludeDecimalZero(num: any): boolean;
/**
 * 至多只能输入两位小数，不包括0；可0.**开头;type='3',可以输入三位小数
 */
declare function validateTwoDecimalNotZero(str: any, type: any): boolean;
/**
 * 至多只能输入两位小数，包括0；可0.**开头 ;type='3',可以输入三位小数
 * 验证通过场景：0、 0.1、 0.01、 0.10
 * 验证不通过场景：00、 010、 00.2
 */
declare function validateTwoDecimalInZero(val: any, type: any): boolean;
/**
 * 大于0的正整数
 */
declare function integerExceptZero(str: any): boolean;
/**
 * 判断是否为空
 */
declare function validatenull(val: any): boolean;
