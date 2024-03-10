// Global that can be used in every situation no matter how complex program is -No Window in Node as no browser
// __dirname -Path to Current Directory
// __filename -Path to  Current Directory
// Require-Functions to use Modules(Common JS)
// Module -Info about Current Module
// Process-Info about envoirnment where Program is being executed.

console.log(__dirname);
setInterval(() => {
    console.log("Hello World!")
}, 600)