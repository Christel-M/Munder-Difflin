//Product page
let img = document.querySelectorAll('.image-grid');
console.log(img);


for (let i = 0; i < img.length; i++){
  img[i].addEventListener("mouseover", showMsg);
  img[i].addEventListener("mouseout", hideMsg);


   function showMsg() {
    var para = img[i].nextElementSibling;
    para.classList.remove("hidden");


    // img.classList.remove("hidden");
  }

  function hideMsg() {
    var para = img[i].nextElementSibling;
    para.classList.add("hidden");
  }

}


// Contact page
var btn = document.querySelector('form > input[type="submit"]');
btn.addEventListener("click", btnMsg);

function btnMsg() {
  var name = document.querySelector('form > input[name="name"]').innerHTML;

  alert(`Thank you for your feedback!`);
}
