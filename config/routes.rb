Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  get 'users/show'
  root to: "static_pages#home"

  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }

  devise_scope :user do
    get "sign_in", to: "users/sessions#new"
    get "sign_up", to: "users/registrations#new"
  end
  resources :posts,  only: [:create, :destroy]
end
