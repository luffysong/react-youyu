export function numComma(x, prefix, suffix) {
  if (!x) return;
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
