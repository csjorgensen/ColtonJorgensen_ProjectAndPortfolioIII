var form = document.querySelector('#contactSheet');


document.querySelector('h2').innerHTML = "CONTACT " + "<strong>DJ COLTON JORGENSEN</strong>";
document.body.style.backgroundImage = "url('images/Enter.jpg')";
document.querySelector('p').innerHTML = "DJ Colton Jorgensen started playing back in 2001 in San Clemente California.  From there he aquired a residency at the Boom Boom Room in Laguna Beach.  Other Venues include: Montage, Long Beach Pride, San Diego Pride, L.A. Entertainment Center, The Mayan.";

document.querySelector('#name').placeholder = "First and Last Name";
document.querySelector('#email').placeholder = "Email";
document.querySelector('#phone').placeholder = "Phone Number/SMS";
document.querySelector('#message').placeholder = "Comment";


			
function validateRequired(event) {
	"use strict";
	
	var target = document.getElementById('name');
	var parent = target.parentElement;
	var error = '<label class="error">Please complete all fields.</label>';

	if (!target.value.length) {
		if (parent.querySelector('.required')) {
			parent.insertAdjacentHTML('beforeend', error);
		

		} else {

			parent.removeChild(parent.querySelector('.error'));
		
		}
	}
	
}

function validateEmail(event){
	"use strict";
	var email = document.querySelector('#email');
	var parent = email.parentElement;
	var errorEmail='<label class="error">Please enter a valid email address</label>';
 var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(emailFormat))
  {
    return (true);
	 
	
}else{
	
	parent.insertAdjacentHTML('afterend', errorEmail);
}}
	
var emailCheck = form.querySelector('#email');
{
	emailCheck.addEventListener('blur', validateEmail);
}
	

function validatePhone(event){
	"use strict";
	var phone = document.querySelector('#phone');
	var parent = phone.parentElement;
	var errorPhone='<label class="error">Please enter a valid phone number</label>';
 var phoneFormat = /^\d{10}$/;
if(phone.value.match(phoneFormat))
  {
    return (true);
	 
	
}else{
	
	parent.insertAdjacentHTML('afterend', errorPhone);
}}
	
var phoneCheck = form.querySelector('#phone');
{
	phoneCheck.addEventListener('blur', validatePhone);
}


var requiredFields = form.querySelectorAll('.required');
for (var j = 0; j < requiredFields.length; j++) {

		requiredFields[j].addEventListener('blur', validateRequired);
	
	
}


	
		
	function send(event) {
"use strict";
		
		event.preventDefault();
		
		var form = document.querySelector('contactSheet');
		var submitMessage = '<p>THANK YOU...Keep on Spinning!</p>';

		var target = event.target;
		var disabled = target.classList.contains('disabled');
		if (disabled === false) {
			form.innerHTML = submitMessage;
		}
	}






var submit = form.querySelector('[type=submit]');


submit.addEventListener('click', send);