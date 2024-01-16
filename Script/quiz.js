const quizData = [ // tableau de donnees
    {
        question: "Qui fait les standards du Web ?",
        a: "Google",
        b: "Microsoft",
        c: "Le consortium World Wide Web ",
        d: "MozillaComment",
        correct: "c",
    },
    {
        question: "Choisissez l'élément HTML correct pour le titre le plus grand :",
        a: "<h6>",
        b: "<tête>",
        c: "<titre>",
        d: "<h1>  ",
        correct: "d",
    },

    {
        question: "Quel caractère est utilisé pour indiquer une balise de fin ?",
        a: "^",
        b: "/  ",
        c: "<",
        d: "*",
        correct: "b",
    },
    {
        question: "Dans quel élément HTML place-t-on le JavaScript ?",
        a: "<javascript>",
        b: "<script>    ",
        c: "<javas>",
        d: "<js>",
        correct: "b",
    },
    {
        question: "Comment écrire une instruction IF en JavaScript ?",
        a: "if i = 5  ",
        b: "if (i == 5)     ",
        c: "if i = 5 then",
        d: "if i == 5 then",
        correct: "b",
    },

    
    
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')//est utilisé pour obtenir une liste d'éléments en fonction d'un sélecteur answer 
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})