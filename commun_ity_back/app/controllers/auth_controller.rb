class AuthController < ApplicationController
  #skip_before_action :authorized, only: [:create, :show]

  def create
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      render json: {user: UserSerializer.new(user), token: issue_token({id: user.id})}
    else
      render({json: {error: 'User is invalid'}, status: 401})
    end
  end

  def show
    token = request.headers['Authorization']
    id = JWT.decode(token, 'secret', false)[0]['id']
    current_user = User.find(id)
    if current_user
      render json: UserSerializer.new(current_user)
    else
      render json: {error: 'Invalid token'}, status: 401
    end
  end
end
