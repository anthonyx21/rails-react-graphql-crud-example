# rails-react-graphql-crud-example
query list {
  posts {
    body
    createdAt
    title
    id
  }
}

mutation update {
  updatePost(id: "1", attributes: {title: "example", body: "example"}) {
    post {
      id
      title
      updatedAt
      body
    }
  }
}

mutation create {
  createPost(title: "blue", body: "bbb") {
    post {
      title
      body
    }
  }
}

subscription postUpdated {
  postUpdated(id: "1") {
    post {
      title
      body
    }
  }
}
