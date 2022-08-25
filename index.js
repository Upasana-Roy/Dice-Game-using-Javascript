//Random Nos. b/w 1 & 6
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

//Displaying Random Nos. b/w 1 & 6 on the left dice
document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
//Displaying Random Nos. b/w 1 & 6 on the left dice
document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");

//Declaring the winner or draw
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
