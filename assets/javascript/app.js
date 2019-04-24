// Initialize Firebase
$(document).ready(function() {

	var config = {
	    apiKey: "AIzaSyC_xsf8yQjGva6D7JM6Oc2lvl-MVLVcsU0",
	    authDomain: "time-sheet-4a362.firebaseapp.com",
	    databaseURL: "https://time-sheet-4a362.firebaseio.com",
	    projectId: "time-sheet-4a362",
	    storageBucket: "time-sheet-4a362.appspot.com",
	    messagingSenderId: "319820984494"
	};

	firebase.initializeApp(config);

	var database = firebase.database();
});