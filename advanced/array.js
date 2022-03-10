var obj = {"a":1,"b":2}
var result = Object.keys(obj).map((key)=> [Number(key), obj[key]]);

console.log(result);