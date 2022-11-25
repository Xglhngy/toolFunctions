/**
 *  days：传入天数   获取几天前或几天后时间日期格式
 */
export function getDateArr(days: any): void;
/**
 *  dateFormat：格式化日期组件，第一个参数为时间，第二个参数为时间格式
 */
export function dateFormat(time: any, cFormat: any, ...args: any[]): any;
export function getDate(d: any): string;
export function formatTime(d: any): string;
export function getSomeMonthDays(year: any, month: any): number | "";
export function getTodayWeek(date: any): string;
export function getSomeMonthFirDayWeek(year: any, month: any): number;
export function getMondayDate(date: any): string;
export function getSundayDate(date: any): string;
export function getCurrentMonthStarEnd(yearMonth: any): number[];
export function getWeekArr(year: any, month: any): string[];
