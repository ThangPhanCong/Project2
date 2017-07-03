class PostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :show]
  before_action :correct_user, only: [:new, :destroy]

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.build post_params
    if @post.save
      render json: {status: :success, html: render_to_string(@post)}
    else
      @feed_items = []
      render json: {status: :error, message: "false"}
    end
  end

  def destroy
    @post = current_user.posts.find_by id: params[:id]
    if @post.destroy
      render json: {status: :dessuccess, html: render_to_string(@post)}
    else
      render json: {status: :error, message: "false"}
    end
  end

  private

  def post_params
    params.require(:post).permit :title, :content
  end

  def correct_user
    @post = current_user.posts.find_by id: params[:id]
  end
end
