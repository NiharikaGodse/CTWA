var firebaseConfig = {
  apiKey: "AIzaSyCcvb7SPR6b0MZHu8-XgopUeeejq8UHIGg",
  authDomain: "cooltalkwithall.firebaseapp.com",
  databaseURL: "https://cooltalkwithall-default-rtdb.firebaseio.com",
  projectId: "cooltalkwithall",
  storageBucket: "cooltalkwithall.appspot.com",
  messagingSenderId: "84315716585",
  appId: "1:84315716585:web:9ba0bafd1b630db2e12978"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "CTWA_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
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
    window.location = "CTWA_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "CTWA.html";
}
