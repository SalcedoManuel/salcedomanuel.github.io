

function go_to_questions() {
    document.getElementById("wrapper2").style.display = "none";
    document.getElementById("question1").style.display = "flex";
}
function next_option(question_wrapper_number) {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "none";
    document.getElementById("question"+question_wrapper_number).style.display = "flex";
    document.getElementById("question_final").style.display = "none";
}

function last_question() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";
    document.getElementById("question6").style.display = "none";
    document.getElementById("question_final").style.display = "flex";
}

function end_quiz() {
    
}