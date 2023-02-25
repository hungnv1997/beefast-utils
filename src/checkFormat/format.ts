/**
 * 空のチェック
 * @param {String} valueToCheck
 * @returns {boolean} true if value is empty
 */
export function isEmpty(valueToCheck: any): boolean {
    return (
        valueToCheck === null || valueToCheck === undefined || valueToCheck === ""
    );
}
/**
 * Check empty object
 * @param {Object} objectToCheck - Object to check
 * @returns {boolean} true if object is empty
 */
export function isEmptyObject(objectToCheck: any): boolean {
    return (
        isEmpty(objectToCheck) ||
        objectToCheck.constructor !== Object ||
        (objectToCheck.constructor === Object &&
            Object.keys(objectToCheck).length === 0)
    );
}