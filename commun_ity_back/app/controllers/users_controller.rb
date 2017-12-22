class UsersController < ApplicationController
  def index
    users = User.all
    render json: User.all
  end

  def show
    user = User.find(params[:id])
    render json: user.to_json(only:[:id, :email, :first_name, :last_name, :profile_pic], include: [:tasks, :communities, :events])
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: "User Created"
    else 
      render json: {errors: user.errors}
    end
  end

  def update
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password, :profile_pic)
  end
end
