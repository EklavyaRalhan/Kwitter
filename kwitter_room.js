var firebaseConfig = {
      apiKey: "AIzaSyAMeS-GkoarCe56WKwNgbHKjGVg6rEW-VQ",
      authDomain: "kwitter-4c190.firebaseapp.com",
      databaseURL: "https://kwitter-4c190-default-rtdb.firebaseio.com",
      projectId: "kwitter-4c190",
      storageBucket: "kwitter-4c190.appspot.com",
      messagingSenderId: "265309019",
      appId: "1:265309019:web:683df9e473e07e15f7a87e",
      measurementId: "G-JFESKBY7S5"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
   
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}