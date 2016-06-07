/*`
  Please add all Javascript code to this file.
*/

Handlebars.registerHelper('tagsList', function(tags) {
	var tagLine = ''
    for (var i = 0; i < tags.length; i = i + 1) {
    	tagLine += tags[i].display
    	tagLine += ', '
	}

	return tagLine
});	



$('li.digg').on('click', function(){
	$('#main').html('');
	$.ajax({
		type: 'GET',
		url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
		success: function(response) {
			console.log(response);

	    	var templateSource = $('#feedItems').html()
			var compiledTemplate = Handlebars.compile(templateSource)


			var generatedHtml = compiledTemplate(response.data)
	        		
	        $('#main').append(generatedHtml);

		}
	});	
})


$('li.reddit').on('click', function(){
	$('#main').html('');
	$.ajax({
		type: 'GET',
		url: 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/r/news.json',
		success: function(response) {
			console.log(response);

	    	var templateSource = $('#feedItems2').html()
			var compiledTemplate = Handlebars.compile(templateSource)


			var generatedHtml = compiledTemplate(response.data)
	        		
	        $('#main').append(generatedHtml);
		
		}
	});	
})


$('li.google').on('click', function(){
	$('#main').html('');
	$.ajax({
		type: 'GET',
		url: 'https://accesscontrolalloworiginall.herokuapp.com/http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http%3A%2F%2Fnews.google.com%2Fnews%3Foutput%3Drss',
		success: function(response) {
			console.log(response);

	    	var templateSource = $('#feedItems3').html()
			var compiledTemplate = Handlebars.compile(templateSource)


			var generatedHtml = compiledTemplate(response.responseData.feed)
	        		
	        $('#main').append(generatedHtml);
		
		}
	});	
})


$('#main').on('click', function() {

	$('#popUp').removeClass('hidden');
	setTimeout(function(){
            $('#popUp').removeClass('loader');
    }, 1000);
});

$('#popUp .closePopUp').on('click', function() {
	$('#popUp').addClass('hidden')
	$('#popUp').addClass('loader');
})


// $('.articleContent').on('click', function(){
// 	console.log('hey');
// })


