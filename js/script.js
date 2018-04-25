var quotes = [	
	{
		quote: "Don't have $100 shoes and a 10 cent squat.",
		source: "Louie Simmons",
		sport: "Powerlifting"
	},
	{
		quote: "Pain is temporary. If I quit, however, it lasts forever.",
		source: "Lance Armstrong",
		sport: "Cycling"
	},
	{
		quote: "Intensity builds immensity.",
		source: "Kevin Levrone",
		sport: "Bodybuilding"
	},
	{
		quote: "I don’t need you to agree with me, I have the courage to stand alone.",
		source: "CT Fletcher",
		sport: "Powerlifting"
	},
	{
		quote: "If they were all good days, then what would a good day really be worth?",
		source: "Dave Tate",
		citation: "Precision Nutrition",
		sport: "Powerlifting"
	},
	{
		quote: "You want to be better than yesterday, but worse than tomorrow.",
		source: "Tom Platz",
		citation: "Bodybuilding.com",
		year: 2018,
		sport: "Bodybuilding"

	}
];

var colors = [
	"rgb(236, 100, 75)", 
	"rgb(103, 65, 114)", 
	"rgb(68, 108, 179)",
	"rgb(54, 181, 92)", 
	"rgb(247, 202, 24)", 
	"rgb(108, 122, 137)"
];


// Select a random quote object from the quotes array and return the randomly selected quote object.
function getRandomQuote(){
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	while($(".quote").text()==randomQuote.quote){
		randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	}
	return randomQuote;
}

function getColor(){ 
	var colorValue = Math.floor(Math.random() * colors.length);
	while ($("body").css('background-color')==colors[colorValue]){
		colorValue = Math.floor(Math.random() * colors.length);
	}
	$("#loadQuote, body").css("background-color", colors[colorValue]);
}

function printQuote(){
	// Call the getRandomQuote function and store the returned quote object in a variable.
 	var quote = getRandomQuote();
	var citation = '';
	var year = '';

	$(".quote").text(quote.quote);

	// Don't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing.
	if (quote.hasOwnProperty('citation')){
		var citation = '<span class="citation">'+quote.citation+'</span>';
	}
	if (quote.hasOwnProperty('year')){
		var year = '<span class="year">'+quote.year+'</span>';
	}

	// Display the final HTML string to the page. 
	$(".source").html(quote.source+citation+year);

	// When the quote changes, randomly change the background color of the page.
	getColor();
}

$( document ).ready(function() {
	// Event listener to respond to "Show another quote" button clicks.
  $( "#loadQuote" ).mousedown(function() {
  	// When user clicks anywhere on the button, the "printQuote" function is called.
  	printQuote(); 	
	});

	// Refresh the quote after a set amount of time.
	setInterval(function(){printQuote()}, 30000);

});

