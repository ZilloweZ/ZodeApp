Rails.application.routes.draw do
  get 'zo_ti/show'
  get 'zo_ti/home'
  get 'more/home'
  get 'more/news'
  get 'developers/user'
  get 'developers/home'
  get 'products/clock'
  get 'u/products'
  get 'u/user'
  get 'u/about'
  get 'error/400'
  get 'error/401'
  get 'error/403'
  get 'error/404'
  get 'error/503'
  root 'home#index'
  get '/zo_ti', to: 'zo_ti#show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  devise_for :users 
end
