function on(){
    document.getElementById('bulb').src="on.jpg"
}
function off(){
document.getElementById('bulb').src="download.jpg"
}

// let x=0;
// // let y="*"
// function add(){                    
//     x=1+x  
//     console.log(x)
//     document.getElementById("a").innerHTML=x-1+"+1="+x
    // add() 
// }
//  function pattern(){
//     y.repeat(a)
//     document.writeln(y)
//     add()
//  }

function input(){
    let a=document.getElementById("name").value;
    document.getElementById("result").innerHTML=a
    document.getElementById("name").value =""

}


