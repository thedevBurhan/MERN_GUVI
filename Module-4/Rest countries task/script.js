var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.classList.add("row", "m-4");
container.append(row);

var span=document.createElement("span");
row.append(span);


var res = fetch("https://restcountries.com/v2/all"); //this is return Promise in readable stream(A packets od data);
res
  .then((data) => data.json()) //this will return promise in object
  .then((data1) => foo(data1) ) //this will return array of object
  .catch((error) => console.log(error));

function foo(data1) {
    
  for (var i = 0; i < data1.length; i++) {
    row.innerHTML += `
      <div class="col-lg-4 col-sm-12">
        <div class="card mb-4" style="width: 20rem; background:#F4F6F6;
         height:25rem;color:#2E4053 ;text-align:center; 
         box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.04),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.02),
        0 41.8px 33.4px rgba(0, 0, 0, 0.06),
        0 100px 80px rgba(0, 0, 0, 0.12)">
                 <div class="card-header bg-light ">
                     ${data1[i].name}
                </div>
                 <img src="${data1[i].flag}" class="card-img-top m-2"  style="height: 10rem; width:19rem" alt="Country Flag">
               <div class="card-body">
   
                 <p class="card-text mb-0">Capitial: ${data1[i].capital}</p>
                  <p class="card-text mb-0">Region: ${data1[i].region}</p>
                
                  <p class="card-text mb-3">Country Code: ${data1[i].alpha3Code}</p>
                  
                   <button type="button" class="btn btn-secondary" onclick=getdata();>Click for Weather</button>
               </div>
           </div>
        
      </div>`;
  }
  document.body.append(container);
}

//Multiple api with async and await
async function getdata(){
  var res=await fetch("https://restcountries.com/v2/all");
  var res1= await res.json();

  for(var i=0;i<res1.length;i++){
      try {
          // console.log(`Latitude:${res1[i].latlng[0]} Longitude:${res1[i].latlng[1]}`);
          weatherdata(res1[i].latlng[0],res1[i].latlng[1]);
      } 
 catch (error) {
  console.log(error);
}
}
}

async function weatherdata(lat,lon){
try {
  if(lon===undefined) throw new Error("Invalid Coordinates");
  // console.log(lat,lon);
  let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa4973b1fa1ca717811b9566c55321ec`);
  let res3=await res2.json();
  console.log(`${res3.main.temp}`);
} catch (error) {
 console.log(error) 
}

}
// getdata();