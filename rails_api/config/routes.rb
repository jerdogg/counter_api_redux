Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :count, except: [:create, :destroy, :show]
  end

    #Do not place any routes below this one
    get '*other', to: 'static#index'
end
