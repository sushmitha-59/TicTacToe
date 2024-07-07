let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msgC=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let turnO=true;
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgC.classList.add("hide");
    
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        winnercheck(); 
    });
    
});
const nowprint =(winner)=>{
    msg.innerText=`Winner is "${winner}"🎉`;
    msgC.classList.remove("hide");
}
const winnercheck=()=>{
    for (let index = 0; index < winPatterns.length; index++) {
        let pos1=boxes[winPatterns[index][0]].innerText;
        let pos2=boxes[winPatterns[index][1]].innerText;
        let pos3=boxes[winPatterns[index][2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1 === pos2 && pos2===pos3){
                console.log("winner is " , pos1);
                nowprint(pos1);
                disableBoxes();
            }
        }
    }
};
resetBtn.addEventListener("click",resetgame);