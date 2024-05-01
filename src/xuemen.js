const egosrcpath = "../../ego/src/";

const path = require(egosrcpath + 'path.js');
const util = require(egosrcpath + 'util.js');
const entry = require('./entry.js');


const helpstr = `
node xuemen entry:  会计分录
node xuemen entry VoucherRecordfilename:  会计分录特定的会计凭证`;

// read the arguments
var arguments = process.argv.splice(2);
if ((arguments.length == 1) && (arguments[0] == "entry")) {
    //node xuemen entry:  会计分录
    console.log("entry mode");

} else if ((arguments.length == 2) && (arguments[0] == "entry")) {
    //node xuemen entry VoucherRecordfilename:  会计分录特定的会计凭证
    var AVRfilename = arguments[1];
    entry.entry(AVRfilename);
} else {
    console.log(helpstr);
    process.exit();
}