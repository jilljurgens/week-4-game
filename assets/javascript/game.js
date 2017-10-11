
$(document).ready(function() {

var counter = 0;
var losses = 0;
var wins = 0;

//this stores the number they need to match
var randomNumberBetween19and120;
//this is to generate the random number b/w 19-120 to assign to game match

function randomWholeNumGame() {
	randomNumberBetween19and120 = Math.floor(Math.random() * 101 + 19); 
}

randomWholeNumGame();
	console.log(randomNumberBetween19and120);
	//this sets the number in html for them to try and match
 	$("#match").text("Try to match: " + randomNumberBetween19and120); 

//This is to create the number to assign to the crystals
function randomWholeNumCrystal() {
 	var randomNumberBetween1and12 = Math.floor(Math.random() * 12 +1);
 	return randomNumberBetween1and12;
}

randomWholeNumCrystal();
//console.log(randomWholeNumCrystal());

$("#image1").data("value", randomWholeNumCrystal());


// This is the onclick function- it assigns a random number to the crystals, adds the users number and determines wins/losses
var currentCounter = 0;

$(".crystalbtn").on("click", function(){
	//console.log($(this).data("value"));
	currentCounter +=  parseInt($(this).data("value"));
 	$("#gameStatus").empty();
	$("#counter").text("Your number: " + currentCounter);
	
	if (currentCounter === randomNumberBetween19and120){
	$("#gameStatus").text("You WIN!!!");
	wins ++;
	$("#wins").text("Wins " + wins);
	resetCountsForNewGame();
}
	else if (currentCounter >= randomNumberBetween19and120){
	$("#gameStatus").text("You Lose, but try again!");
	losses ++;
	$("#losses").text("Losses: " + losses);
	resetCountsForNewGame();
}	

});

function resetCountsForNewGame(){
	randomWholeNumCrystal();
	randomWholeNumGame();
	currentCounter = 0;
	$("#counter").text("Your number: " + currentCounter);
	$("#match").text("Try to match: " + randomNumberBetween19and120);

}




});





