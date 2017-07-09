class UsersController < ApplicationController
  before_action :load_user, only: [:show, :edit, :update]

  def index
    @users = User.all.page(params[:page]).per_page(3)
  end

  def show
    @posts = @user.posts.paginate(page: params[:page])
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
    params.require(:user).permit :name, :email, :password, :password_confirmation, :avatar
  end

  def destroy
  end
end
