function creatediv(tagname){
    var div=document.createElement(tagname);
    return div;
}


function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrvalue);
    element.setAttribute(attrname1,attrvalue1);
    element.setAttribute(attrname2,attrvalue2);
    return element;
}
function inputsWithColor(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,attrname4,attrvalue4){
    var elements=document.createElement(tagname);
    elements.setAttribute(attrname,attrvalue);
    elements.setAttribute(attrname1,attrvalue1);
    elements.setAttribute(attrname2,attrvalue2);
    elements.setAttribute(attrname3,attrvalue3);
    elements.setAttribute(attrname4,attrvalue4);
    return elements;
}
var divforfirstrow=creatediv("div");
var allclear=inputsWithColor("input","type","button","value","AC","onclick",)