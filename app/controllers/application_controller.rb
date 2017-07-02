class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  include UsersHelper

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  private

  def logged_in_user
    unless user_signed_in?
      flash[:danger] = t(".please")
      redirect_to login_url
    end
  end
end
