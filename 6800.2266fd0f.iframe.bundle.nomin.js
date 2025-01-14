"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[6800],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TIMEZONELESS_FORMAT)
/* harmony export */ });
const TIMEZONELESS_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/date/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ date)
});

// UNUSED EXPORTS: DatePicker

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/use-lilius@2.0.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/use-lilius/build/index.es.js


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = toDate(date);
  if (isNaN(amount)) return constructFrom(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = constructFrom(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = toDate(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(date, amount) {
  const days = amount * 7;
  return addDays(date, days);
}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears(date, amount) {
  return addMonths(date, amount * 12);
}

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(date) {
  const _date = toDate(date);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

/**
 * The {@link eachDayOfInterval} function options.
 */

/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of days from the day of the interval start to the day of the interval end
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDayOfInterval(interval, options) {
  const startDate = toDate(interval.start);
  const endDate = toDate(interval.end);

  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  const currentDate = reversed ? endDate : startDate;
  currentDate.setHours(0, 0, 0, 0);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }

  return reversed ? dates.reverse() : dates;
}

/**
 * The {@link eachMonthOfInterval} function options.
 */

/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */
function eachMonthOfInterval(interval, options) {
  const startDate = toDate(interval.start);
  const endDate = toDate(interval.end);

  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  const currentDate = reversed ? endDate : startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(1);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setMonth(currentDate.getMonth() + step);
  }

  return reversed ? dates.reverse() : dates;
}

/**
 * The {@link eachWeekOfInterval} function options.
 */

/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of weeks from the week of the interval start to the week of the interval end
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */
function eachWeekOfInterval(interval, options) {
  const startDate = toDate(interval.start);
  const endDate = toDate(interval.end);

  let reversed = +startDate > +endDate;
  const startDateWeek = reversed
    ? startOfWeek(endDate, options)
    : startOfWeek(startDate, options);
  const endDateWeek = reversed
    ? startOfWeek(startDate, options)
    : startOfWeek(endDate, options);

  // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
  startDateWeek.setHours(15);
  endDateWeek.setHours(15);

  const endTime = +endDateWeek.getTime();
  let currentDate = startDateWeek;

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    currentDate.setHours(0);
    dates.push(toDate(currentDate));
    currentDate = addWeeks(currentDate, step);
    currentDate.setHours(15);
  }

  return reversed ? dates.reverse() : dates;
}

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(date) {
  const _date = toDate(date);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * The {@link endOfWeek} function options.
 */

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth(date) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const monthIndex = _date.getMonth();
  const lastDayOfMonth = constructFrom(date, 0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(date, dateToCompare) {
  const _date = toDate(date);
  const _dateToCompare = toDate(dateToCompare);
  return _date.getTime() > _dateToCompare.getTime();
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = toDate(date);
  const _dateToCompare = toDate(dateToCompare);
  return +_date < +_dateToCompare;
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual(leftDate, rightDate) {
  const _dateLeft = toDate(leftDate);
  const _dateRight = toDate(rightDate);
  return +_dateLeft === +_dateRight;
}

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(date, month) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const day = _date.getDate();

  const dateWithDesiredMonth = constructFrom(date, 0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  _date.setMonth(month, Math.min(day, daysInMonth));
  return _date;
}

/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param values - The date values to be set
 *
 * @returns The new date with options set
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */

function set(date, values) {
  let _date = toDate(date);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(+_date)) {
    return constructFrom(date, NaN);
  }

  if (values.year != null) {
    _date.setFullYear(values.year);
  }

  if (values.month != null) {
    _date = setMonth(_date, values.month);
  }

  if (values.date != null) {
    _date.setDate(values.date);
  }

  if (values.hours != null) {
    _date.setHours(values.hours);
  }

  if (values.minutes != null) {
    _date.setMinutes(values.minutes);
  }

  if (values.seconds != null) {
    _date.setSeconds(values.seconds);
  }

  if (values.milliseconds != null) {
    _date.setMilliseconds(values.milliseconds);
  }

  return _date;
}

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear(date, year) {
  const _date = toDate(date);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(+_date)) {
    return constructFrom(date, NaN);
  }

  _date.setFullYear(year);
  return _date;
}

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * @returns The start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday() {
  return startOfDay(Date.now());
}

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(date, amount) {
  return addMonths(date, -amount);
}

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be subtracted.
 *
 * @returns The new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears(date, amount) {
  return addYears(date, -amount);
}

var Month;
(function (Month) {
    Month[Month["JANUARY"] = 0] = "JANUARY";
    Month[Month["FEBRUARY"] = 1] = "FEBRUARY";
    Month[Month["MARCH"] = 2] = "MARCH";
    Month[Month["APRIL"] = 3] = "APRIL";
    Month[Month["MAY"] = 4] = "MAY";
    Month[Month["JUNE"] = 5] = "JUNE";
    Month[Month["JULY"] = 6] = "JULY";
    Month[Month["AUGUST"] = 7] = "AUGUST";
    Month[Month["SEPTEMBER"] = 8] = "SEPTEMBER";
    Month[Month["OCTOBER"] = 9] = "OCTOBER";
    Month[Month["NOVEMBER"] = 10] = "NOVEMBER";
    Month[Month["DECEMBER"] = 11] = "DECEMBER";
})(Month || (Month = {}));
var Day;
(function (Day) {
    Day[Day["SUNDAY"] = 0] = "SUNDAY";
    Day[Day["MONDAY"] = 1] = "MONDAY";
    Day[Day["TUESDAY"] = 2] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 3] = "WEDNESDAY";
    Day[Day["THURSDAY"] = 4] = "THURSDAY";
    Day[Day["FRIDAY"] = 5] = "FRIDAY";
    Day[Day["SATURDAY"] = 6] = "SATURDAY";
})(Day || (Day = {}));
var inRange = function (date, min, max) {
    return (isEqual(date, min) || isAfter(date, min)) && (isEqual(date, max) || isBefore(date, max));
};
var clearTime = function (date) { return set(date, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }); };
var useLilius = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.weekStartsOn, weekStartsOn = _c === void 0 ? Day.SUNDAY : _c, _d = _b.viewing, initialViewing = _d === void 0 ? new Date() : _d, _e = _b.selected, initialSelected = _e === void 0 ? [] : _e, _f = _b.numberOfMonths, numberOfMonths = _f === void 0 ? 1 : _f;
    var _g = (0,react.useState)(initialViewing), viewing = _g[0], setViewing = _g[1];
    var viewToday = (0,react.useCallback)(function () { return setViewing(startOfToday()); }, [setViewing]);
    var viewMonth = (0,react.useCallback)(function (month) { return setViewing(function (v) { return setMonth(v, month); }); }, []);
    var viewPreviousMonth = (0,react.useCallback)(function () { return setViewing(function (v) { return subMonths(v, 1); }); }, []);
    var viewNextMonth = (0,react.useCallback)(function () { return setViewing(function (v) { return addMonths(v, 1); }); }, []);
    var viewYear = (0,react.useCallback)(function (year) { return setViewing(function (v) { return setYear(v, year); }); }, []);
    var viewPreviousYear = (0,react.useCallback)(function () { return setViewing(function (v) { return subYears(v, 1); }); }, []);
    var viewNextYear = (0,react.useCallback)(function () { return setViewing(function (v) { return addYears(v, 1); }); }, []);
    var _h = (0,react.useState)(initialSelected.map(clearTime)), selected = _h[0], setSelected = _h[1];
    var clearSelected = function () { return setSelected([]); };
    var isSelected = (0,react.useCallback)(function (date) { return selected.findIndex(function (s) { return isEqual(s, date); }) > -1; }, [selected]);
    var select = (0,react.useCallback)(function (date, replaceExisting) {
        if (replaceExisting) {
            setSelected(Array.isArray(date) ? date : [date]);
        }
        else {
            setSelected(function (selectedItems) { return selectedItems.concat(Array.isArray(date) ? date : [date]); });
        }
    }, []);
    var deselect = (0,react.useCallback)(function (date) {
        return setSelected(function (selectedItems) {
            return Array.isArray(date)
                ? selectedItems.filter(function (s) { return !date.map(function (d) { return d.getTime(); }).includes(s.getTime()); })
                : selectedItems.filter(function (s) { return !isEqual(s, date); });
        });
    }, []);
    var toggle = (0,react.useCallback)(function (date, replaceExisting) { return (isSelected(date) ? deselect(date) : select(date, replaceExisting)); }, [deselect, isSelected, select]);
    var selectRange = (0,react.useCallback)(function (start, end, replaceExisting) {
        if (replaceExisting) {
            setSelected(eachDayOfInterval({ start: start, end: end }));
        }
        else {
            setSelected(function (selectedItems) { return selectedItems.concat(eachDayOfInterval({ start: start, end: end })); });
        }
    }, []);
    var deselectRange = (0,react.useCallback)(function (start, end) {
        setSelected(function (selectedItems) {
            return selectedItems.filter(function (s) {
                return !eachDayOfInterval({ start: start, end: end })
                    .map(function (d) { return d.getTime(); })
                    .includes(s.getTime());
            });
        });
    }, []);
    var calendar = (0,react.useMemo)(function () {
        return eachMonthOfInterval({
            start: startOfMonth(viewing),
            end: endOfMonth(addMonths(viewing, numberOfMonths - 1)),
        }).map(function (month) {
            return eachWeekOfInterval({
                start: startOfMonth(month),
                end: endOfMonth(month),
            }, { weekStartsOn: weekStartsOn }).map(function (week) {
                return eachDayOfInterval({
                    start: startOfWeek(week, { weekStartsOn: weekStartsOn }),
                    end: endOfWeek(week, { weekStartsOn: weekStartsOn }),
                });
            });
        });
    }, [viewing, weekStartsOn, numberOfMonths]);
    return {
        clearTime: clearTime,
        inRange: inRange,
        viewing: viewing,
        setViewing: setViewing,
        viewToday: viewToday,
        viewMonth: viewMonth,
        viewPreviousMonth: viewPreviousMonth,
        viewNextMonth: viewNextMonth,
        viewYear: viewYear,
        viewPreviousYear: viewPreviousYear,
        viewNextYear: viewNextYear,
        selected: selected,
        setSelected: setSelected,
        clearSelected: clearSelected,
        isSelected: isSelected,
        select: select,
        deselect: deselect,
        toggle: toggle,
        selectRange: selectRange,
        deselectRange: deselectRange,
        calendar: calendar,
    };
};


