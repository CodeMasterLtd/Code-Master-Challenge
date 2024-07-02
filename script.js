import { Config } from "./config.js";

const questions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Home Text Markup Language"],
        answer: 0
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["Laravel", "Django", "React", "Rails"],
        answer: 2
    },
    {
        question: "What is the primary purpose of CSS?",
        options: ["To structure content on the web", "To style and layout web pages", "To create interactive web applications", "To manage databases"],
        answer: 1
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: 0
    },
    {
        question: "Which company developed the React framework?",
        options: ["Google", "Facebook", "Microsoft", "Apple"],
        answer: 1
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Online Notation", "Java Syntax Object Notation", "Java Simple Object Notation"],
        answer: 0
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        answer: 1
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "font-style"],
        answer: 2
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Stylish Question Language", "Statement Query Language", "Structured Query Link"],
        answer: 0
    },
    {
        question: "What year was Code Master Founded?",
        options: ["2019", "2021", "2022", "2024"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = Config.Timer;
let countdown;
const maxScore = questions.length * 10 + (questions.length * 5); // Max score calculation
const halfMaxScore = maxScore / 2;
const CM = 'Code Master';
const CMC = 'Code Master Challenge';
// const beepSound = new Audio('countdown.mp3'); // Initialize beep sound

function getDiscountMessage(score) {
    if (score === maxScore) {
        return { message: Config.TwentyOFFMsg, code: Config.TwentyOFF, link: Config.TwentyOFFLink };
    } else if (score >= halfMaxScore) {
        return { message: Config.TenOFFMsg, code: Config.TenOFF, link: Config.TenOFFLink };
    } else if (score > 0) {
        return { message: Config.FiveOFFMsg, code: Config.FiveOFF, link: Config.FiveOFFLink };
    } else {
        return { message: Config.FREEMsg, code: Config.FREE, link: Config.FREELink }; // Hard to get discount
    }
}

document.getElementById('title').textContent = `${CMC} | ${CM}`;
document.getElementById('titleMain').textContent = `${CMC}`;
const discount = document.getElementById('discount');
const Discode = document.getElementById('code');
Discode.addEventListener('click', copyCode);

document.body.addEventListener('click', () => {
    beepSound.play().then(() => {
        beepSound.pause();
        beepSound.currentTime = 0;
    }).catch(error => console.log('Audio playback error:', error));
}, { once: false });

function loadQuestion() {
    clearInterval(countdown);
    timer = Config.Timer;
    document.getElementById('timer').style.color = '#21a2f8'; // Reset timer color
    document.getElementById('timer').classList.remove('flash'); // Remove flash class
    document.getElementById('timer').innerText = 'Questions: ' + (currentQuestionIndex + 1) + '/' + questions.length;

    countdown = setInterval(() => {
        if (timer <= 6) {
            document.getElementById('timer').style.color = 'red';
            document.getElementById('timer').classList.add('flash');
        } else if (timer <= 11) {
            document.getElementById('timer').style.color = 'orange';
            document.getElementById('timer').classList.remove('flash');
        } else {
            document.getElementById('timer').style.color = 'green';
            document.getElementById('timer').classList.remove('flash');
        }

        document.getElementById('timer').innerText = 'Time: ' + --timer;
        // beepSound.play();

        if (timer < 0) {
            clearInterval(countdown);
            nextQuestion();
        }
    }, 1000);

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
        option.classList.remove('correct', 'incorrect');
        option.onclick = () => checkAnswer(option, index);
    });
}

function checkAnswer(element, selectedIndex) {
    clearInterval(countdown);
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.answer;
    if (isCorrect) {
        score += 10;
        if (timer > 10) score += 5; // Bonus points for quick answers
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
    document.getElementById('score').innerText = `Score: ${score}`;
    setTimeout(nextQuestion, 1000); // Wait a bit before showing the next question
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    alert(`Game over! Your final score is ${score}`);
    const discountDetails = getDiscountMessage(score);
    discount.innerText = discountDetails.message;
    Discode.innerText = discountDetails.code;
    document.getElementById('timer').innerText = 'GAME FINISHED';

    // Generate QR code
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; // Clear any existing QR code
    new QRCode(qrContainer, discountDetails.link);

    if (score > 10) {
        document.getElementById('gift-card').classList.remove('hidden');
    }

    const restart = document.getElementById('restart');
    restart.classList.remove('hidden');
    restart.addEventListener('click', () => {
        location.reload();
    });
}

function copyCode() {
    const codeElement = document.getElementById('code');
    const code = codeElement.innerText;
    navigator.clipboard.writeText(code).then(() => {
        codeElement.innerText = 'Code Copied!';
    });
}

loadQuestion();