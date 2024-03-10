// npm-global command,comes with Node
// npm --version

// Local Dependency-Use it only in this Particular Project
// npm i <package name>

// global Dependency-use it in any project
// npm install -g <packagename>
//Sudo install -g <packagename>(mac)

// Project.json-manifest file(stores important info about project/package)
// Manual Approach(Create Package.json in the root,create Properties etc)
// npm init(step by step,Press Enter to Skip)
// npm init -y(Everything default)

// npm creates Node_modules folder and contains dependencies

const _=require("lodash");//_ Represents EVERYTHING
const items=[1,[2,[3,[4]]]]
const newitems=_.flattenDeep(items)
console.log(newitems)