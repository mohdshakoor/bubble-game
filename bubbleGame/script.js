var timer = 30;
var score = 0;
var hitrn;

function makebubble (){
  let clutter = "";
for(var i = 0; i<120; i++){
  var rn = Math.floor(Math.random()*10)
 clutter +=  `<div class="bubble">${rn}</div>`;
}
 document.querySelector("#pbtm").innerHTML=clutter;
}

function runtimer(){
  let timerint = setInterval(() => {
    if(timer>0){
      timer--;
      document.querySelector("#timerval").textContent=(timer);
    }else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML="<h1>GAME OVER</h1>"
    }
   
  }, 1000);
}

function getnewhit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=hitrn;
}
function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click" ,function(dets){
var clickednum = (Number(dets.target.textContent));
if (clickednum === hitrn){
  increaseScore();
  makebubble();
  getnewhit();
}
});

getnewhit();
runtimer();
makebubble();