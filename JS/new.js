document.getElementById('a').innerHTML="helooiiii";
document.getElementsByClassName("ab")[1].style.color="red";
document.getElementsByClassName("ab")[0].style.backgroundColor="yellow";
document.getElementsByTagName("p")[1].style.fontSize="20px";
document.getElementById("img").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Mnl_Pw6A7QIYnXrEyZVYo6lWoIc1CE3hTIZLMJC7uTSMqHchY1V46EJQ2aBOAaRF8S0&usqp=CAU";
document.getElementById("img").style.width="50%";
document.getElementById("a").style.display="inline";
document.getElementsByTagName("p")[0].style.display="inline";


// querery selector
document.querySelector("#a").style.display="block";
document.querySelectorAll(".ab")[1].style.backgroundColor="blue";


// variables
let abc='hello world. . . . .';
document.write(abc)
console.log(abc);
 var d=document.getElementById("a");
 d.innerHTML="welcome";
 d.style.color="blue";
 d.style.backgroundColor="yellow";
 d.style.fontSize="35px"
 console.log(d)


//  arithmatic operations
 let a=10;
  a=a+a;
  a=a+a;
  a=a*a;
  a=a+a;
  a=a*a;
  a=a/a
  let g='result is=  ';
  let f="wrong";
    e=g+a;
  let c=15
  let i=4
  i=++i
  let j=c%i
  console.log(i);
  console.log(j);
 console.log(e);
 document.write(a);
 document.write(e);
 let x=5
 let y=5;
 let z=7;
 let p=[1,2,3,4 ,5,6];
 document.write(p[1],p[3]);
 let k=p[2]+p[5];
 console.log(k);
 console.log(p);

//  type of vatiables
 let ab="helloo";
 let ac=2;
 let ad=[1 ,"hello",43];
 let ae;
 const af={
    id:8, name:"libin",
 };
 let ag=false;
 let ah=undefined;
 let ai=[1,2,3,4,5,6,7];
 let aj=[1,2,3,4,5,6,7];

 console.log(typeof ab);
 console.log(typeof ac);
 console.log(typeof ad);
 console.log(typeof ae);
 console.log(typeof af);
 console.log(typeof ag);
 console.log(typeof ah);


//  comparison
 console.log(x==y);
 console.log(x!=y);
 console.log(x!=z);
 console.log(x===y);
 console.log(ai[3]==aj[3]);
 console.log(af.id);
 let ak=~5
 console.log(ak)


//  and & or 
 console.log(x>y && y>z || x<=y )
 console.log(x<=y || y>z)


//  ternary operator
 let al= x>4 && z<20 ? 35:40;
 console.log(al)


//  functions

 function ma()  {
    console.log(x+y);
 }
   ma();


//    function name(parameter){


//    }

//     name(parameter)
// parameter

function ok(x,y){
    let a=x;
    let b=y;
    c=a-b;
    return c;
    
}
console.log(ok(5,7));
console.log(ok(10,16));
console.log(ok(5,3));
console.log(ok(19,7));
console.log(ok(17,27));
let b=t=>"arrow function "+t
// b("parameter")
document.getElementById("z").innerHTML=b("parameter")
  

 
