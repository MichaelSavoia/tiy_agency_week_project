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
		// Shortern Blog Posting 
		// --------------------------------------------------
		function shorterPost(data) 
		{
			if (data.length > 400) {
				return data.substring(0, 400)
				}
		}
		
		// --------------------------------------------------
		// Expand Blog Post 
		// --------------------------------------------------
		function readMore() 
		{
			alert("testing")
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
				let blogContent = shorterPost(blog.description)

				blogElement +=
				`
				<div class="row" id="blogPost">
					<div class="col-xs-12 contentRow">
						<div class="blogPost">
							<div class="blogContent">
								<h2 class="blogTitle">${blog.title}</h2>
								<p class="authorName">By Jake Boyles - Posted on ${blogPostTime}</p>
								<article>${blogContent}</article>
								<button class="readMore">Read More</p>
							</div>
						</div>	
					<div>	
				</div
				`
							$('.readMore').on('click', viewBlog.readMore);

			});

			$blogContainer.html(blogElement)
		}

		return {
			init: init,
		}

	})();

	viewBlog.init();

});