/**
 * 判断元素是否为空
 * @obj {*} obj
 * @returns
 */
export function isEmpty(obj) {
  // null undefined '' 0 false
  if (!obj) {
    return true;
  }

  if (typeof obj === "object") {
    if (typeof obj.length == "undefined") {
      // 空对象 {}
      if (JSON.stringify(obj) == "{}") {
        return true;
      }
    } else if (obj.length == 0) {
      // 空数组 []
      return true;
    }
  }

  return false;
}
