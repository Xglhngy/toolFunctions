export declare const dayOfYear: (date?: Date | string) => number;
import * as date from './components/date';
import * as file from './components/file';
import * as check from './components/check';
import * as filter from './components/filter';
export declare const xyd_date: {
    getDateArr: typeof date.getDateArr;
    dateFormat: typeof date.dateFormat;
    getDate: typeof date.getDate;
    formatTime: typeof date.formatTime;
    getSomeMonthDays: typeof date.getSomeMonthDays;
    getTodayWeek: typeof date.getTodayWeek;
    getSomeMonthFirDayWeek: typeof date.getSomeMonthFirDayWeek;
    getMondayDate: typeof date.getMondayDate;
    getSundayDate: typeof date.getSundayDate;
    getCurrentMonthStarEnd: typeof date.getCurrentMonthStarEnd;
    getWeekArr: typeof date.getWeekArr;
};
export declare const xyd_file: {
    base64ToBlob: (base64: any) => Blob;
    blobToFile: typeof file.blobToFile;
    fileToBase64: (file: any) => void;
};
export declare const xyd_check: {
    validPassword: typeof check.validPassword;
    isEmail: typeof check.isEmail;
    isMobile: typeof check.isMobile;
    isPhone: typeof check.isPhone;
    isTel: typeof check.isTel;
    isURL: typeof check.isURL;
    validateURL: typeof check.validateURL;
    validateLowerCase: typeof check.validateLowerCase;
    validateUpperCase: typeof check.validateUpperCase;
    validatAlphabets: typeof check.validatAlphabets;
    vaildatePc: () => boolean;
    validateEmail: typeof check.validateEmail;
    cardid: typeof check.cardid;
    isvalidatemobile: typeof check.isvalidatemobile;
    isValidateNoneMobile: typeof check.isValidateNoneMobile;
    validateName: typeof check.validateName;
    validateInteger: typeof check.validateInteger;
    validateIntegerIncludeDecimalZero: typeof check.validateIntegerIncludeDecimalZero;
    validateTwoDecimalNotZero: typeof check.validateTwoDecimalNotZero;
    validateTwoDecimalInZero: typeof check.validateTwoDecimalInZero;
    integerExceptZero: typeof check.integerExceptZero;
    validatenull: typeof check.validatenull;
};
export declare const xyd_filter: {
    secrecyMobile: typeof filter.secrecyMobile;
    getParams: typeof filter.getParams;
    getByteLen: typeof filter.getByteLen;
    getQueryObject: typeof filter.getQueryObject;
    uniqueArr: typeof filter.uniqueArr;
};
