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
let choices = document.querySelectorAll("#choices")
let result = document.querySelector('#result')
let used = []
let score = 0
let timer = 30


function shuffle(len) {
    let order = []
    for (let i = 0; i < len; i++) {
        order.push(i)
    }
    return order
}


function generate(quest) {
    
    question_name.innerHTML = quest.question

    let keys = quest.incorrect_answers
    keys.push(quest.correct_answer)
    let order = shuffle(keys.length)

    for (let i = 0;i < order.length; i ++) {
        choices[i].innerHTML = keys[order[i]]
        if (choices[order[i]].innerHTML == quest.correct_answer)
            choices[i].value = true
        else
            choices[i].value = false
        console.log(choices[i].innerHTML, " baba ", choices[i].value)
    }

}


function init() {
    console.log("test")
    console.log(questions)
    let loc = Math.floor(Math.random()*(questions.length))
    let current = questions[loc]
    
    console.log(choices.length,"space", choices)
    used.push(questions[loc])
    generate(current)
    
    

 
}





Start.addEventListener("click", init)

