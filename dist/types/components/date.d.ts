declare namespace _default {
    export { getDateArr };
    export { dateFormat };
    export { getDate };
    export { formatTime };
    export { getSomeMonthDays };
    export { getTodayWeek };
    export { getSomeMonthFirDayWeek };
    export { getMondayDate };
    export { getSundayDate };
    export { getCurrentMonthStarEnd };
    export { getWeekArr };
}
export default _default;
/**
 *  days：传入天数   获取几天前或几天后时间日期格式
 */
declare function getDateArr(days: any): void;
/**
 *  dateFormat：格式化日期组件，第一个参数为时间，第二个参数为时间格式
 */
declare function dateFormat(time: any, cFormat: any, ...args: any[]): any;
declare function getDate(d: any): string;
declare function formatTime(d: any): string;
declare function getSomeMonthDays(year: any, month: any): number | "";
declare function getTodayWeek(date: any): string;
declare function getSomeMonthFirDayWeek(year: any, month: any): number;
declare function getMondayDate(date: any): string;
declare function getSundayDate(date: any): string;
declare function getCurrentMonthStarEnd(yearMonth: any): number[];
declare function getWeekArr(year: any, month: any): string[];
