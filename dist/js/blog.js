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
		// Expand Blog Post 
		// --------------------------------------------------
		function expandPost() {
			$('article').readmore({
				speed: 60,
				collaspedHeight: 200,
				embedCSS: true,
				moreLink: '<a class="readMore" href="#">Read more</a>',
				lessLink: '<a class="readMore" href="#">Close</a>'
			});
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

				blogElement += "\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12 blogPost\">\t\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t<h2 class=\"blogTitle\">" + blog.title + "</h2>\n\t\t\t\t\t\t<p class=\"authorName\">By Jake Boyles - Posted on " + blogPostTime + "</p>\n\t\t\t\t\t\t<p>" + blog.description + "</p>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</div>\n\t\t\t\t</div\n\t\t\t\t";
			});

			$blogContainer.html(blogElement);
			expandPost();
		}

		return {
			init: init
		};
	}();

	viewBlog.init();
});