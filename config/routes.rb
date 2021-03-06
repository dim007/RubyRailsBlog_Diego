Rails.application.routes.draw do
  get 'articles/index'

  # Added route for comments as 'Nested resource'
  # resources :articles 
  resources :articles do
    resources :comments
  end

  resources :about_page

  root 'articles#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
