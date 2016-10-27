"use strict";

$(document).ready(function () {

	// --------------------------------------------------
	// Build Blog Page
	// --------------------------------------------------
	var viewBlog = function () {

		// --------------------------------------------------
		// Initialize Module
		// --------------------------------------------------
		function init() {
			callBlogAPI();
		}

		// --------------------------------------------------
		// Make API call to get back blog data
		// --------------------------------------------------
		function callBlogAPI() {
			$.ajax({
				method: 'GET',
				headers: { "X_CSRF_TOKEN": "M44ASR0FL0PJH3OLJ5RC" },
				url: 'https://tiyagencyweek.herokuapp.com/blogs/',
				success: function success(response) {
					displayBlogs(response);
				}
			});
		}

		// --------------------------------------------------
		// Shortern Blog Posting 
		// --------------------------------------------------
		function shorterPost(data) {
			if (data.length > 400) {
				return data.substring(0, 400);
			}
		}

		// --------------------------------------------------
		// Expand Blog Post 
		// --------------------------------------------------
		function readMore() {
			alert("testing");
		}

		// --------------------------------------------------
		// Build HTML Element for blog listings
		// --------------------------------------------------
		function displayBlogs(data) {
			var $blogContainer = $('#blogContainer');
			var blogs = data.blogs;
			var blogElement = '';

			blogs.forEach(function (blog) {
				var blogPostTime = moment(blog.posted).format('MMMM DD, YYYY');
				var blogContent = shorterPost(blog.description);

				blogElement += "\n\t\t\t\t<div class=\"row\" id=\"blogPost\">\n\t\t\t\t\t<div class=\"col-xs-12 contentRow\">\n\t\t\t\t\t\t<div class=\"blogPost\">\n\t\t\t\t\t\t\t<div class=\"blogContent\">\n\t\t\t\t\t\t\t\t<h2 class=\"blogTitle\">" + blog.title + "</h2>\n\t\t\t\t\t\t\t\t<p class=\"authorName\">By Jake Boyles - Posted on " + blogPostTime + "</p>\n\t\t\t\t\t\t\t\t<article>" + blogContent + "</article>\n\t\t\t\t\t\t\t\t<button class=\"readMore\">Read More</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t<div>\t\n\t\t\t\t</div\n\t\t\t\t";
				$('.readMore').on('click', viewBlog.readMore);
			});

			$blogContainer.html(blogElement);
		}

		return {
			init: init
		};
	}();

	viewBlog.init();
});