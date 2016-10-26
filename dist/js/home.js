'use strict';

$.ajax({
	url: "https://tiyagencyweek.herokuapp.com/blogs",
	success: function success(result) {
		console.log(result);
		var blogArray = result.blogs;
		console.log(blogArray);

		$('#blogTitle1').append('\n\t\t\t' + blogArray[0].title + '\n\t\t');

		$('#blogText1').append('\n\t\t\t' + blogArray[0].text + '\n\t\t');

		$('#blogTitle2').append('\n\t\t\t' + blogArray[1].title + '\n\t\t');

		$('#blogText2').append('\n\t\t\t' + blogArray[1].text + '\n\t\t');

		$('#blogTitle3').append('\n\t\t\t' + blogArray[2].title + '\n\t\t');

		$('#blogText3').append('\n\t\t\t' + blogArray[2].text + '\n\t\t');
	}
});