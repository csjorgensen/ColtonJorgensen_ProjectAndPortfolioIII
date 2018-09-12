
//page title
document.querySelector('#gallery h2').innerHTML = "DJ Colton "+"<strong>Jorgensen</strong>";

//ajax call the json file
const ImgGallery = new XMLHttpRequest(),
	  
	  //assigning next and previous buttons
	   prevBtn = document.querySelectorAll('#gallery .pagination li')[0];
	   nextBtn = document.querySelectorAll('#gallery .pagination li')[1];

//put the images in an array 
let images = [],
	 currentIndex = 0;

//assigning which imagefile name and description
const updateImage = ({ description, imageFile, imgName }) => {
	if (!description || !imageFile || !imgName) {
		return false;
	}

	document.querySelector('#gallery img').src = imageFile;
	document.querySelector('#gallery article h3').innerHTML = imgName;
	document.querySelectorAll('#gallery article p')[1].innerHTML = description;
};

//parsing json
const initGallery = () => {
	images = JSON.parse(ImgGallery.responseText).imgGal;
	
	updateImage(images[currentIndex]);

	//event listeners
	prevBtn.addEventListener('click', () => {
		currentIndex = --currentIndex < 0 ? (images.length - 1) : currentIndex;
		updateImage(images[currentIndex]);
	}, false);

	nextBtn.addEventListener('click', () => {
		currentIndex = ++currentIndex > (images.length - 1) ? 0 : currentIndex;
		updateImage(images[currentIndex]);
	}, false);
};

//get the json
ImgGallery.open('GET', 'https://csjorgensen.github.io/ColtonJorgensen_ProjectAndPortfolioIII/ColtonJorgensen_Gallery/imgGalleryPhotos.json', false);

ImgGallery.send();

ImgGallery.status === 200 && initGallery();


