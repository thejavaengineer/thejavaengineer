let timer;
let countdownInterval;
let allQuestions = {
    1: questions1,
    2: questions2,
    3: questions3,
    4: questions4,
    5: questions5
};

let titles = ["Java Design Pattern 1", "Java Design Pattern 2", "Java Design Pattern 3", "Java Design Pattern 4", "Java Design Pattern 5"];
var currentQuizNumber;

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function startQuiz(quizNumber) {
    currentQuizNumber = quizNumber;
    document.querySelector('.quiz').style.display = 'block';
    document.getElementById('quiz-title').textContent = titles[quizNumber - 1];
    loadQuestions(quizNumber);
    startTimer();
}

function loadQuestions(quizNumber) {
    const questions = allQuestions[quizNumber];
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    questions.forEach((q, index) => {
        const questionHTML = `<div class="question">
            <p>${q.question}</p>
            ${q.options.map((option, i) => `<label><input type="radio" name="question${index}" value="${i}">${option}</label>`).join('')}
        </div>`;
        container.innerHTML += questionHTML;
    });
}

function startTimer() {
    let timeRemaining = 600; // 10 minutes in seconds
    const timeDisplay = document.getElementById('time-remaining');
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            submitQuiz(); // Automatically submit the quiz when time runs out
        }
        timeRemaining--;
    }, 1000);
}

function submitQuiz() {
    clearInterval(countdownInterval);
    const questions = allQuestions[currentQuizNumber];
    const results = document.getElementById('results');
    results.innerHTML = '';
    let score = 0;

    questions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="question${index}"]:checked`) || { value: "unanswered", nextSibling: { textContent: "No answer selected" } };
        const correct = q.correct === parseInt(userAnswer.value);
        if (correct) score++;
        
        results.innerHTML += `<div style="${correct ? 'color: green;' : 'color: red;'}">
            <p><strong>Question:</strong> ${q.question}</p>
            <p><strong>Your Answer:</strong> ${userAnswer.nextSibling.textContent}</p>
            <p><strong>Correct Answer:</strong> ${q.options[q.correct]}</p>
            <p class="explanation"><strong>Explanation:</strong> ${q.explanation}</p>
        </div>`;
    });

    results.innerHTML += `<h2>Your score is ${score} out of ${questions.length}</h2>`;
    results.innerHTML += '<button onclick="restartQuiz()">Restart</button> <button onclick="goHome()">Go Home</button>';
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth' });
}

function restartQuiz() {
    window.location.href = `quiz.html?quiz=${currentQuizNumber}`;
}

function goHome() {
    if (timer) clearTimeout(timer);
    if (countdownInterval) clearInterval(countdownInterval);
    window.location.href = 'index.html';  // Adjust this path if necessary
}
