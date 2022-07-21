
const firebaseConfig = {
      apiKey: "AIzaSyA7gKatOUcfm1qNlacrIgIbME-WfNLIi6A",
      authDomain: "lets-chat-d9382.firebaseapp.com",
      databaseURL: "https://lets-chat-d9382-default-rtdb.firebaseio.com",
      projectId: "lets-chat-d9382",
      storageBucket: "lets-chat-d9382.appspot.com",
      messagingSenderId: "507629736554",
      appId: "1:507629736554:web:05a022fa2f0dcb1e2d7013",
      measurementId: "G-WQVL8LCKGL"
    };

firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) 
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot)
             {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;

                  row = "<div class = 'roomname' id=" + Room_names + " onclick='redirect(this.id)'>" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row;
                  
            });
      });
}
getData();
      
function addroom(){

      room = document.getElementById("roomname").value;

      firebase.database().ref("/").child(room).update({

            purpose: "adding roomname"

      });

      localStorage.setItem("roomname", room);
      window.location = "Letschat_chat.html";


}
function log_out(){

      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = " Letschat_login.html";

}