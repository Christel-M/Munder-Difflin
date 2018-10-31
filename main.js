//Product page
var img = document.getElementById("prodGrid");
img.addEventListener("mouseover", showMsg);
img.addEventListener("mouseout", hideMsg);

function showMsg() {
  var p = document.querySelector("p");
  p.classList.remove("hidden");
}

function hideMsg() {
  var p = document.querySelector("p");
  p.classList.add("hidden");
}


// Contact page
var btn = document.querySelector('form > input[type="submit"]');
btn.addEventListener("click", btnMsg);

function btnMsg() {
  var name = document.querySelector('form > input[name="name"]');
  var user = {"name": name};

  alert(`Hi ${user}! We received your feedback!`)
}