//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfDay.mjs
var date_fns_startOfDay = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfDay.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs
var date_fns_toDate = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructFrom.mjs
var date_fns_constructFrom = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/constructFrom.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMonths.mjs



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths_addMonths(date, amount) {
  const _date = (0,date_fns_toDate/* toDate */.a)(date);
  if (isNaN(amount)) return (0,date_fns_constructFrom/* constructFrom */.w)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,date_fns_constructFrom/* constructFrom */.w)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_addMonths = ((/* unused pure expression or super */ null && (addMonths_addMonths)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.mjs


/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths_subMonths(date, amount) {
  return addMonths_addMonths(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_subMonths = ((/* unused pure expression or super */ null && (subMonths_subMonths)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs + 29 modules
var format = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.mjs


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(dateLeft, dateRight) {
  const _dateLeft = (0,date_fns_toDate/* toDate */.a)(dateLeft);
  const _dateRight = (0,date_fns_toDate/* toDate */.a)(dateRight);
  return (
    _dateLeft.getFullYear() === _dateRight.getFullYear() &&
    _dateLeft.getMonth() === _dateRight.getMonth()
  );
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isSameMonth = ((/* unused pure expression or super */ null && (isSameMonth)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isEqual.mjs


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual_isEqual(leftDate, rightDate) {
  const _dateLeft = (0,date_fns_toDate/* toDate */.a)(leftDate);
  const _dateRight = (0,date_fns_toDate/* toDate */.a)(rightDate);
  return +_dateLeft === +_dateRight;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isEqual = ((/* unused pure expression or super */ null && (isEqual_isEqual)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameDay.mjs


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,date_fns_startOfDay/* startOfDay */.o)(dateLeft);
  const dateRightStartOfDay = (0,date_fns_startOfDay/* startOfDay */.o)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_isSameDay = ((/* unused pure expression or super */ null && (isSameDay)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addDays.mjs



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays_addDays(date, amount) {
  const _date = (0,date_fns_toDate/* toDate */.a)(date);
  if (isNaN(amount)) return (0,date_fns_constructFrom/* constructFrom */.w)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_addDays = ((/* unused pure expression or super */ null && (addDays_addDays)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addWeeks.mjs


/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks_addWeeks(date, amount) {
  const days = amount * 7;
  return addDays_addDays(date, days);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_addWeeks = ((/* unused pure expression or super */ null && (addWeeks_addWeeks)));

;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subWeeks.mjs


/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be subtracted.
 *
 * @returns The new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks(date, amount) {
  return addWeeks_addWeeks(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_subWeeks = ((/* unused pure expression or super */ null && (subWeeks)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeek.mjs
var date_fns_startOfWeek = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfWeek.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/defaultOptions.mjs
var _lib_defaultOptions = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/_lib/defaultOptions.mjs");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfWeek.mjs



/**
 * The {@link endOfWeek} function options.
 */

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek_endOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions/* getDefaultOptions */.q)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,date_fns_toDate/* toDate */.a)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const date_fns_endOfWeek = ((/* unused pure expression or super */ null && (endOfWeek_endOfWeek)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@5.0.1/node_modules/@wordpress/i18n/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js
var arrow_right = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js
var arrow_left = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+date@5.0.1/node_modules/@wordpress/date/build-module/index.js
var date_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+date@5.0.1/node_modules/@wordpress/date/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@18.3.16_react@18.3.1__@types+react@18.3.16_react@18.3.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js
var build_module_button = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/h-stack/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/h-stack/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/heading/component.js + 1 modules
var heading_component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/heading/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js
var space = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/space.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/date/styles.js

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





const Wrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e105ri6r5"
} : 0)( true ? {
  name: "1khn195",
  styles: "box-sizing:border-box"
} : 0);
const Navigator = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(component/* default */.A,  true ? {
  target: "e105ri6r4"
} : 0)("margin-bottom:", (0,space/* space */.x)(4), ";" + ( true ? "" : 0));
const NavigatorHeading = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(heading_component/* default */.A,  true ? {
  target: "e105ri6r3"
} : 0)("font-size:", config_values/* default */.A.fontSize, ";font-weight:", config_values/* default */.A.fontWeight, ";strong{font-weight:", config_values/* default */.A.fontWeightHeading, ";}" + ( true ? "" : 0));
const Calendar = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e105ri6r2"
} : 0)("column-gap:", (0,space/* space */.x)(2), ";display:grid;grid-template-columns:0.5fr repeat( 5, 1fr ) 0.5fr;justify-items:center;row-gap:", (0,space/* space */.x)(2), ";" + ( true ? "" : 0));
const DayOfWeek = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e105ri6r1"
} : 0)("color:", colors_values/* COLORS */.l.gray[700], ";font-size:", config_values/* default */.A.fontSize, ";line-height:", config_values/* default */.A.fontLineHeightBase, ";&:nth-of-type( 1 ){justify-self:start;}&:nth-of-type( 7 ){justify-self:end;}" + ( true ? "" : 0));
const DayButton = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.A)(build_module_button/* default */.Ay,  true ? {
  shouldForwardProp: prop => !['column', 'isSelected', 'isToday', 'hasEvents'].includes(prop),
  target: "e105ri6r0"
} : 0)("grid-column:", props => props.column, ";position:relative;justify-content:center;", props => props.column === 1 && `
		justify-self: start;
		`, " ", props => props.column === 7 && `
		justify-self: end;
		`, " ", props => props.disabled && `
		pointer-events: none;
		`, " &&&{border-radius:100%;height:", (0,space/* space */.x)(7), ";width:", (0,space/* space */.x)(7), ";", props => props.isSelected && `
			background: ${colors_values/* COLORS */.l.theme.accent};
			color: ${colors_values/* COLORS */.l.white};
			`, " ", props => !props.isSelected && props.isToday && `
			background: ${colors_values/* COLORS */.l.gray[200]};
			`, ";}", props => props.hasEvents && `
		::before {
			background: ${props.isSelected ? colors_values/* COLORS */.l.white : colors_values/* COLORS */.l.theme.accent};
			border-radius: 2px;
			bottom: 2px;
			content: " ";
			height: 4px;
			left: 50%;
			margin-left: -2px;
			position: absolute;
			width: 4px;
		}
		`, ";" + ( true ? "" : 0));
//# sourceMappingURL=styles.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/utils.js
var utils = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/utils.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/constants.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/date/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






/**
 * DatePicker is a React component that renders a calendar for date selection.
 *
 * ```jsx
 * import { DatePicker } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyDatePicker = () => {
 *   const [ date, setDate ] = useState( new Date() );
 *
 *   return (
 *     <DatePicker
 *       currentDate={ date }
 *       onChange={ ( newDate ) => setDate( newDate ) }
 *     />
 *   );
 * };
 * ```
 */


function DatePicker({
  currentDate,
  onChange,
  events = [],
  isInvalidDate,
  onMonthPreviewed,
  startOfWeek: weekStartsOn = 0
}) {
  const date = currentDate ? (0,utils/* inputToDate */.C)(currentDate) : new Date();
  const {
    calendar,
    viewing,
    setSelected,
    setViewing,
    isSelected,
    viewPreviousMonth,
    viewNextMonth
  } = useLilius({
    selected: [(0,date_fns_startOfDay/* startOfDay */.o)(date)],
    viewing: (0,date_fns_startOfDay/* startOfDay */.o)(date),
    weekStartsOn
  });

  // Used to implement a roving tab index. Tracks the day that receives focus
  // when the user tabs into the calendar.
  const [focusable, setFocusable] = (0,react.useState)((0,date_fns_startOfDay/* startOfDay */.o)(date));

  // Allows us to only programmatically focus() a day when focus was already
  // within the calendar. This stops us stealing focus from e.g. a TimePicker
  // input.
  const [isFocusWithinCalendar, setIsFocusWithinCalendar] = (0,react.useState)(false);

  // Update internal state when currentDate prop changes.
  const [prevCurrentDate, setPrevCurrentDate] = (0,react.useState)(currentDate);
  if (currentDate !== prevCurrentDate) {
    setPrevCurrentDate(currentDate);
    setSelected([(0,date_fns_startOfDay/* startOfDay */.o)(date)]);
    setViewing((0,date_fns_startOfDay/* startOfDay */.o)(date));
    setFocusable((0,date_fns_startOfDay/* startOfDay */.o)(date));
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper, {
    className: "components-datetime__date",
    role: "application",
    "aria-label": (0,build_module.__)('Calendar'),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Navigator, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        icon: (0,build_module/* isRTL */.V8)() ? arrow_right/* default */.A : arrow_left/* default */.A,
        variant: "tertiary",
        "aria-label": (0,build_module.__)('View previous month'),
        onClick: () => {
          viewPreviousMonth();
          setFocusable(subMonths_subMonths(focusable, 1));
          onMonthPreviewed?.((0,format/* format */.GP)(subMonths_subMonths(viewing, 1), constants/* TIMEZONELESS_FORMAT */.T));
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(NavigatorHeading, {
        level: 3,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: (0,date_build_module/* dateI18n */.b5)('F', viewing, -viewing.getTimezoneOffset())
        }), ' ', (0,date_build_module/* dateI18n */.b5)('Y', viewing, -viewing.getTimezoneOffset())]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(build_module_button/* default */.Ay, {
        icon: (0,build_module/* isRTL */.V8)() ? arrow_left/* default */.A : arrow_right/* default */.A,
        variant: "tertiary",
        "aria-label": (0,build_module.__)('View next month'),
        onClick: () => {
          viewNextMonth();
          setFocusable(addMonths_addMonths(focusable, 1));
          onMonthPreviewed?.((0,format/* format */.GP)(addMonths_addMonths(viewing, 1), constants/* TIMEZONELESS_FORMAT */.T));
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Calendar, {
      onFocus: () => setIsFocusWithinCalendar(true),
      onBlur: () => setIsFocusWithinCalendar(false),
      children: [calendar[0][0].map(day => /*#__PURE__*/(0,jsx_runtime.jsx)(DayOfWeek, {
        children: (0,date_build_module/* dateI18n */.b5)('D', day, -day.getTimezoneOffset())
      }, day.toString())), calendar[0].map(week => week.map((day, index) => {
        if (!isSameMonth(day, viewing)) {
          return null;
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)(date_Day, {
          day: day,
          column: index + 1,
          isSelected: isSelected(day),
          isFocusable: isEqual_isEqual(day, focusable),
          isFocusAllowed: isFocusWithinCalendar,
          isToday: isSameDay(day, new Date()),
          isInvalid: isInvalidDate ? isInvalidDate(day) : false,
          numEvents: events.filter(event => isSameDay(event.date, day)).length,
          onClick: () => {
            setSelected([day]);
            setFocusable(day);
            onChange?.((0,format/* format */.GP)(
            // Don't change the selected date's time fields.
            new Date(day.getFullYear(), day.getMonth(), day.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()), constants/* TIMEZONELESS_FORMAT */.T));
          },
          onKeyDown: event => {
            let nextFocusable;
            if (event.key === 'ArrowLeft') {
              nextFocusable = addDays_addDays(day, (0,build_module/* isRTL */.V8)() ? 1 : -1);
            }
            if (event.key === 'ArrowRight') {
              nextFocusable = addDays_addDays(day, (0,build_module/* isRTL */.V8)() ? -1 : 1);
            }
            if (event.key === 'ArrowUp') {
              nextFocusable = subWeeks(day, 1);
            }
            if (event.key === 'ArrowDown') {
              nextFocusable = addWeeks_addWeeks(day, 1);
            }
            if (event.key === 'PageUp') {
              nextFocusable = subMonths_subMonths(day, 1);
            }
            if (event.key === 'PageDown') {
              nextFocusable = addMonths_addMonths(day, 1);
            }
            if (event.key === 'Home') {
              nextFocusable = (0,date_fns_startOfWeek/* startOfWeek */.k)(day);
            }
            if (event.key === 'End') {
              nextFocusable = (0,date_fns_startOfDay/* startOfDay */.o)(endOfWeek_endOfWeek(day));
            }
            if (nextFocusable) {
              event.preventDefault();
              setFocusable(nextFocusable);
              if (!isSameMonth(nextFocusable, viewing)) {
                setViewing(nextFocusable);
                onMonthPreviewed?.((0,format/* format */.GP)(nextFocusable, constants/* TIMEZONELESS_FORMAT */.T));
              }
            }
          }
        }, day.toString());
      }))]
    })]
  });
}
function date_Day({
  day,
  column,
  isSelected,
  isFocusable,
  isFocusAllowed,
  isToday,
  isInvalid,
  numEvents,
  onClick,
  onKeyDown
}) {
  const ref = (0,react.useRef)();

  // Focus the day when it becomes focusable, e.g. because an arrow key is
  // pressed. Only do this if focus is allowed - this stops us stealing focus
  // from e.g. a TimePicker input.
  (0,react.useEffect)(() => {
    if (ref.current && isFocusable && isFocusAllowed) {
      ref.current.focus();
    }
    // isFocusAllowed is not a dep as there is no point calling focus() on
    // an already focused element.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocusable]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DayButton, {
    ref: ref,
    className: "components-datetime__date__day" // Unused, for backwards compatibility.
    ,
    disabled: isInvalid,
    tabIndex: isFocusable ? 0 : -1,
    "aria-label": getDayLabel(day, isSelected, numEvents),
    column: column,
    isSelected: isSelected,
    isToday: isToday,
    hasEvents: numEvents > 0,
    onClick: onClick,
    onKeyDown: onKeyDown,
    children: (0,date_build_module/* dateI18n */.b5)('j', day, -day.getTimezoneOffset())
  });
}
function getDayLabel(date, isSelected, numEvents) {
  const {
    formats
  } = (0,date_build_module/* getSettings */.mt)();
  const localizedDate = (0,date_build_module/* dateI18n */.b5)(formats.date, date, -date.getTimezoneOffset());
  if (isSelected && numEvents > 0) {
    return (0,build_module/* sprintf */.nv)(
    // translators: 1: The calendar date. 2: Number of events on the calendar date.
    (0,build_module._n)('%1$s. Selected. There is %2$d event', '%1$s. Selected. There are %2$d events', numEvents), localizedDate, numEvents);
  } else if (isSelected) {
    return (0,build_module/* sprintf */.nv)(
    // translators: %s: The calendar date.
    (0,build_module.__)('%1$s. Selected'), localizedDate);
  } else if (numEvents > 0) {
    return (0,build_module/* sprintf */.nv)(
    // translators: 1: The calendar date. 2: Number of events on the calendar date.
    (0,build_module._n)('%1$s. There is %2$d event', '%1$s. There are %2$d events', numEvents), localizedDate, numEvents);
  }
  return localizedDate;
}
/* harmony default export */ const date = (DatePicker);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/date-time/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ inputToDate)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/toDate.mjs");
/**
 * External dependencies
 */


/**
 * Like date-fn's toDate, but tries to guess the format when a string is
 * given.
 *
 * @param input Value to turn into a date.
 */
function inputToDate(input) {
  if (typeof input === 'string') {
    return new Date(input);
  }
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__/* .toDate */ .a)(input);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/dropdown/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Dropdown */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-merge-refs/index.js");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/popover/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const UnconnectedDropdown = (props, forwardedRef) => {
  const {
    renderContent,
    renderToggle,
    className,
    contentClassName,
    expandOnMobile,
    headerTitle,
    focusOnMount,
    popoverProps,
    onClose,
    onToggle,
    style,
    open,
    defaultOpen,
    // Deprecated props
    position,
    // From context system
    variant
  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useContextSystem */ .A)(props, 'Dropdown');
  if (position !== undefined) {
    (0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)('`position` prop in wp.components.Dropdown', {
      since: '6.2',
      alternative: '`popoverProps.placement` prop',
      hint: 'Note that the `position` prop will override any values passed through the `popoverProps.placement` prop.'
    });
  }

  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [fallbackPopoverAnchor, setFallbackPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const [isOpen, setIsOpen] = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useControlledValue */ .j)({
    defaultValue: defaultOpen,
    value: open,
    onChange: onToggle
  });

  /**
   * Closes the popover when focus leaves it unless the toggle was pressed or
   * focus has moved to a separate dialog. The former is to let the toggle
   * handle closing the popover and the latter is to preserve presence in
   * case a dialog has opened, allowing focus to return when it's dismissed.
   */
  function closeIfFocusOutside() {
    if (!containerRef.current) {
      return;
    }
    const {
      ownerDocument
    } = containerRef.current;
    const dialog = ownerDocument?.activeElement?.closest('[role="dialog"]');
    if (!containerRef.current.contains(ownerDocument.activeElement) && (!dialog || dialog.contains(containerRef.current))) {
      close();
    }
  }
  function close() {
    onClose?.();
    setIsOpen(false);
  }
  const args = {
    isOpen: !!isOpen,
    onToggle: () => setIsOpen(!isOpen),
    onClose: close
  };
  const popoverPropsHaveAnchor = !!popoverProps?.anchor ||
  // Note: `anchorRef`, `getAnchorRect` and `anchorRect` are deprecated and
  // be removed from `Popover` from WordPress 6.3
  !!popoverProps?.anchorRef || !!popoverProps?.getAnchorRect || !!popoverProps?.anchorRect;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)([containerRef, forwardedRef, setFallbackPopoverAnchor])
    // Some UAs focus the closest focusable parent when the toggle is
    // clicked. Making this div focusable ensures such UAs will focus
    // it and `closeIfFocusOutside` can tell if the toggle was clicked.
    ,
    tabIndex: -1,
    style: style,
    children: [renderToggle(args), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_popover__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
      position: position,
      onClose: close,
      onFocusOutside: closeIfFocusOutside,
      expandOnMobile: expandOnMobile,
      headerTitle: headerTitle,
      focusOnMount: focusOnMount
      // This value is used to ensure that the dropdowns
      // align with the editor header by default.
      ,
      offset: 13,
      anchor: !popoverPropsHaveAnchor ? fallbackPopoverAnchor : undefined,
      variant: variant,
      ...popoverProps,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)('components-dropdown__content', popoverProps?.className, contentClassName),
      children: renderContent(args)
    })]
  });
};

/**
 * Renders a button that opens a floating content modal when clicked.
 *
 * ```jsx
 * import { Button, Dropdown } from '@wordpress/components';
 *
 * const MyDropdown = () => (
 *   <Dropdown
 *     className="my-container-class-name"
 *     contentClassName="my-dropdown-content-classname"
 *     popoverProps={ { placement: 'bottom-start' } }
 *     renderToggle={ ( { isOpen, onToggle } ) => (
 *       <Button
 *         variant="primary"
 *         onClick={ onToggle }
 *         aria-expanded={ isOpen }
 *       >
 *         Toggle Dropdown!
 *       </Button>
 *     ) }
 *     renderContent={ () => <div>This is the content of the dropdown.</div> }
 *   />
 * );
 * ```
 */
const Dropdown = (0,_context__WEBPACK_IMPORTED_MODULE_8__/* .contextConnect */ .KZ)(UnconnectedDropdown, 'Dropdown');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/heading/component.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ heading_component)
});

// UNUSED EXPORTS: Heading

// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js
var context_connect = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/context-connect.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js
var component = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/view/component.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js + 1 modules
var use_context_system = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/context/use-context-system.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/hook.js + 4 modules
var hook = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text/hook.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/font-size.js
var font_size = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/font-size.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js
var config_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/config-values.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/heading/hook.js
/**
 * Internal dependencies
 */





function useHeading(props) {
  const {
    as: asProp,
    level = 2,
    color = colors_values/* COLORS */.l.gray[900],
    isBlock = true,
    weight = config_values/* default */.A.fontWeightHeading,
    ...otherProps
  } = (0,use_context_system/* useContextSystem */.A)(props, 'Heading');
  const as = asProp || `h${level}`;
  const a11yProps = {};
  if (typeof as === 'string' && as[0] !== 'h') {
    // If not a semantic `h` element, add a11y props:
    a11yProps.role = 'heading';
    a11yProps['aria-level'] = typeof level === 'string' ? parseInt(level) : level;
  }
  const textProps = (0,hook/* default */.A)({
    color,
    isBlock,
    weight,
    size: (0,font_size/* getHeadingFontSize */.fM)(level),
    ...otherProps
  });
  return {
    ...textProps,
    ...a11yProps,
    as
  };
}
//# sourceMappingURL=hook.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/heading/component.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





function UnconnectedHeading(props, forwardedRef) {
  const headerProps = useHeading(props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(component/* default */.A, {
    ...headerProps,
    ref: forwardedRef
  });
}

/**
 * `Heading` renders headings and titles using the library's typography system.
 *
 * ```jsx
 * import { __experimentalHeading as Heading } from "@wordpress/components";
 *
 * function Example() {
 *   return <Heading>Code is Poetry</Heading>;
 * }
 * ```
 */
const Heading = (0,context_connect/* contextConnect */.KZ)(UnconnectedHeading, 'Heading');
/* harmony default export */ const heading_component = (Heading);
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/utils/hooks/use-controlled-value.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useControlledValue)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

/**
 * Simplified and improved implementation of useControlledState.
 *
 * @param props
 * @param props.defaultValue
 * @param props.value
 * @param props.onChange
 * @return The controlled value and the value setter.
 */
function useControlledValue({
  defaultValue,
  onChange,
  value: valueProp
}) {
  const hasValue = typeof valueProp !== 'undefined';
  const initialValue = hasValue ? valueProp : defaultValue;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);
  const value = hasValue ? valueProp : state;
  let setValue;
  if (hasValue && typeof onChange === 'function') {
    setValue = onChange;
  } else if (!hasValue && typeof onChange === 'function') {
    setValue = nextValue => {
      onChange(nextValue);
      setState(nextValue);
    };
  } else {
    setValue = setState;
  }
  return [value, setValue];
}
//# sourceMappingURL=use-controlled-value.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+date@5.0.1/node_modules/@wordpress/date/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GP: () => (/* binding */ format),
/* harmony export */   b5: () => (/* binding */ dateI18n),
/* harmony export */   mt: () => (/* binding */ getSettings)
/* harmony export */ });
/* unused harmony exports setSettings, __experimentalGetSettings, date, gmdate, gmdateI18n, isInTheFuture, getDate, humanTimeDiff */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment_timezone_moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/moment-timezone@0.5.43/node_modules/moment-timezone/moment-timezone.js");
/* harmony import */ var moment_timezone_moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone_moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_timezone_moment_timezone_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/moment-timezone@0.5.43/node_modules/moment-timezone/moment-timezone-utils.js");
/* harmony import */ var moment_timezone_moment_timezone_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_timezone_moment_timezone_utils__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/** @typedef {import('moment').Moment} Moment */
/** @typedef {import('moment').LocaleSpecification} MomentLocaleSpecification */

/**
 * @typedef MeridiemConfig
 * @property {string} am Lowercase AM.
 * @property {string} AM Uppercase AM.
 * @property {string} pm Lowercase PM.
 * @property {string} PM Uppercase PM.
 */

/**
 * @typedef FormatsConfig
 * @property {string} time                Time format.
 * @property {string} date                Date format.
 * @property {string} datetime            Datetime format.
 * @property {string} datetimeAbbreviated Abbreviated datetime format.
 */

/**
 * @typedef TimezoneConfig
 * @property {string} offset          Offset setting.
 * @property {string} offsetFormatted Offset setting with decimals formatted to minutes.
 * @property {string} string          The timezone as a string (e.g., `'America/Los_Angeles'`).
 * @property {string} abbr            Abbreviation for the timezone.
 */

/* eslint-disable jsdoc/valid-types */
/**
 * @typedef L10nSettings
 * @property {string}                                     locale        Moment locale.
 * @property {MomentLocaleSpecification['months']}        months        Locale months.
 * @property {MomentLocaleSpecification['monthsShort']}   monthsShort   Locale months short.
 * @property {MomentLocaleSpecification['weekdays']}      weekdays      Locale weekdays.
 * @property {MomentLocaleSpecification['weekdaysShort']} weekdaysShort Locale weekdays short.
 * @property {MeridiemConfig}                             meridiem      Meridiem config.
 * @property {MomentLocaleSpecification['relativeTime']}  relative      Relative time config.
 * @property {0|1|2|3|4|5|6}                              startOfWeek   Day that the week starts on.
 */
/* eslint-enable jsdoc/valid-types */

/**
 * @typedef DateSettings
 * @property {L10nSettings}   l10n     Localization settings.
 * @property {FormatsConfig}  formats  Date/time formats config.
 * @property {TimezoneConfig} timezone Timezone settings.
 */

const WP_ZONE = 'WP';

// This regular expression tests positive for UTC offsets as described in ISO 8601.
// See: https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
const VALID_UTC_OFFSET = /^[+-][0-1][0-9](:?[0-9][0-9])?$/;

// Changes made here will likely need to be synced with Core in the file
// src/wp-includes/script-loader.php in `wp_default_packages_inline_scripts()`.
/** @type {DateSettings} */
let settings = {
  l10n: {
    locale: 'en',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    meridiem: {
      am: 'am',
      pm: 'pm',
      AM: 'AM',
      PM: 'PM'
    },
    relative: {
      future: '%s from now',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    startOfWeek: 0
  },
  formats: {
    time: 'g: i a',
    date: 'F j, Y',
    datetime: 'F j, Y g: i a',
    datetimeAbbreviated: 'M j, Y g: i a'
  },
  timezone: {
    offset: '0',
    offsetFormatted: '0',
    string: '',
    abbr: ''
  }
};

/**
 * Adds a locale to moment, using the format supplied by `wp_localize_script()`.
 *
 * @param {DateSettings} dateSettings Settings, including locale data.
 */
function setSettings(dateSettings) {
  settings = dateSettings;
  setupWPTimezone();

  // Does moment already have a locale with the right name?
  if (momentLib.locales().includes(dateSettings.l10n.locale)) {
    // Is that locale misconfigured, e.g. because we are on a site running
    // WordPress < 6.0?
    if (momentLib.localeData(dateSettings.l10n.locale).longDateFormat('LTS') === null) {
      // Delete the misconfigured locale.
      // @ts-ignore Type definitions are incorrect - null is permitted.
      momentLib.defineLocale(dateSettings.l10n.locale, null);
    } else {
      // We have a properly configured locale, so no need to create one.
      return;
    }
  }

  // defineLocale() will modify the current locale, so back it up.
  const currentLocale = momentLib.locale();

  // Create locale.
  momentLib.defineLocale(dateSettings.l10n.locale, {
    // Inherit anything missing from English. We don't load
    // moment-with-locales.js so English is all there is.
    parentLocale: 'en',
    months: dateSettings.l10n.months,
    monthsShort: dateSettings.l10n.monthsShort,
    weekdays: dateSettings.l10n.weekdays,
    weekdaysShort: dateSettings.l10n.weekdaysShort,
    meridiem(hour, minute, isLowercase) {
      if (hour < 12) {
        return isLowercase ? dateSettings.l10n.meridiem.am : dateSettings.l10n.meridiem.AM;
      }
      return isLowercase ? dateSettings.l10n.meridiem.pm : dateSettings.l10n.meridiem.PM;
    },
    longDateFormat: {
      LT: dateSettings.formats.time,
      LTS: momentLib.localeData('en').longDateFormat('LTS'),
      L: momentLib.localeData('en').longDateFormat('L'),
      LL: dateSettings.formats.date,
      LLL: dateSettings.formats.datetime,
      LLLL: momentLib.localeData('en').longDateFormat('LLLL')
    },
    // From human_time_diff?
    // Set to `(number, withoutSuffix, key, isFuture) => {}` instead.
    relativeTime: dateSettings.l10n.relative
  });

  // Restore the locale to what it was.
  momentLib.locale(currentLocale);
}

/**
 * Returns the currently defined date settings.
 *
 * @return {DateSettings} Settings, including locale data.
 */
function getSettings() {
  return settings;
}

/**
 * Returns the currently defined date settings.
 *
 * @deprecated
 * @return {DateSettings} Settings, including locale data.
 */
function __experimentalGetSettings() {
  deprecated('wp.date.__experimentalGetSettings', {
    since: '6.1',
    alternative: 'wp.date.getSettings'
  });
  return getSettings();
}
function setupWPTimezone() {
  // Get the current timezone settings from the WP timezone string.
  const currentTimezone = moment__WEBPACK_IMPORTED_MODULE_0___default().tz.zone(settings.timezone.string);

  // Check to see if we have a valid TZ data, if so, use it for the custom WP_ZONE timezone, otherwise just use the offset.
  if (currentTimezone) {
    // Create WP timezone based off settings.timezone.string.  We need to include the additional data so that we
    // don't lose information about daylight savings time and other items.
    // See https://github.com/WordPress/gutenberg/pull/48083
    moment__WEBPACK_IMPORTED_MODULE_0___default().tz.add(moment__WEBPACK_IMPORTED_MODULE_0___default().tz.pack({
      name: WP_ZONE,
      abbrs: currentTimezone.abbrs,
      untils: currentTimezone.untils,
      offsets: currentTimezone.offsets
    }));
  } else {
    // Create WP timezone based off dateSettings.
    moment__WEBPACK_IMPORTED_MODULE_0___default().tz.add(moment__WEBPACK_IMPORTED_MODULE_0___default().tz.pack({
      name: WP_ZONE,
      abbrs: [WP_ZONE],
      untils: [null],
      offsets: [-settings.timezone.offset * 60 || 0]
    }));
  }
}

// Date constants.
/**
 * Number of seconds in one minute.
 *
 * @type {number}
 */
const MINUTE_IN_SECONDS = 60;
/**
 * Number of minutes in one hour.
 *
 * @type {number}
 */
const HOUR_IN_MINUTES = 60;
/**
 * Number of seconds in one hour.
 *
 * @type {number}
 */
const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;

/**
 * Map of PHP formats to Moment.js formats.
 *
 * These are used internally by {@link wp.date.format}, and are either
 * a string representing the corresponding Moment.js format code, or a
 * function which returns the formatted string.
 *
 * This should only be used through {@link wp.date.format}, not
 * directly.
 */
const formatMap = {
  // Day.
  d: 'DD',
  D: 'ddd',
  j: 'D',
  l: 'dddd',
  N: 'E',
  /**
   * Gets the ordinal suffix.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  S(momentDate) {
    // Do - D.
    const num = momentDate.format('D');
    const withOrdinal = momentDate.format('Do');
    return withOrdinal.replace(num, '');
  },
  w: 'd',
  /**
   * Gets the day of the year (zero-indexed).
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  z(momentDate) {
    // DDD - 1.
    return (parseInt(momentDate.format('DDD'), 10) - 1).toString();
  },
  // Week.
  W: 'W',
  // Month.
  F: 'MMMM',
  m: 'MM',
  M: 'MMM',
  n: 'M',
  /**
   * Gets the days in the month.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted date.
   */
  t(momentDate) {
    return momentDate.daysInMonth();
  },
  // Year.
  /**
   * Gets whether the current year is a leap year.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  L(momentDate) {
    return momentDate.isLeapYear() ? '1' : '0';
  },
  o: 'GGGG',
  Y: 'YYYY',
  y: 'YY',
  // Time.
  a: 'a',
  A: 'A',
  /**
   * Gets the current time in Swatch Internet Time (.beats).
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted date.
   */
  B(momentDate) {
    const timezoned = moment__WEBPACK_IMPORTED_MODULE_0___default()(momentDate).utcOffset(60);
    const seconds = parseInt(timezoned.format('s'), 10),
      minutes = parseInt(timezoned.format('m'), 10),
      hours = parseInt(timezoned.format('H'), 10);
    return parseInt(((seconds + minutes * MINUTE_IN_SECONDS + hours * HOUR_IN_SECONDS) / 86.4).toString(), 10);
  },
  g: 'h',
  G: 'H',
  h: 'hh',
  H: 'HH',
  i: 'mm',
  s: 'ss',
  u: 'SSSSSS',
  v: 'SSS',
  // Timezone.
  e: 'zz',
  /**
   * Gets whether the timezone is in DST currently.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  I(momentDate) {
    return momentDate.isDST() ? '1' : '0';
  },
  O: 'ZZ',
  P: 'Z',
  T: 'z',
  /**
   * Gets the timezone offset in seconds.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {number} Formatted date.
   */
  Z(momentDate) {
    // Timezone offset in seconds.
    const offset = momentDate.format('Z');
    const sign = offset[0] === '-' ? -1 : 1;
    const parts = offset.substring(1).split(':').map(n => parseInt(n, 10));
    return sign * (parts[0] * HOUR_IN_MINUTES + parts[1]) * MINUTE_IN_SECONDS;
  },
  // Full date/time.
  c: 'YYYY-MM-DDTHH:mm:ssZ',
  // .toISOString.
  /**
   * Formats the date as RFC2822.
   *
   * @param {Moment} momentDate Moment instance.
   *
   * @return {string} Formatted date.
   */
  r(momentDate) {
    return momentDate.locale('en').format('ddd, DD MMM YYYY HH:mm:ss ZZ');
  },
  U: 'X'
};

/**
 * Formats a date. Does not alter the date's timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date.
 */
function format(dateFormat, dateValue = new Date()) {
  let i, char;
  const newFormat = [];
  const momentDate = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateValue);
  for (i = 0; i < dateFormat.length; i++) {
    char = dateFormat[i];
    // Is this an escape?
    if ('\\' === char) {
      // Add next character, then move on.
      i++;
      newFormat.push('[' + dateFormat[i] + ']');
      continue;
    }
    if (char in formatMap) {
      const formatter = formatMap[( /** @type {keyof formatMap} */char)];
      if (typeof formatter !== 'string') {
        // If the format is a function, call it.
        newFormat.push('[' + formatter(momentDate) + ']');
      } else {
        // Otherwise, add as a formatting string.
        newFormat.push(formatter);
      }
    } else {
      newFormat.push('[' + char + ']');
    }
  }
  // Join with [] between to separate characters, and replace
  // unneeded separators with static text.
  return momentDate.format(newFormat.join('[]'));
}

/**
 * Formats a date (like `date()` in PHP).
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string, parsable
 *                                                        by moment.js.
 * @param {string | number | undefined}        timezone   Timezone to output result in or a
 *                                                        UTC offset. Defaults to timezone from
 *                                                        site.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {string} Formatted date in English.
 */
function date(dateFormat, dateValue = new Date(), timezone) {
  const dateMoment = buildMoment(dateValue, timezone);
  return format(dateFormat, dateMoment);
}

/**
 * Formats a date (like `date()` in PHP), in the UTC timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date in English.
 */
function gmdate(dateFormat, dateValue = new Date()) {
  const dateMoment = momentLib(dateValue).utc();
  return format(dateFormat, dateMoment);
}

/**
 * Formats a date (like `wp_date()` in PHP), translating it into site's locale.
 *
 * Backward Compatibility Notice: if `timezone` is set to `true`, the function
 * behaves like `gmdateI18n`.
 *
 * @param {string}                                dateFormat PHP-style formatting string.
 *                                                           See php.net/date.
 * @param {Moment | Date | string | undefined}    dateValue  Date object or string, parsable by
 *                                                           moment.js.
 * @param {string | number | boolean | undefined} timezone   Timezone to output result in or a
 *                                                           UTC offset. Defaults to timezone from
 *                                                           site. Notice: `boolean` is effectively
 *                                                           deprecated, but still supported for
 *                                                           backward compatibility reasons.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {string} Formatted date.
 */
function dateI18n(dateFormat, dateValue = new Date(), timezone) {
  if (true === timezone) {
    return gmdateI18n(dateFormat, dateValue);
  }
  if (false === timezone) {
    timezone = undefined;
  }
  const dateMoment = buildMoment(dateValue, timezone);
  dateMoment.locale(settings.l10n.locale);
  return format(dateFormat, dateMoment);
}

/**
 * Formats a date (like `wp_date()` in PHP), translating it into site's locale
 * and using the UTC timezone.
 *
 * @param {string}                             dateFormat PHP-style formatting string.
 *                                                        See php.net/date.
 * @param {Moment | Date | string | undefined} dateValue  Date object or string,
 *                                                        parsable by moment.js.
 *
 * @return {string} Formatted date.
 */
function gmdateI18n(dateFormat, dateValue = new Date()) {
  const dateMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateValue).utc();
  dateMoment.locale(settings.l10n.locale);
  return format(dateFormat, dateMoment);
}

