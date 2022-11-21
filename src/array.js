import { isEmpty } from "./utils.js";

/**
 * 判断两个数组里的元素是否相等
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
export function isEqualArray(arr1, arr2) {
  if (arr1 == arr2) {
    return true;
  }

  if (isEmpty(arr1) && isEmpty(arr2)) {
    return true;
  } else if (isEmpty(arr1) || isEmpty(arr2)) {
    return false;
  }

  if (arr1.length != arr2.length) {
    return false;
  }

  return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}
