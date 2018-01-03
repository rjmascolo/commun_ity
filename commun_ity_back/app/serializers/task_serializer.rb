class TaskSerializer < ActiveModel::Serializer

  attributes :id, :description, :event, :completed, :user

  belongs_to :event
  belongs_to :user
end
