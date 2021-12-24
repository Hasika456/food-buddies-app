user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome   " + user_name + "!";

function logout(){
    localStorage.removeItem("user_name");
    window.location="index.html";
}

function sweet_team_page(){
    window.location="teamsweet.html";
}

function spice_team_page(){
    window.location="teamspice.html";
}