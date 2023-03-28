var heading = document.createElement("h1");
heading.setAttribute("class", "heading");
heading.innerHTML = "Famous Memes Template";
document.body.append(heading);

var container = document.createElement("div");
container.className = "container";
container.setAttribute("class","container")
var row = document.createElement("div");
row.classList.add("row", "m-4");
container.append(row);


var sol = fetch("https://api.imgflip.com/get_memes"); //this is return Promise in readable stream(A packets od data);
sol
  .then((data) => data.json()) //this will return promise in object
  .then((datas) => console.log(datas.data.memes)) //this will return array of object
  .catch((error) => console.log(error));

 var res = fetch("https://api.imgflip.com/get_memes"); //this is return Promise in readable stream(A packets od data);
res
  .then((data) => data.json()) //this will return promise in object
  .then((datas) => foo(datas.data.memes)) //this will return array of object
  .catch((error) => console.log(error));
function foo(datas) {
    for (var i = 0; i < datas.length; i++) {

      row.innerHTML += `
          <div class="col-lg-4 col-sm-12">
            <div class="card mb-4" style="width: 20rem; background:#F4F6F6;
             height:25rem;color:#2E4053 ;text-align:center; 
             word-spacing: normal;
             color:black;font-family:Verdana, Geneva, Tahoma, sans-serif;
             box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.04),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.02),
            0 41.8px 33.4px rgba(0, 0, 0, 0.06),
            0 100px 80px rgba(0, 0, 0, 0.12)">
                     <img src="${datas[i].url}" class="card-img-top m-2"  style="height: 18rem; width:19rem" alt="artworks">
                     <div class="card-body"">
                       
                     <p class="card-text mb-2"><span style="color:black;text-align:center;">${datas[i].name}</span></p>
                    
                   </div>
               </div>
            
          </div>`;
    }
    document.body.append(container);
  }