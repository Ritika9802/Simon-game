let gameseq=[];
let userseq=[];
let btns=["pink","green","orange","blue"];
let started=false;
let level=0;
let max=0;

let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
document.addEventListener("keydown",function(event){
    if(started==false){
        console.log("game started!");
        started=true;

        levelup();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let choose=Math.floor(Math.random()*4);
    let rndclr=btns[choose];
    gameseq.push(rndclr);
    let rndbtn=document.querySelector(`.${rndclr}`);
    console.log(gameseq);

    btnFlash(rndbtn);
    

}
function check(ind){
    if(gameseq[ind]===userseq[ind]){
        if(userseq.length===gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! your score is <b>${level-1}<b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150);
        if(max===0 || max<level-1){
            max=level-1;
            h3.innerHTML=`High Score : <b> ${max}</b>`;
        }
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    let color=btn.getAttribute("id");
    userseq.push(color);
    check(userseq.length-1);
}
let allbtn=document.querySelectorAll(".child");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
