class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :event_id, :user_id
  
  belongs_to :event
  belongs_to :user
end
