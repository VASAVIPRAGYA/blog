var message = document.getElementById("message");
var doneBtn=document.getElementById("doneBtn");

	function doneClick() {
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;

		var firebaseRef = firebase.database().ref();

		firebaseRef.child("text").set("my mentor");
		
	}