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
    },{
        "category": "Entertainment: Television",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What was the name of the teenage witch played by Melisa Joan Hart who lives with her witch aunts Hilda and Zelda?",
        "correct_answer": "Sabrina",
        "incorrect_answers": [
            "Hermione",
            "Dorothy",
            "Dahlia"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of the following games has the largest map size?",
        "correct_answer": "Just Cause 2",
        "incorrect_answers": [
            "Grand Theft Auto 5",
            "The Elder Scrolls 4:  Oblivion",
            "The Witcher 3:  Wild Hunt"
        ]
    },
    {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In &quot;ALF&quot;, what was ALF&#039;s real name?",
        "correct_answer": "Gordon Shumway",
        "incorrect_answers": [
            "Gordon Milipp",
            "Gordon Foster",
            "Gordon von Gam"
        ]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which year did Jenson Button won his first ever Formula One World Drivers&#039; Championship?",
        "correct_answer": "2009",
        "incorrect_answers": [
            "2010",
            "2007",
            "2006"
        ]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
        "correct_answer": "1-7",
        "incorrect_answers": [
            "1-5",
            "1-6",
            "2-6"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the name of the adventurer you meet at the mines in Stardew Valley?",
        "correct_answer": "Marlon",
        "incorrect_answers": [
            "Marnie",
            "Morris",
            "Marvin"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of the following is not a character in the video game Doki Doki Literature Club?",
        "correct_answer": "Nico",
        "incorrect_answers": [
            "Monika",
            "Natsuki",
            "Sayori"
        ]
    },
    {
        "category": "Science & Nature",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of these Elements is a metalloid?",
        "correct_answer": "Antimony",
        "incorrect_answers": [
            "Tin",
            "Bromine",
            "Rubidium"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which Grand Theft Auto (GTA) games have the same setting?",
        "correct_answer": "GTA V and GTA San Andreas",
        "incorrect_answers": [
            "GTA V and GTA Vice City",
            "GTA IV and GTA San Andreas",
            "GTA IV and GTA Vice City"
        ]
    },
    {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is the lead singer of Foo Fighters?",
        "correct_answer": "Dave Grohl",
        "incorrect_answers": [
            "Dave Mustaine",
            "James Hetfield",
            "Little Red Riding Hood"
        ]
    }
]



let Start = document.querySelector("#start")
let question_name = document.querySelector("#question_name")
let choices = document.querySelectorAll("#choices")
let result = document.querySelector('#result')
let used = []
let score = 0
let time_limit = 30, time = document.querySelector('#timer'), timer


function shuffle(len) {
    let order = []
    for (let i = 0; i < len; i++) {
        order.push(i)
    }
    return order
}

function wrong() {
    time_limit -= 5
}

function pick(result) {
    
    let loc
    console.log(result)
    if (result == 'true') {
        console.log('correct')
        score++
    } else {
        clearInterval(timer)
        console.log('wrong')
        time_limit -= 5
        timer = setInterval(countdown, 1000)

    }
    while (true) {
        
        loc = Math.floor(Math.random()*(questions.length))
        //console.log('looping pick')
        if (!(questions[loc] in used)) {
            generate(questions[loc])
            return
        }
    }
}



function countdowntimer_start(){
    let input = "please say how long you like /to take the quiz, max 90s";
  
    while(true) {
        time_limit = prompt(input,time_limit)
        
        time_limit = parseInt(time_limit)
        
        if (time_limit) { // positive input
            if (time_limit > 90) 
                input = "smaller than 90 please"
            else
                break
        } else 
            input = "Plase use a positive timerber"
    }
    time.innerHTML = time_limit
    timer = setInterval(countdown, 1000);
}

function countdown() {
    
    
    if (time_limit < 0) {
        clearInterval(timer)
        question_name.innerHTML = 'your score is ' + score
        time.innerHTML = ''
        for (let i = 0;i < 4; i ++) {
            choices[i].style.visibility = 'hidden'
        }
    }else{
        time_limit --
        time.innerHTML = time_limit  
    } 
    
    
}

function generate(quest) {
    
    question_name.innerHTML = quest.question

    let keys = quest.incorrect_answers
    if (!keys.includes(quest.correct_answer)) {
        keys.push(quest.correct_answer)
    }
    let order = shuffle(keys.length)
    //console.log(keys, "keys")
    for (let i = 0;i < order.length; i ++) {
        choices[i].style.visibility = 'visible'
        choices[i].innerHTML = keys[order[i]]
        if (choices[order[i]].innerHTML == quest.correct_answer)
            choices[i].value = true
        else
            choices[i].value = false
        //console.log(choices[i].innerHTML, " baba ", choices[i].value)
    }
    order = []    //reset
}


function init() {
    console.log("test")
    console.log(questions)
    Start.style.visibility = 'hidden'

    
    let loc = Math.floor(Math.random()*(questions.length))
    let current = questions[loc]
    
    //console.log(choices.length,"space", choices)
    used.push(questions[loc])
    generate(current)
    countdowntimer_start()
    
    

 
}





Start.addEventListener("click", init)

