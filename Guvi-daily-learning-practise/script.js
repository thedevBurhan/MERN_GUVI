//To Find Prime Number
var n=10;
for(var a=2;a<=n;a++){
      var count=0;
      for(var i=1;i<=a;i++){
          if(a%i===0){
              count++;
          }
      }
      if(count==2){
          //console.log(a);
      }
  }

  //----------------------------------------------------------------------------------------------------------------------------------
//XML-HTTP REQUEST: it is used to interact with the server via API
//Why:to get data from the server via API
//HOW

//step 1: Creating a XHR objects
//variables names:userdefined (our choice)
var request=new XMLHttpRequest();
// new :- this will create a new empty object
//step 2: Specify teh API url
request.open("Get","https://restcountries.com/v2/all");

//step 3: Sending the request 
request.send();

//step 4:Once the requested data is there in server once the data is successfully loaded, server response
//will be of 200 status code.
//Function : they are used to perform specfic task.
// Functions application: used in all js events

request.onload=function() {
    var results=JSON.parse(request.response);
    //console.log(results);
    for(var i=0; i <results.length; i++){
   // console.log(results[i].name,results[i].capital,results[i].flag);
    }
}

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
function foo(n,m){
    
         if(m==undefined){
           return n[0];
         }
          else if(m<0){
           return [];
         }
         else {
           return n.slice(0,m);
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


function last(n,m){
 
    if(m==undefined){
      return n[n.length-1] ;
    }
     else{
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

function range(n,m){
    var box=[];
    for(var i=n;i<=m;i++){
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

function remove (a,b){
    var box=[];
  for(var i=0;i<a.length;i++){
    if(b!==a[i]){
     box.push(a[i]);     /// return a.splice(i,1);
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

var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
var mo=1;
var count=0;
var ele;
for(var i=0;i<arr1.length;i++){
    for(var j=i;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
            count++;
        }
        if(count>mo){
            mo=count;
            ele=arr1[i];
        }
    }
    count=0;

}
// console.log(ele+" Occureded"+mo+" times");

// -----------------------------------------------------------------------------------------------------------------------------------

// 2. write a  anonymous function which gives the unique number in the array
// Input:var arr=[1,1,2,3,4,5,6,7,4,3,2,5,6];
// Ouput:7
var num=[1,1,2,3,4,5,6,7,4,3,2,5,6];
var temp=num[0];
for (var i=1;i<num.length;i++){
  temp=temp^num[i];
}
// console.log(temp);

var arr=[1,1,2,3,4,5,6,7,4,3,2,5,6];
var arr1=arr.sort();
var mo=1;
var count=0;
var ele;
for(var i=0;i<arr1.length;i++){
    for(var j=i;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
            count++;
        }
        if(count==1){
          
            ele=arr1[i];
        }
    }
    count=0;

}
// console.log(ele);

var arr=[1,1,2,3,4,5,6,7,4,3,2,5,6];
 console.log( new Set(arr));// to remove duplication