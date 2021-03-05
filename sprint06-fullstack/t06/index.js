let os = require('os');
let ip = require('ip')

console.log(require('path').basename(__filename))
console.log(process.argv)
console.log(ip.address())
console.log(os.hostname())
console.log(os.version())
console.log()