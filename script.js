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
        question: 'Which is the capital city of Pakistan?',
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
        question: "Pakistans flag has:",
        a: 'Two colors',
        b: 'Three colors',
        c: 'Four colors',
        d: 'One color',
        correct: 'a'
    },
    {
        question: 'Pakistans National anthem was wrote by?',
        a: 'Allama Iqbal',
        b: 'Hafeez Jalandhri',
        c: 'Ch Rehmat Ali',
        d: 'Liaqat Ali',
        correct: 'b'
    }

]

const questionEl = document.querySelector('.quiz__question')
const a_text = document.querySelector('.a_text')
const b_text = document.querySelector('.b_text')
const c_text = document.querySelector('.c_text')
const d_text = document.querySelector('.d_text')
const submitBtn = document.querySelector('.quiz__submit')

let currentQuiz = 0


function showQuiz() {

    const currentQuizData = questions[currentQuiz]

    console.log(currentQuizData.question)

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

showQuiz()


submitBtn.addEventListener('click', function(){
    currentQuiz++
    showQuiz()
})