function createDivWithClass(tagName, classNamesString) {
  var div = document.createElement(tagName);
  div.setAttribute("class", classNamesString);
  return div;
}

function inputwithoutAttribute(
  tagname,
  attrname,
  attrvalue,
  attrname1,
  attrvalue1,
  attrname2,
  attrvalue2
) {
  var element = document.createElement(tagname);
  element.setAttribute(attrname, attrvalue);
  element.setAttribute(attrname1, attrvalue1);
  element.setAttribute(attrname2, attrvalue2);
  return element;
}
function createInputsWithAttributes(
  tagname,
  attrname,
  attrvalue,
  attrname1,
  attrvalue1,
  attrname2,
  attrvalue2,
  attrname3,
  attrvalue3
  
) {
  var elements = document.createElement(tagname);
  elements.setAttribute(attrname, attrvalue);
  elements.setAttribute(attrname1, attrvalue1);
  elements.setAttribute(attrname2, attrvalue2);
  elements.setAttribute(attrname3, attrvalue3);
  return elements;
}



var containerDiv = createDivWithClass("div", "container");
var wrapperDiv = createDivWithClass("div", "wrap");
var form=document.createElement("form");
var displayDiv=createDivWithClass("div","display");
var inputFordisplay=inputwithoutAttribute("input","type","text","name","display","id","display");
var rowOneDiv=document.createElement("div");
var inputForRowOneAc=createInputsWithAttributes("input","type","button","value","AC","class","color","onclick","display.value = ' '");
var inputForRowOneDe=createInputsWithAttributes("input","type","button","value","DE","class","color","onclick","display.value = display.value.toString().slice(0,-1)");
var inputForRowOneDot=createInputsWithAttributes("input","type","button","value",".","class","color","onclick","display.value += '.'");
var inputForRowOneDivision=createInputsWithAttributes("input","type","button","value","/","class","color","onclick","display.value += '/'");
var rowTwoDiv=document.createElement("div");
var inputForRowTwoSeven=inputwithoutAttribute("input","type","button","value","7","onclick","display.value += '7'");
var inputForRowTwoEight=inputwithoutAttribute("input","type","button","value","8","onclick","display.value += '8'");
var inputForRowTwoNine=inputwithoutAttribute("input","type","button","value","9","onclick","display.value += '9'");
var inputForRowTwoMulti=createInputsWithAttributes("input","type","button","value","*","class","color","onclick","display.value += '*'");
var rowThreeDiv=document.createElement("div");
var inputForRowThreeFour=inputwithoutAttribute("input","type","button","value","4","onclick","display.value += '4'");
var inputForRowThreeFive=inputwithoutAttribute("input","type","button","value","5","onclick","display.value += '5'");
var inputForRowThreeSix=inputwithoutAttribute("input","type","button","value","6","onclick","display.value += '6'");
var inputForRowThreeSub=createInputsWithAttributes("input","type","button","value","-","class","color","onclick","display.value += '-'");
var rowFourDiv=document.createElement("div");
var inputForRowFourOne=inputwithoutAttribute("input","type","button","value","1","onclick","display.value += '1'");
var inputForRowFourTwo=inputwithoutAttribute("input","type","button","value","2","onclick","display.value += '2'");
var inputForRowFourThree=inputwithoutAttribute("input","type","button","value","3","onclick","display.value += '3'");
var inputForRowFourAdd=createInputsWithAttributes("input","type","button","value","+","class","color","onclick","display.value += '+'");
var rowFiveDiv=document.createElement("div");
var inputForRowFiveDoubleZero=inputwithoutAttribute("input","type","button","value","00","onclick","display.value += '00'");
var inputForRowFiveZero=inputwithoutAttribute("input","type","button","value","0","onclick","display.value += '0'");
var inputForRowFiveEqual=createInputsWithAttributes("input","type","button","value","=","class","equal","onclick","display.value=eval(display.value)");

form.append(displayDiv);
rowOneDiv.append(inputForRowOneAc);
rowOneDiv.append(inputForRowOneDe);
rowOneDiv.append(inputForRowOneDot);
rowOneDiv.append(inputForRowOneDivision);
form.append(rowOneDiv);
rowTwoDiv.append(inputForRowTwoSeven);
rowTwoDiv.append(inputForRowTwoEight);
rowTwoDiv.append(inputForRowTwoNine);
rowTwoDiv.append(inputForRowTwoMulti);
form.append(rowTwoDiv);
rowThreeDiv.append(inputForRowThreeFour);
rowThreeDiv.append(inputForRowThreeFive);
rowThreeDiv.append(inputForRowThreeSix);
rowThreeDiv.append(inputForRowThreeSub);
form.append(rowThreeDiv);
rowFourDiv.append(inputForRowFourOne);
rowFourDiv.append(inputForRowFourTwo);
rowFourDiv.append(inputForRowFourThree);
rowFourDiv.append(inputForRowFourAdd);
form.append(rowFourDiv);
rowFiveDiv.append(inputForRowFiveDoubleZero);
rowFiveDiv.append(inputForRowFiveZero);
rowFiveDiv.append(inputForRowFiveEqual);
form.append(rowFiveDiv);
displayDiv.append(inputFordisplay);


wrapperDiv.append(form);
containerDiv.append(wrapperDiv);
document.body.append(containerDiv);


