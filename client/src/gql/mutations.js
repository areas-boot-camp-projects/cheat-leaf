// GQL.
import { gql } from "@apollo/client"

// Sign up a user.
export const SIGN_UP_USER = gql`
	mutation SignUpUser($username: String!, $email: String!, $password: String!) {
		signUpUser(username: $username, email: $email, password: $password) {
			user {
				_id
				username
				email
				createdAtFormatted
			}
			token
		}
	}
`

// Sign in a user.
export const SIGN_IN_USER = gql`
	mutation SignUpUser($password: String!, $email: String) {
		signInUser(password: $password, email: $email) {
			user {
				_id
				username
				email
			}
			token
		}
	}
`

// Add a new leaf.
export const ADD_LEAF = gql`
	mutation AddLeaf(
		$ownerUsername: String!,
		$title: String!,
		$content: String!
	) {
		addLeaf(
			ownerUsername: $ownerUsername,
			title: $title,
			content: $content
		) {
			_id
			title
			content
			createdAtFormatted
			owner {
				_id
			}
			ownerUsername
		}
	}
`
