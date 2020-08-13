var questionsArray =[
{
    question: "Full Form of RAM is?",
    answer: "random access memory",
    options: [
        "random access memory",
        "random actual memory",
        "right access memory",
        "none of the above",
    ]
},
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
        "central processing unit",
        "control panel unit",
        "none of the above",
        ]
    },
{
    question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
            options: [
                "electric mail",
                "easy mail",
                "electronic mail",
                "none of the above",
            ]
},
{
    question: "Full Form of LCD is?",
        answer: "liquid crystal display",
            options: [
                "liquid crystal display",
                "light crystal display",
                "liquid cold display",
                "none of the above",
            ]
},
{
    question: "Full Form of SEO is?",
        answer: "none of the above",
            options: [
                "safe engine optimization",
                "secure engine optimization",
                "secret engine optimization",
                "none of the above",
            ]
},
{
    question: "what is your colours name?",
        answer: "shayan",
            Options: [
                "yellow",
                "green",
                "red",
                "nothing",

            ]
},
];

function showquestion(s) {
    if (s < 6 ){


    var q = document.getElementById("q");
    q.innerHTML = "Question # 0" + (s+1)
    //show question 
    var question = document.getElementById("question");
    question.innerHTML = questionsArray[s].question;
    //option
    var optionelement = document.getElementsByClassName("option");
    for(var i = 0; i<questionsArray[s].options.length;i++){
        optionelement[i].innerHTML= questionsArray[s].options[i];
    
    }


}
}

var qcounter = 0;
function counter() {
    
    qcounter++;
    showquestion(qcounter)


}

function select(e){
    removeactive()
    e.classList.add("active")

}

function removeactive(){
    var active = document.getElementsByClassName("active")
    for(var i = 0 ; i < active.length; i++){
        active[i].classList.remove("active")
    }

}

var soucre = 0;
function answercheck(){
    var active = document.getElementsByClassName("active")
    if(active == answer){
        console.log("10")
    }


}