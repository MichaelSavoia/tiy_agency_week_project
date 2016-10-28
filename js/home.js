$(document).ready(function(){


	var viewBlog = (function()
	{

		function init()
		{
			callBlogAPI()
		}

		function callBlogAPI()
		{
			$.ajax({
				method: 'GET',
				headers: {"X_CSRF_TOKEN": "M44ASR0FL0PJH3OLJ5RC"},
				url: 'https://tiyagencyweek.herokuapp.com/blogs/',
				success: (response) =>{
					displayBlogs(response)
				}
			});
		}

		function expandPost () {
			$('article').readmore( {
				speed: 60,
				collaspedHeight: 200,
				embedCSS: true,
				moreLink: '<a class="readMore" href="#">Read more</a>',
				lessLink: '<a class="readMore" href="#">Close</a>'
			})

		}


		function displayBlogs(data)
		{
			let $blogContainer = $('.blogHere')
			let blogs = data.blogs
			let blogElement = ""

			let recentThree = _.take(blogs, 3)

			recentThree.forEach(function(blog){
				let blogPostTime = moment(blog.posted).format('MMMM DD, YYYY')

				blogElement +=
				`
				<div class="blog">
					<article>
						<h3>${blog.title}</h2>
						<h4 class="about">By Jake Boyles - Posted on ${blogPostTime}</h4>
						<h4>${blog.description}</h4>
					</article>
				</div>
				`
			});

			$blogContainer.html(blogElement)
			expandPost();

			console.log(blogElement)
		}

		return{
		init: init
		}

	})();

	viewBlog.init()

});