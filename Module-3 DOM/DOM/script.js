function label(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
   ele.innerHTML=content;
   return ele;
    };

function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
return ele1;
}

function linebreak(tagename){
    var br=document.createElement(tagename);
    return br;
}
function button(tagname,content){
    var bttn=document.createElement(tagname);
    bttn.innerHTML=content;
    return bttn
}
var firstname=label("label","for","firstname","First name");
var br1=linebreak("br");
var inputfirstname=inputs("input","type","text","name","Name","id","firstname");
var br2=linebreak("br");
var middlename=label("label","for","middlename","Middle name");
var br3=linebreak("br");
var inputmiddlename=inputs("input","type","text","name","Name","id","middlename");
var br4=linebreak("br");
var lastname=label("label","for","lastname","Last name");
var br5=linebreak("br");
var inputlastname=inputs("input","type","text","name","Name","id","lastname");
var br6=linebreak("br");
var email=label("label","for","email","Email");
var br7=linebreak("br");
var inputemail=inputs("input","type","text","name","Name","id","email");
var br8=linebreak("br");
var password=label("label","for","password","Password");
var br9=linebreak("br");
var inputpassword=inputs("input","type","password","name","Name","id","password");
var br10=linebreak("br");
var br11=linebreak("br");
var bttn=button("button","Submit")
document.body.append(firstname,br1,inputfirstname,br2,middlename,br3,inputmiddlename,br4,lastname,br5,inputlastname,br6,email,br7,inputemail,br8,password,br9,inputpassword,br10,br11,bttn);