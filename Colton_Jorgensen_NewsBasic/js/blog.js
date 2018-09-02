document.querySelector("#blog h2").innerHTML = "New Text";


var musicPage = new XMLHttpRequest();
musicPage.onload = function(){
	
	var mixes = JSON.parse(musicPage.responseText);
	
	var placementPlace = document.querySelector('#mixes');
	if(placementPlace){
		var mixes '';
		for (var i= 0; i<data.mixes.length;i++){
			mixes+='<article>';
			mixes+='<p class="thumbnail"><img src="' + data.placements[i].imageFile+'"alt"' +;data.placements[i].placement+'"></p>';
			mixes+='</article>';
			
			
		}
		 placementPlace.querySelector('h2').insertAdjacentHTML('afterend', placements);
	
	
}


musicPage.open('GET', 'https://ColtonJorgensen_ProjectAndPortfolioIII/Colton_Jorgensen_NewsBasic/mixDatabase.json',true);
    musicPage.sent(null);

