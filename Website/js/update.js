var Rnumber = location.search.substring(1).split('=')[1];

firebase.database().ref('/Users/'+Rnumber).once('value', function(snapshot){
	document.getElementById('firstname').value = snapshot.val().Firstname;
	document.getElementById('lastname').value = snapshot.val().Lastname;
	document.getElementById('fase').value = snapshot.val().Fase;
});