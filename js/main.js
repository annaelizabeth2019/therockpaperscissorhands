/*----- constants -----*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

const rps =
    {
    r: {
        image: 'url(https://pbs.twimg.com/media/CWPH_KBUwAElrSH.jpg)',
        beats: 's'
    },
    p: {
        image: 'url(http://info465.us/nbrowne/media/Paper1.jpg)',
        beats: 'r'
    },
    s: {
        image: 'url(http://cdn-scraplogo.pearltrees.com/8a/31/8a31f1fe5ed38d1a8a51b11ebd25adcd-pearlsquare.jpg?v=2)',
        beats: 'p'
    }
    };

const rpsLookUp = ['r', 'p', 's']


/*----- app's state (variables) -----*/

let scores, results, winner;

/*----- cached element references -----*/

const scoreEls = {
    p: document.querySelector('#player > h1'),
    c: document.querySelector('#computer > h1'),
    t: document.querySelector('#tie > h1')
};

const pResultEl = document.querySelector('#player > div');
const cResultEl = document.querySelector('#computer > div');

/*----- event listeners -----*/

document.getElementById('scissors-btn').addEventListener('click', handleGoS);
document.getElementById('paper-btn').addEventListener('click', handleGoP);
document.getElementById('rock-btn').addEventListener('click', handleGoR);

/*----- functions -----*/

function init() {
    scores = {
        p: 0,
        t: 0,
        c: 0,
    };
    results = {
        p: 'r',
        c: 'r'
    };
    winner = null; // null -no winner; 'p' -player wins; c -computer wins;
    render();
}

init();

function render() {
    console.log('render is ready!')
    //transfer all state to the DOM
    //display scores
    for (let score in scores) {
        scoreEls[score].textContent = scores[score];
    };
    //display results
    pResultEl.style.backgroundImage = rps[results.p].image;
    cResultEl.style.backgroundImage = rps[results.c].image;

    pResultEl.style.borderColor = winner === 'p' ? 'gold' : 'white';
    cResultEl.style.borderColor = winner === 'c' ? 'gold' : 'white';
    //display winner
};

function handleGoR() {
    results.p ='r';
    handleGo();
}
function handleGoP() {
    results.p ='p';
    handleGo();
}
function handleGoS() {
    results.p ='s';
    handleGo();
}




function handleGo() {
//start the timer (icebox)
//After timer has reached zero:
// -generate the results (r, p, s) for both player and computer
results.c = getRandomRPS();
// -compute winner: player, computer, or tie

winner = results.p === results.c ? 't' :  
    rps[results.p].beats === results.c ? 'p' : 'c'

// -increase score for the winner

scores[winner]++; 

// -render (transfer the state (model) to the DOM)

render();

};

function getRandomRPS() {
    return rpsLookUp[Math.floor(Math.random() * 3)];
};
 


//the program should listen for the click, 
//begin countdown, 
//render countdown on screen, 
//run function to randomly select 2 outputs, 
//render the outputs selected on the page. 
//Compare the outputs and know which is winner or if it's a draw. 
//Update score
//
//