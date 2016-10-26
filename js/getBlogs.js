"use strict";

$(document).ready(function () {

	$.ajax({
		url: 'https://tiyagencyweek.herokuapp.com/blogs',
		success: (blogPosts) => {
			console.log(blogPosts)
		}
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