let obj={
   ece:{ 
    student1: {
            name: "libin ",
            age:25,
            adnm:"15b052",

          },
    student2:{
        name: "hari ",
        age:26,
        adnm:"15b049",

            },
    student3:{
        name: "mansoor ",
        age:24,
        adnm:"15b060",
        }
        },

   cse:{ 
    student1: {
        name: "aswin ",
        age:26,
        adnm:"15b082",

        },
    student2:{
        name: "abishek ",
        age:23,
        adnm:"15b089",
        },

    student3:{
        name: "vijay ",
        age:25,
        adnm:"15b060",
        }
   },
   eee:{ 
    student1: {
        name: "ajay ",
        age:25,
        adnm:"15b072",
        },
    student2:{
        name: "akshay ",
        age:26,
        adnm:"15b079",
        },
    student3:{
        name: "rohith ",
        age:23,
        adnm:"15b070",
        }
},

}
console.log(obj)
console.log(obj.ece.student1)
console.log(obj.ece.student1.name)
// document.write(Object.keys(obj.ece.student2));
// document.write(Object.values(obj.ece.student2));
console.log(Object.keys(obj.ece.student1))
console.log(Object.values(obj.ece.student1));
console.log(Object.values(obj.ece.student2));
console.log(Object.values(obj.ece.student3));
console.log(Object.values(obj.eee.student1));
console.log(Object.values(obj.eee.student2));
console.log(Object.values(obj.eee.student3));
console.log(Object.values(obj.cse.student1));
console.log(Object.values(obj.cse.student2));
console.log(Object.values(obj.cse.student3));
document.getElementById('b').innerHTML=obj.ece.student1.name;
document.getElementById('c').innerHTML=obj.ece.student1.age;
document.getElementById('d').innerHTML=obj.ece.student1.adnm;

document.getElementById('e').innerHTML=obj.ece.student2.name;
document.getElementById('f').innerHTML=obj.ece.student2.age;
document.getElementById('g').innerHTML=obj.ece.student2.adnm;

document.getElementById('h').innerHTML=obj.ece.student3.name;
document.getElementById('i').innerHTML=obj.ece.student3.age;
document.getElementById('j').innerHTML=obj.ece.student3.adnm;


document.getElementById('k').innerHTML=obj.eee.student1.name;
document.getElementById('l').innerHTML=obj.eee.student1.age;
document.getElementById('m').innerHTML=obj.eee.student1.adnm;

document.getElementById('n').innerHTML=obj.eee.student2.name;
document.getElementById('o').innerHTML=obj.eee.student2.age;
document.getElementById('p').innerHTML=obj.eee.student2.adnm;

document.getElementById('q').innerHTML=obj.eee.student3.name;
document.getElementById('r').innerHTML=obj.eee.student3.age;
document.getElementById('s').innerHTML=obj.eee.student3.adnm;

document.getElementById('t').innerHTML=obj.cse.student1.name;
document.getElementById('u').innerHTML=obj.cse.student1.age;
document.getElementById('v').innerHTML=obj.cse.student1.adnm;

document.getElementById('w').innerHTML=obj.cse.student2.name;
document.getElementById('x').innerHTML=obj.cse.student2.age;
document.getElementById('y').innerHTML=obj.cse.student2.adnm;

document.getElementById('aa').innerHTML=obj.cse.student3.name;
document.getElementById('ab').innerHTML=obj.cse.student3.age;
document.getElementById('ac').innerHTML=obj.cse.student3.adnm;