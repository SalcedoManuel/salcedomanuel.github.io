const btn = document.getElementById('button');

const number_places = 2;
const number_recordings = 3;
const id_quiz = 1672668036;
const quiz_name_actual = "Online-Audio";

var user_object = new Object;
var all_places_replies = [];
var last_user_replies = [];


function go_to_questions() {
    let date_start_quiz = Date().split("00 (")[0];
    user_object["Date"] = date_start_quiz;
    let hearing_score = document.getElementById("score");
    user_object["Introduce aquí tu puntuación auditiva obtenida en el test hearWHO"] = hearing_score.value;
    user_object["Places_Number"] = number_places;
    user_object["Recordings_Number"] = number_recordings;
    user_object["ID_Quiz"] = id_quiz;
    user_object["Name_Quiz"] = quiz_name_actual;
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
document.getElementById('form')
 .addEventListener('submit', function(event) {
    var completed_quiz = new Object;
    completed_quiz[0] = user_object;
    completed_quiz = JSON.stringify(main_info);
    document.getElementById("message") = completed_quiz;
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_725jgok';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});