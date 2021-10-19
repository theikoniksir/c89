player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1name").innerHTML = player_1_name + ":";
document.getElementById("player_2name").innerHTML = player_2_name + ":";
document.getElementById("player_1score").innerHTML = player_1_score;
document.getElementById("player_2score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question turn-" + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn-" + player_2_name;

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case = " + answer);
    if (answer == word) {
        if (answer_turn == "player1") {
            player_1_score = player_1_score + 1;
            document.getElementById("player_1score").innerHTML = player_1_score;

        }
        else {
            player_2_score = player_2_score + 1
            document.getElementById("player_2score").innerHTML = player_2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn-" + player_2_name;

    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player_1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player_2_name;

    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}