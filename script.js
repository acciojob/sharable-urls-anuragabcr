// your code here
function onSubmit(event) {
	event.preventDefault()
	let name = document.getElementById("name").value
	let year = document.getElementById("year").value
	let url = document.getElementById("url")
	url.innerHTML += `?name=${name}&year=${year}`
}