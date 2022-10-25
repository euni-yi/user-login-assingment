// Username login

// HTML variables


// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){

let user = document.getElementById("user").value.toLowerCase();
let pass = document.getElementById("pass").value;
console.log(user);
console.log(pass);
    // input
 if (user==="admin" && pass==="1234"){
    console.log("hi")
     alert("Login Successful")
 }else if(user==="admin"){
     alert("invalid password")
}else if(pass==="1234"){
    console.log("passwoerd correct")
    alert("invalid username")
}else{
    alert("invalid passowrd amd usernsme")
}

}