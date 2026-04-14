
import "./style.css";


let who = ["My boss", "Trump", "CR7", "Ohtani"];
let action = ["broke", "hid", "forgot", "threw"];
let what = ["my toothbrush", "the keys", "the glasses", "my credit card"];
let when = ["when I was in the bathroom", "in the dog's house", "during the concert", "at the conference"];


 window.onload = function() {
   //write your code here
   let generateExcuse = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
   }
   let displayedExcuse = document.getElementById("excuse");
   let generateButton = document.getElementById("btn");
   
   generateButton.onclick = () => {
     let generatedExcuse = `${generateExcuse(who)} ${generateExcuse(action)} ${generateExcuse(what)} ${generateExcuse(when)}`;
      displayedExcuse.innerHTML = generatedExcuse;
   };
 };
