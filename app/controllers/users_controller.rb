class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]


  # GET /users/1
  def show
    render json: @user
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :password, :name)
    end
end
