let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game"); 
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector("#msg");

let turn_O = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
];

const resetGame = () => {
    turn_O=true;
    enableBoxes();
    msg.innerText = "";
    msgContainer.classList.add("hide");
}


boxes.forEach(box =>  {
    box.addEventListener('click', () => {
        if(turn_O){
            box.innerText = 'O';
            turn_O = false;
        }
        else {
            box.innerText = 'X';
            turn_O = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = 'CONGRATS! ' + winner + ' is the Winner';
    msgContainer.classList.remove("hide"); 
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !="") {
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                
                showwinner(pos1val);
        }
    }
}
};

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);