// building the quiz

(function(){
    function buildQuiz(){
        const output = [];
        
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for(letter in currentQuestion.answers){
                    answers.push(
                        `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </label>`
                        );
                    }
                    
                    output.push(
                        `<div class="question"> ${currentQuestion.question} </div>
                        <div class="answers"> ${answers.join('')} </div>`
                        );
                    }
                    );
                    quizContainer.innerHTML = output.join('');
                }


// calculate result and show on submit


function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//array of objects containing all questions

const myQuestions = [
    {
        question: "What is the capital of Austria?",
        answers: {
            a: "Bern",
            b: "Salzburg",
            c: "Vienna",
            d: "Milan"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is the latitude that runs through the centre of the Earth?",
        answers: {
            a: "Tropic of Capricorn",
            b: "Equator",
            c: "Dictator",
            d: "South Pole."
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the longest river in the world?",
        answers: {
            a: "Amazon river",
            b: "Euphrats river",
            c: "Mississippi river",
            d: "Nile river"
        },
        correctAnswer: "d"
    },
    {
        question: "Which is the world's smallest country?",
        answers: {
            a: "Monaco",
            b: "Andora",
            c: "Vatican City",
            d: "Liechtenstein"
        },
        correctAnswer: "c"
    },
    {
        question: "what is the capital city of australia?",
        answers: {
            a: "Sydney",
            b: "melbourne",
            c: "Newcastle",
            d: "Canberra"
        },
        correctAnswer: "d"
    },
    {
        question: "What country has the most natural lakes?",
        answers: {
            a: "Finland",
            b: "Canada",
            c: "Russia",
            d: "Sweden"
        },
        correctAnswer: "b"
    },
    {
        question: "What country does the Rhine River run through?",
        answers: {
            a: "France",
            b: "Austria",
            c: "Romania",
            d: "Germany"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these countries does not belong to the region of Scandinavia?",
        answers: {
            a: "Finland",
            b: "Latvia",
            c: "Iceland",
            d: "Faroe Islands"
        },
        correctAnswer: "b"
    },
    {
        question: "What Cape sits at the tip of Africa?",
        answers: {
            a: "Cape of Good Hope",
            b: "Cape Verde",
            c: "Cape Town",
            d: "Cape of Batman"
        },
        correctAnswer: "a"
    },
    {
        question: "In what ocean is the Bermuda Triangle located?",
        answers: {
            a: "Southern Ocean",
            b: "Indian Ocean",
            c: "Atlantic Ocean",
            d: "Pacific Ocean"
        },
        correctAnswer: "c"
    },
    {
        question: "What place is known as the largest micro-continent?",
        answers: {
            a: "Madagascar",
            b: "India",
            c: "Greenland",
            d: "Australia"
        },
        correctAnswer: "a"
    },
    {
        question: "What country was not part of the Soviet Union?",
        answers: {
            a: "Ukraine",
            b: "Romania",
            c: "Belarus",
            d: "Tajikistan"
        },
        correctAnswer: "b"
    },
]

buildQuiz();
  

submitButton.addEventListener('click', showResults);
})();