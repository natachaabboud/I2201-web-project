let quizLanguages=document.querySelector(".quiz-languages");
let quizDifficulties=document.querySelector(".quiz-difficulties");
let quizContainer=document.querySelector(".quiz-container")
let nextDifficulty=document.querySelector(".next-difficulty-btn");
let startButton=document.querySelector(".start-quiz-btn");
let resultContainer=document.getElementById("resultContainer")
let questionContent=document.getElementById("questionContent");
let answerOptions=document.getElementById("answerOptions");
let listOfOptions=answerOptions.querySelectorAll(".answer-option");
let nexQuestionButton=document.getElementById("nextQuestionButton");
let questionStatus=document.getElementById("questionStatus");
let repeatQuizWrongButton=document.getElementById("repeatQuizWrongButton");
let questionTimer=document.getElementById("questionTimer");
//text of the timer
let quizTimer=document.getElementById("quizTimer");
//box of the timer

let answeredResult=document.getElementById("answeredResult");
let totalResult=document.getElementById("totalResult");

let timer=null;
let questionTimeLimit=15;
let questionTime=0;

let afterButtonbreak=document.getElementById("afterButtonBreak");
// bas naamol hide lal button bedna naamella hide kamen

let quizStatsReview=document.getElementById("quizStatsReview");


let quizQuestions=[];
let parentQuizQuestions=[];
// kermel l repeat quiz, hayda bikoun l quizQuestions
// 4DEC
let wrongQuestions=[];
// kermel repeat quiz with wrong answers, rah ykoun hayda l quizQuestions
let questionCount=0;
let n=10;
let answerStatusTracker=[];
let answerTracker=[];
letTimeTracker=[];



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


let timeOut = new Audio('timeOut.mp3');
let clickSound = new Audio('clickSound.mp3');
let clickCorrect = new Audio('clickCorrect.mp3');
let clickIncorrect = new Audio('clickIncorrect.mp3');
let quizEndSound = new Audio('quizEnd.mp3');
//Dec4


for (let item of languagesOptionsItems){

    item.addEventListener("click", () => {
        clickSound.cloneNode(true).play();
        for (let item1 of languagesOptionsItems){item1.classList.remove("selected-option")};
        //languagesOptionsItems.queryselector(".selected-option").classList.remove("selected-option");
        item.classList.add("selected-option");
        language=item.id;
        nextDifficulty.style.display="flex";
    })

}
/*betfout aa kell language option w bethot aalaya function on click,
l function bt2oul eno kel ma nekbos aala option:
1) kel l options bi batlo selected (kermel ma ysir eena tnen mbaynin purple w selected
2) l option l kabasna aalaya bas btsir selected yaane purple
3) variable language in the code betsir = to the id of the selected option (yaane eza kabasna hard, bisir aana difficulty=hard bl javascript)
4) bibayin l next button */

for (let item of difficultyOptionsItems){

    item.addEventListener("click", () => {
        clickSound.cloneNode(true).play();
        for (let item1 of difficultyOptionsItems){item1.classList.remove("selected-option")};
        item.classList.add("selected-option");
        difficulty=item.id;
        console.log("selected difficulty: ", difficulty);
        startButton.style.display="flex";
    })

}
/* mtl l li foe bas aala l difficulty options
*/


nextDifficulty.addEventListener("click", difficultyPage);
startButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", nextQuestion);



function shuffle(a){
    let i=a.length;
    let A=[...a];
    // ktashafet eno eza mnhott A=a kel shi mnaamlo aal A bytabae aal a so la naamol copy menhot l 3 dots la ma tsir l a fadye
    let newA=[];
    for(let k=0; k<i; k++){
        let x=Math.floor(Math.random()*A.length)
        newA[k]=A[x];
        A[x]=A[A.length-1];
        A.pop();    
    }
    return newA;
}
// btaamol shuffle la hayalla array aw list

function difficultyPage(){
    clickSound.cloneNode(true).play();
    quizLanguages.style.display="none";
    quizDifficulties.style.display="block";
}
/* this function is executed when we click on next in the languages options box
it plays a click sound, then it hides l box tabaa l languages options w it shows l box tabaa l difficulty options
 */

