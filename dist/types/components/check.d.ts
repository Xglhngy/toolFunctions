export function validPassword(str: any): boolean;
/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s: any): boolean;
/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s: any): boolean;
/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s: any): boolean;
/**
 * 手机号码和电话号码
 * @param {*} s
 */
export function isTel(str: any): boolean;
/**
 * URL地址
 * @param {*} s
 */
export function isURL(s: any): boolean;
export function validateURL(textval: any): boolean;
export function validateLowerCase(str: any): boolean;
export function validateUpperCase(str: any): boolean;
export function validatAlphabets(str: any): boolean;
export function vaildatePc(): boolean;
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email: any): boolean;
/**
 * 判断身份证号码
 */
export function cardid(code: any): string;
/**
 * 判断手机号码是否正确
 */
export function isvalidatemobile(phone: any): (string | boolean)[];
/**
 * 判断手机号码是否正确（可以为空）
 */
export function isValidateNoneMobile(phone: any): (string | boolean)[];
/**
 * 判断姓名是否正确
 */
export function validateName(name: any): boolean;
/**
 * 判断是否为整数，包括0
 * 001, 002 验证通过
 */
export function validateInteger(num: any): boolean;
/**
 * 判断是否为整数，包括0
 * 验证通过场景：0、 0.00、 10.00、 0.000（即以小数点无数个0结束都通过）
 * 验证不通过场景：00、 010、 00.2、20.01（0开头和小数大于0.1结束都不通过）
 */
export function validateIntegerIncludeDecimalZero(num: any): boolean;
/**
 * 至多只能输入两位小数，不包括0；可0.**开头;type='3',可以输入三位小数
 */
export function validateTwoDecimalNotZero(str: any, type: any): boolean;
/**
 * 至多只能输入两位小数，包括0；可0.**开头 ;type='3',可以输入三位小数
 * 验证通过场景：0、 0.1、 0.01、 0.10
 * 验证不通过场景：00、 010、 00.2
 */
export function validateTwoDecimalInZero(val: any, type: any): boolean;
/**
 * 大于0的正整数
 */
export function integerExceptZero(str: any): boolean;
/**
 * 判断是否为空
 */
export function validatenull(val: any): boolean;
