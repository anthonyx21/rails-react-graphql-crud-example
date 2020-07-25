# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
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
