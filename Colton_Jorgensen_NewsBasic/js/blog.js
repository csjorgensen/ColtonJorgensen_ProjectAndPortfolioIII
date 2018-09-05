document.querySelector("#blog h2").innerHTML = "DJ Colton Jorgensen";


var xml = new XMLHttpRequest();
xml.onload = function(){
	
var data = JSON.parse(xml.responseText);
	
	var placementPlace = document.querySelector('#blog');
	if(placementPlace){
		var mixes = '';
		for (var i= 0; i<data.mixes.length;i++){
			mixes += '<article>';
			mixes += '<p class="thumbnail"><img src="' + data.mixes[i].imageFile+'"alt"' +data.mixes[i].imageFile+'"></p>';
			mixes += '<h3 class="h3">'+data.mixes[i].mixName+'</h3>';
			mixes += '<dt>Date Recorded: </dt>';
			mixes += '<dd>'+data.mixes[i].DateRecorded+'</dd>';
			mixes += '<dt>Genre: </dt>';
			mixes += '<dd>'+data.mixes[i].Genre+'</dd>';
			mixes += '<dt>Description </dt>';
			mixes += '<dd>'+data.mixes[i].description+'</dd>';
			mixes += '</article>';
		
			
			
			
		}
		 placementPlace.querySelector('h2').insertAdjacentHTML('afterend', mixes);
	}
	
}


xml.open('GET', 'https://csjorgensen.github.io/ColtonJorgensen_ProjectAndPortfolioIII/Colton_Jorgensen_NewsBasic/mixDatabase.json',true);
xml.send(null);

