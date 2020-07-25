Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  resources :posts
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'
end
# rails routes
