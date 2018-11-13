function menuBar() {
  let  navbar = document.querySelector(".navbar");
  let uList= document.querySelector(".list");
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

//for Slider

let slideElement = document.getElementsByClassName("sliderContent");
const slideElementLength=slideElement.length;
let percentageSVG=document.querySelector(".percentageSVG");
let data=[];
let slideIndex = 1;

showDivs(slideIndex);



async function calcParts(slideElementLength) {
  for(let i=1;i<=slideElementLength;i++){
    let part=100/slideElementLength;
    data.push(part*i);
  }
}

async function showDivs(n) {
  await calcParts(slideElementLength);
  let i;
  if (n > slideElement.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slideElement.length} ;
  for (i = 0; i < slideElement.length; i++) {
    slideElement[i].style.display = "none"; 
  }

  setProgress(data[slideIndex-1]);
  percentageSVG.innerHTML=data[slideIndex-1]
  slideElement[slideIndex-1].style.display = "flex";
}
function plusDiv(n=+1){
  showDivs(slideIndex += n);
}

