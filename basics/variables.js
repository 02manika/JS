const accId = 12345
let accEmail ="manika@gmail.com"
var accPassword = "1278"          
/* 
     prefer not to use var
     beacuse of issue in block scope and functional scope
*/
accCity = "Jaipur"
let accState

//accId = 2

// console.log(accId);   // not allowed

console.log(accId)

accEmail = "agarwal@gmail.com"
accPassword = "9876"
accCity = "Banglore"

console.table([accEmail, accId, accPassword, accCity, accState])

