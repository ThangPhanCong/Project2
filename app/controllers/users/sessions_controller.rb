class Users::SessionsController < Devise::SessionsController
  before_action :authenticate_user!

  def create
    user = User.find_by email: params[:user][:email].downcase

    if user && user.valid_password?(params[:user][:password])
      super
    else
      render json: {status: :error, html: t(".error")}
    end
  end
end
