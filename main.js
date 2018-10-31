//Product page
var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2");
var img3 = document.getElementById("img-3");
var img4 = document.getElementById("img-4");

img1.addEventListener("mouseover", showMsg1);
img1.addEventListener("mouseout", hideMsg1);
img2.addEventListener("mouseover", showMsg2);
img2.addEventListener("mouseout", hideMsg2);
img3.addEventListener("mouseover", showMsg3);
img3.addEventListener("mouseout", hideMsg3);
img4.addEventListener("mouseover", showMsg4);
img5.addEventListener("mouseout", hideMsg4);

function showMsg1() {
  var img = document.getElementsByClassName("show-text");
  img.classList.remove("hidden");
}

function hideMsg1() {
  var p = document.querySelector("p");
  p.classList.add("hidden");
}

function showMsg2() {
  var img = document.querySelector("p");
  img.classList.remove("hidden");
}

function hideMsg2() {
  var p = document.querySelector("p");
  p.classList.add("hidden");
}

function showMsg3() {
  var img = document.querySelector("p");
  img.classList.remove("hidden");
}

function hideMsg3() {
  var p = document.querySelector("p");
  p.classList.add("hidden");
}

function showMsg4() {
  var img = document.querySelector("p");
  img.classList.remove("hidden");
}

function hideMsg4() {
  var p = document.querySelector("p");
  p.classList.add("hidden");
}


// Contact page
var btn = document.querySelector('form > input[type="submit"]');
btn.addEventListener("click", btnMsg);

function btnMsg() {
  var name = document.querySelector('form > input[name="name"]').innerHTML;

  alert(`Thank you for your feedback!`);
}
