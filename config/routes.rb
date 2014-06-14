Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :leads
    end
  end

  get '*path', to: 'home#index'
end