/**
 * Check whether a date is considered in the future according to the WordPress settings.
 *
 * @param {string} dateValue Date String or Date object in the Defined WP Timezone.
 *
 * @return {boolean} Is in the future.
 */
function isInTheFuture(dateValue) {
  const now = momentLib.tz(WP_ZONE);
  const momentObject = momentLib.tz(dateValue, WP_ZONE);
  return momentObject.isAfter(now);
}

/**
 * Create and return a JavaScript Date Object from a date string in the WP timezone.
 *
 * @param {string?} dateString Date formatted in the WP timezone.
 *
 * @return {Date} Date
 */
function getDate(dateString) {
  if (!dateString) {
    return momentLib.tz(WP_ZONE).toDate();
  }
  return momentLib.tz(dateString, WP_ZONE).toDate();
}

/**
 * Returns a human-readable time difference between two dates, like human_time_diff() in PHP.
 *
 * @param {Moment | Date | string}             from From date, in the WP timezone.
 * @param {Moment | Date | string | undefined} to   To date, formatted in the WP timezone.
 *
 * @return {string} Human-readable time difference.
 */
function humanTimeDiff(from, to) {
  const fromMoment = momentLib.tz(from, WP_ZONE);
  const toMoment = to ? momentLib.tz(to, WP_ZONE) : momentLib.tz(WP_ZONE);
  return fromMoment.from(toMoment);
}

