var startups = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var groups = ['farmers', 'astronauts', 'children', 'programmers', 'students', 'dogs', 'teachers'];


// console.log('A startup that is ' + startups[random1] + ', but for ' + groups[random2]);


function createRandom(){
	var random1 = Math.floor((Math.random() * startups.length));
	var random2 = Math.floor((Math.random() * groups.length));
	return 'A startup that is ' + startups[random1] + ', but for ' + groups[random2];
}

var newStartup = ''

var favorites = []

console.log(newStartup)



$('#create').on("click", function() {

    var randomStartup = createRandom();

    $('.page #xForY').html(randomStartup);

    newStartup = randomStartup;

});




$('#save').on("click", function() {

	var isInArray = favorites.indexOf(newStartup) >= 0;

    if (!isInArray && newStartup != '') {

    	favorites.push(newStartup);

//     		var templateSource = $('#favoriteStartup').html()
// 			var compiledTemplate = Handlebars.compile(templateSource)

// 			var data = {
// 				favoriteStartup: newStartup
// 			}

// 			var generatedHtml = compiledTemplate(data)
        		
//         	$('.favoritesTable table').append(generatedHtml);

//         }

// });

 		$('.favoritesTable table').append('<li>'+'<span>'+'♥ '+'</span>'+newStartup+'</li>');
		
	}    
});




$('table').on('click', 'span', function () {
	  $(this).closest('li').remove();
});


$('#save').one("click", function() {
	$('.favoritesTable').show();
});









