function doneClick(){

		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;

		var postData = {
			name:name,
			email:email,
			message:message
		};


		var database = firebase.database();

		var newPostKey = database.ref().child('user').push().key;

		var updates = {};
		updates['/users/' + newPostKey] = postData;
		//updates['/user-posts/' + uid + '/' + newPostKey] = postData;

		return firebase.database().ref().update(updates);


}