const quizData = [{
    question: "HTML files are saved by default with the extension?",
    a: ".html",
    b: ".h",
    c: ".ht",
    d: "None of the above",
    correct: "a",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "Which of the following tags doesn't require a closing tag?",
    a: "<br>",
    b: "<hr>",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
},
{
    question: "Which type of JavaScript language is ?",
    a: "Object_Oriented",
    b: "Object-Based",
    c: "Assembly-Language",
    d: "High-level",
    correct: "b",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "The 'function' and 'var' are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration",
    d: "Phototypes",
    correct: "c",
},
{
    question: "Which of the following type of a variable is volatile?",
    a: "Mutable variable",
    b: "Dynamic variable",
    c: "Volatile variable",
    d: "Immutable variable",
    correct: "a",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "In how many ways can CSS be written in?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
},
{
    question: "Which HTML tag is used to declare internal CSS?",
    a: "<style>",
    b: "<linl>",
    c: "<script>",
    d: "none of the above",
    correct: "a",
}


];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let quesBox = document.getElementById("quesBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
quesBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);