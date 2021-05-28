
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomImagesource="images/"+randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImagesource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🏆Player 1 Wins";
}else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins👑";
}else{
  document.querySelector("h1").innerHTML="🍻Draw🥂 ";
}
