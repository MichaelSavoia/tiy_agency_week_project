'use strict';

$(document).ready(function () {

	// --------------------------------------------------
	// Build boat listing content
	// --------------------------------------------------
	var Boats = function () {

		// --------------------------------------------------
		// Initialize Module
		// --------------------------------------------------
		function init() {
			getBoatListing();
		}

		// --------------------------------------------------
		// Make API call to get back boat data
		// --------------------------------------------------
		function getBoatListing() {
			$.ajax({
				url: 'https://tiyagencyweek.herokuapp.com/boats',
				success: function success(resp) {
					displayBoats(resp);
				}
			});
		}

		// --------------------------------------------------
		// Build HTML Element for boat listings
		// --------------------------------------------------
		function displayBoats(data) {
			var $boatListing = $('#boatListing');
			var boats = data.boats;
			var boatElement = '';

			boats.forEach(function (boat) {
				var price = accounting.formatMoney(boat.price);

				boatElement += '<div class="col-xs-12">\n\t\t\t\t\t\t<div class="boat">\n\t\t\t\t\t\t\t<img class="img-responsive boat-image" src="' + boat.picture + '" alt="' + boat.name + '">\n\t\t\t\t\t\t\t<div class="boat-details">\n\t\t\t\t\t\t\t\t<h5 class="title">Name:</h5>\n\t\t\t\t\t\t\t\t<h3 class="name">' + boat.name + '</h3>\n\t\t\t\t\t\t\t\t<h5 class="title">Price:</h5>\n\t\t\t\t\t\t\t\t<h4 class="price">' + price + '</h4>\n\t\t\t\t\t\t\t\t<h5 class="title">Description:</h5>\n\t\t\t\t\t\t\t\t<p class="description">' + boat.description + '</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
			});

			$boatListing.html(boatElement);
		}

		// --------------------------------------------------
		// Make public the following:
		// --------------------------------------------------
		return {
			init: init
		};
	}();

	// Initialize boat listing
	Boats.init();
});