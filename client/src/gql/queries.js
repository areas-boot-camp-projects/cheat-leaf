// GQL.
import { gql } from "@apollo/client"

// Get users.
export const QUERY_USERS = gql`
	query users {
		users {
			_id
			username
			email
			leafs {
				_id
				title
				content
			}
			leafCount
		}
	}
`
