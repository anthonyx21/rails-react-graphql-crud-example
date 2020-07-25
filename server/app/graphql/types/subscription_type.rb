module Types
  class SubscriptionType < Types::BaseObject
    field :newPost, Types::PostType, null: false, description: 'A new post'
    field :postUpdated, subscription: Subscriptions::PostUpdated

    def new_post; end
  end
end
