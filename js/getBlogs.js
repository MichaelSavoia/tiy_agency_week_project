"use strict";

$(document).ready(function () {

	alert(localStorage.getItem('token'));

	$.ajax({
		url: 'https://tiyagencyweek.herokuapp.com/blogs',
		headers: {"X_CSRF_TOKEN": localStorage.getItem('token')},
		success: (blogPosts) => {
			console.log(blogPosts)
			let $blogContainer = $('#blogContainer')
			blogPosts.blogs.forEach(function (blogPost) {
				let blogPostTime = blogPost.posted
				$blogContainer.append(`
					<div class="row" id="blogPost">
						<div class="col-xs-12 contentRow">
							<div class="blogPost">
								<div class="blogContent">
									<h2 class="blogTitle">${blogPost.title}</h2>
									<p class="authorName">By Jake Boyles - Posted on ${blogPostTime}</p>
									<article>${blogPost.description}</article>
									<p class="readMore">Read More</p>
								</div>
							<div>	
					</div
					`)
			})
		},
		error: function(err) { console.log("Error! Message: " + e.responseText); },
  		complete: function() { console.log("All done!"); }
	})

	// let $article = $(`article`)
	// let $articleHtml= $article.html().toString()
	// let $articleLength = $articleHtml.length
	// console.log($articleHtml.length)


	// if ($articleLength > 400) {
	// 	let newArticle = $articleHtml.substr(0, 400)
	// 	console.log(newArticle)
	// }
});
	