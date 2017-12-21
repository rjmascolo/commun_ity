class TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: "Community Created"
    else 
      render json: {errors: task.errors}
    end
  end

  def update
  end

  def destroy
  end

  private
  def task_params
    params.require(:task).permit(:name, :description, :event_id, :user_id)
  end
end