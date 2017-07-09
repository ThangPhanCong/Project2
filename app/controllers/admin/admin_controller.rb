class Admin::AdminController < ApplicationController
  load_and_authorize_resource

  def index
    unless current_user.is_admin?
      redirect_to root_url
    end
  end
end
