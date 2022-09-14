var table = document.getElementById("table");

const api_url = "./select-api.php";

async function selectAPI(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	createTable(data);
}

// Calling that async function
selectAPI(api_url);

function createTable(data) {
	for(let i = 0; i < data.length; i++){
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = data[i].full_name;
        var cell = row.insertCell();
        cell.innerHTML = data[i].email;
        var cell = row.insertCell();
        cell.innerHTML = data[i].phone_number;
        var cell = row.insertCell();
        cell.innerHTML = data[i].message;
    }
}
