let quizLanguages=document.querySelector(".quiz-languages");
let quizDifficulties=document.querySelector(".quiz-difficulties");
let quizContainer=document.querySelector(".quiz-container")
let nextDifficulty=document.querySelector(".next-difficulty-btn");
let startButton=document.querySelector(".start-quiz-btn");

let languagesOptions=document.querySelector(".languages-options");
//akhadna l list li fiya kel l languages options

let languagesOptionsItems=languagesOptions.querySelectorAll("li");
//eemelna mtl array fiya kel el 4 options tabaa l languages



let difficultyOptions=document.querySelector(".difficulty-options");
//akhadna l list lfiya kel l difficulty options

let difficultyOptionsItems=difficultyOptions.querySelectorAll("li");
//eemelna mtl array fiya kel el 4 options tabaa l difficulty


let language="none";
let difficulty="none";

for (let item of languagesOptionsItems){

    item.addEventListener("click", () => {
        for (let item1 of languagesOptionsItems){item1.classList.remove("selected-option")};
        item.classList.add("selected-option");
        language=item.id;
        nextDifficulty.style.display="flex";
    })

}
//betfout aa kell element bel options w bethot aale function on click

for (let item of difficultyOptionsItems){

    item.addEventListener("click", () => {
        for (let item1 of difficultyOptionsItems){item1.classList.remove("selected-option")};
        item.classList.add("selected-option");
        difficulty=item.id;
        startButton.style.display="flex";
    })

}






nextDifficulty.addEventListener("click", difficultyPage);
startButton.addEventListener("click", startQuiz);



function difficultyPage(){
    quizLanguages.style.display="none";
    quizDifficulties.style.display="block";
}

function startQuiz(){
    quizDifficulties.style.display="none";
    quizContainer.style.display="block";
}

/*const questions=[


    {
        category: "level 1",
        questions:[
            {
                question:"what does html stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,
            },
            {
                question:"what does java stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does cA stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does CX stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does M stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does N stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does X stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does Z stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does Y stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does V stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },



        ]
    },
    {
        category: "level 2",
        questions: [
            {
                question:"what does I stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
              
            },
            {
                question:"what does O stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does P stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does W stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does Q stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does R stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does T stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does S stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does D stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
            {
                question:"what does B stand for?",
                options:["1","2","3","4"],
                correctAnswer:1,  
            },
        ]
    },
    {
        category: "level 3",
        questions: [
            {
                question:"what does A stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does G stand for?",
                options:["1","2","3","4"],
            
                correctAnswer:1, 
            },
            {
                question:"what does L stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does K stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does J stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does N stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does s stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does ss stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does c stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
            {
                question:"what does cs stand for?",
                options:["1","2","3","4"],
                correctAnswer:1, 
            },
        ]
    },
    

];

const answerOptions =document.querySelector(".answer-options");
const nextQuestionBtn=document.querySelector(".next-question-btn");

let quizCategory="level 1";
let currentQuestion = null;

getRandomQuestion();
// Fetch a random question from the selected category
const getRandomQuestion = () => {
    const categoryQuestions =
        questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    return randomQuestion;
}
const handleAnswer = (option, answerIndex) => {
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');

}

const renderQuestion = () => {
    const currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;
    console.log(currentQuestion); 


    answerOptions.innerHTML = "",
    document.querySelector(".question-text").textContent = currentQuestion.question;

    currentQuestion.optioms.forEach(option, index => {
        const li= document.createElement("li");
        li.classList.add("answer-option");
        li.textContent= option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index ));
    });
}

renderQuestion();

nextQuestionBtn.addEventListener("click", renderQuestion);

*/