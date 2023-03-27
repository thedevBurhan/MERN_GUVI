let age = 26;
let myAge = age;

// console.log(age);
// console.log(myAge);

myAge = 30;

// console.log(age);
// console.log(myAge);


let names = [
     "buahri",
    "eliyas"
]
// console.table(names)

let clonedNames = {...names};
// console.table(clonedNames);

clonedNames.name1 = 'burhan';
// console.table(clonedNames); 
// console.table(names) 

var array=[1,2,3,4,5,6,7,8,9,10];
var odd=function(item){
    return item%2 !==0;
}
var x=[];
for (var i=0;i<array.length;i++){
    if(odd(array[i])){
        x.push(array[i]);
    }
}
// console.log(x);

var a="-0";
// implicit typecasting and explicit type 
if(a){ // == === ? &&  === 
    // console.log("this is true");

}else{
    // console.log("this is false")
}
// console.log(typeof(a));



function secondLargest(n){
    var temp;
    var x;
    for(var i=0;i<n.length;i++){
        for(var j=0;j<n.length;j++){
          if(n[i]<n[j]){
            temp=n[i];
            n[i]=n[j];
            n[j]=temp;
          }
        }
      }
return x=n[n.length-2];

}
console.log(arr);
var arr=[5,6,7,8,9,2,5,100,500,100000,400, 6000,8000,3,4,900];
console.log(secondLargest(arr));

// 2nd largest value 