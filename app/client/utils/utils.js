export function numComma(x, prefix, suffix) {
  return (prefix ? '￥' : '') + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (suffix ? '元' : '');
}

export function removeInlineStyle(str) {
  const REGEX = /(?:\G(?!^)|\bstyle=")([^:]*):\s*([^;]*)[;"](?=[^>]*>)/g;
  return str.replace(REGEX, '');
}
