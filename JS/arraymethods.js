let a=[" apple"," orange"," grape"," pineapple"];
let b=[' libin',' hari',' ragin',' sk'];
console.log(a.concat(b))     // concat method==>joining to arrays

 let c = a.push("banana")    // push==> add an element at end of an array
console.log(a)

let d=a.pop()       // pop==> eliminating an element at end of an array
console.log(a)

let e=a.shift()    //  shift==> deleting an element at start of an array
console.log(a)

console.log(b)                //unshift==> adding an element at start of an array
let f=b.unshift("prabhath")
console.log(b)

let g=b.slice(1,4)    //slice==> returns selected array elements as new array
console.log(g)        // slice(start,end) here   b=['prabhath','libin','hari','ragin','sk'];

let h=a.splice(1,0, " tomato"," carrot");  //splice==> adds or eliminate array elements...
console.log(a);

console.log(a.sort())  //for sorting array elements in alphabetical order
console.log(b.sort())  // capital letter came first...

console.log(a.reverse());
console.log(b.reverse());

document.getElementById('a').innerHTML=a
document.getElementById('z').innerHTML=b
