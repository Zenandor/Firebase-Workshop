var R0000000;
var userList = document.getElementById('userList'); 

firebase.database().ref('/Users').once('value', function(snapshot){
var JohnDoe = snapshot.child('R0000000');

userList.innerHTML += 
  "<tr id="+ JohnDoe.key + ">" +
    "<td scope='row'>" + JohnDoe.key + "</td>" +
    "<td>" + JohnDoe.val().Firstname + "</td>" +
    "<td>" + JohnDoe.val().Lastname + "</td>" +
    "<td>" + JohnDoe.val().Fase + "</td>" +
    "<td><a class='btn btn-primary' role='button' href='update.html?q=" + JohnDoe.key + "'>Update</a></td>" +
  "</tr>";
});