'use strict';

$(document).ready(function () {

	// --------------------------------------------------
	// Login functionality
	// --------------------------------------------------
	var LoginModal = function () {

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
					if (typeof resp.token !== 'undefined') {
						localStorage.setItem('token', resp.token);
						window.location.href = 'admin.html';
					} else {
						alert(resp.error);
					}
				}
			});
		}

		// --------------------------------------------------
		// Make visible the following: 
		// --------------------------------------------------
		return {
			init: init
		};
	}();

	// Login form submit handler
	$('#loginForm').on('submit', LoginModal.init);
});