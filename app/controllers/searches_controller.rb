class SearchesController < ApplicationController
  def index
    if request.xhr?
      @posts = Post.search(params[:title])
      render json: {
        search_result: render_to_string(@posts)
      }, status: :ok
    else
      @posts = Post.all
    end
  end
end
