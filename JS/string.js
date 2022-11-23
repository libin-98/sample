// string methods.......

// concat 
// for joining two stings

let a=' hello';
let b='how do you do';
let c="welcome to ooty nice to meet you";
let d="WELCOME"
let e="123"
let f=987655
console.log(a.concat(" ",b," helow"));

// length 
// for checking the length
console.log(c.length);

// indexof()
// to find the index number 

console.log(c.indexOf("ooty"));
console.log(c.indexOf("meet"));
console.log(c.lastIndexOf("to"));

// includes=> to check weather the world present in total string or not

console.log(c.includes("nice"));
console.log(c.includes("ok"));

// to lowercase=> change the string into lowercase 

console.log(d.toLowerCase())

// toUpperCase=> change the string to uppercase

console.log(b.toUpperCase())
 
// repeat=> to repeat a string

console.log(a.repeat(3)) 
 
// replace==> to replace AN ELEMENT OF string by another one 

console.log(c.replace("ooty","kerala"))
 
// slice ==> to extract the part of a string

console.log(c.slice(10,18))
console.log(c.slice(c.indexOf("nice"),c.lastIndexOf("you")));

// substr==> used to extract some part of string

console.log(c.substr(5, 10));   // extract from the point 5 to a length of 10 character
console.log(c.substr(-3)) ;    // extract from point -3 to end of the string

//split==> used to split a string into an array of substrings..

console.log(c.split(' ' ))

console.log(c.split(' ' ,3)) // limiting the number of elements in array

// search==> it searches a string for avalue and return the position of first match

console.log(c.search("meet"))

console.log(c.search("to"))

console.log(c.search("you"))

console.log(c.search("welcome"))

// parseInt==> convert string into number

console.log(typeof e)
console.log(e)               //appears as string(in black colour)
console.log(parseInt(e));    //appears as number(in blue colour)
console.log( typeof parseInt(e));

//toString==>convert number to string

console.log(typeof f);
console.log(f);
console.log(toString(f));
console.log(typeof toString(f));

// trim==> removes space in both ends in a string

console.log(a)
console.log(a.trim())
