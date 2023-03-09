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

// Get leafs.
export const QUERY_LEAFS = gql`
	query Leafs {
		leafs {
			_id
			title
			content
			createdAtFormatted
			updatedAtFormatted
			owner {
				_id
				username
				email
				leafCount
			}
		}
	}
`

// Get a leaf.
export const GET_LEAF_POST = gql`
  query GetLeafPost($id: ID!) {
    leafPost(id: $id) {
      title
      content
      author
      date
    }
  }
`

// Search leafs.
export const QUERY_SEARCH_LEAFS = gql`
	query SearchLeafs($searchTerm: String!) {
		searchLeafs(searchTerm: $searchTerm) {
			_id
			title
			content
			createdAtFormatted
			updatedAtFormatted
			owner {
				_id
			}
			ownerUsername
		}
	}
`
