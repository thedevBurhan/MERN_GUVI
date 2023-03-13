//To Find Prime Number
var n = 10;
var prime=[];
for (var a = 2; a <= n; a++) {
  var count = 0;
  for (var i = 1; i <= a; i++) {
    if (a % i === 0) {
      count++;
    }
  }
  if (count == 2) {
   prime.push(a);
  }
}

//----------------------------------------------------------------------------------------------------------------------------------
//XML-HTTP REQUEST: it is used to interact with the server via API
//Why:to get data from the server via API
//HOW

//step 1: Creating a XHR objects
//variables names:userdefined (our choice)
var request = new XMLHttpRequest();
// new :- this will create a new empty object
//step 2: Specify the API url
request.open("Get", "https://restcountries.com/v2/all");

//step 3: Sending the request
request.send();

//step 4:Once the requested data is there in server once the data is successfully loaded, server response
//will be of 200 status code.
//Function : they are used to perform specfic task.
// Functions application: used in all js events

request.onload = function () {
  var results = JSON.parse(request.response);
  //console.log(results);
  for (var i = 0; i < results.length; i++) {
    // console.log(results[i].name,results[i].capital,results[i].flag);
  }
};

//inside the function:we are converting the data from the server to the client
//which is in string to object

// ---------------------------------------------------------------------------------------------------------------------------------------

// functions

// 1.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// Input:(foo([7, 9, 0, -2]))
// output:7

// Input:(foo([0,6,4,5]))
// output:0

// Input:(foo([1,2,3,4],-3))
// Output:[];

// Input:(foo([1,2,3,4],3))
// Output:[1,2,3]

// Input:(foo([1,2,3,4],5))
// Output:[1,2,3,4]
function foo(n, m) {
  if (m == undefined) {
    return n[0];
  } else if (m < 0) {
    return [];
  } else {
    return n.slice(0, m);
  }
}
//   console.log(foo([7, 9, 0, -2]));
//   console.log(foo([0,6,4,5]));
//   console.log(foo([1,2,3,4],-3));
//   console.log(foo([1,2,3,4],3));
//   console.log(foo([1,2,3,4],5));
// ----------------------------------------------------------------------------------------------------------------------------------------

// 2.Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Input :                                     	Expected Output :
// console.log(last([7, 9, 0, -2]));         -2
// console.log(last([7, 9, 0, -2],3));    [9, 0, -2]
// console.log(last([7, 9, 0, -2],6));    [7, 9, 0, -2]

function last(n, m) {
  if (m == undefined) {
    return n[n.length - 1];
  } else {
    return n.slice(-m);
  }
}
// console.log(last([7, 9, 0, -2]));  -2
// console.log(last([7, 9, 0, -2],3));  [9,0,-2]
// console.log(last([7, 9, 0, -2],6));  [7,9,0,-2]

// -----------------------------------------------------------------------------------------------------------------------------------

// 3.Write a JavaScript function to generate an array between two integers of 1 step length.

// Input :
// console.log(range(3, 7));
// Expected Output:
// [3,4, 5, 6, 7]

// Input :
// console.log(range(-4, 7));
// Expected Output:
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

function range(n, m) {
  var box = [];
  for (var i = n; i <= m; i++) {
    box.push(i);
  }
  return box;
}

//    console.log(range(3, 7));
//    console.log(range(-4, 7));

// -----------------------------------------------------------------------------------------------------------------------------------

// 4. Write a JavaScript function to remove a specific element from an array.
// Input :
// console.log(remove([2, 5, 9, 6], 5));
// Expected Output:
// [2, 9, 6]

function remove(a, b) {
  var box = [];
  for (var i = 0; i < a.length; i++) {
    if (b !== a[i]) {
      box.push(a[i]); /// return a.splice(i,1);
    }
  }
  return box;
}
// console.log(remove([2, 5, 9, 6], 5));

// -----------------------------------------------------------------------------------------------------------------------------------

// 1.Write a JavaScript program to find the most frequent item of an array.
// Sample array:
// var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
// Sample Output: q ( 5 times )

var arr1 = [3, "q", "q", "q", 2, 3, "q", 3, "q", 2, 4, 9, 3];
var mo = 1;
var count = 0;
var ele;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      count++;
    }
    if (count > mo) {
      mo = count;
      ele = arr1[i];
    }
  }
  count = 0;
}
// console.log(ele+" Occureded"+mo+" times");

// -----------------------------------------------------------------------------------------------------------------------------------

// 2. write a  anonymous function which gives the unique number in the array
// Input:var arr=[1,1,2,3,4,5,6,7,4,3,2,5,6];
// Ouput:7
var num = [1, 1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 5, 6];
var temp = num[0];
for (var i = 1; i < num.length; i++) {
  temp = temp ^ num[i];
}
// console.log(temp);

