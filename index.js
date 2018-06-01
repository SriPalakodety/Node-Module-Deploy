"use strict";

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

const addCommasToNumbers = (number, locale) => {
  return number.toLocaleString(locale);
};

module.exports = addCommasToNumbers;
