// normal function

function b(x){
    return x

}
console.log(b("normal function"));


// arrow function

let a=t=>console.log(t);
a("arrow function")

let c=(a,b)=>{
    c=a+b;
    console.log(c);
}
c(5,8);

// Array...

let array=["hello","good","hi",1,2]
// for changing array elemet 

array[3]="how are you"
console.log(array)

// object

let obj={
    name: "libin.k",
    age:23,
    place:"kannur"
}
// for changing object element 

obj.age=24
console.log(obj)



// array of object 

let arr=[
    {
        name: "libin.k",
        age:24,
        place:"kannur"
    },
    {
        name: "hari",
        age:25,
        place:"nileswaram"
    },
    {
        name: "prabhath",
        age:26,
        place:"kozhikkod"
    },
    {
        name: "ragin",
        age:27,
        place:"malappuram"
    }

]
arr[0]={
    name:"adarsh",
    age:25,
    place:"kannur"
}
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2].name);