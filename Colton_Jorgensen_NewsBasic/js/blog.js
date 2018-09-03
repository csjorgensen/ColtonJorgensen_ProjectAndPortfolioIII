document.querySelector("#blog h2").innerHTML = "New Text";


var musicPage = new XMLHttpRequest();
musicPage.onload = function(){
	
	var data  = JSON.parse(musicPage.responseText);
	
	var placementPlace = document.querySelector('#mixes');
	if(placementPlace){
		var mixes = '';
		for (var i= 0; i<data.mixes.length;i++){
			mixes += '<article>';
			mixes += '<p class="thumbnail"><img src="' + data.mixes[i].imageFile+'"alt"' +data.mixes[i].media+'"></p>';
			mixes += '<h2 class="h2">'+data.mixes[i].mixName+'"></h2>';
			mixes += '</article>';
			
			
		}
		 placementPlace.querySelector('h2').insertAdjacentHTML('afterend', mixes);
	}
	
}


musicPage.open('GET', 'https://ColtonJorgensen_ProjectAndPortfolioIII/zColton_Jorgensen_NewsBasic/mixDatabase.json',true);


