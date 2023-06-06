var num1 = Math.floor(Math.random()*6)+1;

var num2 = Math.floor(Math.random()*6)+1;

ig1 = "dice" + num1 + ".png";
ig2 = "dice" + num2 + ".png";

var s1 = document.getElementsByClassName("img1");
s1[0].setAttribute("src",ig1);

var s2 = document.getElementsByClassName("img2");
s2[0].setAttribute("src",ig2);
