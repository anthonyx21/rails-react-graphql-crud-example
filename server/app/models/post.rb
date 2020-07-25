class Post < ApplicationRecord
  after_create :notify_subscriber_of_addition
  after_update :notify_subscriber_of_update

  private

  def notify_subscriber_of_addition
    print 'blue'
    RailsGraphqlCrudExampleSchema.subscriptions.trigger('newPost', {}, self)
  end

  def notify_subscriber_of_update
    print 'update occurred'
    print id
    RailsGraphqlCrudExampleSchema.subscriptions.trigger('postUpdated', { id: id }, self)
  end
end
