var startups = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var groups = ['farmers', 'astronauts', 'children', 'programmers', 'students', 'dogs', 'teachers'];


// console.log('A startup that is ' + startups[random1] + ', but for ' + groups[random2]);


function createRandom(){
	var random1 = Math.floor((Math.random() * startups.length));
	var random2 = Math.floor((Math.random() * groups.length));
	return 'A startup that is ' + startups[random1] + ', but for ' + groups[random2];
}


var randomStartup = createRandom()

$('#create').on("click", function() {

    var randomStartup = createRandom();

    $('.page #xForY').html(randomStartup);

    $('#save').one("click", function() {
    	$('.favoritesTable table').append('<li>'+randomStartup+'</li>');
    });

	// 	var templateSource = $('#favoriteStartup').html()
	// 	var compiledTemplate = Handlebars.compile(templateSource)

	// 	var data = {
	// 		favoriteStartup: randomStartup
	// 	}

	// 	var generatedHtml = compiledTemplate(data)
	        		
	//     $('.favoritesTable table').append(generatedHtml);

	// });

});



// $('#save').on("click", function() {

// 	var templateSource = $('#favoriteStartup').html()
// 	var compiledTemplate = Handlebars.compile(templateSource)

// 	var data = {
// 		newStartup: createRandom()
// 	}

// 	var generatedHtml = compiledTemplate(data)
        		
//     $('.page #xForY').html(generatedHtml);

// });



$('#save').one("click", function() {
	$('.favoritesTable').show();
});