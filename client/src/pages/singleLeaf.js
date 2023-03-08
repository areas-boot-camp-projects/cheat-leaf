import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_LEAF_POST } from "../gql/queries"


const LeafPost = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const { loading, error, data } = useQuery(GET_LEAF_POST, {
    variables: { id },
    context: {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log('Error fetching leaf post:', error);
    return <div>Error fetching leaf post.</div>;
  }

  const { title, content, author, date } = data.leafPost;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p> 
      <p>{author} | {date}</p>
    </div>
  );
};

export default LeafPost;
