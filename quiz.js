//import {questions} from "./database"
const questions =  [
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which Greek letter represents the &quot;Half-Life&quot; logo?",
        "correct_answer": "Lambda",
        "incorrect_answers": [
            "Omega",
            "Alpha",
            "Sigma"
        ]
    },
    {
        "category": "Entertainment: Cartoon & Animations",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which &#039;Family Guy&#039; character got his own spin-off show in 2009?",
        "correct_answer": "Cleveland Brown",
        "incorrect_answers": [
            "Glenn Quagmire",
            "Joe Swanson",
            "The Greased-up Deaf Guy"
        ]
    },
    {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who had a 1983 hit with the song &#039;Africa&#039;?",
        "correct_answer": "Toto",
        "incorrect_answers": [
            "Foreigner",
            "Steely Dan",
            "Journey"
        ]
    }]



let Start = document.querySelector("#start")
let question_name = document.querySelector("#question_name")
let choices = document.querySelector("#choices")
let result = document.querySelector('#result')
let used = []
let score = 0
let timer = 30


function shuffle(len) {
    let order = []
    for (let i = 0; i < len; i++) {
        order.push(i)
    }
    return i
}


function generate(q_Names, q_choices) {
    let order = shuffle(q_choices.length)
    question_name.innerHTML = q_Names
    for (let i = 0;i < order.length; i ++) {
        
    }

}


function init() {
    console.log("test")
    console.log(questions)
    let loc = Math.floor(Math.random()*(questions.length))
    let current = questions[loc]
    let keys = current.incorrect_answers
    keys.push(current.correct_answer)
    console.log(questions[loc].incorrect_answers)
    used.push(questions[loc])
    

 
}





Start.addEventListener("click", init)