function startQuiz(){
    clickSound.cloneNode(true).play();
    if(difficulty==="Easy") questionTimeLimit=15;
    else if (difficulty==="Medium") questionTimeLimit=10;
    else questionTimeLimit=7;
    questionCount=0;
    // ho b awal l quiz aam neteakad eno kel shi msaffar
    n=10;
    // default number of questions
    wrongQuestions=[];
    // making sure that the wrongQuestions array is empty
    generateQuizQuestions();
    loadQuestion(quizQuestions[0]);
    quizDifficulties.style.display="none";
    quizContainer.style.display="block";
}
/* this function is executed when we click on start quiz after choosing the quiz difficulty
1) it plays a sound
2) it sets the time limit for the question depending on the difficulty
3) the number that keeps track of the questions is set to 0 because we haven't answered any questions yet
4) n is set to 10, number of questions
5) the array of wrongquestions is empty because the user hasn't given wrong answers yet
6) we generate the quiz questions
7) we load the first question
8) we hide the box of the difficulty options
9) we show the box of the question with the choices. they will already have awal question laean eemelna loadQuestion(quizQuestions[0])
*/

function generateQuizQuestions(){
    question.allQuestions = shuffle(question.allQuestions);
    // eemelna shuffle la kel lquestions kermel ma ykouno l questions aatoul b zet l order
    //4DEC

    quizQuestions=[];
    // mneteakad eno array fade abl ma naamol generate lal questions

    for(Q of question.allQuestions){
        if((Q.language === language && Q.difficulty === difficulty) || (language==="MixedLanguage" && Q.difficulty===difficulty)){
            quizQuestions.push(Q);

            console.log(Q.difficulty);

            if(quizQuestions.length===n){
                break;
            }
        }
    } 

    parentQuizQuestions=[...quizQuestions];
    answerStatusTracker=[];
    timeTracker=[];
    answerTracker=[];
}
/* this function generates the array containing the quiz questions
1) the array containing all questions possible is shuffled to make the order of questions different every time the user plays the quiz
2) quizquestions houwe l array tabaa l current quiz game, bl awal bi koun fade
3) la kel question b alb l array lkbir bishouf l programme eza keno same language w same difficulty, eza eh bi hotton b alb l array tabaa l current quiz
4) bi shouf eza sar quizQuestions b albo n questions (nehna hattin n=10 li hiye aadad l questions bl quiz). bas yousal lal n bi waeif yzid questions
5) eemelna array copy aan l quizQuestions kermel eza ken bado y3id l quiz l ntalae menno
6) fadayna l answerStatus tracker, time tracker w answer tracker

*/

function loadQuestion(Q){
    nextQuestionButton.style.display="none";
    let j=questionCount+1
    questionStatus.innerHTML="<b>"+ j +"</b> of <b>" + n + "</b> Questions";

    for(let opt of listOfOptions){
        opt.classList.add("hoverable");
        opt.classList.remove("correct", "incorrect");
        opt.onclick = () => selectOption(opt, Q);

    }

    questionContent.innerHTML=Q.questioncontent;

    Q.choices=shuffle(Q.choices);
    // l array l b albo options aam naamelo shuffle la ma yotlaoo kel marra bnafs l order
    // 4DEC

    for(let i=0; i<4; i++){
        listOfOptions[i].textContent=Q.choices[i];
    }

    startTimer();
}
/* btekhod question Q w bthot l content tabaea b alb l box tabaa l quiz
1) kabset next btrouh
2) mnghayir l question number (x of 10 masalan), x betkoun kam question mjewab aalayon (questioncount) + 1
3) mneteakad eno kel option aalaya animation eno bas nhot aalaya lfara btaate lon
4) mneteakad eno ma fi aana options lawnon akhdar aw hmar (menshil class correct w incorrect)
5) mnhot l selectOption() function aa kell option
6) menhot el question
7) mnhot l options 
*/

function startTimer(){
    quizTimer.classList.remove("short-time");
    questionTime=questionTimeLimit;
    questionTimer.textContent=`${questionTime}s`;
    timer=setInterval(changeTimer, 1000);

}
/*
1) we make sure eno l timer mano short time bas nbalish
2) l time bibalish mn l time limit tabaa kel question (yaane max time)
3) mnhot l current time aal sheshe
4) 
*/

