var wrap=document.createElement("div");
wrap.setAttribute("class","wrap");
// wrap.setAttribute("class","container");
document.body.append(wrap);


const thtable4444but = document.createElement('button');
                        thtable4444but.setAttribute('id','test1');
                        thtable4444but.innerHTML = '/';
                        thtable4444but.value = '/';
                        thtable4444but.setAttribute('onclick', "btn1('/')")

const thtable4444 = document.createElement('th');                
                  thtable4444.appendChild(thtable4444but);
