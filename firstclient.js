function sayHello(){
var name= document.getElementById("name").value;
var email=document.getElementById("modal-email").value;
var pass=document.getElementById("pass").value;
if (name!==""&& pass!=="" && email!==""){
var message="<h6>Welcome " + name + " !</h6>";
var content=document.getElementById("content");
content.innerHTML=message;
}
else{
    var message2="<h2>Invalid Input</h2>";
    content.innerHTML=message2;
}
}