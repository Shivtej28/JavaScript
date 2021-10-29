const btn = document.getElementById("btn");
const body = document.getElementsByTagName("body")[0];
const colorArr = ["Red", "Green", "Blue", "Purple", "Aqua","Brown","CornflowerBlue", "Crimson","DeepPink","Gold", "MediumVioletRed"];

btn.addEventListener("click", changeBg);

function changeBg(){
   // console.log(Math.random());
    var color = colorArr[Math.floor(Math.random()*colorArr.length)];
    console.log(color);
    body.style.backgroundColor = color;

}