document.querySelector("#blog h2").innerHTML = "DJ Colton Jorgensen";


var musicPage = new XMLHttpRequest();
musicPage.onload = function(){
	
	var data  = JSON.parse(musicPage.responseText);
	
	var placementPlace = document.querySelector('#blog');
	if(placementPlace){
		var mixes = '';
		for (var i= 0; i<data.mixes.length;i++){
			mixes += '<article>';
			mixes += '<p class="thumbnail"><img src="' + data.mixes[i].imageFile+'"alt"' +data.mixes[i].media+'"></p>';
			mixes += '<h3 class="h2">'+data.mixes[i].mixName+'"></h3>';
			mixes += '</article>';
			console.log(data.mixes[1].mixName);
			
			
		}
		 placementPlace.querySelector('h2').insertAdjacentHTML('afterend', mixes);
	}
	
}


musicPage.open('GET', 'https://raw.githubusercontent.com/csjorgensen/ColtonJorgensen_ProjectAndPortfolioIII/master/Colton_Jorgensen_NewsBasic/mixDatabase.json',true);
musicPage.send("null");

