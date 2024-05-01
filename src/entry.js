const crypto = require('crypto');
const fs = require('fs');
const yaml = require('js-yaml');


module.exports = {
    entry: function (AVRfilename) { 
        var AVR = yaml.load(fs.readFileSync(AVRfilename));
        var AECfilename = "..\\data\\AEC."+AVR.VoucherType+".1.yaml";
        var AEC = yaml.load(fs.readFileSync(AECfilename));
        var AECcodepath = AEC.code.path ;
        const AECcode = require(AECcodepath);

        var AER = AECcode.makeAER(AVR);
        var AERfilename = "test.AER.nnn.yaml";  //应该根据计数器产生文件名，详见 3-04.文件命名规则.md
        fs.writeFileSync(AERfilename,yaml.dump(AER));
        console.log(AERfilename,"文件已保存。内容如下:\n",yaml.dump(AER));
    }
}