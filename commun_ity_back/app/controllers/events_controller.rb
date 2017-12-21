class EventsController < ApplicationController
  def index
    events = Event.all
    render json: events
  end

  def show
    event = Event.find(params[:id])
    render json: event
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: "Community Created"
    else 
      render json: {errors: event.errors}
    end
  end

  def update
  end

  def destroy
  end

  private
  def event_params
    params.require(:event).permit(:name, :date, :image, :volunteer_num, :description, :community_id)
  end
end
