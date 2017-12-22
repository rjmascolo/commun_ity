class TaskSerializer < ActiveModel::Serializer
  attributes :id, :completed, :name
  belongs_to :user
  belongs_to :event
end
