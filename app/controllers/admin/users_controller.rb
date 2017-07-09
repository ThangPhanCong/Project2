class Admin::UsersController < ApplicationController

  def new
    @user = User.new
  end

   def create
    @user = User.new user_params
      if @user.save
        render json: {status: :success, html: render_to_string(@user) }
      else
      end
  end


  def index
    @users = User.paginate(page: params[:page]).per_page(3)
    @users = User.order(:name)
    respond_to do |format|
      format.html {@users = @users = User.paginate(page: params[:page]).per_page(3)}
      format.csv { send_data @users.to_csv }
      format.xls { render text: @users.to_csv(col_sep: "\t") }
    end
  end

  def show
    @user = User.find_by id: params[:id]
    @posts = @user.posts.paginate(page: params[:page])
  end

  def destroy
    @user = User.find_by id: params[:id]

    if @user.destroy
      redirect_to admin_users_url
    end
  end

  private

   def user_params
    params.require(:user).permit :name, :email, :password, :password_confirmation
  end
end
