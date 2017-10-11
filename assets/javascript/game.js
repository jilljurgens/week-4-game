
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

 //Trying to assign random numbers to the data value of each img div
 // $("#image1").val(randomNumberBetween1and12); 
 // $("#image2").val(randomNumberBetween1and12); 
 // $("#image3").val(randomNumberBetween1and12); 
 // $("#image4").val(randomNumberBetween1and12); 
 
}

randomWholeNumCrystal();
console.log(randomWholeNumCrystal());

$("#image1").data("value", randomWholeNumCrystal());


// First attempt at onclick function to grab value and add to the -- this does it for all of the crystals, can I get inv=dividual values from each?
var currentCounter = 0;

$(".crystalbtn").on("click", function(){
	console.log($(this).data("value"));
	//var currentCounter = parseInt(currentCounter) + parseInt($(this).data("value"));
	currentCounter +=  parseInt($(this).data("value"));
	//var currentCounter = 

	$("#counter").text("Your number: " + currentCounter);
	
	if (currentCounter === randomNumberBetween19and120){
	alert("you win");
	wins ++;
	$("#wins").text("Wins " + wins);
	resetCountsForNewGame();
}
	else if (currentCounter >= randomNumberBetween19and120){
	alert("you lose");
	losses ++;
	$("#losses").text("losses " + losses);
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

//create onclick events for each of the crystals and make them add up into the yournumber div


});
/*//how to calulate if they win
if counter === randomNumberBetween19and120{
	alert("you win");
	wins ++;
	$("#wins").text("Wins " + wins);
	//call a reset game here
}
//how to calculate if they lose
else if counter >= randomNumberBetween19and120{
	alert("you lose");
	losses ++;
	$("#losses").text("losses " + losses);
	//call a reset game here

}

});

// do a reset funtion to call after each win loss (don't try to to set random number within the win/loss function)

/*<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    document.getElementById("myNumber").value = "16";
}*/