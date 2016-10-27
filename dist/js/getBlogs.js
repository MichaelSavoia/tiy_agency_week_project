"use strict";

$(document).ready(function () {

	alert(localStorage.getItem('token'));

	$.ajax({
		url: 'https://tiyagencyweek.herokuapp.com/blogs',
		headers: { "X_CSRF_TOKEN": localStorage.getItem('token') },
		success: function success(blogPosts) {
			console.log(blogPosts);
			var $blogContainer = $('#blogContainer');
			blogPosts.blogs.forEach(function (blogPost) {
				var blogPostTime = blogPost.posted;
				$blogContainer.append('\n\t\t\t\t\t<div class="row" id="blogPost">\n\t\t\t\t\t\t<div class="col-xs-12 contentRow">\n\t\t\t\t\t\t\t<div class="blogPost">\n\t\t\t\t\t\t\t\t<div class="blogContent">\n\t\t\t\t\t\t\t\t\t<h2 class="blogTitle">' + blogPost.title + '</h2>\n\t\t\t\t\t\t\t\t\t<p class="authorName">By Jake Boyles - Posted on ' + blogPostTime + '</p>\n\t\t\t\t\t\t\t\t\t<article>' + blogPost.description + '</article>\n\t\t\t\t\t\t\t\t\t<p class="readMore">Read More</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\t\n\t\t\t\t\t</div\n\t\t\t\t\t');
			});
		},
		error: function error(err) {
			console.log("Error! Message: " + e.responseText);
		},
		complete: function complete() {
			console.log("All done!");
		}
	});

	// let $article = $(`article`)
	// let $articleHtml= $article.html().toString()
	// let $articleLength = $articleHtml.length
	// console.log($articleHtml.length)


	// if ($articleLength > 400) {
	// 	let newArticle = $articleHtml.substr(0, 400)
	// 	console.log(newArticle)
	// }
});