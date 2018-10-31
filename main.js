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



// // PRODUCT IMAGE GRID
// var grid = document.getElementById("product-grid");
// // var gridCols = ["https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99dc2a1e9649dea0da765888eb03a5c6&auto=format&fit=crop&w=1534&q=80",
// //                 "https://images.unsplash.com/photo-1532005097579-f89f65b99c8a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acb162eb5adf720ccf48adecbeb4cf7c&auto=format&fit=crop&w=1500&q=80",
// //                 "https://images.unsplash.com/photo-1536567983652-eef0edbd3677?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f41558b3a2933f29e72ad5ea5cbd6197&auto=format&fit=crop&w=1032&q=80"
// //                ]
// // var gridRows = ["https://images.unsplash.com/photo-1527769929977-c341ee9f2033?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99dc2a1e9649dea0da765888eb03a5c6&auto=format&fit=crop&w=1534&q=80",
// //                 "https://images.unsplash.com/photo-1532005097579-f89f65b99c8a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acb162eb5adf720ccf48adecbeb4cf7c&auto=format&fit=crop&w=1500&q=80",
// //                 "https://images.unsplash.com/photo-1536567983652-eef0edbd3677?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f41558b3a2933f29e72ad5ea5cbd6197&auto=format&fit=crop&w=1032&q=80"
// //                ]
// var prodGrid = [2,3];
//
// for (let i = 0; i < (prodGrid[0] * prodGrid[1]); i++){
//   let div = document.createElement("div");
//   div.style.backgroundImage = "url('https://images.unsplash.com/photo-1462887749044-b47cb05b83b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf5aef27b01bf436bac0d5b5521e3ae2&auto=format&fit=crop&w=1050&q=80')";
//   div.style.backgroundPosition = "50% 50%";
//   grid.appendChild(div);
// }
//
// grid.style.display = "grid";
// grid.style.gridGap = "5px";
// grid.style.gridTemplate = "repeat("+prodGrid[0]+", 330px) / repeat("+prodGrid[1]+", 33%)";
