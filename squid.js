let btn=document.querySelector("button");
let form=document.querySelector("form");

btn.addEventListener("click",register);
btn.addEventListener("click",code);
btn.addEventListener("click",no);
btn.addEventListener("click",thank);
form.addEventListener("submit",function(event){
    event.preventDefault();
    let name=document.querySelector(".name");
    let dob=document.querySelector(".dob");
    console.log(`Name of the player is ${name.value}`);
    console.log(`Date of Birth of the player is ${dob.value}`);
});

function register(){
    let name=document.querySelector(".name");
    alert(`Hi  ${name.value}`);
    alert("Congratulations! You have successfully registered to the game");
}
function code(){
    alert("Your code is 'RED LIGHT GREEN LIGHT'");
}
function no(){
    let no=Math.floor((Math.random()*456))+1;
    alert(`Now you are ${no} No. player`);
}
function thank(){
    alert("Thank You for registering. We will contact with you later");
}