import React, { Component } from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const POSTS = gql`
  query {
    posts {
      id
      title
      body
    }
  }
`
const NEW_POSTS = gql`
  subscription {
    newPost {
      id
      title
      body
    }
  }
`


class Posts extends Component {
    _subscribeToNewLinks = subscribeToMore => {
      subscribeToMore({
        document: NEW_POSTS,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev

          const newPost = subscriptionData.data.newPost
          
          return Object.assign({}, prev, {
            posts: [...prev.posts, newPost],
            __typename: prev.posts.__typename
          })
        }
      })
    }
    
    render() {
      return (
        <Query query={POSTS}>
          {({ loading, error, data, subscribeToMore  }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error</div>
  
            this._subscribeToNewLinks(subscribeToMore)

            const postsToRender = data.posts
            return (
              <div>
                <h3>Neat Posts</h3>
                <div>
                  { postsToRender.map(post => <Post key={post.id} post={post} />) }
                </div>
              </div>
            )
          }}
        </Query>
      )
    }
  }
  
  export default Posts