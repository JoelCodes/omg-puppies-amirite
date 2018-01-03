class UsersController < ApplicationController
  # before_action :authenticate_user, only: [:index]
  def index
    render json: current_user
  end

  def create
    user = User.new(user_params)
    if user.save
      token = Knock::AuthToken.new payload: {sub: user.id}
      render json:token
    else
      render json:user.errors.messages, status: 400
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
