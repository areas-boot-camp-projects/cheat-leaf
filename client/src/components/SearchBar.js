// React.
import React, { useState } from "react"
import { Link } from "react-router-dom"

import { Navbar, Nav, NavDropdown, Container, Form, Button, Dropdown } from 'react-bootstrap';

// API.
import { useLazyQuery } from "@apollo/client"
import { QUERY_SEARCH_LEAFS } from "../gql/queries"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

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
		<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "20px", }}>
			
			<input
				className="rounded-pill search-bar"
				type="text"
				placeholder="Search"
				style={{ width: "300px", color: "#d4cbb2" }}
				onChange={e => submitSearchTerm(e)}
			/>

			<div style={{ color: 'white', position: "absolute", marginTop: "40px" }}>
				<container style={{ position: "relative" }}>
					<ul style={{ backgroundColor: '#a69873', opacity: "95%", listStyle: "none", borderRadius: "5px", width: "75%", margin: "auto" }}>
						{leafs.map(leaf => (
							<li key={leaf._id}>
								<p style={{ margin: "0", padding: "10px 0 0 0" }}>
									<Link
										style={{ color: "#87CEFA", textDecoration: "none" }}
										to={`leaf/${leaf._id}`}
									>
										{leaf.title}
									</Link>
								</p>
								<p style={{ padding: "0" }}>
									{leaf.content}
								</p>
							</li>
						))}
					</ul>
				</container>
			</div>

		</div>
	)
}