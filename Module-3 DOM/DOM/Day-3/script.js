var button=document.createElement("button");
button.innerHTML="click Me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    var res=prompt("enter the age");
    document.getElementById("demo").innerHTML = res;
}
