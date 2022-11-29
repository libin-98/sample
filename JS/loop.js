let a=['okey',2,3,5,7,'hi','hello'];
let d={
    name:"libin",
    age:24,
    id:"knr15ec058"
}


// for loop....................

    let text=0;


   for(let i=1; i<=10; i++){
       
       for(let j=1;j<=i;j++){
           text=text+j
       }
       text+="<br>"
       document.getElementById("for").innerHTML=text
   }
console.log(typeof text)

// while loop.....................

let b=1
let c=1
while (b<10) {
    // document.getElementById("for").innerHTML="how are you"+"<br>"
    // document.getElementById("for").innerHTML=c
    // console.log(typeof c)
    b++;
}


// array looping...............!!!!!!!

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    
}

//for of looping for array...........!!!!!!!

for (let i of a) {
    console.log(i)
    
}


// forin looping of object.................!!!!!!!!!!

for(let i in d){
    console.log(i)    /// result is keys of object
}

for(let i in d){
    console.log(d[i])    /// result is values of object
}


for (let i in a) {
    console.log(i)   /// result is index number of array
    
}

for (let i in a) {
    console.log(a[i])   /// result is elements of array
    
}
 