function changeTimer(){
    questionTime--;
    questionTimer.textContent=`${questionTime}s`;

    if(questionTime==3){
        quizTimer.classList.add("short-time");
        timeOut.play();
    }

    if (questionTime<=0){
        clearInterval(timer);
        timerTimeUp();
    };

}
//DEC4

function timerTimeUp(){
    timeOut.pause();
    timeOut.currentTime=0;
    clickIncorrect.cloneNode(true).play();


    answerStatusTracker.push("time up");

    for(let opt of listOfOptions){
        opt.classList.remove("hoverable");
        opt.onclick=null;
    }

    for(let opt of listOfOptions){
        if(opt.textContent===quizQuestions[questionCount].answer){
            opt.classList.add("correct");
        }
        else{
            opt.classList.add("incorrect");
        }
    }

    answerTracker.push("no answer");
    timeTracker.push(0);
    wrongQuestions.push(quizQuestions[questionCount]);
    nextQuestionButton.style.display="flex";
    
}
//DEC4

function selectOption(opt, Q){

    for(let a of listOfOptions){
        a.classList.remove("hoverable");
        a.onclick=null;
    }

    answerTracker.push(opt.textContent);

    if(opt.textContent===Q.answer){
        clickCorrect.cloneNode(true).play();
        opt.classList.add("correct");
        answerStatusTracker.push("correct");
    }
    else{
        answerStatusTracker.push("incorrect");
        clickIncorrect.cloneNode(true).play();
        opt.classList.add("incorrect");
        wrongQuestions.push(Q);
        for(let b of listOfOptions){
            if(b.textContent===Q.answer){
                b.classList.add("correct");
                break;
            }
            
        }
    }

    quizTimer.classList.remove("short-time");
    timeOut.pause();
    timeOut.currentTime=0;
    //when timeOut sound plays again, it will play from the beginning
    let t=questionTimeLimit-questionTime;
    timeTracker.push(t);
    clearInterval(timer);
    nextQuestionButton.style.display="flex";
}
//DEC4

function nextQuestion(){
    clickSound.cloneNode(true).play();
    questionCount++;
    if(questionCount===n){
        quizEndSound.play();
        endQuiz();
    }
    else{
        loadQuestion(quizQuestions[questionCount]);
    }
}

function endQuiz(){

    quizContainer.style.display="none";
    if(wrongQuestions.length===0){
        repeatQuizWrongButton.style.display="none";
        afterButtonbreak.style.display="none";
    }
    else{
        repeatQuizWrongButton.style.display="inline-block";
        afterButtonbreak.style.display="inline-block";
    }
    //eza ma ken fi wrong answers mnkhabbe kabset repeat quiz with wrong questions

    answeredResult.textContent=n-wrongQuestions.length;
    // bel endQuiz bi hotelna masln 5 out of 10 questions. hayde btghayir el 5
    // correct answers hene number of questions minus number of wrong answers

    totalResult.textContent=n;
    // hayde btkoun l 10 bi "5 out of 10 questions"

    resultContainer.style.display="block";
    

}
//DEC4

function repeatQuiz(){
    clickSound.cloneNode(true).play();
    questionCount=0;
    answerStatusTracker=[]
    n=parentQuizQuestions.length;
    //ghayarna number of questions ykoun aa add array l parentQuizQuestions

    quizQuestions=shuffle(parentQuizQuestions);
    //nafs aseila l quiz l eemelne bas kharbatna l order tabaaon

    wrongQuestions=[];
    //faddayna array l wrong questions


    loadQuestion(quizQuestions[0]);
    
    resultContainer.style.display="none";
    quizContainer.style.display="block";

}
//DEC4

function repeatQuizWrong(){
    answerStatusTracker=[];
    timeTracker=[];
    answerTracker=[];
    clickSound.cloneNode(true).play();

    questionCount=0;


    n=wrongQuestions.length;
    //ghayarna number of questions ykoun aa add array l wrong questions

    quizQuestions=shuffle(wrongQuestions);
    //aseila l quiz sarit array l wrong questions
    

    wrongQuestions=[];
    //faddayna array l wrong questions

    loadQuestion(quizQuestions[0]);
    resultContainer.style.display="none";
    quizContainer.style.display="block";


}
//DEC4

