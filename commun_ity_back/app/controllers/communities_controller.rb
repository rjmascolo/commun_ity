class CommunitiesController < ApplicationController
  def index
    communities = Community.all
    render json: communities
  end

  def show
    community = Community.find(params[:id])
    render json: community
  end

  def create
    community = Community.new(community_params)
    if community.save
      render json: "Community Created"
    else 
      render json: {errors: community.errors}
    end
  end

  def update
  end

  def destroy
  end

  private
  def community_params
    params.require(:community).permit(:name, :description)
  end
end
