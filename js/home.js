$.ajax({
	url:"https://tiyagencyweek.herokuapp.com/blogs",
	success: function(result) {
		console.log(result);
		var blogArray = result.blogs;
		console.log(blogArray);

		$('#blogTitle1').append(`
			${blogArray[0].title}
		`)

		$('#blogText1').append(`
			${blogArray[0].text}
		`)

		$('#blogTitle2').append(`
			${blogArray[1].title}
		`)

		$('#blogText2').append(`
			${blogArray[1].text}
		`)

		$('#blogTitle3').append(`
			${blogArray[2].title}
		`)

		$('#blogText3').append(`
			${blogArray[2].text}
		`)
	}
})