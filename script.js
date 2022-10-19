// Username login

// HTML variables


// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked(){

let user = document.getElementById("user").value.toLowerCase;
let pass = document.getElementById("pass").value.toLowerCase;
    // input
    if(user==="admin" || pass === "1234" ){
        console.log("alert succesful")
        alert("Login Sucessful")
    } else if(user === "admin"){
        alert("Invalid Password")
    }
}
