export function set16ToRgb(str, tm = 1){
  var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  if(!reg.test(str)){return;}
  let newStr = (str.toLowerCase()).replace(/\#/g,'')
  let len = newStr.length;
  if(len == 3){
      let t = ''
      for(var i=0;i<len;i++){
          t += newStr.slice(i,i+1).concat(newStr.slice(i,i+1))
      }
      newStr = t
  }
  let arr = []; //将字符串分隔，两个两个的分隔
  for(var i =0;i<6;i=i+2){
      let s = newStr.slice(i,i+2)
      arr.push(parseInt("0x" + s))
  }
  //  'rgba(' + arr.join(",")  + '' + ')';
   return `rgba(${arr.join(",")}, ${tm})`
}

export function debounce(fn, wait) {
  let timer = null;
  return function() {
    if (timer != null) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, wait)
  }
}

export function joinUrlParam(urlStr, params) {
  let url = urlStr + "?"
  Object.keys(params).forEach(key => {
    url = url + `${key}=${params[key]}&`
  })
  return url
}