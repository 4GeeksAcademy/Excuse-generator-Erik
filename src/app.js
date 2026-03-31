
import "./style.css";


let who = ["My boss", "Trump", "CR7", "Ohtani"];
let action = ["broke", "hid", "forgot", "threw"];
let what = ["my toothbrush", "the keys", "the glasses", "my credit card"];
let when = ["when I was in the bathroom", "in the dog's house", "during the concert", "at the conference"];


let generateExcuse = (who, action, what, when) => {
  let randomExcuse = who[Math.floor(Math.random() * who.length)] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)];
  return randomExcuse;

}

 window.onload = function() {
   //write your code here
  
   let displayedExcuse = document.getElementById("excuse");
   let generateButton = document.getElementById("btn");

   generateButton.onclick = () => {
     let generatedExcuse = generateExcuse(who, action, what, when);
      displayedExcuse.innerHTML = generatedExcuse;
   };
 };
