"use strict";

$(document).ready(function () {

	alert(localStorage.getItem('token'));

	$.ajax({
		url: 'https://tiyagencyweek.herokuapp.com/blogs',
		headers: {"X_CSRF_TOKEN": localStorage.getItem('token')},
		success: (blogPosts) => {
			console.log(blogPosts)
		},
		error: function(err) { console.log("Error! Message: " + e.responseText); },
  		complete: function() { console.log("All done!"); }
	})

	let $article = $(`article`)
	let $articleHtml= $article.html().toString()
	let $articleLength = $articleHtml.length
	console.log($articleHtml.length)


	if ($articleLength > 400) {
		let newArticle = $articleHtml.substr(0, 400)
		console.log(newArticle)
	}
});