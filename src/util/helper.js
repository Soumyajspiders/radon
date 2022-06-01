let mydate=function(){
    let currdate= new Date()
    console.log('now the date is'+currdate);
}

module.exports.mydate=mydate


let mymonth = function(){
    let currmonth = new Date()
    console.log('the current month is '+ currmonth);
}

module.exports.mymonth=mymonth

let getbatchinfo = function(){
    console.log("Radon - W2/D2 - The topic for today is node js module System");
}
module.exports.getbatchinfo=getbatchinfo