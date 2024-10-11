let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    // console.log("Generate random color");
    let h1=document.querySelector("h1")
    let rc=getRandomColor();
    h1.innerText=rc
    let div=document.querySelector("div")
    div.style.backgroundColor=rc
})
function getRandomColor()
{
 let red=Math.floor(Math.random()*255)
 let blue=Math.floor(Math.random()*255)
 let green=Math.floor(Math.random()*255)
 let color=`rgb(${red},${green},${blue})`;
 return color
}