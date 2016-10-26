$(document).ready(function()
{

	// --------------------------------------------------
	// Build boat listing content
	// --------------------------------------------------
	var Boats = (function()
	{



		// --------------------------------------------------
		// Initialize Module
		// --------------------------------------------------
		function init()
		{
			getBoatListing();
		}



		// --------------------------------------------------
		// Make API call to get back boat data
		// --------------------------------------------------
		function getBoatListing()
		{
			$.ajax({
				url: 'https://tiyagencyweek.herokuapp.com/boats',
				success: (resp) => {
					displayBoats(resp);
				}
			});
		}



		// --------------------------------------------------
		// Build HTML Element for boat listings
		// --------------------------------------------------
		function displayBoats(data)
		{
			let $boatListing = $('#boatListing');
			let boats = data.boats;
			let boatElement = '';

			boats.forEach(function(boat)
			{
				let price = accounting.formatMoney(boat.price);

				boatElement +=
					`<div class="col-xs-12">
						<div class="boat">
							<img class="img-responsive boat-image" src="${boat.picture}" alt="${boat.name}">
							<div class="boat-details">
								<h5 class="title">Name:</h5>
								<h2 class="name">${boat.name}</h2>
								<h5 class="title">Price:</h5>
								<h4 class="price">${price}</h4>
								<h5 class="title">Description:</h5>
								<p class="description">${boat.description}</p>
							</div>
						</div>
					</div>`;
			});

			$boatListing.html(boatElement);
		}



		// --------------------------------------------------
		// Make public the following:
		// --------------------------------------------------
		return {
			init: init
		}



	})();



	// Initialize boat listing
	Boats.init();

});