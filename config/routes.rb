Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  get 'searches/index'

  root to: "static_pages#home"

  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }

  devise_scope :user do
    get "sign_in", to: "users/sessions#new"
    get "sign_up", to: "users/registrations#new"
  end

  resources :posts do
    resources :comments
  end

  resources :users do
    member do
      get :following, :followers
    end
  end
  resources :relationships, only: [:create, :destroy]
  resources :searches, only: [:index]
end
