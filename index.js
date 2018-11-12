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



let circle = document.querySelector('circle');
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}


let slideElement = document.getElementsByClassName("sliderContent");
let percentageSVG=document.querySelector(".percentageSVG");
let data=[];
let slideIndex = 1;
showDivs(slideIndex);

for(let i=1;i<=slideElement.length;i++){
  let part=100/slideElement.length;
  data.push(part*i);
}

function showDivs(n) {
  let i;
  if (n > slideElement.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slideElement.length} ;
  for (i = 0; i < slideElement.length; i++) {
    slideElement[i].style.display = "none"; 
  }
  setProgress(data[slideIndex-1]);
  console.log(percentageSVG)
  percentageSVG.innerHTML=data[slideIndex-1]
  slideElement[slideIndex-1].style.display = "flex";
}
function plusDiv(n=+1){
  showDivs(slideIndex += n);
  //setTimeout(plusDiv, 2000);
}
plusDiv(+1);

//https://pixelfordinner.com/