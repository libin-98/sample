let arr=[
    {
        name: "libin.k", 
        age:25,
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

 let array=[25,8,96,85,69,86,12,56,63,]
// forEach function .............

function nam(){
   arr.forEach(value=>console.log(value.name)
    )
   
}

function place(){
    arr.forEach((value)=>console.log(value.place)
    )
}

// map function..............!!!!!!!!!!

function map(){
    let a=arr.map((value)=>value.name)
    console.log(a)
    document.getElementById('student').innerHTML=a
}


// find function ................!!!!!!!!!!!!

function find(){
    let a=arr.find((value)=>value.name=='hari')
    console.log(a)
}
// filter function .............!!!!!!!!!!!

function filter(){
    let a=arr.filter((value)=>value.age==25)
    console.log(a)
}

// reduce function...............!!!!!!!!!!!
// used to find sum of elements in an array
function reduce(){
    let z =array.reduce((b,c)=>b+c,0)
console.log(z)
}


// sort function ...........!!!!!!!!!!!!!!!
// used to sort elements in an array

function sort(){
    let y=array.sort((first,last)=>last-first)
    console.log(y)
}

