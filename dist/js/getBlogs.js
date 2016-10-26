"use strict";

$(document).ready(function () {

	$.ajax({
		url: 'https://tiyagencyweek.herokuapp.com/blogs',
		success: function success(blogPosts) {
			console.log(blogPosts);
		}
	});

	var $article = $("article");
	var $articleHtml = $article.html().toString();
	var $articleLength = $articleHtml.length;
	console.log($articleHtml.length);

	if ($articleLength > 400) {
		var newArticle = $articleHtml.substr(0, 400);
		console.log(newArticle);
	}
});