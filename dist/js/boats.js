'use strict';

$(document).ready(function () {

	var Boats = function () {

		function getBoatListing() {
			$.ajax({
				url: 'https://tiyagencyweek.herokuapp.com/boats',
				success: function success(resp) {
					displayBoats(resp);
				}
			});
		}

		function displayBoats(data) {
			var boats = data.boats;
			var boatElement = '';

			boats.forEach(function (boat) {
				boatElement += '<div class="col-md-12">\n\t\t\t\t\t\t<div class="boat">\n\t\t\t\t\t\t\t<img class="img-responsive boat-image" src="http://media.channelblade.com/boat_graphics/dealers/7061/digi56284260_l.jpg" alt="boat">\n\t\t\t\t\t\t\t<div class="boat-details">\n\t\t\t\t\t\t\t\t<h5 class="title">Name:</h5>\n\t\t\t\t\t\t\t\t<h3 class="name">2010 Sun Tracker</h3>\n\t\t\t\t\t\t\t\t<h5 class="title">Price:</h5>\n\t\t\t\t\t\t\t\t<h4 class="price">$37,188</h4>\n\t\t\t\t\t\t\t\t<h5 class="title">Description:</h5>\n\t\t\t\t\t\t\t\t<p class="description">\n\t\t\t\t\t\t\t\t\tOne of the best boats there is. Make sure that you get this boat today. \n\t\t\t\t\t\t\t\t\tIts on sale. Includes everything you need!\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
			});

			$('#boatListing').html(boatElement);
		}

		return {
			getBoatListing: getBoatListing
		};
	}();

	Boats.getBoatListing();
});