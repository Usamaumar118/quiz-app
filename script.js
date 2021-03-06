const questions = [
    {
        question: 'Pakistan\'s Independence day is:',
        a: '14 August',
        b: '13 August',
        c: '15 August',
        d: '16 August',
        correct: 'a'
    },
    {
        question: 'Which is the capital of Pakistan?',
        a: 'Karachi',
        b: 'Lahore',
        c: 'Islamabad',
        d: 'Quetta',
        correct: 'c'
    },
    {
        question: 'Which is the biggest province of Pakistan?',
        a: 'KPK',
        b: 'Balochistan',
        c: 'Punjab',
        d: 'Sindh',
        correct: 'b'
    },
    {
        question: "Pakistan\'s flag has:",
        a: 'Two colors',
        b: 'Three colors',
        c: 'Four colors',
        d: 'One color',
        correct: 'a'
    },
    {
        question: 'Pakistan\'s National anthem was wrote by?',
        a: 'Allama Iqbal',
        b: 'Hafeez Jalandhri',
        c: 'Ch Rehmat Ali',
        d: 'Liaqat Ali',
        correct: 'b'
    }

]

const quizContainer = document.querySelector('.quiz')
const answersEls = document.querySelectorAll('.answer')
const questionEl = document.querySelector('.quiz__question')
const a_text = document.querySelector('.a_text')
const b_text = document.querySelector('.b_text')
const c_text = document.querySelector('.c_text')
const d_text = document.querySelector('.d_text')
const submitBtn = document.querySelector('.quiz__submit')

const infoMsg = document.querySelector('.info')

let currentQuiz = 0

showQuiz();

function showQuiz() {

    deselectAnswers();

    const currentQuizData = questions[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}


let answer = undefined
let score = 0


function getSelected() {

    answersEls.forEach(answersEl => {

        if(answersEl.checked){
            answer = answersEl.id
        } 
    })
    
    return answer
}


function deselectAnswers(){

    answersEls.forEach(answersEl => {
        answersEl.checked = false
    })

}


submitBtn.addEventListener('click', function(){

        answer = getSelected()

        if(answer){

            if(answer === questions[currentQuiz].correct){
                score++
            }

            currentQuiz++
            
            if(currentQuiz < questions.length){
                showQuiz()
            } else {

                quizContainer.innerHTML = `
                <h2 class="quiz__question quiz__question--score">
                Congrats! Finished. Your Score is ${score}/5
                </h2>

                <button onclick="location.reload()" class="quiz__submit">Play Again</button>
            `
           }

        }
})