class CommentsController < ApplicationController
  before_action :receive_post, only: [:create, :edit, :update, :destroy]

  def create
    @comment = current_user.comments.build comment_params

    if @comment.save
      render json: {status: :success, html: render_to_string(@comment)}
    else
      render json: {status: :error, message: "false"}
    end
  end

  def edit
    @comment = @post.comments.find params[:id]
  end

  def update
    @comment = @post.comments.find params[:id]

    if @comment.update comment_params
      @comment.update_columns(created_at: Time.current)
      render json: {status: :success, content: @comment.content}
    else
      render json: {status: :error, message: "false"}
    end
  end

  def destroy
    @comment = @post.comments.find_by id: params[:id]

    if @comment.destroy
      render json: {status: :success, html: render_to_string(@comment)}
    else
      render json: {status: :error, message: "false"}
    end
  end

  private

  def comment_params
    params.require(:comment).permit :content, :post_id
  end

  def receive_post

    @post = Post.find_by id: params[:post_id]
  end
end
