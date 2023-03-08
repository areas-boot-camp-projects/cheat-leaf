// React.
import React from "react"

// Component.
export default function SearchBar() {
	return (
		<div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", }}>
			<input
				className="rounded-pill search-bar"
				type="text"
				placeholder="Search"
				style={{ width: "300px", color: "#d4cbb2" }}
			/>
		</div>
	)
}