let gameSeq=[]
let userSeq=[]

let started=false;
let level=0

let h2=document.querySelector("h2")
colors=["red","pink","blue","purple"]

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game started")
        started=true
        document.querySelector("body").style.backgroundColor='white'
    }
    levelUp()
})

function btnFlash(btn)
{
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },200)
}

function userFlash(btn)
{
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },100)
}

function levelUp(){
    userSeq=[]
    level++
    h2.innerText=`Level ${level}`

    let randIdx=Math.floor(Math.random()*4)
    let randColor=colors[randIdx]
    let randBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    //console.log(gameSeq)
    btnFlash(randBtn)
}

function checkAns(idx)
{
    console.log("I got executed")
  //console.log(`Current level is ${level}`)
  //let idx=level-1
  if(userSeq[idx]===gameSeq[idx])
  {
    //console.log("Same value")
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp(),1000)}
  }else{
    h2.innerHTML=`Game Over :( Your score: <b>Level ${level}<b>`
    setTimeout(function()
{
    document.querySelector("body").style.backgroundColor="red"
},150)
    reset()
  }
}

function btnPress(){
    let btn=this
    userFlash(btn)
    userColor=btn.getAttribute("id")
    userSeq.push(userColor)
    checkAns(userSeq.length-1)
}

let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns)
    btn.addEventListener("click",btnPress)

function reset()
{
    started=false
    gameSeq=[]
    userSeq=[]
    level=0
}