$(document).ready(function() {

	// Gets contents from tinyMCE Editor
	//tinyMCE.get('blogTextArea').getContent()

	var CreateBlog = (function()
	{

		function init(e)
		{
			e.preventDefault();

			getBlogContents();
		}

		function getBlogContents()
		{
			let blogTitle = $('#blogTitle').val();
			let blogContent = tinyMCE.get('blogTextArea').getContent();

			let isValidData = validateInputs(blogTitle, blogContent);

			if(isValidData)
			{
				postData(blogTitle, blogContent);
			}
		}

		function validateInputs(title, content)
		{
			title = _.trim(title);
			content = _.trim(content);

			if (title === '' || typeof title === 'undefined' ||
				content === '' || typeof content === 'undefined' )
			{
				// No, warn the user and return false
				alert('Please check you\'ve entered a title and content for your blog and try again.');
				return false;
			}

			return true;
		}

		function postData(title, content)
		{
			console.log(title);
			console.log(content);

			$.ajax({
				method: 'POST',
				headers: {"X_CSRF_TOKEN":localStorage.getItem('token')},
				data: {title: title, description: content},		
				url: 'https://tiyagencyweek.herokuapp.com/blogs/create',
				success: () => {
					alert('Your new blog post has been saved');
					window.location.href="blog.html";	
				},
				error: function(err) { console.log("Error! Message: " + e.responseText); },
  				complete: function() { console.log("All done!"); }
			});
		}

		function checkUserLoginStatus()
		{
			if(!localStorage.getItem('token'))
			{
				window.location.href="index.html";
			}
		}

		return {
			init: init,
			checkUserLogin: checkUserLoginStatus,
		}

	})();



	CreateBlog.checkUserLogin();

	$('#formBlog').on('submit', CreateBlog.init);

});