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




user = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome " + user;
function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "Hi, I am adding a room."
        })
        localStorage.setItem("room_name", room_name)
        window.location = "message.html"
}
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoom(this.id)'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoom(name){
        localStorage.setItem("room_name", name);
        window.location = "message.html";
}
function logout(){
        localStorage.removeItem("room_name");
        localStorage.removeItem("username");
        window.location = "index.html";
}  