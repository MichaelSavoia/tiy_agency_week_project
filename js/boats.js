$(document).ready(function()
{

	var Boats = (function()
	{

		function getBoatListing()
		{
			$.ajax({
				url: 'https://tiyagencyweek.herokuapp.com/boats',
				success: (resp) => {
					displayBoats(resp)
				}
			});
		}

		function displayBoats(data)
		{
			let boats = data.boats;
			let boatElement = '';

			boats.forEach(function(boat)
			{
				boatElement +=
					`<div class="col-md-12">
						<div class="boat">
							<img class="img-responsive boat-image" src="http://media.channelblade.com/boat_graphics/dealers/7061/digi56284260_l.jpg" alt="boat">
							<div class="boat-details">
								<h5 class="title">Name:</h5>
								<h3 class="name">2010 Sun Tracker</h3>
								<h5 class="title">Price:</h5>
								<h4 class="price">$37,188</h4>
								<h5 class="title">Description:</h5>
								<p class="description">
									One of the best boats there is. Make sure that you get this boat today. 
									Its on sale. Includes everything you need!
								</p>
							</div>
						</div>
					</div>`;
			});

			$('#boatListing').html(boatElement);
		}

		return {
			getBoatListing: getBoatListing
		}

	})();

	Boats.getBoatListing();

});