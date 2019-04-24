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

	// when form submit clicked, take in value from form
	// push it to the firebase

	// firebase on("child_added") change
	// pull the object down
	// display it on the html table with <tr><td></td><tr>

	$("#submit").on("click", function() {

    event.preventDefault();

    name = $("#Name").val().trim();
    title = $("#Role").val().trim();
    startDate = $("#Start").val().trim();
    rate = $("#Rate").val().trim();

    console.log(name, title, startDate, rate);

    database.ref().push({
        name: name,
        title: title,
        startDate: startDate,
				rate: rate
		});
		
	})	

	database.ref().on("child_added", function(data) {
		var name = $("<td>").text(item.name.trim());
		var title = $("<td>").text(item.title.trim());
		var startDate = $("<td>").text(item.startDate);
		var rate = $("<td>").text(item.rate);
		var month = 
		$(".display").append($("<tr>").append([name, title, startDate, month, rate, pay]));
	});
});