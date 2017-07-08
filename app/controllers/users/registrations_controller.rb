class Users::RegistrationsController < Devise::RegistrationsController
  def create
    @user = User.new sign_up_params

    if @user.save
      super
    else
      render json: {status: :error1, html: t(".error")}
    end
  end

  private

  def sign_up_params
    params.require(:user).permit :name, :email, :password, :password_confirmation
  end
end
