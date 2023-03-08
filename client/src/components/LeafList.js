// React.
import React from "react"

// UI.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// API and authentication.
import { useQuery } from "@apollo/client"
import { QUERY_LEAFS } from "../gql/queries"

// Component.
export default function LeafList({ refetch }) {
	// Query.
	const { loading, data } = useQuery(QUERY_LEAFS)

	// If leafs don't exist, return an empty array.
	const leafs = data?.leafs || []

	console.log(data) // **

  // const leafs = [
  //   {
  //     id: 1,
  //     title: "Get the “Create Post Button” working",
  //     content: "Here we will pull data from the db when the users creates a new post! We will need to get the “Creat New Post” button working to query the data base and setup the website to allow the user to input data in text, image, code blocks and videos!"
  //   },
  //   {
	// 		id: 2,
	// 		title: "Add static background.",
	// 		content: "I attempted to add a background to this homepage but either my pathing to the assets foler is incorrect in the inner css below. I think the image I added to assests with a gradient over it would look grear for a start."
	// 	},
  //   {
	// 		id: 3,
	// 		title: "Getting Login/Sign up Backend Working",
	// 		content: "Setting up the login/sign up backend to register for the website."
	// 	},
  //   {
	// 		id: 4,
	// 		title: "Setup the “About” page",
	// 		content: "We will still need to setup the about page. The “About” page should have the same static background as the home page."
	// 	},
  //   {
	// 		id: 5,
	// 		title: "TROY ADD THE FOOTER AND PROFILE PLZ",
	// 		content: "Add the footer and my profile page to the project so our backend team can get those working with user input aas well."
	// 	},
  // ]

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
					key={leaf.id}
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
					<div style={{ marginRight: "10px" }}>
						<FontAwesomeIcon icon={faArrowUp} style={{ color: "green" }} />
						<p style={{ margin: "0", textAlign: "center" }}>{leaf.upvotes}</p>
						<FontAwesomeIcon icon={faArrowDown} style={{ color: "red" }} />
					</div>

					<div style={{ flex: "1" }}>
						<h3 style={{ textAlign: "center" }}>
							{leaf.title}
						</h3>
						<p>
							{leaf.content}
						</p>
						<p style={{ margin: "0" }}>
							Posted by {leaf.username}USERNAME HERE at TIME HERE{leaf.time}
						</p>
						<button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
							Comment
						</button>
						<button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
							Edit
						</button>
						<button className="rounded mb-0" style={{ marginTop: "10px", marginRight: "10px" }}>
							Delete
						</button>
					</div>
					
					{console.log(leaf)}

				</div>
			))}
		</div>

	)

}