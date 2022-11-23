let a=["apple","orange","grape","pineapple"];
let b=['libin','hari','ragin','sk'];
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

document.getElementById('a').innerHTML=a
document.getElementById('z').innerHTML=b
