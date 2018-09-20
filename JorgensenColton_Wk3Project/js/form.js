var contactSheet = document.querySelector('form');


document.querySelector('h2').innerHTML = "CONTACT " + "<strong>DJ COLTON JORGENSEN</strong>";
document.body.style.backgroundImage = "url('images/Enter.jpg')";
document.querySelector('p').innerHTML = "DJ Colton Jorgensen started playing back in 2001 in San Clemente California.  From there he aquired a residency at the Boom Boom Room in Laguna Beach.  Other Venues include: Montage, Long Beach Pride, San Diego Pride, L.A. Entertainment Center, The Mayan.";

document.querySelector('#name').placeholder = "First and Last Name";
document.querySelector('#email').placeholder = "Email";
document.querySelector('#phone').placeholder = "Phone Number/SMS";
document.querySelector('#message').placeholder = "Comment";

function validateForm(event) {
	"use strict";
	event.preventDefault();


	var form = document.querySelection('contactSheet');
    var submit = document.querySelector('[type=submit]');
	var inputs = document.querySelectorAll('required');
	var valid = true;
	for (var i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			valid = false;
			submit.disabled=true;
			
		}

		if (valid === true) {
			submit = form.querySelector('[type=submit]');
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
			submit.disabled  = true;

		} else {

			parent.removeChild(parent.querySelector('.error'));
		}
	}
}
	


	function send(event) {

		event.preventDefault();
		var form = document.querySelector('conatctSheet');
		var submitMessage = '<p>THANK YOU</p><p>Keep on Spinning!</p>';

		var target = event.target;
		var disabled = target.classList.contains('.disabled');
		if (disabled === false) {
			form.innerHTML = submitMessage;


		}
	}
	
var requiredFields = contactSheet.querySelectorAll('.required');
	for (var j = 0; j < requiredFields.length; j++) {
	
		requiredFields[j].addEventListener('blur', validateRequired);}
	submit.addEventListener('click', send);
}

var requiredFields = contactSheet.querySelectorAll('.required');
	for (var j = 0; j < requiredFields.length; j++) {
		requiredFields[j].addEventListener('input', validateForm);
		}
	



	
	