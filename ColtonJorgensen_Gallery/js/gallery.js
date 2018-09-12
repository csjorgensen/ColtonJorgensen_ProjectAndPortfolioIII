

document.querySelector('#gallery h2').innerHTML = "DJ Colton "+"<strong>Jorgensen</strong>";

const ImgGallery = new XMLHttpRequest(),
	   prevBtn = document.querySelectorAll('#gallery .pagination li')[0];
	   nextBtn = document.querySelectorAll('#gallery .pagination li')[1];

 let images = [],
	 currentIndex = 0;

const updateImage = ({ description, imageFile, imgName }) => {
	if (!description || !imageFile || !imgName) {
		return false;
	}

	document.querySelector('#gallery img').src = imageFile;
	document.querySelector('#gallery article h3').innerHTML = imgName;
	document.querySelectorAll('#gallery article p')[1].innerHTML = description;
};

const initGallery = () => {
	images = JSON.parse(ImgGallery.responseText).imgGal;
	
	updateImage(images[currentIndex]);

	prevBtn.addEventListener('click', () => {
		currentIndex = --currentIndex < 0 ? (images.length - 1) : currentIndex;
		updateImage(images[currentIndex]);
	}, false);

	nextBtn.addEventListener('click', () => {
		currentIndex = ++currentIndex > (images.length - 1) ? 0 : currentIndex;
		updateImage(images[currentIndex]);
	}, false);
};

ImgGallery.open('GET', 'https://csjorgensen.github.io/ColtonJorgensen_ProjectAndPortfolioIII/ColtonJorgensen_Gallery/imgGalleryPhotos.json', false);

ImgGallery.send();

ImgGallery.status === 200 && initGallery();


