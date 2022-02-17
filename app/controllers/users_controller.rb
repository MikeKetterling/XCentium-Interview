class UsersController < ApplicationController

  # GET /users/1
  def show
    render json: @current_user, status: :ok
  end

end
