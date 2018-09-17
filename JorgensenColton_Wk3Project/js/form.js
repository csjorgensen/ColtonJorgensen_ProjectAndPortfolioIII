//page title
document.querySelector('h2').innerHTML = "CONTACT "+"<strong>DJ COLTON JORGENSEN</strong>";
document.body.style.backgroundImage = "url('images/Enter.jpg')";
document.querySelector('p').innerHTML = "DJ Colton Jorgensen started playing back in 2001 in San Clemente California.  From there he aquired a residency at the Boom Boom Room in Laguna Beach.  Other Venues include: Montage, Long Beach Pride, San Diego Pride, L.A. Entertainment Center, The Mayan.";

 document.querySelector('#name').placeholder = "First and Last Name";
document.querySelector('#email').placeholder = "Email";
document.querySelector('#phone').placeholder = "Phone Number/SMS";
document.querySelector('#message').placeholder = "Comment";


var contactSheet = document.querySelector('#form'); 


function validateContactSheet(event)
{
	
	
	var inputs = document.querySelectorAll('[type=text]');
	var valid = true;
	for (var i=0;i<inputs.length;i++){
		if(!inputs[i].value){valid == false;}
		
		if(valid == true){
			var submit =contactSheet.querySelector('[type=submit]');
			submit.removeAttribute('class');
		}
	}}
	
	
function validateRequired(event){
	event.preventDefault();
	var target = event.target;
	var parent = target.parentElement;
	var error = '<label class="error">This field is required</label>';
	
	if(!target.value.length){
		if(!parent.querySelector('.error')){
			parent.insertAdjacentHTML('beforeend', error);
			
		}
		else{
			
			parent.removeChild(parent.querySelector('.error'));
		}
	}
	

var requiredFields = contactSheet.querySelectorAll('#required'); 
for (var i=0;i<requiredFields.length; i++){
	requiredFields[i].addEventListener('input',validateContactSheet);
requiredFields[i].addEventListener('blur',validateRequired);}

var email = document.getElementById('email');

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('.error');
  } else {
    email.setCustomValidity('');
  }
});

function send(event){
	event.preventDefault();
	var form = document.querySelector('conatctSheet');
	var message='<h2>THANK YOU</h2><p>Keep on Spinning!</p>';
	
	var target = event.target;
	var disabled = target.classList.contains('.disabled');
	if (disabled===false){
		contactSheet.innerHTML = message;
		
	
	}}

	const emailField = document.getElementById('email');
	
	email.addEventListener('keyup', function (event) {
  isValidEmail = email.checkValidity();
  
  if ( isValidEmail ) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

	
	
	
var submit = contactSheet.querySelector('[type=submit]');
submit.addEventListener('click',send);
}