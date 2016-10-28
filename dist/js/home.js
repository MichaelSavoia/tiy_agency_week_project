"use strict";

$(document).ready(function () {

	var viewBlog = function () {

		function init() {
			callBlogAPI();
		}

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

		function expandPost() {
			$('article').readmore({
				speed: 60,
				collaspedHeight: 200,
				embedCSS: true,
				moreLink: '<a class="readMore" href="#">Read more</a>',
				lessLink: '<a class="readMore" href="#">Close</a>'
			});
		}

		function displayBlogs(data) {
			var $blogContainer = $('.blogHere');
			var blogs = data.blogs;
			var blogElement = "";

			var recentThree = _.take(blogs, 3);

			recentThree.forEach(function (blog) {
				var blogPostTime = moment(blog.posted).format('MMMM DD, YYYY');

				blogElement += "\n\t\t\t\t<div class=\"blog\">\n\t\t\t\t\t<article>\n\t\t\t\t\t\t<h3>" + blog.title + "</h2>\n\t\t\t\t\t\t<h4 class=\"about\">By Jake Boyles - Posted on " + blogPostTime + "</h4>\n\t\t\t\t\t\t<h4>" + blog.description + "</h4>\n\t\t\t\t\t</article>\n\t\t\t\t</div>\n\t\t\t\t";
			});

			$blogContainer.html(blogElement);
			expandPost();

			console.log(blogElement);
		}

		return {
			init: init
		};
	}();

	viewBlog.init();
});