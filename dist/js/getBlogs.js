"use strict";

$(document).ready(function () {

	alert(localStorage.getItem('token'));

	$.ajax({
		url: 'https://tiyagencyweek.herokuapp.com/blogs',
		headers: { "X_CSRF_TOKEN": localStorage.getItem('token') },
		success: function success(blogPosts) {
			console.log(blogPosts);
		},
		error: function error(err) {
			console.log("Error! Message: " + e.responseText);
		},
		complete: function complete() {
			console.log("All done!");
		}
	});

	var $article = $('article');
	var $articleHtml = $article.html().toString();
	var $articleLength = $articleHtml.length;
	console.log($articleHtml.length);

	if ($articleLength > 400) {
		var newArticle = $articleHtml.substr(0, 400);
		console.log(newArticle);
	}
});