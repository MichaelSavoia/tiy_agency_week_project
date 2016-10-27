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
		// Make API call to get back boat data
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
		// Build HTML Element for boat listings
		// --------------------------------------------------
		function displayBlogs(data) {

			var $blogContainer = $('#blogContainer');
			var blogs = data.blogs;
			var blogElement = '';

			blogs.forEach(function (blog) {
				var blogPostTime = moment(blog.posted).format('MMMM DD, YYYY');

				blogElement += "\n\t\t\t\t<div class=\"row\" id=\"blogPost\">\n\t\t\t\t\t<div class=\"col-xs-12 contentRow\">\n\t\t\t\t\t\t<div class=\"blogPost\">\n\t\t\t\t\t\t\t<div class=\"blogContent\">\n\t\t\t\t\t\t\t\t<h2 class=\"blogTitle\">" + blog.title + "</h2>\n\t\t\t\t\t\t\t\t<p class=\"authorName\">By Jake Boyles - Posted on " + blogPostTime + "</p>\n\t\t\t\t\t\t\t\t<article>" + blog.description + "</article>\n\t\t\t\t\t\t\t\t<p class=\"readMore\">Read More</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t<div>\t\n\t\t\t\t</div\n\t\t\t\t";
			});

			$blogContainer.html(blogElement);
		}

		// function expandBlogContent(data)
		// {

		// }

		return {
			init: init
		};
	}();

	viewBlog.init();

	// $('.readMore').on('click', viewBlog.init);
});