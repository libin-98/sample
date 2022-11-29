function check(){
    let a=document.getElementById('mark').value
    switch (a) {
         case "banana":
             document.getElementById("fruit").innerHTML="price of banana =50Rs"
        
        break;
        case "apple":
            document.getElementById("fruit").innerHTML="price of Apple = 80Rs"
            
        break;
        case "orange":
            document.getElementById("fruit").innerHTML="price of Orange = 50Rs"
            
        break;
        case "pineapple":
            document.getElementById("fruit").innerHTML="price of Pineapple = 70Rs"
            
        break;
        case "lemon":
            document.getElementById("fruit").innerHTML="price of Lemon = 30Rs"
            
        break;
        case "Watermelon":
            document.getElementById("fruit").innerHTML="price of Watermelon = 60Rs"
            
        break;
    

        default: 
            document.getElementById("fruit").innerHTML=a+" Is Out of Stock"
        break;
    }

}
