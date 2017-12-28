class MembershipsController < ApplicationController
  def index
    memberships = Membership.all
    render json: memberships
  end

  def show
    membership = Membership.find(params[:id])
    render json: membership
  end

  def create
    membership = Membership.new(membership_params)
    if membership.save
      render json: membership
    else
      render json: {errors: membership.errors}
    end
  end

  def update
  end

  def destroy
  end

  private
  def membership_params
    params.require(:membership).permit(:user_id, :community_id, :member_type)
  end
end
