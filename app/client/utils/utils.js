export function numComma(x, prefix, suffix) {
  return (prefix ? '￥' : '') + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (suffix ? '元' : '');
}
