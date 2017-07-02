class UsersController < ApplicationController
  before_action :load_user, only: :show
  def show
    @posts = @user.posts.paginate(page: params[:page])
  end

  private

  def load_user
    @user = User.find_by id: params[:id]

    return if @user
    redirect_to root_path
  end

  def destroy
  end
end