function backToMenu(){
    clickSound.cloneNode(true).play();
    for (let a of languagesOptionsItems){a.classList.remove("selected-option")};
    //mneteakad eno mafi shi selected bel languages
    for (let a of difficultyOptionsItems){a.classList.remove("selected-option")};
    //mneteakad eno mafi shi selected bel difficulty
    nextDifficulty.style.display="none";
    startButton.style.display="none";
    resultContainer.style.display="none";
    // mnshil l screen tabaa l result
    quizLanguages.style.display="block";
    // mnhott l screen tabaa l languages
}
//DEC4


function launchConfetti() {
    var duration = 2000;//The confetti will run for 2 seconds.
    var end = Date.now() + duration;//This calculates the time when the confetti animation should stop.

    (function frame() {//recursive animation function that runs many times per second
        confetti({
            particleCount: 5,//5 pieces per frame
            startVelocity: 40,//fast
            spread: 360,//full circle
            ticks: 60,
            origin: {
                x: Math.random(),//random width
                y: Math.random() - 0.2//mostly from the top
            }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }//if time is over run another frame
    }());
}

function endQuiz(){
    quizContainer.style.display="none";

    if(wrongQuestions.length===0){
        repeatQuizWrongButton.style.display="none";
        afterButtonbreak.style.display="none";
    }
    else{
        repeatQuizWrongButton.style.display="inline-block";
        afterButtonbreak.style.display="inline-block";
    }//If the user has no mistakes, hide the Repeat Wrong Questions button.Else show the button.

    answeredResult.textContent = n - wrongQuestions.length;
    totalResult.textContent = n;//update the statistics answers=total-wrong and total questions=n

    resultContainer.style.display="block";//show the result screen


    launchConfetti();//this let the confetti animation works when quiz ends

}

function displayQuizStatistics(){
    console.log("time tracker:", timeTracker);
    clickSound.cloneNode(true).play();
    fillQuizStatsContainer();
    resultContainer.style.display="none";
    quizStatsContainer.style.display="flex";

}

function quizStatsBack(){
    clickSound.cloneNode(true).play();
    

    quizStatsContainer.style.display="none";
    resultContainer.style.display="block"
}

function fillQuizStatsContainer(){
    let score=((n-wrongQuestions.length)/n)*100;
    let quizStatsTableContent="<thead> <th class='wide-column' >Question</th> <th>Topic</th><th> Language </th><th>Status</th><th>Your answer</th><th>Correct answer</th><th>Time taken</th></thead>";
    let quizStatsReviewContent="";
    for(let i=0; i<n; i++){
        
        quizStatsTableContent+= "<tr>";
        let questioncontent=quizQuestions[i].questioncontent.replaceAll("<","&lt;")
        quizStatsTableContent+=`<td class='wide-column'> ${questioncontent} </td>`;
        quizStatsTableContent+=`<td> ${quizQuestions[i].topic} </td>`;
        quizStatsTableContent+=`<td> ${quizQuestions[i].language} </td>`;

        if(answerStatusTracker[i]=="incorrect"){
            quizStatsTableContent+= "<td align='center'> <img src='crossmark.png' width=20px> </td>";


            if(answerTracker[i].charAt(0)==="<"){
                let newAnswer=tagToText(answerTracker[i]);
                quizStatsTableContent+= `<td class='quiz-stats-incorrect'> ${newAnswer} </td>`;
            }
            else{
                quizStatsTableContent+= `<td class='quiz-stats-incorrect'> ${answerTracker[i]} </td>`;
            }
            /* this if statement is required laean eza kenit l answer html tag ha yekheda l inner html ka tag ha2i2e badal text w sa3be nousalla b .textcontent fa
            li eemelto houwe eno bishouf eza l answer betbalish bi "<". bi hal hale bi hawela la &lt laean hay bel html btbayin "<". baadena bishil ekhir 
            character mn l answer string li rah ykoun ">", w bihott l answer. ma daroure nhot &gt bl ekhir laean ma ha yekheda tag lahala. */


            if(quizQuestions[i].answer.charAt(0)==="<"){
                let newAnswer=tagToText(quizQuestions[i].answer);
                quizStatsTableContent+= `<td class='quiz-stats-correct'> ${newAnswer} </td>`;
            }
            else{
                quizStatsTableContent+= `<td class='quiz-stats-correct'> ${quizQuestions[i].answer} </td>`;
            }

            quizStatsTableContent += `<td> ${timeTracker[i]}s </td>`;
        }

        else if(answerStatusTracker[i]=="correct"){
            quizStatsTableContent+= "<td align='center'> <img src='tick.png' width=20px> </td>";

            if(quizQuestions[i].answer.charAt(0)==="<"){
                let newAnswer=tagToText(quizQuestions[i].answer);
                quizStatsTableContent+= `<td class='quiz-stats-correct'> ${newAnswer} </td>`;
                quizStatsTableContent+= `<td class='quiz-stats-correct'> ${newAnswer} </td>`;
            }
            else{
                quizStatsTableContent+= `<td class='quiz-stats-correct'> ${quizQuestions[i].answer} </td>`;
                quizStatsTableContent+= `<td class='quiz-stats-correct'> ${quizQuestions[i].answer} </td>`;
            }

            quizStatsTableContent += `<td> ${timeTracker[i]}s </td>`;
        }

        else{
            quizStatsTableContent+="<td class='quiz-stats-time-up' align='center'>TIME UP</td>";
            quizStatsTableContent+="<td> -- </td>";
                if(quizQuestions[i].answer.charAt(0)==="<"){
                let newAnswer=tagToText(quizQuestions[i].answer);
                quizStatsTableContent+= `<td class='quiz-stats-correct'> ${newAnswer} </td>`;
            }
            else{
                quizStatsTableContent+= `<td class='quiz-stats-correct'> ${quizQuestions[i].answer} </td>`;
            }

            quizStatsTableContent += `<td> -- </td>`;

        }

        quizStatsTableContent+="</tr>";
    }
    quizStatsTable.innerHTML = quizStatsTableContent;

    quizStatsReviewContent+=`<tr> <td> Correct answers: </td> <td> ${n-wrongQuestions.length} </tr> `;
    quizStatsReviewContent+=`<tr> <td> Incorrect answers: </td> <td> ${wrongQuestions.length} </tr> `;
    quizStatsReviewContent+=`<tr> <td> Score: </td> <td> ${score.toFixed(2)}% </tr> `;
    quizStatsReviewContent+=`<tr> <td> Comments: </td> <td> ${scoreComment(score)} </tr> `;
    
    quizStatsReview.innerHTML=quizStatsReviewContent;


}

function tagToText(a){
    return a.replaceAll("<","&lt;");
}

function scoreComment(a){
    if(a<50) return "You failed. Study harder!";
    else if(a<70) return "Fair performance";
    else if(a<80) return "Acceptable performance";
    else if(a<90) return "Good performance";
    else if(a<100) return "Very good performance";
    else if(a===100) return "Perfect score. Congratulations!";

}


document.addEventListener('DOMContentLoaded', () => {

const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) return; 

const bubbles = Array.from(document.querySelectorAll('.bubbles-layer .bubble'));
const gradient = document.querySelector('.gradient-layer');

// This check is important for the parallax script to run only if elements exist
if (!bubbles.length && !gradient) return;

// Keep track of mouse position (-1..1)
let mouseX = 0, mouseY = 0;
// Keep track of scroll progress (0..1)
let scrollP = 0;

const bubbleSpeeds = bubbles.map((_, i) => (i % 2 === 0) ? 6 : 4);

// Clamp function
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

// Update mouseX/mouseY normalized to -1..1
document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX = clamp((e.clientX - cx) / cx, -1, 1);
    mouseY = clamp((e.clientY - cy) / cy, -1, 1);
}, { passive: true });

