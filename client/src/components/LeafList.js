// React.
import React from "react"

// UI.
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// API and authentication.
import { useQuery } from "@apollo/client"
import { QUERY_LEAFS } from "../gql/queries"

// Component.
export default function LeafList({ refetch }) {
	// Query.
	const { loading, data } = useQuery(QUERY_LEAFS)

	// Save the leaaves (or an empty object if there’s nothing).
	const leafs = data?.leafs || []

	// JSX.
	return (
		<div style={{
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			width: "90%",
			padding: "10px",
			flexWrap: "wrap",
			flexShrink: "0",
			flexBasis: "400px",
		}}>
			{loading ? <div>Loading...</div> : leafs.map(leaf => (
				<div
					key={leaf._id}
					style={{
						width: "80%",
						boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
						backgroundColor: "#F4F1E6",
						borderRadius: "1rem",
						fontFamily: "Roboto",
						padding: "20px",
						display: "flex",
						alignItems: "center",
						margin: "15px",
					}}
				>
					{/* Maybe add this back later.
						<div style={{ marginRight: "10px" }}>
							<FontAwesomeIcon icon={faArrowUp} style={{ color: "green" }} />
							<p style={{ margin: "0", textAlign: "center" }}>{leaf.upvotes}</p>
							<FontAwesomeIcon icon={faArrowDown} style={{ color: "red" }} />
						</div>
					*/}

					<div style={{ flex: "1" }}>
						<h3 style={{ textAlign: "center" }}>
							{leaf.title}
						</h3>
						<p>
							{leaf.content}
						</p>
						<p style={{ margin: "0" }}>
							Sprouted from {leaf.owner.username} on {leaf.createdAtFormatted}
						</p>
						{/* Maybe add this back later.
							<button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
								Comment
							</button>
							<button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
								Edit
							</button>
							<button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
								Delete
							</button>
						*/}
					</div>
					
				</div>
			))}
		</div>

	)

}