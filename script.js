function loginError(){
    alert("Unable to login please try again later!");
}
function signupError(){
    alert("Unable to signup please try again later!");
}
function subscribeError(){
    const input = document.getElementById("email").value;
    if(input == ""){
        alert("Hey, please enter your email to subscribe.");
    }
    else{
        alert(`hey ${input}, there is an error in this feature please try again later. `);
    }
}
