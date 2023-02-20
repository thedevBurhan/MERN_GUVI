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
    console.log(results[i].name,results[i].capital,results[i].flag);
    }
}

//inside the function:we are converting the data from the server to the client
//which is in string to object


// ---------------------------------------------------------------------------------------------------------------------------------------

// functions

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