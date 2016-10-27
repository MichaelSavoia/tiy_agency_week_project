$(document).ready(function() {

	// --------------------------------------------------
	// Build Blog Page
	// --------------------------------------------------
	var viewBlog = (function()
	{

		// --------------------------------------------------
		// Initialize Module
		// --------------------------------------------------
		function init() 
		{
			callBlogAPI()
		}
		

		// --------------------------------------------------
		// Make API call to get back blog data
		// --------------------------------------------------
		function callBlogAPI()
		{
			$.ajax({
				method: 'GET',
				headers: {"X_CSRF_TOKEN": "M44ASR0FL0PJH3OLJ5RC"},
				url: 'https://tiyagencyweek.herokuapp.com/blogs/',
				success: (response) => {
					displayBlogs(response)
				}
			});
		}
		
		// --------------------------------------------------
		// Expand Blog Post 
		// --------------------------------------------------
		function expandPost () {
			$('article').readmore( {
				speed: 60,
				collaspedHeight: 200,
				embedCSS: true
			})

		}

		// --------------------------------------------------
		// Build HTML Element for blog listings
		// --------------------------------------------------
		function displayBlogs(data)
		{
			let $blogContainer = $('#blogContainer')
			let blogs = data.blogs
			let blogElement = ''

			blogs.forEach(function (blog) {
				let blogPostTime = moment(blog.posted).format('MMMM DD, YYYY')

				blogElement +=
				`
				<div class="row">
					<div class="col-xs-12 blogPost">	
						<article>
						<h2 class="blogTitle">${blog.title}</h2>
						<p class="authorName">By Jake Boyles - Posted on ${blogPostTime}</p>
						<p>${blog.description}</p>
						</article>
					</div>
				</div
				`
			});

			$blogContainer.html(blogElement)
			expandPost();
		}

		return {
			init: init
		}

	})();

	viewBlog.init();

});