//finding if a particular value exist in a given array 
//is one of the most basic operations we will have to perorm on an array in almost every cases

const numbers=[1, 2, 3, 4, 10];
 const num =numbers.find(x => x===4);//returns 
 const num1 =numbers.find(x => x===5);//returns 5

console.log(num);

const itempresent =numbers.find(x => x===4);//returns true
return itempresent ? true: false;//checking if item is present returning boolean value