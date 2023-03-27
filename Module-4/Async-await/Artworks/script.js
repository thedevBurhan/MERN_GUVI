

var container = document.createElement("div");
container.className = "container";
container.setAttribute("class","container")
var row = document.createElement("div");
row.classList.add("row", "m-4");
container.append(row);


 var res = fetch("https://api.artic.edu/api/v1/artworks"); //this is return Promise in readable stream(A packets od data);
res
  .then((data) => data.json()) //this will return promise in object
  .then((datas) => foo(datas.data)) //this will return array of object
  .catch((error) => console.log(error));
function foo(datas) {
    for (var i = 0; i < datas.length; i++) {

      row.innerHTML += `
          <div class="col-lg-6 col-sm-12">
            <div class="card mb-4" style="width: 25rem; background:#F4F6F6;
             height:33rem;color:#2E4053 ;text-align:justify; 
             word-spacing: normal;
             color:black;font-family:Verdana, Geneva, Tahoma, sans-serif;
             box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.04),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.02),
            0 41.8px 33.4px rgba(0, 0, 0, 0.06),
            0 100px 80px rgba(0, 0, 0, 0.12)">
                     <img src="${datas[i].thumbnail.lqip}" class="card-img-top m-2"  style="height: 15rem; width:24rem" alt="artworks">
                   <div class="card-body"">
                       
                     <p class="card-text mb-2">Artist: <span style="color:blue">${datas[i].artist_title}</span></p>
                     <p class="card-text mb-2">Department: <span style="color:blue">${datas[i].department_title}</span></p>
                     <p class="card-text mb-2">Place:<span style="color:blue"> ${datas[i].place_of_origin}</span></p>
                     <p class="card-text mb-2">Credits:<span style="color:blue"> ${datas[i].credit_line}</span></p> 
                   </div>
               </div>
            
          </div>`;
    }
    document.body.append(container);
  }