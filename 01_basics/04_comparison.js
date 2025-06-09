// console.log(2>1);  
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" >1);
// console.log("02" >1);

console.log(null >0);
console.log(null ==0);
console.log(null >=0);

/* 
the reaosn is that an equality == coparisons > < >= <=
work differently.
comparisons convert null  to a number, treating it as 0
that's why (3) null== 0 and (1) null>0 is false.
*/

// ===
console.log("2" === 2);
