const os = require('os');//сторонний модуль

const {name, sayHi} = require('./index');
console.log(os.platform(), os.release());
console.log(sayHi(name));