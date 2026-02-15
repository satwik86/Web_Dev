let userscore =0;
let compscore=0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userscorepara = document.querySelector('#userscore');
const compscorepara = document.querySelector('#compscore');

const compimage = document.querySelector('#compimg');

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randnum = Math.floor(Math.random() * 3);
    return options[randnum];
};

const drawgame = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a Draw! Play again.";
    msg.style.backgroundColor = "#081b31";
    compimage.style.border = "5px solid black";
};

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText =  userscore;
        msg.innerText = `You Win!  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        compimage.style.border = "5px solid red";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compimage.style.border = "5px solid green";
    }
};

const playgame = (userchoice) => {
    console.log("userchoice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice = ",compchoice);
    updatecompimage(compchoice);
    if(userchoice === compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock" ) {
            userwin =compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

// upgrading 

const compimages = {
    rock: "rockimg.png",
    paper: "paperimg.png",
    scissors: "scissorsimg.png"
};

const updatecompimage = (compchoice) => {
    compimage.src = compimages[compchoice];
};