var arr = [1, 1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 5, 6];
var arr1 = arr.sort();
var mo = 1;
var count = 0;
var ele;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      count++;
    }
    if (count == 1) {
      ele = arr1[i];
    }
  }
  count = 0;
}
// console.log(ele);

var arr = [1, 1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 5, 6];
//console.log( new Set(arr));// to remove duplication
//-------------------------------------------------------------------------------------------------------------------------------------

// write a function that takes array as an input
//perform the summation of each and every element
//of the array and return the sum of the elements
//of the array

function sumOfAllNumbersInAnArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
var numbers = [12, 13, 14, 25, 36];

//console.log(sumOfAllNumbersInAnArray(numbers));

//-------------------------------------------------------------------------------------------------------------------------------------

// Write a javascript function to take the numbers as a paramater and print the sum of the numbers that you are
// passing as a parameter

// function sumof(){
// }

// sumof(1);
// sumof(1,2);
// sumof(1,2,3,4);

function sumOfAllNumbersInAnArrays(...arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

//console.log(sumOfAllNumbersInAnArrays(25,36,4,8));

// ------------------------------------------------------------------------------------------------------------------------------------

// Return median of two sorted arrays of the same size.

function returnMedianOfTwoSortedArraysOfTheSameSize(value1, value2) {
  var res = value1.concat(value2);
  res.sort((a, b) => a - b);
  var result = res.length / 2;
  if (res.length % 2 == 0) {
    return res[result];
  }
}
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 10, 9];
//console.log(returnMedianOfTwoSortedArraysOfTheSameSize(arr1, arr2));

// ------------------------------------------------------------------------------------------------------------------------------------

//1.Create a class Called Student  and store the name as  well as the marks of the student
//along with that print the marks of the student using the method  called printmarks

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  printmarks() {
    return `I am ${this.name}, I got ${this.marks} in maths subject`;
  }
}
var stu = new Student("Peter", 88);
//console.log(stu.printmarks());

// ------------------------------------------------------------------------------------------------------------------------------------

var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
  var res= JSON.parse(request.response);
 // console.log(res);
  var data=res;
   var result=data.filter((ele)=>ele.population<100000);
   var finalResult=result.map((ele)=>ele.name);
   //console.log(finalResult);
   
  
};

// ------------------------------------------------------------------------------------------------------------------------------------

//Input:string
//output:sTrInG

var str="mohammed";
var split=str.split("");
var res=[];
for(var i=0;i<split.length;i++){
  
  if(i % 2 ==0){
    res.push(split[i]);
  }else{
    
    res.push(split[i].toUpperCase())
  }
}
//console.log(res.join(""));

// ------------------------------------------------------------------------------------------------------------------------------------

var request=new XMLHttpRequest();
request.open("Get","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var results=JSON.parse(request.response);
    var region = results.filter((element) => element.region == "Asia");
    var totalPopulation=region.reduce((value1,value2)=>value1+value2.population,0);
  //  console.log(totalPopulation)

}
// ------------------------------------------------------------------------------------------------------------------------------------

// find the rotation 

var x=4;
var y=[4,3,2,5];
var z=[3,2,5,4];
var a=y[0],min_index=0;
for(var i=0;i<x;i++){
  if(a>=z[i]){
    a=z[i];
    min_index=i;
  }
}
console.log(min_index);

// ------------------------------------------------------------------------------------------------------------------------------------

//given 4 numbers n p q r followed by n integers find the maximum value of pa [i] +qa[ j] +ra [k]
//5 1 2 3
// 1 2 3 4 5
// 30

var data="mississipie".split("");
var emptyObject={};
var key;
for(var i=0;i<data.length;i++){
  key=data[i];
  if (!emptyObject[key]) {
      emptyObject[key] = 1;
    } else if (emptyObject[key]) {
      emptyObject[key] += 1;
    }
}

console.log(emptyObject);
let max = 0;
let maxKey = "";
var x=[];
for(let empty in emptyObject){
  if(emptyObject[empty]> max){
    max = emptyObject[empty];
    maxKey= empty;
    x.push(maxKey);
  }
}

console.log(x.join(""));

// -----------------------------------------------------------------------------------------------------------------------------------
// You are given a paragraph.Your task is to print the words that come just after articles.

// Input Description:
// You are given a string ‘s’

// Output Description:
// print the words that come just after articles and -1 if there are no articles

// Sample Input :
// The sun rises in the east

// Sample Output :
// sun east

var res="The sun rises in the east".split(" ");
var temp=[];
for(var i=0;i<res.length;i++){
    var c=res[i];
    if(c.charAt(res[i].length-1) === "a" || c.charAt(res[i].length-1) === "e" || c.charAt(res[i].length-1) === "i"||c.charAt(res[i].length-1) === "o" || c.charAt(res[i].length-1) === "u")
    temp.push(res[i+1]);
}
console.log(temp.join(" "));

// ----------------------------------------------------------------------------------------------------------------------------------

