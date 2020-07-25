import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div className='link-container'>
          <div>
            id: {this.props.post.id}
          </div>
          <div>
            title: {this.props.post.title}
          </div>
          <div>
            body: {this.props.post.body}
          </div>
        
      </div>
    )
  } 
}

export default Post