// Update scroll progress
function updateScroll() {
    const s = window.scrollY || window.pageYOffset || 0;
    // progress relative to 2x viewport height so effect is subtle
    scrollP = clamp(s / (window.innerHeight * 2), 0, 1);
}
window.addEventListener('scroll', () => updateScroll(), { passive: true });
updateScroll();

// Animation loop
let rafId = null;
function tick() {
    // Gradient subtle vertical translation from scroll
    if (gradient) {
        const gY = -10 * scrollP; // up to -10px
        gradient.style.transform = `translateY(${gY}px)`;
    }

    // Shapes - move based on mouse + slight scroll offset
    shapes.forEach((el, i) => {
        const speed = shapeSpeeds[i] || 4;
        const mx = mouseX * speed; // px
        const my = mouseY * speed; // px
        const sy = - (i + 1) * scrollP * 6; // small extra vertical offset by index
        // we use translate3d for hardware acceleration
        el.style.transform = `translate3d(${mx}px, ${my + sy}px, 0)`;
    });

    // Bubbles - lighter movement
    bubbles.forEach((el, i) => {
        const bs = bubbleSpeeds[i] || 4;
        const mx = mouseX * bs * 0.3;
        const my = -mouseY * bs * 0.3;
        // give subtle upward offset with scroll so bubbles drift earlier
        const sy = -scrollP * 20 * ((i % 2) ? 0.6 : 1);
        el.style.transform = `translate3d(${mx}px, ${my + sy}px, 0)`;
    });

    rafId = requestAnimationFrame(tick);
}

