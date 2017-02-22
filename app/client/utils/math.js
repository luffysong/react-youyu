function money_conv(num) {
  return parseInt((Number(num)).toFixed(4).toString().split('.').join(''), 10);
}

//金额计算 加
export function money_add(a, b) {
  return Number(((money_conv(a) + money_conv(b)) / 10000).toFixed(2));
}

//金额计算 减
export function money_sub(a, b) {
  return Number(((money_conv(a) - money_conv(b)) / 10000).toFixed(2));
}

//金额计算 乘
export function money_mul(a, b) {
  return Number(((money_conv(a) * money_conv(b)) / 100000000).toFixed(2));
}

//金额计算 除
export function money_div(a, b) {
  return Number((money_conv(a) / money_conv(b)).toFixed(2));
}

// 返回百分比
export function toPercent(origin) {
  if(!origin && origin !== 0) {
    return '-';
  }
  const val = money_mul(origin, 100);
  return `${val}%`
}
