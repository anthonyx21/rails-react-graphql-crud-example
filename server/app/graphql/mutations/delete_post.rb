module Mutations
  class DeletePost < BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false
    field :post, Types::PostType, null: false
    argument :id, ID, required: true # Here we use input objects for practice, Explain soon!

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    def resolve(id:)
      post = Post.find(id)
      if post.destroy
        { post: post }
      else
        raise GraphQL::ExecutionError, post.errors.full_messages.join(', ')
      end
    end
  end
end
