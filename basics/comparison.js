console.log(null>0)   // false
console.log(null==0)  // false
console.log(null<=0)  // true 

/*
 this happens because equality operator and comparison operator works differently.
 comaprison operations converts null sometimes into a number and sometimes in NaN , and that is 0
 that is why we got the above results.
*/

console.log(undefined>0)   // false
console.log(undefined==0)  // false
console.log(undefined<=0)  // false

// === (strict check)

console.log("2"===2)
