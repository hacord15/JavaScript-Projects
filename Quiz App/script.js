const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { type: "Shark", correct: false },
            { type: "Blue whale", correct: true },
            { type: "Elephant", correct: false },
            { type: "Giraffe", correct: false }
        ]
    },
    {
        question: "In what year did the Great October Socialist Revolution take place?",
        answers: [
            { type: "1917", correct: true },
            { type: "1923", correct: false },
            { type: "1914", correct: false },
            { type: "1920", correct: false }
        ]
    },
    {
        question: "What is the largest lake in the world?",
        answers: [
            { type: "Caspian Sea", correct: false },
            { type: "Baikal", correct: true },
            { type: "Lake Superior", correct: false },
            { type: "Ontario", correct: false }
        ]
    },
    {
        question: "Which planet in the solar system is known as the 'Red Planet'?",
        answers: [
            { type: "Venus", correct: false },
            { type: "Earth", correct: false },
            { type: "Mars", correct: true },
            { type: "Jupiter", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.type; // Corrected to use 'type' instead of 'text'
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
