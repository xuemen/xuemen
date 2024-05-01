const crypto = require('crypto');
const fs = require('fs');
const yaml = require('js-yaml');

const AERTemplate = `
date: 
VoucherID: 
AccountingSoftwareID: 
AccountingEntry: 
  debit: 
    - AccountTitle: 
      amount: 
  credit: 
    - AccountTitle: 
      amount: 
    - AccountTitle: 
      amount: `;

module.exports = {
    makeAER: function (AVR) {
        var AER = new Object();

        //AER.date = AVR.date;
        AER.date = this.finddatabyname(AVR.item,"记账日期");
        AER.VoucherID = this.finddatabyname(AVR.item,"回单编号");
        AER.AccountingSoftwareID = 18010001; // unknown
        AER.AccountingEntry = new Object();

        AER.AccountingEntry.debit = new Array();
        AER.AccountingEntry.debit[0] = new Object();
        AER.AccountingEntry.debit[0].AccountTitle = "银行存款-交通银行"; // 应该从会计科目metadata中获取
        AER.AccountingEntry.debit[0].amount = this.finddatabyname(AVR.item,"金额");
        AER.AccountingEntry.debit[1] = new Object();
        AER.AccountingEntry.debit[1].AccountTitle = "财务费用-利息费用"; // 应该从会计科目metadata中获取
        AER.AccountingEntry.debit[1].amount = -this.finddatabyname(AVR.item,"金额");

        //AER.AccountingEntry.credit = new Array();
        //......
        //AER.AccountingEntry.debit.push(debitentry);
        
        //console.log("AER:\n",yaml.dump(AER));
        return AER;
    },
    finddatabyname: function (AVRitem, name) {

        for (var i in AVRitem) {
            if (AVRitem[i].name == name) { 
                return AVRitem[i].data ;
            }
        }
    }
}