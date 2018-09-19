//page title

var contactSheet = document.querySelector('#form');
var submit = document.querySelector('[type=submit]');




document.querySelector('h2').innerHTML = "CONTACT " + "<strong>DJ COLTON JORGENSEN</strong>";
document.body.style.backgroundImage = "url('images/Enter.jpg')";
document.querySelector('p').innerHTML = "DJ Colton Jorgensen started playing back in 2001 in San Clemente California.  From there he aquired a residency at the Boom Boom Room in Laguna Beach.  Other Venues include: Montage, Long Beach Pride, San Diego Pride, L.A. Entertainment Center, The Mayan.";

document.querySelector('#name').placeholder = "First and Last Name";
document.querySelector('#email').placeholder = "Email";
document.querySelector('#phone').placeholder = "Phone Number/SMS";
document.querySelector('#message').placeholder = "Comment";








function validateForm(event) {
	event.preventDefault();


	var form = document.querySelection('#contactSheet');
    var submit = document.querySelector('[type=submit]');
	var inputs = document.querySelectorAll.innerHTML;
	var valid = true;
	for (var i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			valid = false;
			submit.disabled=true;
			
		}

		if (valid == true) {
			var submit = form.querySelector('[type=submit]');
			submit.disabled = false;
		}
	}



function validateRequired(event) {
	event.preventDefault();
	var target = event.target;
	var parent = target.parentElement;
	var error = '<label class="error">This field is required</label>';

	if (!target.value.length) {
		if (!parent.querySelector('.error')) {
			parent.insertAdjacentHTML('beforeend', error);

		} else {

			parent.removeChild(parent.querySelector('.error'));
		}
	}


	var requiredFields = contactSheet.querySelectorAll('.required');
	for (var i = 0; i < requiredFields.length; i++) {
		requiredFields[i].addEventListener('input', validateForm);
		requiredFields[i].addEventListener('blur', validateRequired);
	}

	var email = document.getElementById('email');

	email.addEventListener('input', function (event) {
		if (email.validity.typeMismatch) {
			email.setCustomValidity('error');
		} else {
			email.setCustomValidity('');
		}
	});

	function send(event) {

		event.preventDefault();
		var form = document.querySelector('conatctSheet');
		var errorMessage = '<p>THANK YOU</p><p>Keep on Spinning!</p>';

		var target = event.target;
		var required = target.classList.contains('.required');
		if (required === false) {
			form.innerHTML = errorMessage;


		}
	}

	const emailField = document.getElementById('email');

	emailField.addEventListener('keyup', function (event) {
		isValidEmail = emailField.checkValidity();

		if (isValidEmail) {
			submit.disabled === false;
		} else {
			submit.disabled === true;
		}
	});


}


	submit.addEventListener('click', send);
}