/**
 * Creates a moment instance using the given timezone or, if none is provided, using global settings.
 *
 * @param {Moment | Date | string | undefined} dateValue Date object or string, parsable
 *                                                       by moment.js.
 * @param {string | number | undefined}        timezone  Timezone to output result in or a
 *                                                       UTC offset. Defaults to timezone from
 *                                                       site.
 *
 * @see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @see https://en.wikipedia.org/wiki/ISO_8601#Time_offsets_from_UTC
 *
 * @return {Moment} a moment instance.
 */
function buildMoment(dateValue, timezone = '') {
  const dateMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateValue);
  if (timezone && !isUTCOffset(timezone)) {
    // The ! isUTCOffset() check guarantees that timezone is a string.
    return dateMoment.tz( /** @type {string} */timezone);
  }
  if (timezone && isUTCOffset(timezone)) {
    return dateMoment.utcOffset(timezone);
  }
  if (settings.timezone.string) {
    return dateMoment.tz(settings.timezone.string);
  }
  return dateMoment.utcOffset(+settings.timezone.offset);
}

/**
 * Returns whether a certain UTC offset is valid or not.
 *
 * @param {number|string} offset a UTC offset.
 *
 * @return {boolean} whether a certain UTC offset is valid or not.
 */
function isUTCOffset(offset) {
  if ('number' === typeof offset) {
    return true;
  }
  return VALID_UTC_OFFSET.test(offset);
}
setupWPTimezone();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.0.2_react@18.3.1/node_modules/@wordpress/icons/build-module/library/calendar.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@4.11.0_react@18.3.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const calendar = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar);
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/arrow-left.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const arrowLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowLeft);
//# sourceMappingURL=arrow-left.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@10.11.0/node_modules/@wordpress/icons/build-module/library/arrow-right.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * WordPress dependencies
 */


const arrowRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
    d: "m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrowRight);
//# sourceMappingURL=arrow-right.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ })

}]);