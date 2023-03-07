// Save the token to local storage.
function saveTokenToLocalStorage(token) {
	localStorage.setItem("token", token)
	window.location.assign("/")
}

module.exports = {
	saveTokenToLocalStorage,
}
