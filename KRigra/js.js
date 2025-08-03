let playerName = "";
let totalRounds = 3;
let currentRound = 1;
let playerScore = 0;
let computerScore = 0;
let results = JSON.parse(localStorage.getItem("results")) || [];


document.addEventListener("DOMContentLoaded", function() {

    if (document.getElementById('startGameBtn')) {
        document.getElementById('startGameBtn').addEventListener('click', function() {
            playerName = document.getElementById('playerName').value.trim();
            totalRounds = parseInt(document.getElementById('roundsCount').value) || 3;

            if (!playerName) {
                alert('Введите ваше имя!');
                return;
            }
            window.location.href = `game.html?name=${encodeURIComponent(playerName)}&rounds=${totalRounds}`;
        });

        document.getElementById('showResultsBtn').addEventListener('click', function() {
            window.location.href = 'results.html';
        });
    }


    if (document.getElementById('gameScreen')) {
        const urlParams = new URLSearchParams(window.location.search);
        playerName = decodeURIComponent(urlParams.get('name')) || 'Игрок';
        totalRounds = parseInt(urlParams.get('rounds')) || 3;

        document.getElementById('playerNameDisplay').textContent = playerName;
        document.getElementById('totalRounds').textContent = totalRounds;

        initGame();

        const choices = document.querySelectorAll('.choice');
        choices.forEach(choice => {
            choice.addEventListener('click', function() {
                if (document.getElementById('resultDisplay').style.display === 'none') {
                    playRound(this.dataset.choice);
                }
            });
        });

        document.getElementById('nextRoundBtn').addEventListener('click', nextRound);
        document.getElementById('playAgainBtn').addEventListener('click', playAgain);
        document.getElementById('viewResultsBtn').addEventListener('click', viewResults);
    }


    if (document.getElementById('backToMenuBtn')) {
        document.getElementById('backToMenuBtn').addEventListener('click', function() {
            window.location.href = 'index1.html';
        });
        updateLeaderboard();
    }
});

function initGame() {
    currentRound = 1;
    playerScore = 0;
    computerScore = 0;

    document.getElementById('currentRound').textContent = currentRound;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('resultDisplay').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
}

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('playerSelectionImg').src = `img/${playerChoice}.png`;
    document.getElementById('playerSelectionText').textContent = getChoiceName(playerChoice);
    document.getElementById('computerSelectionImg').src = `img/${computerChoice}.png`;
    document.getElementById('computerSelectionText').textContent = getChoiceName(computerChoice);

    let result;
    if (playerChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "Вы победили!";
        playerScore++;
    } else {
        result = "Компьютер победил!";
        computerScore++;
    }

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('roundResult').textContent = result;
    document.getElementById('resultDisplay').style.display = 'block';
}

function nextRound() {
    currentRound++;
    document.getElementById('currentRound').textContent = currentRound;
    document.getElementById('resultDisplay').style.display = 'none';

    if (currentRound > totalRounds) {
        endGame();
    }
}

function endGame() {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('gameOverScreen').style.display = 'block';

    document.getElementById('finalPlayerScore').textContent = playerScore;
    document.getElementById('finalComputerScore').textContent = computerScore;

    let finalResult;
    if (playerScore > computerScore) {
        finalResult = `${playerName}, вы выиграли матч!`;
    } else if (playerScore < computerScore) {
        finalResult = "Компьютер выиграл матч!";
    } else {
        finalResult = "Матч закончился вничью!";
    }

    document.getElementById('finalResult').textContent = finalResult;

    const successRate = Math.round((playerScore / totalRounds) * 100);
    saveResult(playerName, playerScore, totalRounds, successRate);
}

function saveResult(name, wins, games, rate) {
    results.push({
        name: name,
        wins: wins,
        games: games,
        rate: rate,
        date: new Date().toLocaleString()
    });

    results.sort((a, b) => b.rate - a.rate);
    results = results.slice(0, 10);
    localStorage.setItem('results', JSON.stringify(results));
}

function updateLeaderboard() {
    const tbody = document.querySelector('#leaderboard tbody');
    tbody.innerHTML = "";

    if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">Нет данных</td></tr>';
        return;
    }

    results.forEach((result, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${result.name}</td>
            <td>${result.wins}</td>
            <td>${result.games}</td>
            <td>${result.rate}%</td>
        `;
        tbody.appendChild(row);
    });
}

function playAgain() {
    window.location.href = `game.html?name=${encodeURIComponent(playerName)}&rounds=${totalRounds}`;
}

function viewResults() {
    window.location.href = 'results.html';
}

function getChoiceName(choice) {
    const choices = {
        'rock': 'Камень',
        'paper': 'Бумага',
        'scissors': 'Ножницы'
    };
    return choices[choice] || '';
}