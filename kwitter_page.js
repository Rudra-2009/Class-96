//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD4h9xse_-pxRMA05I_Pr1rgasiL5B-nZE",
      authDomain: "practice-class-database.firebaseapp.com",
      databaseURL: "https://practice-class-database-default-rtdb.firebaseio.com",
      projectId: "practice-class-database",
      storageBucket: "practice-class-database.appspot.com",
      messagingSenderId: "827228839756",
      appId: "1:827228839756:web:9388b3a7d2b3e09601f9e9"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send() {
          msg=document.getElementsById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,message:msg,like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
