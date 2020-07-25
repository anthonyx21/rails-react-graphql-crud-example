module Subscriptions
  # Don't forget to change to Mutations::BaseMutation
  class PostUpdated < Subscriptions::BaseSubscription
    # Define what type of value to be returned
    field :post, Types::PostType, null: false

    # Define what argument this mutation accepts
    argument :id, ID, required: true

    def update(id:)
      print 'post updated'
      post = Post.find(id)
      {
        post: post
      }
    end
  end
end
