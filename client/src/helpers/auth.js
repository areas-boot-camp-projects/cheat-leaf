import decode from "jwt-decode"

// Save the token to local storage.
export function saveTokenToLocalStorage(token) {
	localStorage.setItem("token", token)
	window.location.assign("/")
}

// Get the token from local storage and decode it.
export function getTokenFromLocalStorage() {
	return localStorage.getItem("token")
}

// Get the token from local storage and decode it.
export function decodeToken(token) {
	return decode(token)	
}


// Delete the token from local storage.
export function deleteTokenFromLocalStorage() {
	localStorage.removeItem("token")
	window.location.assign("/")
}
