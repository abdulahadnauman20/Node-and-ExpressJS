// // Global that can be used in every situation no matter how complex program is -No Window in Node as no browser
// // __dirname -Path to Current Directory
// // __filename -Path to  Current Directory
// // Require-Functions to use Modules(Common JS)
// // Module -Info about Current Module
// // Process-Info about envoirnment where Program is being executed.
// // console.log(__dirname);
// // setInterval(() => {
// //     console.log("Hello World!")
// // }, 1000)

// // CommonJS, Every File is Module(By Default)
// // Modules:Spliting a code into different modules
// // Encapsulated Code(Only Share Minimum)
// // Node Uses Common JS Libraries
// // const sayHi=(name) => {
// //     console.log(` Hello there ${name}`);
// //     }
//     const names=require('./4-names')
//     console.log(names)
    
//     // sayHi('Abdul Ahad Nauman')
//     // sayHi('Muhammad Nauman')
//     // sayHi('Abdul Samad Nauman')
    

// CommonJS, Every File is Module(By Default)
// Modules:Spliting a code into different modules
// Encapsulated Code(Only Share Minimum)
// Node Uses Common JS Libraries
// const sayHi=(name) => {
// console.log(` Hello there ${name}`);
// }
const names=require('./4-names')
const sayHi=require('./5-utils')
console.log(names)
const data=require('./6-Alternativeflavour')
require('./7-mindgrenade')
sayHi('Abdul Ahad Nauman')
sayHi(names.john)
sayHi(names.peter)
