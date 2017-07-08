Rails.application.routes.draw do
  root to: "static_pages#home"

  devise_for :users, controllers: {
    registrations: "users/registrations",
    sessions: "users/sessions"
  }

  devise_scope :user do
    get "sign_in", to: "users/sessions#new"
    get "sign_up", to: "users/registrations#new"
  end
end
