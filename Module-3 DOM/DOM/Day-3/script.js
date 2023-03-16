var input=document.createElement('input');
input.setAttribute("type","date");
input.setAttribute("id","dob");
input.setAttribute("class","main");

var button=document.createElement("button");
button.innerHTML="Display date";
button.setAttribute("class","btn btn-primary ml-2");
button.addEventListener("click",displaydate);
document.body.append(input,button);

function displaydate(){
    var inputs=document.getElementById("dob").value;
    if(Date.parse(inputs)){
        var inputdata=new Date(inputs);
        document.getElementById("heading").innerHTML="Given input is"+" "+inputdata;
        var currentdate=new Date();
        var Millisecondsdiff=currentdate.getTime()-inputdata.getTime();
        document.getElementById("milliseconds").innerHTML="Milli second"+" "+Millisecondsdiff;
        var secondsdiff=Mathfloor(Millisecondsdiff,1000);
        document.getElementById("second").innerHTML="Second"+" "+secondsdiff;
        var minutediff=Mathfloor(secondsdiff,60);
        document.getElementById("minute").innerHTML="Minute"+" "+minutediff;
        var hourdiff=Mathfloor(minutediff,60);
        document.getElementById("hour").innerHTML="Hour"+" "+hourdiff;

        var daydiff=Mathfloor(hourdiff,24);
        document.getElementById("day").innerHTML="Day"+" "+daydiff;

        var yearsdiff=getyears(inputdata,currentdate);
        document.getElementById("year").innerHTML="Year"+" "+yearsdiff;

        var monthdiff=getmonths(inputdata,currentdate);
        document.getElementById("month").innerHTML="Month"+" "+monthdiff;

    }else{
        console.log("invalid input entered");
    }
   
}
function Mathfloor(value1,value2){
    return Math.floor(value1/value2);
}
function getyears(value1,value2){
    var d1=new Date (value1);
    var d2=new Date(value2);
    return d2.getFullYear()-d1.getFullYear();
}
function getmonths(value1,value2){
    var year=getyears(value1,value2);
    var months=(year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}
