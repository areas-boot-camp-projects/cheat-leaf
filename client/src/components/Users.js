// Dependencies.
import React from "react"
import { useQuery } from "@apollo/client"

// GQL.
import { QUERY_USERS } from "../gql/queries"

function Users() {
	// Query.
	const { loading, data } = useQuery(QUERY_USERS)
	
	// If users don't exist, return an empty array.
	const users = data?.users || []

	// Data.
	return (
		<div>
			{loading
				? <div>Loading...</div>
				: users.map((user) => (
					<div key={user._id}>
						<p>{user.username} ({user.email})</p>
					</div>
				))
			}
		</div>
	)
}

export default Users
