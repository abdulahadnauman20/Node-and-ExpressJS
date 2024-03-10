const{readFileSync,writeFileSync, read}=require('fs')
console.log("Start")
const first =  readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second)

writeFileSync('./content/Result.txt',`Here is the result: ${first}, ${second}`,{flag:'a'});
// a used to Append Sentences
console.log("Done with this task")
console.log("Starting the Next One...")
