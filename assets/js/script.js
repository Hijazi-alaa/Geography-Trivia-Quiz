// building the quiz

(function(){
    function buildQuiz(){
        const output = [];
        
        questions.forEach(
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
                        `<div class="slide">
                        <div class="question"> ${currentQuestion.question} </div>
                        <div class="answers"> ${answers.join('')} </div>
                        </div> `
                        );
                    }
                    );
                    quizContainer.innerHTML = output.join('');
                }


// calculate result


function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach( (currentQuestion, questionNumber) => {
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
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}



//function to create a silde showing only one question at a time


function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
}


function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//array of objects containing all questions

const questions = [
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
  

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


showSlide(currentSlide);


//event listners to our buttons

submitButton.addEventListener('click', showResults);

previousButton.addEventListener("click", showPreviousSlide);

nextButton.addEventListener("click", showNextSlide);
})();

