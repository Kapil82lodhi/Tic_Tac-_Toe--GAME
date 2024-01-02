let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player O  , Player X;
 

let BTn = document.querySelectorAll("button");


 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8] 
      
];


const resetGame = () =>{
    turnO = true;
    enablebox();
    msgContainer.classList.add("hide");

}





boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O";
         
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

    });
});


const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {
     
    if(Winner === "O"){
        msg.innerText = `Congratulations , Winner is Player-1 😍 `;
        msgContainer.classList.remove("hide");
    }else{
        msg.innerText = `Congratulations , Winner is Player-2 😍 `;
        msgContainer.classList.remove("hide");
    }
   
    disablebox();

}

// const showDraw = (x) =>{
//         msg.innerText = `The Game Is ${x}`
//         msgContainer.classList.remove("hide");
// }

const checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1val =  boxes[pattern[0]].innerText; 
       let pos2val =  boxes[pattern[1]].innerText; 
       let pos3val =  boxes[pattern[2]].innerText;

       if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos1val === pos3val && pos2val === pos3val){
            console.log("Winner", pos1val);
            showWinner(pos1val);
        }
       }

    }
};
 
newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);