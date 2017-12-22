class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create, :show]

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      render json: {email: user.email, id: user.id, token: issue_token({id: user.id})}
    else
      render({json: {error: 'User is invalid'}, status: 401})
    end
  end

  def show
    if current_user
      render json: {
        id: current_user.id,
        email: current_user.email
      }
    else
      render json: {error: 'Invalid token'}, status: 401
    end
  end
end
