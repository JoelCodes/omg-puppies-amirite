Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users, only: [:index, :create]
  namespace 'api' do
    resources :puppies, only: [:index, :show] do
      resources :favorites, only: [:index, :create]
      delete '/favorites', to: 'favorites#delete'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
