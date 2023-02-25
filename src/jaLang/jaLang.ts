import { CONSTANT } from '../assets/const'
import { isEmpty } from '../checkFormat/format';
/**
 * get full-width characters to half-width characters map
 * @returns {Object} full-width characters to half-width characters map
 */
export function getZenkakuToHankakuMap() {
    return CONSTANT.COMMON.FULL_WIDTH_HALF_WIDTH_MAPPING;
}
/**
* get half-width character, that's corresponding with full-width character from getZenkakuToHankakuMap
* @param {String} characterToConvert - full-width character to convert
* @returns {String} converted half-width character
*/
export function mapToHankaku(characterToConvert:string) {
    const zenHanMap = getZenkakuToHankakuMap();
    if (typeof zenHanMap[characterToConvert] === "undefined") {
        return characterToConvert;
    } else {
        return zenHanMap[characterToConvert];
    }
}
/**
 * 	convert full-width alphanumeric to half-width alphanumeric
 * @param {String} stringToConvert - string to convert
 * @returns {String} converted string
 */
export function toAlphanumericHankaku(stringToConvert:string) {
    if (isEmpty(stringToConvert)) {
      return stringToConvert;
    }
  
    // 半角変換
    const halfWidthString = stringToConvert.replace(
      /[！-～]/g,
      function (tmpStr) {
        // 文字コードをシフト
        return String.fromCharCode(tmpStr.charCodeAt(0) - 65248);
      }
    );
  
    // 文字コードシフトで対応できない文字の変換
    return (
      halfWidthString
        .replace(/”/g, '"')
        .replace(/’/g, "'")
        .replace(/‘/g, "`")
        .replace(/￥/g, "\\")
        // eslint-disable-next-line no-irregular-whitespace
        .replace(/　/g, " ")
        .replace(/〜/g, "~")
    );
  }