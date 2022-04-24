var firebaseConfig = {
    apiKey: "AIzaSyCZQ1Ld1UFAn_geaYeU4P5hI-Sm-kEPNgc",
    authDomain: "chitter-chatter-e619c.firebaseapp.com",
    databaseURL: "https://chitter-chatter-e619c-default-rtdb.firebaseio.com",
    projectId: "chitter-chatter-e619c",
    storageBucket: "chitter-chatter-e619c.appspot.com",
    messagingSenderId: "32185118945",
    appId: "1:32185118945:web:0380120ba1ce1f94f687a0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);









user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            like:0,
            username: user_name,
            message: msg

      })
      document.getElementById("msg").innerHTML = "";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "index.html";
}

function back(){
      localStorage.removeItem("room_name")
      window.location = "kwitter_room.html"
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      Name = message_data["username"]
      Message = message_data["message"]
      Likes = message_data["like"]
      nameTag = "<h4>"+Name+"</h4>"
      messageTag =  "<h3 class = 'message_h4'>"+Message+"</h3>"
      buttonTag = "<button class = 'btn btn-warning' value = "+Likes+" id = "+firebase_message_id+" onclick = 'updateLike(this.id)'>"
      spanTag = "<span class = 'glyphicon glyphicon-thumbs-up'>Likes: "+Likes+"</span>"
      row = nameTag + messageTag + buttonTag + spanTag
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updateLikes = Number(likes) + 1
      firebase.database().ref(room_name).child(button_id).update({
            like : updateLikes
      })
}