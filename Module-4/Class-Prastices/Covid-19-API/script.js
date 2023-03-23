var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.style.padding="4px";

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="20px";
button.style.padding="8px";
button.style.width="5rem";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");
active.style.marginTop="1rem";
let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");
let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");

div.append(input,button,active,deaths,recovered);
document.body.append(div);

async function foo(){
    try{
let res=document.getElementById("country").value;
console.log(res);
let url=`https://api.covid19api.com/total/dayone/country/${res}`;
let res1=await fetch(url);
let res2=await res1.json();
let index=res2.length-1;
console.log(res2[index]);
console.log(res2[index].Active);
console.log(res2[index].Deaths);
console.log(res2[index].Recovered);
active.innerHTML=`Total Active Cases:${res2[index].Active}`;
deaths.innerHTML=`Total Death :${res2[index].Deaths}`;
recovered.innerHTML=`Total Recovered Cases:${res2[index].Recovered}`;
} catch (error) {
    alert("Invalid data (Only country name is valid");
    console.log(error);
}
}