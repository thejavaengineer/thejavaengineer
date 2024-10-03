let timer;
let countdownInterval;
let allQuestions = {
    1: questions1,
    2: questions2,
    3: questions3,
    4: questions4,
    5: questions5
};

let  titles = ["Java Design Pattern 1",  "Java Design Pattern 2", "Java Design Pattern 3", "Java Design Pattern 4", "Java Design Pattern 5"];
var currentQuizNumber;  // Yeh global variable ke roop mein define karein


function getQuizNumberFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('quiz'), 10);
}

function startQuiz() {
    
   
    const quizNumber = getQuizNumberFromURL();
    currentQuizNumber = quizNumber;  // Yaha pe update karein
    // Baki code
    // document.querySelector('.home').style.display = 'none'; // Hide home section if present
    document.querySelector('.quiz').style.display = 'block'; // Show quiz section

    document.getElementById('quiz-title').textContent = titles[quizNumber-1];
    loadQuestions(quizNumber);
    startTimer();
}

function loadQuestions(quizNumber) {
    const allQuestions = {
        1: questions1,
        2: questions2,
        3: questions3,
        4: questions4,
        5: questions5
    };

    const questions = allQuestions[quizNumber];
    const container = document.getElementById('questions-container');
    container.innerHTML = ''; // Clear previous questions

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
    const quizNumber = getQuizNumberFromURL();
    const questions = allQuestions[quizNumber];

    const results = document.getElementById('results');
    results.innerHTML = '';
    let score = 0;

    questions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="question${index}"]:checked`) || { value: "unanswered", nextSibling: {textContent: "No answer selected"} };
        const correct = q.correct === parseInt(userAnswer.value);
        if (correct) {
            score++;
        }
        
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

    results.scrollIntoView({behavior: 'smooth'});
}


function goHome() {
    // Clear any running timers or intervals if they exist
    if (timer) {
        clearTimeout(timer);
    }
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Optionally reset any global variables or states if needed
    // For example, resetting a global score or user responses
    // resetQuizState(); // Uncomment and define this function according to your requirements

    // Redirect to the main quiz selection page
    window.location.href = 'index.html';  // Make sure 'index.html' is the correct path to your home page
}

function restartQuiz() {
    // Directly restart the quiz using the stored quiz number
    window.location.href = `quiz.html?quiz=${currentQuizNumber}`;

    // startQuiz(currentQuizNumber);
}
