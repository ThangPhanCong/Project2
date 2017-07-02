module UsersHelper
  def logged_in?
    current_user.present?
  end

  def current_user? user
    user == current_user
  end
end
