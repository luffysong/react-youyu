export function numComma(x, prefix, suffix) {
  if (!x) return (prefix ? '￥' : '') + 0 + (suffix ? '元' : '');
  return (prefix ? '￥' : '') + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (suffix ? '元' : '');
}

export function removeInlineStyle(str) {
  const REGEX = /(?:\G(?!^)|\bstyle=")([^:]*):\s*([^;]*)[;"](?=[^>]*>)/g; // eslint-disable-line
  return str.replace(REGEX, '');
}

export function homeNoticeDate(date) {
  date = new Date(date);
  return `${date.getMonth()+1}/${date.getDate()}`;
}

export function acceptFormatDate(date) {
  date = new Date(date);
  return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;
}
