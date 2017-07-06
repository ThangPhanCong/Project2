class UsersController < ApplicationController
  before_action :load_user, only: [:show, :edit, :update]

  def index
    @users = User.all
  end

  def show
    @posts = @user.posts.paginate(page: params[:page])
  end

  def edit
  end

  def update
    if @user.update user_params
      render json: {status: :success, html: render_to_string(@user)}
    else
      render json: {status: :error, message: "false" }
    end
  end

  def following
    @title = "Following"
    @user  = User.find(params[:id])
    @users = @user.following.paginate(page: params[:page])
    render :partial => "users/show_follow"
  end

  def followers
    @title = "Followers"
    @user  = User.find(params[:id])
    @users = @user.followers.paginate(page: params[:page])
    render :partial => "users/show_follow"
  end

  private

  def load_user
    @user = User.find_by id: params[:id]

    return if @user
    redirect_to user_path
  end


  def user_params
    params.require(:user).permit :name, :email, :password, :password_confirmation
  end

  def destroy
  end
end
