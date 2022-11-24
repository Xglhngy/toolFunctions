export declare const dayOfYear: (date?: Date | string) => number;
export declare const xyd_date: {
    default: {
        getDateArr: (days: any) => void;
        dateFormat: (time: any, cFormat: any, ...args: any[]) => any;
        getDate: (d: any) => string;
        formatTime: (d: any) => string;
        getSomeMonthDays: (year: any, month: any) => number | "";
        getTodayWeek: (date: any) => string;
        getSomeMonthFirDayWeek: (year: any, month: any) => number;
        getMondayDate: (date: any) => string;
        getSundayDate: (date: any) => string;
        getCurrentMonthStarEnd: (yearMonth: any) => number[];
        getWeekArr: (year: any, month: any) => string[];
    };
};
export declare const xyd_file: {
    default: {
        base64ToBlob: (base64: any) => Blob;
        blobToFile: (blob: any, fileName: any) => any;
        fileToBase64: (file: any) => void;
    };
};
export declare const xyd_check: {
    default: {
        validPassword: (str: any) => boolean;
        isEmail: (s: any) => boolean;
        isMobile: (s: any) => boolean;
        isPhone: (s: any) => boolean;
        isTel: (str: any) => boolean;
        isURL: (s: any) => boolean;
        validateURL: (textval: any) => boolean;
        validateLowerCase: (str: any) => boolean;
        validateUpperCase: (str: any) => boolean;
        validatAlphabets: (str: any) => boolean;
        vaildatePc: () => boolean;
        validateEmail: (email: any) => boolean;
        cardid: (code: any) => string;
        isvalidatemobile: (phone: any) => (string | boolean)[];
        isValidateNoneMobile: (phone: any) => (string | boolean)[];
        validateName: (name: any) => boolean;
        validateInteger: (num: any) => boolean;
        validateIntegerIncludeDecimalZero: (num: any) => boolean;
        validateTwoDecimalNotZero: (str: any, type: any) => boolean;
        validateTwoDecimalInZero: (val: any, type: any) => boolean;
        integerExceptZero: (str: any) => boolean;
        validatenull: (val: any) => boolean;
    };
};
export declare const xyd_filter: {
    default: {
        secrecyMobile: (mobile: any) => any;
        getParams: (url: any, name: any) => string | null;
        getByteLen: (val: any) => number;
        getQueryObject: (url: any) => {};
        uniqueArr: (arr: any) => any[];
    };
};
