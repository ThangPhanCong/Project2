class Admin::PostsController <  Admin::AdminController
  before_action :logged_in_user, only: [:create, :edit]
  before_action :correct_post, only: [:edit, :update, :destroy]

  def new
    @post = current_user.posts.new
  end

  def index
    unless current_user.is_admin?
      redirect_to root_url
    end
    @posts = Post.all
    respond_to do |format|
      format.html {@posts = @posts = Post.paginate(page: params[:page])}
      format.csv { send_data @posts.to_csv }
      format.xls { render text: @posts.to_csv(col_sep: "\t") }
    end
  end

  def show
    @post = Post.find_by id: params[:id]
  end

  def create
    @post = current_user.posts.build post_params
    if @post.save
      render json: {status: :success, html: render_to_string(@post)}
    else
      @feed_items = []
    end
  end

  def edit
  end

  def update
    if @post.update_attributes post_params
      @post.update_columns(created_at: Time.current)
      redirect_to [:admin, @post]
    else
      redirect_to [:admin, @post]
    end
  end

  def destroy
    @post = Post.all.find_by id: params[:id]

    if @post.destroy
      redirect_to admin_posts_url
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :all_tags)
  end

  def correct_post
    @post = Post.find_by id: params[:id]
  end
end
