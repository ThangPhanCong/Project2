class PostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy, :show]
  before_action :load_post, only: :destroy

  def create
    @post = current_user.posts.build post_params

    if @post.save
      render json: {status: :success, html: render_to_string(@post)}
    else
      @feed_items = []
      render json: {status: :error, message: t(".message")}
    end
  end

  def destroy
    @post = current_user.posts.find_by id: params[:id]

    if @post.destroy
      render json: {status: :dessuccess, html: render_to_string(@post)}
    else
      render json: {status: :error, message: t(".message_destroy")}
    end
  end

  private

  def post_params
    params.require(:post).permit :title, :content
  end

  def load_post
    @post = current_user.posts.find_by id: params[:id]
  end
end
