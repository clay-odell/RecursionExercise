function product(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    return arr[0] * product(arr.slice(1));
  }
}
function longest(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const maxLen = arr[0].length;
  const restArr = arr.slice(1);
  return Math.max(maxLen, longest(restArr));
}
function everyOther(str) {
    if (str === '') {
        return '';
    }
    return str[0] + everyOther(str.slice(2));
}
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length -1));
}