// Start loop
if (!rafId) {
    rafId = requestAnimationFrame(tick);
}

// Clean up on page unload (good practice)
window.addEventListener('beforeunload', () => {
    if (rafId) cancelAnimationFrame(rafId);
});
});

// ----------------- Question Mark Generator -----------------
document.addEventListener("DOMContentLoaded", () => {

quizLanguages.style.animation="appear 0.6s ease";
const layer = document.querySelector(".questionmarks-layer");
if (!layer) {
    console.error("questionmarks-layer not found");
    return;
}
const total = 15;

for (let i = 0; i < 15; i++) { // number of question marks

const q = document.createElement("div");
    q.classList.add("question-mark");
    q.textContent = "?";

    // random size between 20–50px
    const size = Math.floor(Math.random() * 30) + 20;
    q.style.fontSize = size + "px";
    const blur = Math.random() * 4 + 1; // blur: 1px–5px
    q.style.filter = `blur(${blur}px)`;

    // random X position
    q.style.left = Math.random() * 100 + "%";

    // random animation duration
    q.style.animationDuration = (6 + Math.random() * 5) + "s";

    // random delay
    q.style.animationDelay = Math.random() * 5 + "s";

    // start below the screen
    q.style.bottom = "-60px";

    layer.appendChild(q);
}
});

let menuOpen=false;

const menuBtn = document.getElementById("menuButton");
const menuItems = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    menuItems.forEach(item => item.classList.toggle("active"));
});

document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !e.target.classList.contains("menu-item")) {
        if (menuOpen) {
            menuOpen=!menuOpen;
            menuItems.forEach(item => item.classList.toggle("active"));
        }
    }
});



function goToHome(){
    quizLanguages.style.animation="shrink 0.9s ease";
    quizDifficulties.style.animation="shrink 0.9s ease";
    quizContainer.style.animation="shrink 0.9s ease";
    resultContainer.style.animation="shrink 0.9s ease";
    quizStatsContainer.style.animation="shrink 0.9 ease";

    menuBtn.style.animation="fadeout 1s ease";
    for(let item of menuItems) item.style.animation="fadeout 1s ease";
    
    setTimeout(() => {location.href = "index.html";}, 850);  
}

function goToStudyTips(){

    quizLanguages.style.animation="shrink 0.9s ease";
    quizDifficulties.style.animation="shrink 0.9s ease";
    quizContainer.style.animation="shrink 0.9s ease";
    resultContainer.style.animation="shrink 0.9s ease";
    quizStatsContainer.style.animation="shrink 0.9 ease";

    menuBtn.style.animation="fadeout 1s ease";
    for(let item of menuItems) item.style.animation="fadeout 1s ease";

    
    
    setTimeout(() => {location.href = "studytips.html";}, 850);  
}

function goToAboutUs(){
    quizLanguages.style.animation="shrink 0.9s ease";
    quizDifficulties.style.animation="shrink 0.9s ease";
    quizContainer.style.animation="shrink 0.9s ease";
    resultContainer.style.animation="shrink 0.9s ease";
    quizStatsContainer.style.animation="shrink 0.9 ease";

    menuBtn.style.animation="fadeout 1s ease";
    for(let item of menuItems) item.style.animation="fadeout 1s ease";

    
    
    setTimeout(() => {location.href = "studytips.html";}, 850);  
}
