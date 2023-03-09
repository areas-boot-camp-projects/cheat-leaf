// React.
import React from 'react';

// API.
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LEAF } from "../gql/queries"

// Component.
export default function Leaf() {
  // Get the leaf ID from the URL.
  const { leafId } = useParams();
  
  // Query.
  const { loading, error, data } = useQuery(QUERY_LEAF, {
    variables: { leafId },
  });

  // Save the leaf (or an empty object if there’s nothing).
  const leaf = data?.leaf || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log('Error fetching leaf post:', error);
    return <div>Error fetching leaf post.</div>;
  }

  // JSX.
  return (
    <div>
      <h1>{leaf.title}</h1>
      <p>Sprouted from {leaf.owner.username} on {leaf.createdAtFormatted}</p>
      <p>{leaf.content}</p>
    </div>
  );
};

