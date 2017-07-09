class Users::RegistrationsController < Devise::RegistrationsController
  before_action :load_user, only: [:create, :edit, :update]

  def create
    @user = User.new user_params

    if @user.save
      super
    else
      render json: {status: :error1, html: "hihi" }
    end
  end

  def edit
    super
  end

  def update
    @user = User.find(current_user.id)

    if @user.update_attributes user_params
      render json: {status: :success, html: render_to_string(@user)}
    else
      render "edit"
    end
  end

  private

  def user_params
    params.require(:user).permit :name, :email, :password, :password_confirmation, :avatar
  end

  def load_user
    @user = User.find_by id: params[:id]
  end
end
