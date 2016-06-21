var playWins = 0;
var compWins = 0;
function play(x) {
    reset();



    var choices = ['rock', 'paper', 'scissors']
    var randI = Math.floor(Math.random() * choices.length)
    var compChoice = choices[randI]

    if (x == compChoice) {
        document.getElementById('result').innerHTML = 'TIE!';
        return "tie"
    }

    if (x == 'rock' && compChoice !== 'paper') {
        document.getElementById('result').innerHTML = 'Player Wins!';
        return playWins++;
    }
    else if (x == 'paper' && compChoice !== 'scissors') {
        document.getElementById('result').innerHTML = 'Player Wins!';
        playWins++;
    }
    else if (x == 'scissors' && compChoice !== 'rock') {
        document.getElementById('result').innerHTML = 'Player Wins!';
        playWins++;
    } else {
        document.getElementById('result').innerHTML = 'Computer Wins!';
        compWins++;

    }

    document.getElementById('playWins').innerHTML = playWins;
    document.getElementById('compWins').innerHTML = compWins;
    document.getElementById('compChoice').innerHTML = compChoice.toUpperCase();
    document.getElementById('playerChoice').innerHTML = x.toUpperCase();

}
//resets the Choice to emtpy
function reset() {
    
    document.getElementById('compChoice').innerHTML = '';
    document.getElementById('playerChoice').innerHTML = '';
    document.getElementById('playWins').innerHTML = '';
    document.getElementById('compWins').innerHTML = '';
}




