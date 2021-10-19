function adduser(){
    player_1 = document.getElementById("player1_name_input").value ;
    player_2 = document.getElementById("player2_name_input").value ;

    localStorage.setItem("player_1_name" ,player_1 );
    localStorage.setItem("player_2_name" , player_2);

    window.location = "math.html";
}