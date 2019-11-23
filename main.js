var text1 = "I love you the more in that I believe you had liked me for my own sake and for nothing else.John Keats";
var text2 = "But man is not made for defeat. A man can be destroyed but not defeated.Ernest Hemingway";
var text3 = "When you reach the end of your rope, tie a knot in it and hang on.Franklin D. Roosevelt";
var text4 = "There is nothing permanent except change.Heraclitus";
var text5 = "You cannot shake hands with a clenched fist.Indira Gandhi";
var text6 = "Let us sacrifice our today so that our children can have a better tomorrow.A. P. J. Abdul Kalam";

var arr = [text1,text2,text3,text4,text5,text6];
var x = 0;
var len = arr.length;

function randomQuote(len){
 
var x = Math.floor(Math.random() * Math.floor(len));   

document.getElementById('par').innerText = arr[x];

    return x ;
   
}



