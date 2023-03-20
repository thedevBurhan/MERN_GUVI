var heading = document.createElement("h2");
heading.setAttribute("id", "heading");
var coutdown = 10;
setTimeout(() => {
  heading.innerHTML = coutdown--;
  setTimeout(() => {
    heading.innerHTML = coutdown--;
    setTimeout(() => {
      heading.innerHTML = coutdown--;
      setTimeout(() => {
        heading.innerHTML = coutdown--;
        setTimeout(() => {
          heading.innerHTML = coutdown--;
          setTimeout(() => {
            heading.innerHTML = coutdown--;
            setTimeout(() => {
              heading.innerHTML = coutdown--;
              setTimeout(() => {
                heading.innerHTML = coutdown--;
                setTimeout(() => {
                  heading.innerHTML = coutdown--;
                  setTimeout(() => {
                    heading.innerHTML = coutdown--;
                    setTimeout(() => {
                      heading.innerHTML = "Happy Independence Day";
                      document.getElementById("heading").style.color = "blue";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 0);

document.body.append(heading);
