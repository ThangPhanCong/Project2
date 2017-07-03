class UsersController < ApplicationController
  before_action :load_user, only: :show

  def index
    @users = User.all
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

  def destroy
  end
end
