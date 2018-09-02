document.querySelector("#blog h2").innerHTML = "New Text";

var musicPage = new XMLHttpRequest();
musicPage.onload = function(){
	
	data = JSON.parse(musicPage.responseText);
	
	var placementPlace = document.querySelector('#media');
	if(placementPlace){
		var placements '';
		for (var i= 0; i<data.placements.length;i++){
			placements+='<article>';
			placements+='</article>';
			
			
		}
		 placementPlace.querySelector('h2').insertAdjacentHTML('afterend', placements);
	
	
}


musicPage.open('GET', 'https://ColtonJorgensen_ProjectAndPortfolioIII/Colton_Jorgensen_NewsBasic/mixDatabase.json',true);
    musicPage.sent(null);

