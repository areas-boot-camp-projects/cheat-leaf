// Save the token to local storage.
function saveTokenToLocalStorage(token) {
	localStorage.setItem("token", token)
	window.location.assign("/")
}

// Delete the token from local storage.
function deleteTokenFromLocalStorage() {
	localStorage.removeItem("token")
	window.location.assign("/")
}

module.exports = {
	saveTokenToLocalStorage,
	deleteTokenFromLocalStorage,
}
