class TaskSerializer < ActiveModel::Serializer

  attributes :id, :description, :event, :user_id

  belongs_to :event
  belongs_to :user
end
