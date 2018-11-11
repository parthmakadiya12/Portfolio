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

let  circle = document.querySelector(".circle");
  circle.style.strokeDasharray=30;



var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// context.beginPath();
// //	context.arc(x,y,r,sAngle,eAngle,counterclockwise);
// function progress(){
//   for(var i=0;i<10;i++){
//     context.arc(256,256,100,i*0.1*Math.PI,1.5*Math.PI,0);
//     context.strokeStyle='#ffffff';
//     context.lineWidth=10;
//     context.stroke(); 
//     context.
//   }
// }

// progress();