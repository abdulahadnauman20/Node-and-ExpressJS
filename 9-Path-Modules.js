const path=require('path');
 
console.log(path.sep) //Seperator
console.log("--------------------------------")
const filepath=path.join('/content/','subfolder','test.txt')
console.log(filepath)
console.log("--------------------------------")
const base=path.basename(filepath)
console.log(base)
console.log("--------------------------------")
const asbsolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(asbsolute)
console.log("--------------------------------")