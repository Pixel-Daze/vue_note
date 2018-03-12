function moneyConvert(val){
    // 汉字的数字
    var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    // 基本单位
    var cnIntRadice = ['元', '拾', '佰', '仟' , '万' , '拾万' , '佰万' , '仟万' , '亿' , '拾亿' , '佰亿' , '仟亿' , '兆'];
    // 对应小数部分单位
    var cnDecUnits = ['角', '分', '毫', '厘'];
    // 整数金额时后面跟到字符
    var cnInteger = '整';
    // 最大处理的数字
    var maxNum = 999999999999999.9999;
    // 金额整数部分
    var integerNum;
    // 金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if (val === '') { return ''; }
    val = parseFloat(val);
    if(val>maxNum){ return ''; }
    if(val === 0){
        chineseStr = cnNums[0] + cnIntRadice[0] + cnInteger;
        return chineseStr;
    }
    //转换为字符串
    val = val.toString();
    if(val.indexOf('.')===-1){
        integerNum = val;
        decimalNum = '';
    }else{
        parts = val.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substring(0,4);// 算到厘
    }

    // 整数部分转换
    if(parseInt(integerNum,10)>0){
        var tempInt = [];
        integerNum.split('').reverse().forEach((item,index)=>{
            tempInt.push(cnNums[item]+cnIntRadice[index])
        })
        chineseStr += tempInt.reverse().join('');
        if(val.indexOf('.')===-1){
            chineseStr += cnInteger;
        }
    }

    // 小数部分
    if(decimalNum!==''){
        var tempDec = []
        decimalNum.split('').forEach((item,index)=>{
            tempDec.push(cnNums[item]+cnDecUnits[index])
        })
        chineseStr += tempDec.join('');
    }
    return chineseStr;
}

class Money{
    constructor(price){
        if(typeof price==='number'){
            this._price = price;
        }else if(typeof price === 'string'){
            this._price = parseFloat(price);
        }else{
            return this;
        }
    }

    get price(){
        return this._price;
    }

    set price(val){
        if(typeof val==='number'){
            this._price = val;
        }else if(typeof val === 'string'){
            this._price = parseFloat(val);
        }else{
            throw new Error('Invalid value,Please set Number');
        }
    }

    toCn(){
        return moneyConvert(this._price)
    }
}

let money = new Money(1.8);
console.log(money.toCn())