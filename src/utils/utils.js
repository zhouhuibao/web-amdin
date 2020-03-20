/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

const isUrl = urlPath => reg.test(urlPath);


// 删除最后一个字符串
const delStringLastOne = str => {
  let s = str;
  s = s.substring(0, s.length - 1);
  return s;
};

// 数组去重
const unique = arr =>{
  const newArr = [];
  for(let i = 0; i < arr.length; i+=1){
      if(newArr.indexOf(arr[i]) === -1){
          newArr.push(arr[i])
      }
  }
  return newArr;
}




const rules = type => {
  let rule = '';
  switch (type) {
    case 'mobile': // 验证手机号
      // rule = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
      rule = /^1[3-9]\d{9}$/;
      break;
    case 'mobileAndTel': // 验证手机和电话
      rule = /(^(\d{3,4}-)?\d{7,8})$|(1[3-9]\d{9})/;
      break;
    case 'number': // 判断是不是数字
      rule = /^[0-9]*$/;
      break;
    case 'password': // 判断密码是不是数字加字母组合
      rule = /\w{6,17}$/;
      break;
    case 'base64': // 判断是不是base64
      rule = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
      break;
    default:
      break;
  }
  return rule;
};

// 判断数据类型
const dataType = data => {
  return Object.prototype.toString
    .call(data)
    .split(' ')[1]
    .split(']')[0];
};


// 生成10位随机数,可用于作为遍历节点时候的key
const MathRandom = () => {
  let str = '';
  for (let i = 0; i < 10; i += 1) {
    const mathRandom = Math.random() * 10;
    str += parseInt(mathRandom);
  }
  return str;
};

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toGMTString()}`;
  document.cookie = `${cname}=${cvalue};${expires}`;
};

const getCookie = cname => {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

// 判断是否为空
const isEmpty = value => {
  if (dataType(value) === 'String') {
    return value.replace(/^\s\s*/, '').replace(/\s\s*$/, '') !== '';
  }
  if (dataType(value) === 'Undefined' || dataType(value) === 'Null') {
    return false;
  }
  return true;
};

const gethhmm=str=>{ // 返回时:分
  if(isEmpty(str) && dataType(str) === 'String'){
    const hhmm = str.split(" ")[1]
    const [hh,mm] = hhmm.split(":")
    return `${hh}:${mm}`
  }
  return ''
}






export {
  isUrl,
  rules,
  isEmpty,
  MathRandom,
  dataType,
  setCookie,
  getCookie,
  delStringLastOne,
  unique,
  gethhmm
};
