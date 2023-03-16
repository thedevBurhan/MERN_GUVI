let submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  // first name check----------------------------------------------------

  if (fname.value == "") {
    showError(fname, "First name is required");
  } else if (fname.value.length < 3) {
    showError(fname, "First name must be at least 3 character.");
  } else {
    showSuccess(fname);
  }
  //  -------------------------------------------------------------------

  // address--------------------------------------------------------------
  let address = [];
  address.push(Address1.value);
  address.push(Address2.value);
  //  -------------------------------------------------------------------

  let gender = document.getElementsByName("radio");
  let genderValue = [];
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderValue.push(gender[i].value);
    }
  }
  //  -------------------------------------------------------------------

  // food ------------------------------------------------------------------

  let food = document.getElementsByName("food");
  let foodList = [];
  let foodCount = 0;
  console.log(food);
  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodList.push(food[i].value);
      foodCount++;
    }
  }
  if (foodList.length >= 2) {
    result = foodList.join(", ");
  } else {
    result = alert("Choose atleast 2 options out of 5 in food");
  }
  //  -------------------------------------------------------------------
  createTable(
    fname.value,
    lname.value,
    address.join(" "),
    pincode.value,
    genderValue.join(""),
    result,
    state.value,
    country.value
  );
  fname.value = "";
  lname.value = "";
  Address1.value = "";
  Address2.value = "";
  pincode.value = "";
  gender.value = "";
  foodList = [];
  state.value = "";
  country.value = "";
});

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
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let Address1 = document.getElementById("Address1");
let Address2 = document.getElementById("Address2");
let pincode = document.getElementById("pincode");
let gender = document.getElementById("gender");
let food = document.getElementById("food");
let state = document.getElementById("state");
let country = document.getElementById("country");

function createTable(
  fname,
  lname,
  address,
  pincode,
  gender,
  food,
  state,
  country
) {
  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");
  td1.innerHTML = fname;
  td2.innerHTML = lname;
  td3.innerHTML = address;
  td4.innerHTML = pincode;
  td5.innerHTML = gender;
  td6.innerHTML = food;
  td7.innerHTML = state;
  td8.innerHTML = country;
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  tr.append(td5);
  tr.append(td6);
  tr.append(td7);
  tr.append(td8);
  tbody.append(tr);
}
function myFunction() {
  document.getElementById("myForm").reset();
}
