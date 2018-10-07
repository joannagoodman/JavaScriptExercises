//AJAX Type ahead
<script>
const endpoint = '';//the address of the endpoint''

//empty array
const cities = [];

fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data))

function findMatches(wordToMAtch, cities){
	const regex = new RegExp(wordToMAtch, 'gi');
	return cities.filter(place => [
		return place.city.match(regex) || place.state.match(regex)
});

function displayMatches(){
	console.log(this.value);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
}
</script>