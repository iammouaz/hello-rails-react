Rails.application.routes.draw do
  resources :greetings, only: [:index]
  namespace :api, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
end
