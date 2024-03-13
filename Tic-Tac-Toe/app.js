let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msg=document.querySelector("p");
let turnO=true;

const winPatterns=[
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
    

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const resetGame=()=>{
    turnO=true;
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msg.classList.add("hide")
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations...Winner is ${winner}`;
    msg.classList.remove("hide");
    for(box of boxes){
        box.disabled=true;
    }
}

const checkWinner =()=>{
    for(let pattern of winPatterns){
        console.log("pattern: ", pattern)
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
                showWinner(pos1);
            }            
        }

    }
}

resetbtn.addEventListener("click",resetGame)
newbtn.addEventListener("click",resetGame)