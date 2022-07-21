function login(){

name = document.getElementById("login_user").value;

localStorage.setItem("username", name);
window.location = "Letschat_chat.html";


}