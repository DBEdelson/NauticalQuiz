var questions = [
    {
        questionText:
            "How many feet are in a nautical fathom?",
        choices: ["3 feet", "4 feet", "5 feet", "6 feet"],
        answer: "6 feet"
    },
    {
        questionText:
            "How many yards are in a nautical mile?",
        choices: ["2100 Yards", "1600 Yards", "2000 Yards", "1500 Yards"],
        answer: "2000 Yards"
    },
    {
        questionText:
            "how many different oceans are there?",
        choices: ["3", "4", "5", "6"],
        answer: "4"

    },
    {
        questionText:
            "The first American lighthouse to use electricity was ____________?",
        choices: ["Boston Lighthouse", "Statue of Liberty ", "Alcatraz Lighthouse", "Hatteras Lighthouse"],
        answer: "Statue of Liberty"
    },

]

var index = 0
var questionsArea = document.querySelector("#questions")
var timerEl = document.querySelector('.timer');
var starQuiz = document.querySelector("#begin");
var score = 0
var timeLeft = 60
var scoreList = document.querySelector("#score-list");

function storeScore() {
    localStorage.setItem("stored score", score);
}


function playgame() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerText = 'Time: ' + timeLeft;

        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
};


starQuiz.addEventListener("click", function () {
    playgame()
    starQuiz.classList.add("hide")
    displayQuestion()
});

function displayQuestion() {
    questionsArea.innerHTML = ""
    var text = document.createElement("h2")
    text.innerText = questions[index].questionText
    questionsArea.appendChild(text)
    for (var i = 0; i < questions[index].choices.length; i++) {
        var button = document.createElement("button")
        button.innerText = questions[index].choices[i]
        button.addEventListener("click", checkAnswer)
        questionsArea.appendChild(button)
    }
};

function checkAnswer(event) {
    var ansText = event.target.textContent;
    console.log(ansText);
    if (ansText === questions[index].answer) {
        score = score + 100;
        console.log(score);
        index++;
        if (questions[index]) {
            displayQuestion()
        } else {
            alert("Game Over! Score: " + score);
            storeScore();
        }

    } else {
        timeLeft -= 10;
        score = score - 100;
        index++;
        console.log(score);
        displayQuestion()
    }
    function gameOver() {
        timerEl.textContent = 0
        gameOverCard.style.display = "block";
        questionCard.style.display = "none";
        gameOverCard.children[1].children[0].textContent = questionCount - 1;
        gameOverCard.children[1].children[1].textContent = questions.length;
        for (j = 0; j < 4; j++) {
            questionCard.children[2].children[0].remove();
        }
        gameOverCard.children[2].addEventListener("click", init);

    }
    function storeScores() {
        localStorage.setItem("storedScores", JSON.stringify(scores))
}
}
