randomNum1 = Math.floor(Math.random()*6) + 1;

randomNum2 = Math.floor(Math.random()*6) + 1;

imgsrc1 = "images/dice" + randomNum1 + ".png";

imgsrc2 = "images/dice" + randomNum2 + ".png";


document.querySelector(".img1").setAttribute("src" , imgsrc1);

document.querySelector(".img2").setAttribute("src" , imgsrc2);


if( randomNum1 > randomNum2 ){

  document.querySelector("h1").innerHTML = "Player 1 Wins!";

}else if(randomNum1 < randomNum2){

  document.querySelector("h1").innerHTML = "Player 2 wins!";

}else {
  document.querySelector("h1").innerHTML = "Draw!";
}
