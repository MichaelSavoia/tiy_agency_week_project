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
			var boats = data.boats;

			var boatListing = new Vue({
				el: '#boatListing',
				data: {
					boats: boats
				}
			});
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