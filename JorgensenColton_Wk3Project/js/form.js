var form = document.querySelector('form');


document.querySelector('h2').innerHTML = "CONTACT " + "<strong>DJ COLTON JORGENSEN</strong>";
document.body.style.backgroundImage = "url('images/Enter.jpg')";
document.querySelector('p').innerHTML = "DJ Colton Jorgensen started playing back in 2001 in San Clemente California.  From there he aquired a residency at the Boom Boom Room in Laguna Beach.  Other Venues include: Montage, Long Beach Pride, San Diego Pride, L.A. Entertainment Center, The Mayan.";

document.querySelector('#name').placeholder = "First and Last Name";
document.querySelector('#email').placeholder = "Email";
document.querySelector('#phone').placeholder = "Phone Number/SMS";
document.querySelector('#message').placeholder = "Comment";


function validateRequired(event) {
	"use strict";
	
	var target = event.target;
	var parent = target.parentElement;
	var error = '<label class="error">This field is required</label>';

	if (!target.value.length) {
		if (!parent.querySelector('.required')) {
			parent.insertAdjacentHTML('beforeend', error);
		

		} else {

			parent.removeChild(parent.querySelector('.error'));
			submit.disabled=false;
		}
	}
	

}

	
var requiredFields = form.querySelectorAll('.required');
for (var j = 0; j < requiredFields.length; j++) {

		requiredFields[j].addEventListener('blur', validateRequired);
	
}


	
		
	function send(event) {
"use strict";
		
		event.preventDefault();
		
		var form = document.querySelector('form');
		var submitMessage = '<p>THANK YOU...Keep on Spinning!</p>';

		var target = event.target;
		var disabled = target.classList.contains('disabled');
		if (disabled === false) {
			form.innerHTML = submitMessage;
		}
	}






var submit = form.querySelector('[type=submit]');


submit.addEventListener('click', send);





	
	