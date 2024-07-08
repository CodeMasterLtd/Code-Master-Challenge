const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: 'HyperText Markup Language', correct: true },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Home Text Markup Language', correct: false },
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: 'Laravel', correct: false },
            { text: 'Django', correct: false },
            { text: 'React', correct: true },
            { text: 'Rails', correct: false },
        ]
    },
    {
        question: "What is the primary purpose of CSS?",
        answers: [
            { text: 'To structure content on the web', correct: false },
            { text: 'To style and layout web pages', correct: true },
            { text: 'To create interactive web applications', correct: false },
            { text: 'To manage databases', correct: false },
        ]
    },
    {
        question: "Which language is primarily used for web development?",
        answers: [
            { text: 'Python', correct: false },
            { text: 'Java', correct: false },
            { text: 'JavaScript', correct: true },
            { text: 'C++', correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Computer Style Sheets', correct: false },
            { text: 'Creative Style Sheets', correct: false },
            { text: 'Colorful Style Sheets', correct: false },
        ]
    },
    {
        question: "Which company developed the React framework?",
        answers: [
            { text: 'Google', correct: false },
            { text: 'Facebook', correct: true },
            { text: 'Microsoft', correct: false },
            { text: 'Apple', correct: false },
        ]
    },
    {
        question: "What does JSON stand for?",
        answers: [
            { text: 'JavaScript Object Notation', correct: true },
            { text: 'JavaScript Online Notation', correct: false },
            { text: 'Java Syntax Object Notation', correct: false },
            { text: 'Java Simple Object Notation', correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "&lt;link&gt;", correct: false },
            { text: '&lt;a&gt;', correct: true },
            { text: '&lt;href&gt;', correct: false },
            { text: '&lt;hyperlink&gt;', correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: 'font-color', correct: false },
            { text: 'text-color', correct: false },
            { text: 'color', correct: true },
            { text: 'font-style', correct: false },
        ]
    },
    {
        question: "What does SQL stand for?",
        answers: [
            { text: 'Structured Query Language', correct: true },
            { text: 'Stylish Question Language', correct: false },
            { text: 'Statement Query Language', correct: false },
            { text: 'Structured Query Link', correct: false },
        ]
    },
    {
        question: "Which of the following is not a programming language?",
        answers: [
            { text: 'Python', correct: false },
            { text: 'HTML', correct: true },
            { text: 'Java', correct: false },
            { text: 'Ruby', correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            { text: '&lt;style&gt;', correct: true },
            { text: '&lt;script&gt;', correct: false },
            { text: '&lt;css&gt;', correct: false },
            { text: '&lt;link&gt;', correct: false },
        ]
    },
    {
        question: "What does PHP stand for?",
        answers: [
            { text: 'Hypertext Preprocessor', correct: true },
            { text: 'Pretext Hypertext Processor', correct: false },
            { text: 'Personal Home Page', correct: false },
            { text: 'Programming Hypertext Preprocessor', correct: false },
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        answers: [
            { text: 'font-style', correct: false },
            { text: 'text-size', correct: false },
            { text: 'font-size', correct: true },
            { text: 'text-style', correct: false },
        ]
    },
    {
        question: "Which is not a JavaScript data type?",
        answers: [
            { text: 'Undefined', correct: false },
            { text: 'Number', correct: false },
            { text: 'Boolean', correct: false },
            { text: 'Float', correct: true },
        ]
    },
    {
        question: "Which company developed the Angular framework?",
        answers: [
            { text: 'Apple', correct: false },
            { text: 'Google', correct: true },
            { text: 'Microsoft', correct: false },
            { text: 'Facebook', correct: false },
        ]
    },
    {
        question: "What does XML stand for?",
        answers: [
            { text: 'eXtensible Markup Language', correct: true },
            { text: 'eXecutable Multiple Language', correct: false },
            { text: 'eXtra Multi-Program Language', correct: false },
            { text: 'eXamine Multiple Language', correct: false },
        ]
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: [
            { text: 'title', correct: false },
            { text: 'src', correct: false },
            { text: 'alt', correct: true },
            { text: 'longdesc', correct: false },
        ]
    },
    {
        question: "In CSS, what does the 'position' property do?",
        answers: [
            { text: 'Sets the type of positioning method', correct: true },
            { text: 'Changes the background color', correct: false },
            { text: 'Sets the font size', correct: false },
            { text: 'Adds a border', correct: false },
        ]
    },
    {
        question: "What year was Code Master Founded?",
        answers: [
            { text: '2019', correct: false },
            { text: '2021', correct: false },
            { text: '2022', correct: false },
            { text: '2024', correct: true },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const giftCardElement = document.getElementById('gift-card');
const discount = document.getElementById('discount');
const Discode = document.getElementById('code');
Discode.addEventListener('click', copyCode);

let currentQuestionIndex = 0;
let score = 0;
const maxScore = questions.length;
const halfMaxScore = maxScore / 2;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    giftCardElement.classList.add('hidden');
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function getDiscountMessage(score) {
    if (score === maxScore) {
        return { message: '20% OFF ALL PRODUCTS', code: '20%/CM2024/CMC', link: 'https://codemaster.ltd/discount/20%2525%2FCM2024%2FCMC' };
    } else if (score >= halfMaxScore && score < maxScore) {
        return { message: '10% OFF ALL PRODUCTS', code: '10%/CM2024/CMC', link: 'https://codemaster.ltd/discount/10%2525%2FCM2024%2FCMC' };
    } else if (score >= 0 && score < halfMaxScore) {
        return { message: '5% OFF ALL PRODUCTS', code: '5%/CM2024/CMC', link: 'https://codemaster.ltd/discount/5%2525%2FCM2024%2FCMC' };
    } else {
        return { message: 'FREE ON ALL PRODUCTS', code: 'FREE/CM2024/CMC', link: 'https://codemaster.ltd/discount/FREE%2FCM2024%2FCMC' };
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
    nextButton.removeEventListener('click', handleNextButton);
    nextButton.addEventListener('click', resetQuiz);

    const discountDetails = getDiscountMessage(score);
    discount.innerText = discountDetails.message;
    Discode.innerText = discountDetails.code;

    // Generate QR code
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; // Clear any existing QR code
    new QRCode(qrContainer, discountDetails.link);

    if (score > 1) {
        giftCardElement.classList.remove('hidden');
        giftCardElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
}

function copyCode() {
    const codeElement = document.getElementById('code');
    const code = codeElement.innerText;
    navigator.clipboard.writeText(code).then(() => {
        codeElement.innerText = 'Code Copied!';
    });
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', handleNextButton);

startQuiz();