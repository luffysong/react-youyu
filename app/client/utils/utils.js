import moment from 'moment';

export function numComma(x, prefix, suffix) {
  if (!x) return (prefix ? '￥' : '') + 0 + (suffix ? '元' : '');
  return (prefix ? '￥' : '') + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (suffix ? '元' : '');
}

export function removeInlineStyle(str) {
  const REGEX = /(?:\G(?!^)|\bstyle=")([^:]*):\s*([^;]*)[;"](?=[^>]*>)/g; // eslint-disable-line
  return str.replace(REGEX, '');
}

export function acceptFormatDate(date) {
  date = moment(date);
  return date.format('YYYY年MM月DD日');
}
