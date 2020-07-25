import { useSubscription } from "react-apollo";
import Post from "./Post";
import React from 'react';
import { gql } from 'apollo-boost';

const POST_UPDATED = gql`
  subscription OnPostUpdated($id:ID!){
    postUpdated(id: $id){
      post{
        id
        title
        body
      }
    }
  }
`

function PostUpdated(props){
  console.log(props)
  const {
    data,
    loading,
    } =  useSubscription(POST_UPDATED, {
      variables: {id: props.id}
    })
  if (loading) {
    return <span>Updating...</span>;
  }
  return (<Post post={data.postUpdated.post}/>)
  
}

export default PostUpdated