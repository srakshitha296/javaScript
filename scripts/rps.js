let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, tie: 0 };

updatescore();
diaplayResult();


/*
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        tie: 0
    }
}
*/

function play(player) {
    const machineMove = computerMove();
    let result = '';

    if (player === 'Rock') {

        if (machineMove === 'Rock')
            result = 'Tie';
        else if (machineMove === 'Paper')
            result = 'You Lose';
        else
            result = 'You Won';

    } else if (player === 'Paper') {

        if (machineMove === 'Paper')
            result = 'Tie';
        else if (machineMove === 'Scissors')
            result = 'You Lose';
        else
            result = 'You Won';

    } else {

        if (machineMove === 'Scissors')
            result = 'Tie';
        else if (machineMove === 'Rock')
            result = 'You Lose';
        else
            result = 'You Won';
    }

    if (result === 'You Won')
        score.wins++;
    else if (result === 'You Lose')
        score.losses++;
    else
        score.tie++;

    localStorage.setItem('score', JSON.stringify(score));
    updatescore();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = ` You
        <img class="move-icon" src="images/${player}-emoji.png" alt="">
        <img class="move-icon" src="images/${machineMove}-emoji.png" alt="">
        Computer`;

    //             alert(`You : ${player}
    // Machine : ${machineMove}
    // ${result}
    // Wins : ${score.wins} Losses : ${score.losses} Tie : ${score.tie}`);
}

function computerMove() {

    const number = Math.random();
    let machineMove = '';

    if (number >= 0 && number < 1 / 3)
        machineMove = 'Rock';
    else if (number >= 1 / 3 && number < 2 / 3)
        machineMove = 'Paper';
    else
        machineMove = 'Scissors';

    return machineMove;
}

function updatescore() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Tie : ${score.tie}`;
}