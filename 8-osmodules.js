const os=require('os')

// Info about Current Users
const user=os.userInfo()
console.log(user)

// Method Returns the System Uptime in seconds

console.log(`The System Uptime in seconds is ${os.uptime()} Seconds`)

const Current={
    name:os.type(),
    releases:os.release(),
    totalmemory:os.totalmem(),
    freemem:os.freemem(),
}
console.log(Current)

