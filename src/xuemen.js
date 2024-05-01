const egosrcpath = "../../ego/src/";

const path = require(egosrcpath + 'path.js');
const util = require(egosrcpath + 'util.js');


const helpstr = `
node xuemen entry:  会计分录`;

// read the arguments
var arguments = process.argv.splice(2);
if ((arguments.length == 1) & (arguments[0] == "entry")) {
    console.log("entry mode");
} else {
    console.log(helpstr);
    process.exit();
}