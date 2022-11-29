function check(){
    let a=document.getElementById("mark").value ;
    if(a<=50 &&  a>=40){
        document.getElementById("result").innerHTML="A Grade";
    }
    else if(a<40 &&  a>=30){
        document.getElementById("result").innerHTML="B Grade";
    }
    else if(a<30 &&  a>=25){
        document.getElementById("result").innerHTML="C Grade";
    }
    else if(a<25 &&  a>=15){
        document.getElementById("result").innerHTML="D Grade";

    }
    else if(a>50 || a<0){
        document.getElementById("result").innerHTML="Invalid Result";
    }
    else {
        document.getElementById("result").innerHTML="FAILED";

    }
}

function check1(){
    let a=parseInt(document.getElementById("mark").value );
    if(a%2==0){
        document.getElementById("type").innerHTML="Even number";
        console.log(typeof a)
    }
    else{
        document.getElementById("type").innerHTML="Odd number";
        console.log(typeof a)
    }

}








