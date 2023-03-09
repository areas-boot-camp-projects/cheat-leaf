// React.
import React, { useState } from "react"

// API.
import { useLazyQuery } from "@apollo/client"
import { QUERY_SEARCH_LEAFS } from "../gql/queries"

// Component.
export default function SearchBar() {
	// Set the search term initial state.
	const [searchTerm, setSearchTerm] = useState("")

	// Query.
	const [searchLeafs, { loading, data }] = useLazyQuery(QUERY_SEARCH_LEAFS, {
		variables: { searchTerm: searchTerm },
	})

	// Save the leaves (or an empty object if there’s nothing).
	const leafs = data?.searchLeafs || []

	// Submit the search term as the user types.
	async function submitSearchTerm(e) {
		setSearchTerm(e.target.value)
		searchLeafs()
	}

	// Component.
	return (
		<div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", }}>
			
			<input
				className="rounded-pill search-bar"
				type="text"
				placeholder="Search"
				style={{ width: "300px", color: "#d4cbb2" }}
				onChange={e => submitSearchTerm(e)}
			/>

			<ul>
				{leafs.map(leaf => (
					<li key={leaf._id}>
						<p>{leaf._id}</p>
						<p>{leaf.title}</p>
						<p>{leaf.content}</p>
					</li>
				))}
			</ul>

		</div>
	)
}