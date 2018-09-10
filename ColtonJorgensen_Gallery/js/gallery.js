var imgGallery = new XMLHttpRequest();

	
var data = JSON.parse(imgGallery.responseText);
	
	var imagePlace = document.querySelector('#gallery');
	if(imagePlace){
		var imgGal = '';
		for (var i= 0; i<data.imgGal.length;i++){
			imgGal += '<article>';
			imgGal += '<p><img src="' + data.imgGal[i].imageFile+'"alt"' +data.imgGal[i].imageFile+'"></p>';
			imgGal += '<h3 class="h3">'+data.imgGal[i].imgName+'</h3>';
			
			imgGal += '<p>'+data.imgGal[i].description+'</p>';
			imgGal += '</article>';	
		}
		 imagePlace.querySelector('h2').insertAdjacentHTML('afterend', imgGal);
	}


function slideImage(event){
	var image = event.target.src;
	var parent = event.target.parentElement;
	var bigImage = document.querySelector('#gallery img');
	
	
	bigImage.src = image;
	
	document.querySelector("#gallery.active").classList.remove("active");
	parent.className = 'active';


function slideImage(event){
	var image = event.target.src;
	var parent = event.target.parentElement;
	var bigImage = document.querySelector('#gallery img');
	
	var bigSlideImage = document.querySelectorAll('pagination img');
	for (var i=0; i < bigImage.length; i++){
		
		bigImage[i].addEventListener('click',slideImage);
	}

function slideImage(event){
	var image = event.target.src;
	var parent = event.target.parentElement;
	var bigImage = document.querySelector('#gallery img');

	bigImage.src = image;
	
	document.querySelector("#gallery.active").classList.remove("active");
	parent.className='active';
}
	var bigImage;
	document.querySelectorAll('pagination ul');
	var activeIndex;
	var activeListItem;
	for (var i=0; i<bigImage.length; i++){
		if(bigImage[i].imageName=='active'){
			activeIndex = i;
			activeListItem = i + 1;
			
		}}
	
	
		if (activeIndex >=1){
			
			var nextIndex  = 5;
			var nextListItem = 6;
		}else{var nextIndex = activeIndex-1;
			  var nextListItem = activeListItem -1;
		}
}}
	
	var activeIndex = 1;
showDivs(activeIndex);

function imageSlide(n) {
    showDivs(activeIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("gallery");
    if (n > x.length) {activeIndex = 1} 
    if (n < 1) {activeIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[activeIndex-1].style.display = "block"; 
}


imgGallery.open('GET', 'https://csjorgensen.github.io/ColtonJorgensen_ProjectAndPortfolioIII/ColtonJorgensen_Gallery/imgGalleryPhotos.json',true);
imgGallery.send(null);

// Change via Previous Button
function previousImage(event) {
	
	// Find Current Image
	var thumbnails = document.querySelectorAll('.pagination li');
	var activeIndex; // js (starts /w 0)
	var activeListItem; // css (starts /w 1)
	for (var i=0; i < thumbnails.length; i++) {
		if (thumbnails[i].className == 'active') {
			activeIndex = i;
			activeListItem = i + 1;
		}
	}
}


var next = document.querySelector('.pagination li:last-of-type button');
next.addEventListener("click", nextImage);

var previous = document.querySelector('.pagination li:first-of-type button');
previous.addEventListener("click", previousImage);

