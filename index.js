function menuBar() {
  let  navbar = document.querySelector(".navbar");
  let uList= document.querySelector(".list");
  console.log(navbar);
  if (navbar.className === "navbar") {
      navbar.className += " responsive";
      uList.className+=" uResponsive";
  }
  else{
    navbar.className = "navbar";
    uList.className ="list";
  }
}