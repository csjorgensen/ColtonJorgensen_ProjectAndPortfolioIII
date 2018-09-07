var imgGallery = new XMLHttpRequest();
imgGallery.onload = function(){
	
var data = JSON.parse(imgGallery.responseText);
	
	var imagePlace = document.querySelector('#gallery');
	if(imagePlace){
		var imgGal = '';
		for (var i= 0; i<data.imgGal.length;i++){
			imgGal += '<article>';
			imgGal += '<p class="thumbnail"><img src="' + data.imgGal[i].imageFile+'"alt"' +data.imgGal[i].imageFile+'"></p>';
			imgGal += '<h3 class="h3">'+data.imgGal[i].imgName+'</h3>';
			
			imgGal += '<p>'+data.imgGal[i].description+'</p>';
			imgGal += '</article>';	
		}
		 imagePlace.querySelector('h2').insertAdjacentHTML('afterend', imgGal);
	}
}
imgGallery.open('GET', 'https://csjorgensen.github.io/ColtonJorgensen_ProjectAndPortfolioIII/ColtonJorgensen_Gallery/imgGalleryPhotos.json',true);
imgGallery.send(null);

