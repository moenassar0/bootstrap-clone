var table = document.getElementById("table");

const api_url = "./select-api.php";

async function selectAPI(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	show(data);
}

// Calling that async function
selectAPI(api_url);

function show(data) {
	for(let i = 0; i < data.length; i++){
        console.log(data[i].full_name);
    }
}
