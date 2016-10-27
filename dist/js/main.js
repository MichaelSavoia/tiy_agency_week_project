'use strict';

$(document).ready(function () {

	// --------------------------------------------------
	// Login functionality
	// --------------------------------------------------
	var Login = function () {

		// --------------------------------------------------
		// Initialize login
		// --------------------------------------------------
		function init(e) {
			// Prevent form submit
			e.preventDefault();

			// Get username & password
			var username = $('#loginUsername').val();
			var password = $('#loginPassword').val();

			// Check input validity
			var isValidData = validateLogin(username, password);

			if (isValidData) {
				// Check credentials against database
				validateCredentials(username, password);
			}
		}

		// --------------------------------------------------
		// Validate login information
		// --------------------------------------------------
		function validateLogin(username, password) {
			username = _.trim(username);
			password = _.trim(password);

			// Was something submitted?
			if (username === '' || typeof username === 'undefined' || password === '' || typeof password === 'undefined') {
				// No, warn the user and return false
				alert('Please check you\'ve entered a username and password and try again.');
				return false;
			}

			// Default to true
			return true;
		}

		// --------------------------------------------------
		// Check login credentials against database
		// --------------------------------------------------
		function validateCredentials(username, password) {
			$.ajax({
				url: 'https://tiyagencyweek.herokuapp.com/auth/login',
				method: 'POST',
				data: { username: username, password: password },
				success: function success(resp) {

					// Did a token come back?
					if (typeof resp.token !== 'undefined') {
						// Yes, save token on user's localStorage & reroute user to admin page
						localStorage.setItem('token', resp.token);
						window.location.href = 'admin.html';
					} else {
						// No, user credentials were incorrect
						alert(resp.error);
					}
				}
			});
		}

		// --------------------------------------------------
		// Check whether user is logged in / out and show appropriate link
		// --------------------------------------------------
		function checkLoginStatus() {
			// Login / Logout links
			var loginStateElement = 'Admin: <a id="loginLink" href="#" data-toggle="modal" data-target="#login-modal">Login</a>';
			var logoutStateElement = 'Admin: <a id="logoutLink" href="#">Logout</a>, <a href="admin.html">Create New Blog</a>';

			var $copyright = $('#loginStatus');

			// Is there a token for the user?
			if (localStorage.getItem('token')) {
				// Yes, show them a logout link
				$copyright.html(logoutStateElement);
			} else {
				// No, show them a login link
				$copyright.html(loginStateElement);
			}
		}

		// --------------------------------------------------
		// Logout user and return to home page
		// --------------------------------------------------
		function logout(e) {
			e.preventDefault();

			localStorage.removeItem('token');
			window.location.href = 'index.html';
		}

		// --------------------------------------------------
		// Make visible the following: 
		// --------------------------------------------------
		return {
			init: init,
			setLoginStatus: checkLoginStatus,
			logout: logout
		};
	}();

	var Weather = function () {

		function init() {
			$.simpleWeather({
				location: 'Cincinnati, OH',
				woeid: '',
				unit: 'f',
				success: function success(resp) {
					displayWeather(resp);
				},
				error: function error(_error) {
					console.log('error returned from simpleWeather API: ' + _error);
				}
			});
		}

		function displayWeather(weather) {

			var $weather = $('#weather');

			var temperature = weather.temp,
			    day = weather.forecast[0].day,
			    icon = weather.thumbnail;

			var weatherElement = '<img id="weatherIcon" class="icon" src="' + icon + '">\n\t\t\t\t <div class="weather-data">\n\t\t\t\t\t<p id="weatherDay" class="day">' + day + '</p>\n\t\t\t\t\t<p id="weatherTemperature" class="temperature">' + temperature + '&deg;</p>\n\t\t\t\t </div>';

			$weather.html(weatherElement);
		}

		return {
			init: init
		};
	}();

	// Set login status
	Login.setLoginStatus();

	// Get weather data
	Weather.init();

	// Login form submit handler
	$('#loginForm').on('submit', Login.init);

	// Logout handler
	$('body').on('click', '#logoutLink', Login.logout);
});