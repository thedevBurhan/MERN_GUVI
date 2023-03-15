const form = document.getElementById("form");
const fname = document.getElementById("fname");
const food = document.getElementsByName("food");
// first name check---------------------------------------------------------

// show input error

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "firstname error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "firstname success";
}
// ---------------------------------------------------------------------------

// Check box


// event Listeners
form.addEventListener("submit", function (a) {
  a.preventDefault();
  // The preventDefault() method of the Event interface
  //  tells the user agent that if the event does not get explicitly handled,
  // its default action should not be taken as it normally would be.
  // first name check---------------------------------------------------------
  if (fname.value == "") {
    showError(fname, "First name is required");
  } else if (fname.value.length < 3) {
    showError(fname, "First name must be at least 3 character.");
  } else {
    showSuccess(fname);
  }
  // ---------------------------------------------------------------------------

  // checkbox
  let foodList = [];
  let foodCount = 0;
  
  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodList.push(food[i].value);
      foodCount++;
    }
  }
  if (foodList.length >= 2) {
    result = foodList.join(",");
  } else {
    result = alert("Choose atleast 2 options out of 5 in food");
  }
});
