Rails.application.routes.draw do
  # Defines the root path route ("/")
  root "pages#home"

  get "up" => "rails/health#show", as: :rails_health_check
  get "pages/home"
  get "gallery", to: "pages#gallery"
  get "contact", to: "pages#contact"
end
